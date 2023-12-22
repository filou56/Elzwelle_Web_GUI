package ui

import (
	"log"
)

func dialogTag(id string, msg string) string {
	return `'<dialog id="`+id+`">\
	             <center>\
		             <h2>`+msg+`</h2>\
		             <button class="primary" onClick="document.getElementById(\'`+id+`\').close()">OK</button>\
	             </center>\
	         </dialog>'`
}

func OkDialog(msg string) *Widget {
	var dialog Widget
	
	dialog.CreateElement(nil,"",
		func() {
			log.Println("Dialog Render")
			dialog.Send(`document.getElementById("`+dialog.parent+`").innerHTML += `+dialogTag(dialog.id,msg))
		},
	)
	return &dialog
}

func ShowDialog(dialog *Widget) {
	dialog.Send(`document.getElementById("`+dialog.id+`").showModal();`)
}