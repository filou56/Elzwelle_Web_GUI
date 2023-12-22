package ui

import (
	"github.com/gorilla/websocket"
)

func NewBinding(wsc *websocket.Conn, parent string, id string, value string) *Widget {
	var binding Widget
	return binding.createBinding(wsc, parent, id, value)
}

func (widget *Widget) createBinding(wsc *websocket.Conn, parent string, id string, value string) *Widget {
	widget.conn = wsc
	widget.id = id
	widget.onEvent = nil
	widget.inject = nil
	widget.parent = parent
	widget.Value = value
	widget.Dirty = true
	widgets[widget.id] = widget
	return widget
}