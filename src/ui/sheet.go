package ui

import (
	"log"
	"fmt"
	"time"
	b64 "encoding/base64"
)

type Sheet struct {
	Widget
}

var sheets map[string]*Sheet

func init() {
	sheets = make(map[string]*Sheet)
	RegisterEvent(OnSheetEvent)
}

func GetSheetByID(id string) *Sheet {
	return 	sheets[id]
}

func SpreadSheet() *Sheet {
	var sheet Sheet
		
	sheet.CreateElement(nil,"",
		func() {
			sheet.Send(`document.getElementById("`+sheet.parent+`").innerHTML += `+sheetTag(sheet.id))
		},
	)
	sheets[sheet.id] = &sheet
	return &sheet
}

func (sheet *Sheet) Execute(height string, cols ...string) {
	sheet.Send(sheetScript(sheet.id, height, cols))
}

func (sheet *Sheet) AddRow(row string) {
	id := sheet.ID()
	sheet.Send(`sheet_`+id+`.addRow(`+row+`);`)
}

//sheet.UpdateRow(int(pos.(float64)),`status:"<div style=\"background-color:Tomato;\">OK</div>"`)
//sheet.UpdateRow(int(pos.(float64)),`status:"<mark class=\"secondary\">secondary</mark>"`)
func (sheet *Sheet) UpdateRow(row int, data string) {
	id := sheet.ID()
	sheet.Send(`sheet_`+id+`.updateData(`+fmt.Sprintf("[{id:%d,%s}]",row,data)+`);`)
}

//sheet.MarkCell(row,"status","primary","Test primary")
//sheet.MarkCell(row+1,"status","secondary","Test secondary")
//sheet.MarkCell(row+2,"status","tertiary","Test tertiary")
//sheet.MarkCell(row+3,"status","dark","Test dark")
//sheet.MarkCell(row+4,"status","tag","Test tag")
//sheet.SetCell(row+5,"status","Test normal")
func (sheet *Sheet) MarkCell(row int, cell string, class string, text string) {
	sheet.UpdateRow(row,cell+`:"<mark class=\"`+class+`\">`+text+`</mark>"`)
}

func (sheet *Sheet) SetCell(row int, cell string, text string) {
	sheet.UpdateRow(row,cell+`:"`+text+`"`)
}

func (sheet *Sheet) SetOnEvent(fn func(EventMap)) {
	sheet.onEvent = fn 
}

func OnSheetEvent(event EventMap) bool {
    if (event["onSheetEvent"] != nil) { 
    	id := event["onSheetEvent"].(string)
    	//log.Println("onSheetEvent")
    	widget := GetWidgetByID(id)
    	if widget != nil {   		
    		if event["eventType"].(string) == "ajaxData" {
    			payload := event["payload"]
    			if ( payload != nil ) {
	    			row, _ := b64.URLEncoding.DecodeString(payload.(string))
				    widget.Value = string(row)
				    //log.Println(widget.Value)
				    widget.Dirty = false					    
    			}
    		} else if event["eventType"].(string) == "selectRow" {
    			pos := event["position"]
    			if ( pos != nil) {
	    			sheet := GetSheetByID(widget.ID())
	    			row := int(pos.(float64))
	    			sheet.SelectRow(row)
    			}
    		} else if event["eventType"].(string) == "deselectRow" {
    			pos := event["position"]
    			if ( pos != nil) {
	    			sheet := GetSheetByID(widget.ID())
	    			row := int(pos.(float64))
	    			sheet.DeselectRow(row)
    			}
    		} else {
	    		widget.OnEvent(event)
    		}
    	} else {
    		log.Println("\nonSheetEvent not handeled!")
    	}
    	return true
    }
    return false
}

//table.setData("http://www.getmydata.com/now");
func (sheet *Sheet) SetAjaxData(url string) {
	id := sheet.ID()
	sheet.Send(`sheet_`+id+`.setData("`+url+`");`)
}

// table.download("json", "data.json");
func (sheet *Sheet) RequestAjaxData(sync bool) bool {
	sheet.Dirty = true
	id := sheet.ID()
	sheet.Send(`sheet_`+id+`.download("json", "data.json");`)
	if sync {
		retry := 10
		for {
			if ! sheet.Dirty {
				break
			} else {
				time.Sleep(100 * time.Millisecond)
				retry--
				if retry < 0 {
					return false
				}
			}
		}
	} 
	return true
}

func (sheet *Sheet) GetAjaxData() bool {
	return sheet.RequestAjaxData(true)
}

func (sheet *Sheet) OkAlert(msg string) {
	id := sheet.ID()
	sheet.Send(`sheet_`+id+`.alert('`+msg+`<button class="primary" onClick="sheet_`+id+`.clearAlert();">OK</button> ');`)
}

func (sheet *Sheet) SelectRow(row int) {
	id := sheet.ID()
	sheet.Send(`sheet_`+id+`.selectRow(`+fmt.Sprint(row)+`);`)
}

func (sheet *Sheet) DeselectRow(row int) {
	id := sheet.ID()
	sheet.Send(`sheet_`+id+`.deselectRow(`+fmt.Sprint(row)+`);`)
}