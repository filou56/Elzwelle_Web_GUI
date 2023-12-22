package ui

import (
	"time"
	"github.com/gorilla/websocket"
	"log"
	"util"
)

const (
	ALIGN	= "align"	
)

type EventMap = map[string]interface{}

type WidgetConnector interface {
	SetConnection(conn *websocket.Conn)
	SetParent(parent string)
	Render()
	GetContainer() *Widget
}

type Widget struct {
	conn  		*websocket.Conn
	id			string
	onEvent		func(EventMap)
	Value		string
	Class		string
	inpType     string
	Dirty		bool
	inject		func()
	parent		string
	options		string
}

var widgets map[string]*Widget
var ifaces  map[string]interface{}

var Root Widget

var Update		chan int

func init() {
	widgets = make(map[string]*Widget)
	ifaces  = make(map[string]interface{})
	Root.createRoot(nil)
}

func (widget *Widget) CreateElement(wsc *websocket.Conn, parent string, inject func()) *Widget {
	widget.conn = wsc
	widget.id = util.NextID()
	widget.Value = ""
	widget.Dirty = false
	widget.parent = parent
	widget.inject = inject
	widget.onEvent = nil
	widgets[widget.id] = widget
	return widget
}

func (widget *Widget) createRoot(wsc *websocket.Conn) *Widget {
	widget.conn = wsc
	widget.id = "root"
	widget.Dirty = false
	widget.parent = ""
	widget.inject = func() {
		widget.Send(`document.body.innerHTML += `+inputTag(widget.id,widget.inpType,widget.Value,widget.options))
	}
	widget.onEvent = nil
	widgets[widget.id] = widget
	return widget
}

func (widget *Widget) GetContainer() *Widget {
	return widget
}

func (widget *Widget) SetConnection(conn *websocket.Conn) {
	widget.conn = conn
}

func (widget *Widget) GetConnection() *websocket.Conn {
	return widget.conn
}

func (widget *Widget) SetParent(parent string) {
	widget.parent = parent
}

func GetWidgetByID(id string) *Widget {
	if id == "root" {
		return &Root
	}
	return 	widgets[id]
}

func (widget *Widget) Add(child WidgetConnector) *Widget {
	child.SetParent(widget.ID())
	child.SetConnection(widget.conn)
	child.Render()
	return child.GetContainer()
}

func (widget *Widget) ID() string {
	return widget.id
}

func (widget *Widget) SetOnClick(fn func(EventMap)) {
	widget.onEvent = fn 
}

func (widget *Widget) OnEvent(data EventMap) {
	if widget.onEvent != nil {
		go widget.onEvent(data)
	} 
}

func (widget *Widget) Render() {
	if widget.inject != nil {
		widget.inject()
	} 
}

func (widget *Widget) Send(msg string) {
	if widget.conn != nil {
		widget.conn.WriteMessage(websocket.TextMessage,[]byte(msg))
	}
}

// only for debugging
func (widget *Widget) SendMsg(msg string) {
	log.Println("SendMsg: ",msg,widget.conn)
	if widget.conn != nil {
		widget.conn.WriteMessage(websocket.TextMessage,[]byte(msg))
	}
}

func (widget *Widget) SetValue(value string) {
	widget.Send(`document.getElementById("`+widget.id+`").value = '`+value+`';`)
}

func (widget *Widget) SetHtml(html string) {
	widget.Send(`document.getElementById("`+widget.id+`").innerHTML = '`+html+`';`)
}

func (widget *Widget) GetValue() bool {
	return widget.ReadValue(true)
}

func (widget *Widget) ReadValue(sync bool) bool {
	widget.Dirty = true
	widget.Send(`socket.send('{"getValue":"`+widget.id+`","value":"'+document.getElementById("`+widget.id+`").value+'"}');`)	
	if sync {
		retry := 10
		for {
			if ! widget.Dirty {
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

func (widget *Widget) SetClass(class string) {
	widget.Class = class
	widget.Send(`document.getElementById("`+widget.id+`").className = "`+class+`";`)
}

func (widget *Widget) AddClass(class string) {
	widget.Class = class
	widget.Send(`document.getElementById("`+widget.id+`").className += " `+class+`";`)
} 

func (widget *Widget) SetAttribute(attr string, value string) {
	widget.Send(`document.getElementById("`+widget.id+`").setAttribute("`+attr+`","`+value+`");`)
}

func (widget *Widget) SetStyle(value string) {
	widget.SetAttribute("style", value)
}

func (widget *Widget) SetAlignment(value string) {
	widget.SetAttribute(ALIGN,value)
}

func (widget *Widget) SetChecked(checked bool) {
	if checked {
		widget.Send(`document.getElementById("`+widget.id+`").checked = true;`)
	} else {
		widget.Send(`document.getElementById("`+widget.id+`").checked = false;`)
	}
}

func (widget *Widget) SetDisabled(disabled  bool) {
	if disabled  {
		widget.Send(`document.getElementById("`+widget.id+`").disabled = true;`)
	} else {
		widget.Send(`document.getElementById("`+widget.id+`").disabled  = false;`)
	}
}

func (widget *Widget) SetBackgroundColor(color string) {
	widget.Send(`document.getElementById("`+widget.id+`").style.background="`+color+`";`)
}

func (widget *Widget) GetInterface() interface{} {
	return ifaces[widget.id]	
}

