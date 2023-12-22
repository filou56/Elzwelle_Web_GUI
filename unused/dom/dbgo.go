package dom

import (
	"fmt"
	"log"
	"os"
//	"time"
	"database/sql"
  _ "github.com/go-sql-driver/mysql"	// _ => force linking driver
)

func Query(column string, samples int, intervall int64) ([][]float64) {
	var stamps []float64
	var values []float64
	
	// Create the database handle, confirm driver is present
	db, _ := sql.Open("mysql", "hm:hm4filou@/hm_ulm")
	defer db.Close()

	// Connect and check the server version
	var version string
	db.QueryRow("SELECT VERSION()").Scan(&version)
	log.Println("Connected to:", version)
	
	//Rows is the result of a query. Its cursor starts before the first row of the result set. Use Next to advance through the rows:

	rows, err := db.Query(fmt.Sprintf("SELECT timestamp,%s FROM heating_data WHERE timestamp > %d",column,intervall))
    defer rows.Close()
    
    if err != nil {
	    log.Println(rows.Err()) // get any error encountered in iteration
	    os.Exit(1)
    }

	i:=0
    for rows.Next() {       
		var timestamp 	int64
		var value 		float64

		err = rows.Scan(&timestamp,&value)
		//fmt.Printf("%d,%s,%2.1f\n",timestamp,time.Unix(timestamp,0).Format("02.01.2006 15:04:05"),value)
		
		if i < samples {
			stamps = append(stamps,float64(timestamp))
			values = append(values,value)
		}
		i++
    }
    
    log.Println("done")
    
    if err != nil {
	    log.Println(rows.Err()) // get any error encountered in iteration
    }
    
    return [][]float64{stamps,values}
}

