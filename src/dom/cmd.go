package dom

import (
	"log"
	"net/http"
	"fmt"
	"github.com/gorilla/websocket"
	"ui"
	"time"
)

var upgrader = websocket.Upgrader{} //    use default options

type notify struct {
	sig int
	err	error
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
	 
// ---------- Examples from HM2 ------------	
	ui.Root.Add(ui.Html(`
		<table class="noBorder">
			<tr>
				<td><h1>Web GUI V0.4</h1></td>
				<td><button class="primary" >Nach ......</button></td>
			</tr>
		</table>
	`))
	//--------------------------------------------
	 
	tl := ui.TabLayout(3, "Messen","Steuern","Graph")
	ui.Root.Add(tl)
	tl.GetTab(0).CheckTab()
	// -----------------------------------------------
	
	// ------------------ Grid Layout Page 0 ---------
	gl_0 := ui.GridLayout(6,2,"col-sm-4","col-sm-8")
	tl.Add(gl_0,0)
	gl_0.Add(ui.Label("Temperatur"),1,0,"col-sm-4")
	gl_0.Add(ui.Label("Luftfeuchte"),2,0,"col-sm-4")
	gl_0.Add(ui.Label("Sollwert"),3,0,"col-sm-4")
	gl_0.Add(ui.Label("Datum (RFC850)"),4,0,"col-sm-4")
	
	temperature_cell	:= ui.Label("0.0 °C")
	gl_0.Add(temperature_cell,1,1,"col-sm-8")
	humidity_cell 		:= ui.Label("00 %")
	gl_0.Add(humidity_cell,2,1,"col-sm-8")	
	setpoint_cell	:= ui.Label("0.0 °C")
	gl_0.Add(setpoint_cell,3,1,"col-sm-8")	
	date_cell		:= ui.Label("")
	gl_0.Add(date_cell,4,1,"col-sm-8")

	// ------------------ Grid Layout Page 1 ---------
	gl_1 := ui.GridLayout(2,3,"col-sm-4","col-sm-4","col-sm-4")
	tl.Add(gl_1,1)
	gl_1.Add(ui.Label("Sollwert"),0,0,"col-sm-4")
	_ = gl_1.Add(ui.Input("number","20,0","step=0.5 min=18 max=24"),0,1)
	
	
	bs := gl_1.Add(ui.Button("primary","Speichern",1),0,2)
	gl_1.Cell(0,2).AddClass("col-sm-4")

	gl_1.Add(ui.Label("Passwort"),1,0,"col-sm-4")
    _ = gl_1.Add(ui.Input("password","",""),1,1)
	
	bs.SetOnClick( 
		func(data ui.EventMap) {
	
		},
	)
			
	// ------------------ Grid Layout Page 2 ---------
//	gl_2 := ui.GridLayout(2,1,"col-sm-4","col-sm-4","col-sm-4")
//	tl.Add(gl_2,2)		
				
//	tabu := ui.SpreadSheet(`{title:"Name", field:"name", sorter:"string", width:150}`,
//						   `{title:"Age", field:"age", sorter:"number", hozAlign:"left", formatter:"progress"}`,
//						   `{title:"Favourite Color", field:"col", sorter:"string", headerSort:false}`,
//						   `{title:"Date Of Birth", field:"dob", sorter:"date", hozAlign:"center"}`,)	
	
	tabu := ui.SpreadSheet()
	
	tabu.SetOnClick( 
		func(data ui.EventMap) {
			log.Println("Add row to sheet")
			tabu.AddRow(`{id:2, name:"Mary May", age:"1", col:"blue", dob:"14/05/1982"}`)
		},
	)
	
	bad := ui.Button("primary","Add")
	
	tl.Add(bad,2)
	
	bad.SetOnClick( 
		func(data ui.EventMap) {
			tabu.AddRow(`{id:1, name:"Oli Bob", age:"12", col:"red", dob:"12/08/2017"}`)
		},
	)	
		
	tl.Add(ui.Button("primary","B2"),2)
		
	tl.Add(tabu,2)	// delay rendering !
			
	tl.Add(ui.Html("<p>Hallo</p>",true),2)		
			
	tabu.Execute("500",
			      `{title:"Name", field:"name", sorter:"string", width:150}`,
		         `{title:"Age", field:"age", sorter:"number", hozAlign:"left", formatter:"progress"}`,
			     `{title:"Favourite Color", field:"col", sorter:"string", headerSort:false}`,
			     `{title:"Date Of Birth", field:"dob", sorter:"date", hozAlign:"center"}`,)			
			
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
