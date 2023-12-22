package ui

import (
	"svg"
)

func Svg(l int, t int, r int, b int) *Widget {
	var widget Widget
	widget.CreateElement(nil,"",
		func() {
			widget.Send(`document.getElementById("`+widget.parent+`").innerHTML += `+svg.ContainerTag(widget.id,l,t,r,b))
		},
	)
	return &widget
}

func Rect(x int, y int, w int, h int) *Widget {
	var widget Widget
	
	widget.CreateElement(nil,"",
		func() {
			widget.Send(`document.getElementById("`+widget.parent+`").innerHTML += `+svg.RectTag(widget.id,x,y,w,h))
		},
	)
	return &widget
}

func Line(x1 int, y1 int, x2 int, y2 int) *Widget {
	var widget Widget
	widget.CreateElement(nil,"",
		func() {
			widget.Send(`document.getElementById("`+widget.parent+`").innerHTML += `+svg.LineTag(widget.id,x1,y1,x2,y2))
		},
	)
	return &widget
}

func Text(x int, y int, t string) *Widget {
	var widget Widget
	widget.CreateElement(nil,"",
		func() {
			widget.Send(`document.getElementById("`+widget.parent+`").innerHTML += `+svg.TextTag(widget.id,x,y,t,""))
		},
	)
	return &widget
}

//-----------------------------------------------------------------

func Path(elements []string) *Widget {
	var widget Widget
	widget.CreateElement(nil,"",
		func() {
			tag := `'<path d="`
			for i:=0; i<len(elements); i++ {
				tag += elements[i]
			}
			tag += `" />'`
			widget.Send(`document.getElementById("`+widget.parent+`").innerHTML += `+tag)
		},
	)
	return &widget
}

//-----------------------------------------------------------------

