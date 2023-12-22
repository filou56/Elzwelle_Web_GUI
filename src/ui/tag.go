package ui

import (

)

func tabsTag(id string) string {
	return "'<div class=\"tabs\" id=\""+id+"\"></div>'"
}

func tabTag(id string, group string, value string) string {
	return `'<input type="radio" name="tab_group_`+group+`" id="tab_`+id+`" checked aria-hidden="true">\
		     <label for="tab_`+id+`" aria-hidden="true">`+value+`</label>\
		     <div id=`+id+`>\
		     </div>'`
}

func labelTag(id string, text string) string {
	return "'<label id=\""+id+"\">"+text+"</label>'"
}

func sheetTag(id string) string {
	return "'<div id=\""+id+"\">SheetTag</divl>'"
}

func buttonTag(id string, class string, value string) string {
	return "'<input id=\""+id+"\" type=\"button\" class=\""+class+"\" value=\""+value+"\" onclick=onClickEvent(\""+id+"\")>'"
}

func groupedButtonTag(id string, class string, value string) string {
	return "'<div class=\"button-group\"><input id=\""+id+"\" type=\"button\" class=\""+class+"\" value=\""+value+"\" onclick=onClickEvent(\""+id+"\")></div>'"
}

func inputTag(id string, inpType string, value string, options string) string { 
	return "'<input id=\""+id+"\" type=\""+inpType+"\" value=\""+value+"\""+options+" style=\"width:98%\">'"
}

func buttonGroupTag(id string) string {
	return "'<div class=\"button-group\" id=\""+id+"\"></div>'"
}

func tableTag(id string) string {
	return "'<div><table id=\""+id+"\"></table></div>'"
}

func tableRowTag(id string) string {
	return "'<tr id=\""+id+"\"></tr>'"
}

func tableCellTag(id string) string {
	return "'<td id=\""+id+"\"></td>'"
}

func tableGridContainerTag(id string) string {
	return "'<div class=\"container\" id=\""+id+"\"></div>'"
}

func tableGridRowTag(id string) string {
	return "'<div class=\"row responsive-label\" id=\""+id+"\"></div>'"
}

func tableGridColTag(id string, class string) string {
	return "'<div class=\""+class+"\" id=\""+id+"\"></div>'"
}
