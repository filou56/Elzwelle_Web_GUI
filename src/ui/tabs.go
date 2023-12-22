package ui

import (
	"util"
	"github.com/gorilla/websocket"
)

func NewTabs(wsc *websocket.Conn, parent string) *Widget {
	var tabs Widget
	tabs.createTabs(wsc,parent)
	tabs.Render()
	return &tabs
}

func (widget *Widget) createTabs(wsc *websocket.Conn, parent string) *Widget {
	widget.conn = wsc
	widget.id = util.NextID()
	widget.Value = ""
	widget.Dirty = false
	widget.parent = parent
	widget.inject = func() {
		widget.Send(`document.getElementById("`+widget.parent+`").innerHTML += `+tabsTag(widget.id))
	}
	widget.onEvent = nil
	widgets[widget.id] = widget
	return widget
}

func NewTab (wsc *websocket.Conn, parent string, value string) *Widget {
	var tab Widget
	tab.createTab (wsc,parent,value)
	tab.Render()
	return &tab
}

func (widget *Widget) createTab(wsc *websocket.Conn, parent string, value string) *Widget {
	widget.conn = wsc
	widget.id = util.NextID()
	widget.Value = value
	widget.Dirty = false
	widget.parent = parent
	widget.inject = func() {
		widget.Send(`document.getElementById("`+widget.parent+`").innerHTML += `+tabTag(widget.id,widget.parent,widget.Value))
	}
	widget.onEvent = nil
	widgets[widget.id] = widget
	return widget
}

func (widget *Widget) CheckTab() {
		widget.Send(`document.getElementById("tab_`+widget.id+`").checked = true;`)
}