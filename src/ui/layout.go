package ui

import (
	"github.com/gorilla/websocket"
)

type Layout struct {
	conn  		*websocket.Conn
	parent 		string
	container	*Widget
}

type Cells struct {
	Layout
	cell		[][]*Widget
	row			int
	col			int
	colSize		[]string
}

func (layout *Layout) SetConnection(conn *websocket.Conn) {
	layout.conn = conn
}

func (layout *Layout) GetConnection() *websocket.Conn {
	return layout.conn
}

func (layout *Layout) SetParent(parent string) {
	layout.parent = parent
}

func (layout *Layout) GetContainer() *Widget {
	return layout.container
}

func (layout *Layout) GetID() string {
	return layout.container.ID()
}

func GridLayout(row int, col int, colSize ...string) *Cells {
	var grid Cells
	grid = Cells{Layout{nil,"",nil},nil,row,col,colSize}	
//	grid.Render()
	return &grid
}

func (grid *Cells) Render() {
	grid.container = GridContainer(grid.conn,grid.parent)
	gridId := grid.container.ID()
	
	grid.cell = make([][]*Widget, grid.row)
	for r := range grid.cell {
	    grid.cell[r] = make([]*Widget, grid.col)
	    row := Row(grid.conn,gridId)
	    rowId := row.ID()
	    for c := range grid.cell[r] {
	    	if c < len(grid.colSize) {
	    		grid.cell[r][c] = Col(grid.conn,rowId,grid.colSize[c])
	    	} else {
		    	grid.cell[r][c] = Col(grid.conn,rowId,"col-sm-2")
	    	}
	    }
	}
}

func (layout *Cells) Add(cell WidgetConnector, row int, col int, class ...string) *Widget {
	item := layout.cell[row][col]
	if len(class) > 0 {
		item.SetClass(class[0])
	}
	cell.SetParent(item.ID())
	cell.SetConnection(layout.conn)
	cell.Render()
	return cell.GetContainer()
}

func (layout *Cells) Cell(row int, col int) *Widget {
	return layout.cell[row][col]
}

type Tabs struct {
	Layout
	tab		[]*Widget
	pages	int
	names	[]string
}

func TabLayout(pages int, names ...string) *Tabs {
	var tabs Tabs
	tabs = Tabs{Layout{nil,"",nil},nil,pages,names}
//	tabs.Render()
	return &tabs
}	

func (tabs *Tabs) GetTab(idx int) *Widget {
	return tabs.tab[idx]
}

func (tabs *Tabs) Render() {
	tabs.container = NewTabs(tabs.conn,tabs.parent)
	tabsId := tabs.container.ID()
	
	tabs.tab = make([]*Widget, tabs.pages)
	for t := range tabs.tab {
		if t < len(tabs.names) {
			tabs.tab[t] = NewTab(tabs.conn, tabsId, tabs.names[t])
		} else {
		    tabs.tab[t] = NewTab(tabs.conn, tabsId,"")
		}
	}
}

func (layout *Tabs) Add(cell WidgetConnector, page int) *Widget {
	item := layout.tab[page]
	cell.SetParent(item.ID())
	cell.SetConnection(layout.conn)
	cell.Render()
	return cell.GetContainer()
}

func (layout *Tabs) Page(page int) *Widget {
	return layout.tab[page]
}