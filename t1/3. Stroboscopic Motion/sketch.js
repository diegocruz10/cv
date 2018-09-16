var state = 0;

function setup() {
	createCanvas(500, 500);	
	background(0); 	
}

function draw() {
	var state = 0;
}

function mousePressed() {
    if (state == 0) {
		colorValue = 255;
		fill(colorValue);
		ellipse(150, 150, 80, 80);
		ellipse(300, 300, 80, 80);
		colorValue = 0;
		fill(colorValue);
		ellipse(300, 150, 80, 80);
		ellipse(150, 300, 80, 80);
		state = 1;
    } else {
		colorValue = 0;
		fill(colorValue);
		ellipse(150, 150, 80, 80);
		ellipse(300, 300, 80, 80);
		colorValue = 255;
		fill(colorValue);
        ellipse(300, 150, 80, 80);
		ellipse(150, 300, 80, 80);
		state = 0;
    }
}



