package ui

import (
	"strings"
	"log"
	"encoding/json"
	"github.com/gorilla/websocket"
)


type EventHandler func(event EventMap) bool

var eventRegistry []EventHandler

func RegisterEvent( handler EventHandler) {
	eventRegistry = append(eventRegistry,handler)
}

func EventLoop(wsc *websocket.Conn, done chan bool) {
	
	defer func() {
		done <- true 
	}()
	
	for {
		var event EventMap
		
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
	    	widget := GetWidgetByID(id)
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
	    	widget := GetWidgetByID(id)
	    	if widget != nil {
	    		widget.OnEvent(event)
	    	} else {
	    		log.Println("\nonClickEvent not handeled: ",string(msg))
	    	}
	    }
	    
	    for i:=0; i<len(eventRegistry); i++ {
	    	if eventRegistry[i] != nil {
	    		if eventRegistry[i](event) { break }
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