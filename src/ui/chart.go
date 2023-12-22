package ui

import (
	"fmt"
	"svg"
)

type Chart struct {
	X int
	Y int
	W int
	H int
}

func (chart *Chart) Timeline(data []int, distance int, color string) *Widget {
	var widget Widget
	widget.CreateElement(nil,"",
		func() {
			tag := `'<path class="data" d="`
			tag += svg.DataPath(data,distance,chart.X,chart.H-chart.Y,false)
			tag += `" style="stroke: `+color+`" />'`
			widget.Send(`document.getElementById("`+widget.parent+`").innerHTML += `+tag)
		},
	)
	return &widget
}

func (chart *Chart) Curve(data []int, distance int, color string) *Widget {
	var widget Widget
	widget.CreateElement(nil,"",
		func() {
			tag := `'<path class="data" d="`
			tag += svg.DataPath(data,distance,chart.X,chart.H-chart.Y,true)
			tag += `" style="stroke: `+color+`" />'`
			widget.Send(`document.getElementById("`+widget.parent+`").innerHTML += `+tag)
		},
	)
	return &widget
}

func (chart *Chart) LineChart(dx int, dy int, mw int, th int) *Widget {
	var widget Widget
	widget.CreateElement(nil,"",
		func() {
			tag := `'<path class="grid" d="`
			tag += svg.GridPath(chart.X,chart.Y,chart.W,chart.H,dx,dy)
			tag += `" />'`
			widget.Send(`document.getElementById("`+widget.parent+`").innerHTML += `+tag)
			tag = `'<path  class="axis" d="`
			tag += svg.AxisPath(chart.X,chart.Y,chart.W,chart.H)
			tag += `" />'`
			widget.Send(`document.getElementById("`+widget.parent+`").innerHTML += `+tag)
			tag = `'<path  class="grid" d="`
			tag += svg.GridMarker(chart.X,chart.Y,chart.W,chart.H,dx,dy,mw)
			tag += `" />'`
			widget.Send(`document.getElementById("`+widget.parent+`").innerHTML += `+tag)
			for i:=0; i <= chart.W; i+=dy {
				tag = svg.TextTag("1", chart.X-mw, chart.Y+chart.H-i , fmt.Sprintf("%d",i), "text-anchor: end")
				widget.Send(`document.getElementById("`+widget.parent+`").innerHTML += `+tag)
			}
			for i:=0; i <= chart.H; i+=dx {
				tag = svg.TextTag("2", i+chart.X, chart.Y+chart.H+th, fmt.Sprintf("%d",i), "text-anchor: middle")
				widget.Send(`document.getElementById("`+widget.parent+`").innerHTML += `+tag)
			}
		},
	)
	return &widget
}