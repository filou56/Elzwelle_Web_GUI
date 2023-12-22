package ui

import (
	"github.com/gorilla/websocket"
)

func GridContainer(wsc *websocket.Conn, parent string) *Widget {
	var container Widget
	container.CreateElement(wsc,parent,
		func() {
			container.Send(`document.getElementById("`+container.parent+`").innerHTML += `+tableGridContainerTag(container.id))
		},
	)
	container.Render()
	return &container
}

func Row(wsc *websocket.Conn, parent string) *Widget {
	var row Widget
	row.CreateElement(wsc,parent,
		func() {
			row.Send(`document.getElementById("`+row.parent+`").innerHTML += `+tableGridRowTag(row.id))
		},
	)
	row.Render()
	return &row
}

func Col(wsc *websocket.Conn, parent string, class string) *Widget {
	var col Widget
	col.CreateElement(wsc,parent,
		func() {
			col.Send(`document.getElementById("`+col.parent+`").innerHTML += `+tableGridColTag(col.id,col.Class))
		},
	)
	col.Render()
	return &col
}
