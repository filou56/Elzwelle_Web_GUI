package ui

import (
_	"fmt"
)

// 			height:`+fmt.Sprintf("%d",height)+`,

func sheetScript(id string, height string, cols []string) string {
	var header = `
		var data_`+id+` = [
		];
		
		var sheet_`+id+` = new Tabulator("#`+id+`", {
			downloadEncoder:function(fileContents, mimeType){
		        // fileContents - the unencoded contents of the file
		        // mimeType     - the suggested mime type for the output
		
				// custom action to send blob to server could be included here
				// console.log("Tabulator Download Data:",mimeType,fileContents);
				
				payload = btoa(fileContents);
				socket.send("{\"onSheetEvent\":\"`+id+`\",\"eventType\":\"ajaxData\",\"payload\":\""+payload+"\"}");
				
		        return false;
		        
		        // if you would prefer to abort the download you can return false from this callback. 
		        // This could be useful for example if you want to send the created file to a server 
		        // via ajax rather than allowing the user to download the file.
		    },
			height: "`+height+`", 
			data:data_`+id+`, 
			layout:"fitColumns", 
			rowContextMenu:[
				 {
	                label:"<i class='fas fa-trash'></i> Select Row",
	                action:function(e, row){
	                    idx = row.getIndex();
	                    socket.send("{\"onSheetEvent\":\"`+id+`\",\"eventType\":\"selectRow\",\"position\":"+idx+"}");
	                }
	            },
	            {
	                label:"<i class='fas fa-trash'></i> Deselect Row",
	                action:function(e, row){
	                    idx = row.getIndex();
	                    socket.send("{\"onSheetEvent\":\"`+id+`\",\"eventType\":\"deselectRow\",\"position\":"+idx+"}");
	                }
	            },
//	            {
//	                label:"<i class='fas fa-trash'></i> Delete Row",
//	                action:function(e, row){
//	                    row.delete();
//	                }
//	            },
//	            {
//	                label:"<i class='fas fa-ban'></i> Disabled Option",
//	                disabled:true,
//	            },
	        ],			
			columns:[`

	var trailer = `
			],
		});
		
		sheet_`+id+`.on("rowClick", function(e, row){
			console.log("onSheetEvent ",`+id+`);
			socket.send("{\"onSheetEvent\":\"`+id+`\",\"eventType\":\"rowClick\"}");
		});
		
		
	`
	var columns = ""

	for _,col := range cols {
		columns = columns + col + ","
	}
	
	return header + columns + trailer

}   