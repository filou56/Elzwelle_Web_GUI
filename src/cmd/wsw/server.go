package main

import (
	"flag"
	"log"
	"net/http"
	"dom"
)

var addr = flag.String("addr", "localhost:1111", "http service address")

func main() {
	flag.Parse()
	
	http.HandleFunc("/css/mini-dark.css", dom.CssHandler_Dark_237)
	http.HandleFunc("/css/mini-default.css", dom.CssHandler_Default_237)
	http.HandleFunc("/css/tabulator.css", dom.CssHandler_Tabulator)
	http.HandleFunc("/js/tabulator.js", dom.JsHandler_Tabulator)
	http.HandleFunc("/js/luxon.js", dom.JsHandler_Luxon)
	http.HandleFunc("/cmd", CmdHandler)
	http.HandleFunc("/data", DataHandler)
	http.HandleFunc("/ui", dom.UiHandler)
	log.Fatal(http.ListenAndServe(*addr, nil))
}
