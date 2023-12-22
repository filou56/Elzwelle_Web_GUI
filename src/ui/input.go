package ui

import (

)

func Input(inpType string, value string, options string) *Widget {
	var input Widget
	input.CreateElement(nil,"",
		func() {
		input.Send(`document.getElementById("`+input.parent+`").innerHTML += `+inputTag(input.id,input.inpType,input.Value,input.options))
		},
	)
	input.Value = value
	input.inpType = inpType
	input.options = options
	return &input
}

