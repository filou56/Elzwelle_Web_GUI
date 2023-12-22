package svg

import (
	"fmt"
//	"log"
)

func Min(x, y int) int {
 if x < y {
   return x
 }
 return y
}

func Max(x, y int) int {
 if x > y {
   return x
 }
 return y
}

func PM(x,y int) string {
	return fmt.Sprintf("M%d,%d ",x,y)
}

func Pm(x,y int) string {
	return fmt.Sprintf("m%d,%d ",x,y)
}

func PL(x,y int) string {
	return fmt.Sprintf("L%d,%d ",x,y)
}

func Pl(x,y int) string {
	return fmt.Sprintf("l%d,%d ",x,y)
}

func PT(x,y int) string {
	return fmt.Sprintf("T%d,%d ",x,y)
}

func Pt(x,y int) string {
	return fmt.Sprintf("t%d,%d ",x,y)
}

func PH(y int) string {
	return fmt.Sprintf("H%d ",y)
}

func Ph(y int) string {
	return fmt.Sprintf("h%d ",y)
}

func PV(x int) string {
	return fmt.Sprintf("V%d ",x)
}

func Pv(x int) string {
	return fmt.Sprintf("v%d ",x)
}

type point struct {
	x int
	y int
}

type bezierPoint [3]point

func convert(points []point) []bezierPoint {
	var bp []bezierPoint
	
	bp = make([]bezierPoint,len(points)-1)
	
	for i := 0; i < len(points) - 1; i++ {
		var p [4]point;
		
		p[0].x = points[Max(i - 1, 0)].x
		p[0].y = points[Max(i - 1, 0)].y
		p[1].x = points[i].x
		p[1].y = points[i].y
		p[2].x = points[i+1].x
		p[2].y = points[i+1].y
		p[3].x = points[Min(i + 2, len(points) - 1)].x
		p[3].y = points[Min(i + 2, len(points) - 1)].y

		// https://advancedweb.hu/plotting-charts-with-svg/
        // Catmull-Rom to Cubic Bezier conversion matrix
        //    0       1       0       0
        //  -1/6      1      1/6      0
        //    0      1/6      1     -1/6
        //    0       0       1       0

		bp[i][0].x = ((-p[0].x + 6 * p[1].x + p[2].x) / 6)
		bp[i][0].y = ((-p[0].y + 6 * p[1].y + p[2].y) / 6)
		bp[i][1].x = ((p[1].x + 6 * p[2].x - p[3].x) / 6)
		bp[i][1].y = ((p[1].y + 6 * p[2].y - p[3].y) / 6)
		bp[i][2].x = p[2].x
		bp[i][2].y = p[2].y
    }
	
	return bp
}

func DataPath(data []int, distance int, xofs int, yofs int, bezier bool) string {
	var points []point
	var curve string
	
	points = make([]point,len(data))	
	
	for i := 0; i < len(points); i++ {
		points[i].x = i*distance+xofs
		points[i].y = yofs-data[i]
	}
	
	if bezier {
		//log.Println(len(data))
		bp := convert(points)
		//log.Println(len(bp))
		
		curve = fmt.Sprintf("M%d,%d ",bp[0][0].x,bp[0][0].y)
		
		for i:=0; i<len(bp); i++ {
			curve += fmt.Sprintf("C%d,%d,%d,%d,%d,%d ",bp[i][0].x,bp[i][0].y,bp[i][1].x,bp[i][1].y,bp[i][2].x,bp[i][2].y)
		}
		//log.Println(curve)
	} else {
		curve = fmt.Sprintf("M%d,%d ",points[0].x,points[0].y)
		for i:=0; i<len(points)-1; i++ {
			curve += fmt.Sprintf("L%d,%d ",points[i+1].x,points[i+1].y)
		}
	}
	return curve
}

func GridPath(x int, y int, w int, h int, dx int, dy int) string {
	path := ""
	for i:=dy; i <= w; i+=dy {
		path += fmt.Sprintf("M%d,%d H%d ",x,y+h-i,x+w)
	}
	for i:=dx; i <= h; i+=dx {
		path += fmt.Sprintf("M%d,%d V%d ",x+i,y+h,y)
	}
	return path
}

