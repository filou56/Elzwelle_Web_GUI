package ui

import (

)

func Button(class string, value string, options...int) *Widget {
	var button Widget
	
	button.CreateElement(nil,"",nil)
	if options != nil && options[0] == 1 {
		button.inject = func() {
			button.Send(`document.getElementById("`+button.parent+`").innerHTML += `+groupedButtonTag(button.id,button.Class,button.Value))
		}
	} else {
		button.inject = func() {
			button.Send(`document.getElementById("`+button.parent+`").innerHTML += `+buttonTag(button.id,button.Class,button.Value))
		}
	}
	button.Value = value
	button.Class = class
	
	return &button
}
