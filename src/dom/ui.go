package dom

import (
	"log"
	"fmt"
	"net/http"
)

func UiHandler(w http.ResponseWriter, r *http.Request) {
	log.Print("UI Handler")
	
	w.Header().Set("Content-Type", "text/html")
	// !! set utf-8 and dummy favicon link in header !!
    fmt.Fprintf(w,"%s",`
        <!DOCTYPE html>
		<html>
		    <head>
			    <meta charset="utf-8"/>
			    <link rel="icon" href="data:;base64,iVBORw0KGgo=">			    
		        <link rel="stylesheet" href="/css/mini-default.css">
		        <link href="/css/tabulator.css" rel="stylesheet">
		    </head>
		
		    <body id="root">
		        <script type="text/javascript" src="/js/tabulator.js"></script>
				<script type="text/javascript" src="/js/luxon.js"></script>
	
		        <script type="text/javascript">       
		            
		            var stack = [];
		            var onmessageDefer;
		
		            var socket = {                
		                ws: new WebSocket("ws://localhost:1111/cmd"),
		                send: function(data) {
		                    console.log("Send:",data);
		                    if (socket.ws.readyState == 1) {
		                        socket.ws.send(data);
		                    } else {
		                        stack.push(data);
		                    }
		                },
		
		                onmessage: function(callback) {
		                    console.log("OnMessage Callback");
		                    if (socket.ws.readyState == 1) {
		                        socket.ws.onmessage = callback;
		                    } else {
		                        onmessageDefer = callback;
		                    }
		                }
		            };
		            
		            socket.send("Connected");
		            
		            socket.ws.onopen = function(event) {
		                console.log("OnOpen");
						for (i in stack) {
							socket.ws.send(stack[i]);
						}
						stack = [];
		
		                if (onmessageDefer) {
		                    socket.ws.onmessage = onmessageDefer;
		                    onmessageDefer = null;
		                }
		            };
		            
		            socket.ws.onclose = function(event) {
		                console.log("OnClose");
		            };
		            
		            socket.ws.onmessage = function(event) {
		            	console.log("OnMessage"); 
			            if (event.data) {
				            console.log(event.data);
			                window.eval(event.data);
		                } else {
			                console.log("nothing to do");
		                }
		            };
		            
		            function onClickEvent(id) {
			            console.log("onClickEvent ",id);
			            socket.send("{\"onClickEvent\":\""+id+"\"}");
		            };
		            
		        </script>
		        
		    </body>
		</html>
	`);
}





