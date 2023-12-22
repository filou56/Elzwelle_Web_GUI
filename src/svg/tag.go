package svg

import (
	"strconv"
)

func ContainerTag(id string, l int, t int, r int, b int) string {
	return "'<svg id=\""+id+
	       "\" viewBox=\""+strconv.Itoa(l)+" "+strconv.Itoa(t)+" "+strconv.Itoa(r)+" "+strconv.Itoa(b)+
	       "\" width=\"100%\"></svg>'"
}

//--------------------------------------------------------------------------------------
//
// <rect x="10" y="10" height="100" width="100" style="stroke:#006600; fill: #00cc00"/>

func RectTag(id string, x int, y int, w int, h int) string {
	return "'<rect id=\""+id+
		   "\" x=\""+strconv.Itoa(x)+
	       "\" y=\""+strconv.Itoa(y)+
	       "\" width=\""+strconv.Itoa(w)+
	       "\" height=\""+strconv.Itoa(h)+
	       "\"/>'"
}

//-----------------------------------------------------------------
//
//	<line x1="0"  y1="10" x2="0"   y2="100" style="stroke:#006600;"/>

func LineTag(id string, x1 int, y1 int, x2 int, y2 int) string {
	return "'<line id=\""+id+
		   "\" x1=\""+strconv.Itoa(x1)+
	       "\" y1=\""+strconv.Itoa(y1)+
	       "\" x2=\""+strconv.Itoa(x2)+
	       "\" y2=\""+strconv.Itoa(y2)+
	       "\"/>'"
}

//-----------------------------------------------------------------
//
//	<text x="20" y="40">Example SVG text 1</text>

func TextTag(id string, x int, y int, t string, s string) string {
	if len(s) > 0 {
		return "'<text id=\""+id+
			   "\" x=\""+strconv.Itoa(x)+
		       "\" y=\""+strconv.Itoa(y)+
		       "\" style=\""+s+
		       "\">"+t+"</text>'"		
	} else {
		return "'<text id=\""+id+
			   "\" x=\""+strconv.Itoa(x)+
		       "\" y=\""+strconv.Itoa(y)+
		       "\">"+t+"</text>'"
	}
}

//-----------------------------------------------------------------

//func SvgTest() *Widget {
//	return Html(`\
//		<svg id="svg" width="200" height="200" viewBox="0 0 74 74">\
//			<circle fill="#F0CA00" cx="37" cy="37" r="37"/>\
//			<circle fill="#008754" cx="37" cy="37" r="35"/>\
//			<circle fill="#F0CA00" cx="37" cy="37" r="25"/>\
//		    <path fill="#008754" d="m 44.5,34 -15,0 0,-16 -6,0 0,38 6,0 0,-17 15,0 0,17 6,0 0,-38 -6,0 z"/>\
//		</svg>\
//	`)
//}

func TestTag(id string) string {
	return `\
		<svg id="svg" width="200" height="200" viewBox="0 0 74 74">\
			<circle fill="#F0CA00" cx="37" cy="37" r="37"/>\
			<circle fill="#008754" cx="37" cy="37" r="35"/>\
			<circle fill="#F0CA00" cx="37" cy="37" r="25"/>\
		    <path fill="#008754" d="m 44.5,34 -15,0 0,-16 -6,0 0,38 6,0 0,-17 15,0 0,17 6,0 0,-38 -6,0 z"/>\
		</svg>\
	`
}

//func tabsTag(id string) string {
//	return "'<div class=\"tabs\" id=\""+id+"\"></div>'"
//}