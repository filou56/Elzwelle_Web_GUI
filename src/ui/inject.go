package ui

import (
	"github.com/gorilla/websocket"
)

func Inject(value string) {
	
	conn := Root.GetConnection()
	if conn != nil {
		conn.WriteMessage(websocket.TextMessage,[]byte(value))
	}
}