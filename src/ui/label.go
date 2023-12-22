package ui

import (

)


func Label(value string) *Widget {
	var label Widget
	label.CreateElement(nil,"",
		func() {
			label.Send(`document.getElementById("`+label.parent+`").innerHTML += `+labelTag(label.id,label.Value))
		},
	)
	label.Value = value
	return &label
}
