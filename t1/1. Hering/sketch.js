var red = 255; 
var green = 255;
var blue = 255;

function setup () {
    createCanvas(500, 500);
}

function draw () {
	background(red, green, blue);
	translate(250, 250);
	strokeWeight(1);
	stroke(0, 0, 255);
	
	for (var i = 0; i < 490; i = i + 10) {
	  rotate(5);
	  line(0, 0, 400, 400);
	}
	
	strokeWeight(2);
	stroke(255, 0, 0);
	rotate(-245);
	translate(-250, -250);
	line(200, 0, 200, 500);
	line(300, 0, 300, 500);
}
	
function mousePressed () {
	red = 0;
	green = 0;
}

function mouseReleased () {
	red = 255;
	green = 255;
} 
