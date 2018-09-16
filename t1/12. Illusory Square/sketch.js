var dx = 100;
var dy = 400;
var flag = 0;

function setup() {
    createCanvas(500, 500)
}
      
function draw() {
	background(0);
	rectMode(CENTER);
	stroke(255);
	noFill();
	rect(250, 250, 150, 150)
	
	if(dx >= 165)
		flag = 1;
	if(dx == 100)
		flag = 0;
	
	if(flag == 0) {
	  dx++;
	  dy--;
	} else {
	  dx--;
	  dy++;
	}
	
	noStroke();
	fill(100);
	ellipse(dx, 250, 100, 100);
	ellipse(250, dx, 100, 100);
	ellipse(dy, 250, 100, 100);
	ellipse(250, dy, 100, 100);
	fill(210);
	ellipse(dx + 190, 250, 20, 20);
	ellipse(250, dx + 190, 20, 20);
	ellipse(dy - 190, 250, 20, 20);
	ellipse(250, dy - 190, 20, 20);
}
