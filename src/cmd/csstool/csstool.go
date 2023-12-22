package main 

import (
	"os"
	"bufio"
	"fmt"	
	"regexp"
)

var (
	funcHeader = `(w http.ResponseWriter, r *http.Request) {
	log.Print("CSS Handler")
	
	w.Header().Set("Content-Type", "text/css")
    fmt.Fprintf(w,"%s",`
	
	packageHeader = `package dom

import (
	"log"
	"fmt"
	"net/http"
)
`
	
)	

func main() {
	argLength := len(os.Args[1:])
    if argLength != 1 {
    	panic("Need function name")
    }
    
    fmt.Print(packageHeader+"\n")
    fmt.Printf("func %s",os.Args[1])
    fmt.Print(funcHeader+"`\n")
    
    backTick := regexp.MustCompile("`")
    
    cin := bufio.NewReader(os.Stdin)   
    for { 
	    text, err := cin.ReadString('\n')
	    
	    if err != nil {
	    	break;
	    }
	    fmt.Print(backTick.ReplaceAllString(text, "`+\"`\"+`"))
    }
    
    fmt.Print("\t`);\n}")
}
