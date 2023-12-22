# Go WEB GUI

Ein auf der Clientseite auf Javascript basierendes GUI Frontend für Golang.
---

Die Basis bildet ein Webserver der eine leere Grundseite während des Programmablaufes dynamisch mit
Inhalt füllt. Alle notwendigen Ressourcen sind hierzu in Go integriert. Die Anwendung wird als 
einfaches ausführbares Programm ausgeliefert und benötigt keinerlei Installation. 
Als Ausgabemedium eignet sich jeder Moderne Browser, lokal oder über das Netzwerk.

Der Kern der Anwendung ist in der Basisseite als einfaches Javascript Programm enthalten 
und stellt eine Netzwerkverbindung zum Server her. Diese verwendet Websockets um Nachrichten 
zwischen Programm (Server) und Anzeige(Client) auszutauschen. Mit Hilfe der eval Funktion 
von Javascript kann das Go Programm dann das DOM im Browser steuern, genauer Inhalte hinzufügen 
oder Events der Benutzeroberfläche empfangen.

Das Grundobjekt aus dem alle anderen sichtbaren Elemente aufgebaut sind ist das Widget. 
Das zugehörige Interface WidgetConnector garantiert, dass auch andere nicht sichtbaren Objekte, 
wie etwa Layouts oder vorgefertigte Komponenten in die Seite integriert werden können.

## Events

Die Kommunikation erfolgt via Websockets und innerhalb der Anwendung über Golang Channels.
Damit wird sichergestellt das alle GUI Operationen synchron und seriell abgearbeitet werden 
und sich nicht gegenseitig stören. 

        function onClickEvent(id) {
            console.log("onClickEvent ",id);
            socket.send("{\"onClickEvent\":\""+id+"\"}");
        };

Die Antwort wird als JSON String gesendet und auf der Server, der Golang Seite entsprechend ausgewertet.

        if (ev_map["onClickEvent"] 	!= nil) { 
        	    	id := ev_map["onClickEvent"].(string)
        	    	//log.Println("onClickEvent")
        	    	widget := ui.GetWidgetByID(id)
        	    	if widget != nil {
        	    		widget.OnClick()
        	    	} else {
        	    		log.Println("\nonClickEvent not handeled: ",string(msg))
        	    	}
	    }

Die einzelnen Elemente der JSON Nachricht werden geparsed und in einer Map gespeichert. Der Wert zum onClickEvent beinhaltet die ID des Widget Objekts und falls vorhanden die onClick Methode aufgerufen. 
 
