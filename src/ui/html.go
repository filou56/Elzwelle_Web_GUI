package ui

import (

)

//func Html(value string) *Widget {
//	var html Widget
//	html.CreateElement(nil,"",
//		func() {
//			html.Send(`document.getElementById("`+html.parent+`").innerHTML += '`+value+`'`)
//		},
//	)
//	html.Value = value
//	return &html
//}

func Html(value string, add ...bool) *Widget {
//func Html(value string, add bool) *Widget {
	var widget Widget
	widget.CreateElement(nil,"",
		func() {
			if len(add)>0 && add[0] {
//			if add {
				widget.Send(`document.getElementById("`+widget.parent+`").innerHTML += `+"`"+value+"`")
			} else {
				widget.Send(`document.getElementById("`+widget.parent+`").innerHTML = `+"`"+value+"`")
			}
		},
	)
	return &widget
}