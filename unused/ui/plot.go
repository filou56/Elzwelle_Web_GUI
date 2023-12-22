package ui

import (
	"glot"
	"log"
	"io"
	"bytes"
)

func Plot(name string, points interface{}, cmds ...string) (string) {
	dimensions := 2
	// The dimensions supported by the plot
	persist := false
	debug 	:= false
	plot, err := glot.NewPlot(dimensions, persist, debug)
	if err != nil {
		log.Println("Plot ERROR",err)
	}
	
	buf := new(bytes.Buffer)
	
	go func(r io.ReadCloser, buf *bytes.Buffer) {
		buf.ReadFrom(r)	
	}(plot.GetReader(),buf)
	
	log.Println("Plot Start")
	
    // Adding a point group
	plot.AddPointGroup(name, "lines", points)
	plot.SetTitle("Heizung Ulm")
	plot.CheckedCmd(`set xdata time`)
	plot.CheckedCmd(`set timefmt "%%s"`)
	plot.CheckedCmd(`set format x "%%d.%%m %%H:%%M"`)
//	plot.CheckedCmd(`set xtics 21600`)
	plot.CheckedCmd(`set xtics rotate`)
//	plot.CheckedCmd(`set yrange [0:100]`)	
	for _, cmd := range cmds {
       log.Println("CMD:",cmd)
       plot.CheckedCmd(cmd)
    }
	plot.CheckedCmd(`set linetype 1 lw 3 lc rgb "white" pointtype 6`)
//	plot.CheckedCmd(``)
	plot.CheckedCmd("set terminal svg size 1200,300")
	plot.CheckedCmd("replot  ")
	plot.Close()
	log.Println("Plot Done")
//	log.Println(buf.String())
	return buf.String()
}