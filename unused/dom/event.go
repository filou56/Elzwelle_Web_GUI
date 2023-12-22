package dom

import (
	"strings"
	"log"
	"encoding/json"
	"github.com/gorilla/websocket"
	"ui"
)

func EventHandler(wsc *websocket.Conn, done chan bool) {
	
	defer func() {
		done <- true 
	}()
	
	for {
		var event ui.EventMap
		
		_, msg, err := wsc.ReadMessage()
		if err != nil {
			log.Println("\nEventHandler",err)
			return
		}
		
		//log.Println("\nEventHandler",string(msg))
		
		dec := json.NewDecoder(strings.NewReader(string(msg)))
		if err := dec.Decode(&event); err != nil {
			log.Println("DecodePayload: ",err," in ",string(msg))
		}
		
		//log.Println(event)
		
		if (event["getValue"] 	!= nil) {			
			id := event["getValue"].(string)
	    	widget := ui.GetWidgetByID(id)
	    	if (event["value"] != nil) {
	    		widget.Value = event["value"].(string)
	    		//log.Println("Update "+id)
	    		widget.Dirty = false
	    	} else {
	    		log.Println("\ngetValue not handled: ",string(msg))
	    	}
		}
		
	    if (event["onClickEvent"] 	!= nil) { 
	    	id := event["onClickEvent"].(string)
	    	//log.Println("onClickEvent")
	    	widget := ui.GetWidgetByID(id)
	    	if widget != nil {
	    		widget.OnEvent(event)
	    	} else {
	    		log.Println("\nonClickEvent not handeled: ",string(msg))
	    	}
	    }
	    
	    if (event["onSheetEvent"] 	!= nil) { 
	    	id := event["onSheetEvent"].(string)
	    	log.Println("onSheetEvent")
	    	widget := ui.GetWidgetByID(id)
	    	if widget != nil {
	    		log.Println("\nonSheetEvent: ",event["eventType"].(string))
	    		widget.OnEvent(event)
	    	} else {
	    		log.Println("\nonClickEvent not handeled: ",string(msg))
	    	}
	    }
	}
}

/*
dec := json.NewDecoder(strings.NewReader(string(data)))
	
	for {
		var m map[string]interface{}
		if err := dec.Decode(&m); err != nil {
			log.Println("DecodePayload: ",err," in ",string(data))
            return nil
        }
        return m
	}
*/