package main

import (
	"log"
	"net/http"
	"fmt"
	"github.com/gorilla/websocket"
	"ui"
	"time"
//	"sysinfo"
	"strconv"
)

type notify struct {
	sig int
	err	error
}

var (
	upgrader = websocket.Upgrader{} //    use default options
	
	start_number 	int
	start_id		int
	finish_id 		int
	
	baseTime		time.Time
)

func init() {
	start_number 	= 0
	start_id		= 0
	finish_id 		= 0
	
	baseTime = time.Now()
}

func nextId() string {
	start_number = start_number + 1;
	return fmt.Sprintf("%3d",start_number);	
}

/*


The monotonic clock is just used for differences between times. 
The absolute value of the monotonic clock is undefined and you 
should not try to get it. I think what you really want for your 
timestamp is the duration from a base time.

func init() {
    baseTime = time.Now()
}

// NowTimestamp returns really just the duration from the base time
func NowTimestamp() time.Duration {
    return time.Now().Sub(baseTime)
}

*/

func millis( clock time.Duration ) int64 {
	return int64(clock)/1000000	
}

//func uptime() time.Duration {
//	return sysinfo.Get().Uptime	
//}

func uptime() time.Duration {
    return time.Now().Sub(baseTime)
}

func timestamp(now time.Time, stamp int64) string {
	return fmt.Sprintf("(%s) %4.2fs",now.Format("15:04:05"),float64(stamp)/1000.0)
}

func idleTimer(sleep time.Duration, event chan notify) {
	var err error
	//defer close(event)
	
	defer func() {
        if r := recover(); r != nil {
            fmt.Println("Recovered in idleTimer", r)
        }
    }()
	
	for {
	    time.Sleep(sleep * time.Second)
		event <- notify{0,err}
	}
}

func DataHandler(writer http.ResponseWriter, request *http.Request) {
	log.Print("DataHandler Handler")
	
	writer.Header().Set("Content-Type", "text/json")
    fmt.Fprintf(writer,"%s",`[
	    {"id":1, "name":"Oli Bob"},
	    {"id":2, "name":"Oli Henry"},
	    {"id":3, "name":"Oli Joan"}
	 ]`);	
}

func CmdHandler(writer http.ResponseWriter, request *http.Request) {
	// Allow connection from anywhere
	upgrader.CheckOrigin = func(request *http.Request) bool { return true }
	
	// Upgrade http: to ws:
	conn, err := upgrader.Upgrade(writer, request, nil)
	
	if err != nil {
		log.Print("upgrade:", err)
		return
	}
	
	defer conn.Close()
	
	idleEvent := make(chan notify)
	defer close(idleEvent)
	
	go idleTimer(2,idleEvent)
	
	// read connect msg
	_, msg, err := conn.ReadMessage()
	log.Println(string(msg))
	
	ui.Update = make(chan int,10)
	defer close(ui.Update)
	
	ui.Root.SetConnection(conn)
	 
	// ---------------------------------------------------------------------------------------------
	
	app_tabs := ui.TabLayout(3, "Start","Ziel","Tabelle")
 	ui.Root.Add(app_tabs)
 	app_tabs.GetTab(2).CheckTab()

	// ----------------------------- Tab 0 ---------------------------------------------------------
	toolbar_start := ui.GridLayout(2,8)
	app_tabs.Add(toolbar_start,0)
	
	start_sheet := ui.SpreadSheet()
	
	toolbar_start.Add(start_sheet,0,0)
	toolbar_start.Cell(0,0).AddClass("col-sm-12")
	
	start_sheet.Execute("700",
		`{title:"Nummer", field:"id", width:100, headerSort:false}`,
		`{title:"Zeitstempel", field:"timestamp", width:200, editor:"input", headerSort:false}`,
		)
	
	start_button := ui.Button("primary","Start",1)
	
	toolbar_start.Add(start_button,1,0)
	toolbar_start.Cell(1,0).AddClass("col-sm-2")
	
	start_button.SetOnClick( 
		func(event ui.EventMap) {
			start_id++
			start_sheet.AddRow(`{id:`+strconv.Itoa(start_id)+`,timestamp:"`+timestamp(time.Now(),millis(uptime()))+`"}`)
		},
	)
	// ----------------------------- Tab 1 ---------------------------------------------------------
	toolbar_finish := ui.GridLayout(2,8)
	app_tabs.Add(toolbar_finish,1)
	
	finish_sheet := ui.SpreadSheet()
	
	toolbar_finish.Add(finish_sheet,0,0)
	toolbar_finish.Cell(0,0).AddClass("col-sm-12")
	
	finish_sheet.Execute("700",
		`{title:"Nummer", field:"id", width:100, headerSort:false}`,
		`{title:"Zeitstempel", field:"timestamp", width:200, editor:"input", headerSort:false}`,
		)
	
	finish_button := ui.Button("primary","Finish",1)
	
	toolbar_finish.Add(finish_button,1,0)
	toolbar_finish.Cell(1,0).AddClass("col-sm-2")
	
	finish_button.SetOnClick( 
		func(event ui.EventMap) {
			finish_id++
			finish_sheet.AddRow(`{id:`+strconv.Itoa(finish_id)+`,timestamp:"`+timestamp(time.Now(),millis(uptime()))+`"}`)
		},
	)
	
	// ----------------------------- Tab 2 ---------------------------------------------------------
	toolbar_result := ui.GridLayout(2,8)
	app_tabs.Add(toolbar_result,2)
	
	result_sheet := ui.SpreadSheet()
	
	result_sheet.SetOnClick( 
		func(event ui.EventMap) {
			log.Println("Add row to sheet")
			if (event["eventType"] != nil) && (event["eventType"] == "rowClick") {
				result_sheet.AddRow(`{id:5, name:"Mary May"}`)
			}
		},
	)
	
	toolbar_result.Add(result_sheet,0,0)
	toolbar_result.Cell(0,0).AddClass("col-sm-12")
	
	result_sheet.Execute("700",
		`{title:"Nummer", field:"id", sorter:"number", width:150, editor:"number"}`,
		`{title:"Name", field:"name", width:150, editor:"input", headerSort:false}`,
		)	
	
	add_button := ui.Button("primary","Add",1)
	
	toolbar_result.Add(add_button,1,0)
	toolbar_result.Cell(1,0).AddClass("col-sm-2")
	
	add_button.SetOnClick( 
		func(event ui.EventMap) {
			result_sheet.AddRow(`{id:`+nextId()+`, name:"Oli Bob"}`)
		},
	)
	
	load_button := ui.Button("primary","Load",1)
	
	toolbar_result.Add(load_button,1,1)
	toolbar_result.Cell(1,1).AddClass("col-sm-2")
	
	load_button.SetOnClick( 
		func(event ui.EventMap) {
			result_sheet.SetAjaxData("http://localhost:1111/data");
		},
	)		
	
	// ---------------------------------------------------------------------------------------------- 
			
	done := make(chan bool)
	
	go ui.EventLoop(conn,done)
	
	log.Println("Start session")
	
	for {
		select {
			case <- ui.Update:
		
			case <- idleEvent:

			case <-done:
			   break
		}
	}
	
	log.Println("Done session")
}
