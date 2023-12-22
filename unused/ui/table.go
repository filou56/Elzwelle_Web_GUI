package ui

import (
	"util"
	"github.com/gorilla/websocket"
)

func NewTable(wsc *websocket.Conn, parent string) *Widget {
	var table Widget
	table.createTable(wsc,parent)
	table.Render()
	return &table
}

func (widget *Widget) createTable(wsc *websocket.Conn, parent string) *Widget {
	widget.conn = wsc
	widget.id = util.NextID()
	widget.Value = ""
	widget.Dirty = false
	widget.parent = parent
	widget.inject = func() {
		widget.Send(`document.getElementById("`+widget.parent+`").innerHTML += `+tableTag(widget.id))
	}
	widget.onClick = nil
	widgets[widget.id] = widget
	return widget
}

func NewTableRow(wsc *websocket.Conn, parent string) *Widget {
	var row Widget
	row.createTableRow(wsc,parent)
	row.Render()
	return &row
}

func (widget *Widget) createTableRow(wsc *websocket.Conn, parent string) *Widget {
	widget.conn = wsc
	widget.id = util.NextID()
	widget.Value = ""
	widget.Dirty = false
	widget.parent = parent
	widget.inject = func() {
		widget.Send(`document.getElementById("`+widget.parent+`").innerHTML += `+tableRowTag(widget.id))
	}
	widget.onClick = nil
	widgets[widget.id] = widget
	return widget
}

func NewTableCell(wsc *websocket.Conn, parent string) *Widget {
	var cell Widget
	cell.createTableCell(wsc,parent)
	cell.Render()
	return &cell
}

func (widget *Widget) createTableCell(wsc *websocket.Conn, parent string) *Widget {
	widget.conn = wsc
	widget.id = util.NextID()
	widget.Value = ""
	widget.Dirty = false
	widget.parent = parent
	widget.inject = func() {
		widget.Send(`document.getElementById("`+widget.parent+`").innerHTML += `+tableCellTag(widget.id))
	}
	widget.onClick = nil
	widgets[widget.id] = widget
	return widget
}