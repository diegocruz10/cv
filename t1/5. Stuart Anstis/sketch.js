var dx = null;

function setup() {
	createCanvas(400, 330);
	smooth();
}

function draw() {
	
	background(255);
	for(var i = 0; i < 30; i++) {
		noStroke();
		fill(0);
		rect(i * 20, 0, 10, height);
	}

	if(mouseIsPressed) 
		background(255);

	for(var dy = 0; dy < 4; dy++) {
		if (dy % 2 == 0)
			fill('#f1c40f');
		else 
			fill(0);
		rect(dx, dy * 90 + 5, 20, 50);
	}
	
	dx += 0.5;
	
	if(dx > width + 10) 
		dx = 0;
}