func AxisPath(x int, y int, w int, h int) string {
	path := ""
	path += fmt.Sprintf("M%d,%d H%d ",x,y+h,x+w)
	path += fmt.Sprintf("M%d,%d V%d ",x,y+h,y)
	//log.Println(path)
	return path
}

func GridMarker(x int, y int, w int, h int, dx int, dy int, mw int) string {
	path := ""
	for i:=0; i <= w; i+=dy {
		path += fmt.Sprintf("M%d,%d H%d ",x,y+h-i,x-mw)
	}
	for i:=0; i <= h; i+=dx {
		path += fmt.Sprintf("M%d,%d V%d ",x+i,y+h+mw,y+h)
	}
	//log.Println(path)
	return path
}
/*

Path Commands

Below is a list of possible pen commands for the SVG path element. Each command consist 
of one letter and a set of numbers (coordinates etc.) which are parameters to that command. 
Uppercase commands usually interpret coordinate parameters as absolute coordinates. 
Lowercase commands usually interpret coordinate parameters as being relative from current pen location.

Com. 	Parameters 		Name 				Description
M 		x,y 			moveto 				Moves pen to specified point x,y without drawing.
m 		x,y 			moveto 				Moves pen to specified point x,y relative to current pen location, without drawing.
 
L 		x,y 			lineto 				Draws a line from current pen location to specified point x,y .
l 		x,y 			lineto 				Draws a line from current pen location to specified point x,y 
											relative to current pen location.
 
H 		x 				horizontal lineto 	Draws a horizontal line to the point defined by
											(specified x, pens current y).
h 		x 				horizontal lineto 	Draws a horizontal line to the point defined by
											(pens current x + specified x, pens current y). The x is 
											relative to the current pens x position.
 
V 		y 				vertical lineto 	Draws a vertical line to the point defined by
											(pens current x, specified y).
v 		y 				vertical lineto 	Draws a vertical line to the point defined by
											(pens current x, pens current y + specified y). 
											The y is relative to the pens current y-position.
 
C 	x1,y1 x2,y2 x,y 	curveto 			Draws a cubic Bezier curve from current pen point to x,y. 
											x1,y1 and x2,y2 are start and end control points of the curve, controlling how it bends.
c 	x1,y1 x2,y2 x,y 	curveto 			Same as C, but interprets coordinates relative to current pen point.
 
S 	x2,y2 x,y 			smooth curveto 		Draws a cubic Bezier curve from current pen point to x,y. x2,y2 
											is the end control point. The start control point is is assumed 
											to be the same as the end control point of the previous curve.
s 	x2,y2 x,y 	s		smooth curveto 		Same as S, but interprets coordinates relative to current pen point.
 
Q 	x1,y1 x,y 			q Bezier curveto 	Draws a quadratic Bezier curve from current pen point to x,y. x1,y1 is the control point controlling how the curve bends.
q 	x1,y1 x,y 			q Bezier curveto 	Same as Q, but interprets coordinates relative to current pen point.
 
T 	x,y 				smooth qB curveto 	Draws a quadratic Bezier curve from current pen point to x,y. 
											The control point is assumed to be the same as the last control point used.
t 	x,y 				smooth qB curveto 	Same as T, but interprets coordinates relative to current pen point.
 
A 	rx,ry,				
	x-axis-rotation,	
	large-arc-flag,
	sweepflag,
	x,y 				elliptical arc 		Draws an elliptical arc from the current point to the point x,y. rx and ry 
											are the elliptical radius in x and y direction.
											The x-rotation determines how much the arc is to be rotated around the x-axis. 
											It only seems to have an effect when rx and ry have different values.
											The large-arc-flag doesn't seem to be used (can be either 0 or 1). 
											Neither value (0 or 1) changes the arc.
											The sweep-flag determines the direction to draw the arc in.
a 	rx,ry
	x-axis-rotation,
	large-arc-flag,
	sweepflag,
	x,y 				elliptical arc 		Same as A, but interprets coordinates relative to current pen point.
 
Z 	  					closepath 			Closes the path by drawing a line from current point to first point.
z 	  					closepath 			Closes the path by drawing a line from current point to first point.

*/