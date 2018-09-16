var angle = 0;
 
function setup() {
    createCanvas(510, 220);
}
      
function draw () {
    var c = (cos(this.angle + PI / 2) * width / 2) + width / 2;
    angle += 0.02;
	
	for (var i = 0; i < 510; i++) {
	  stroke(i / 2);
	  line(i, 0, i, 220);
	}
	
	noStroke();
	fill(255);
	rectMode(CORNER);
	rect(0, 0, c, 220);
	fill(150);
	rectMode(CENTER);
	rect(width / 2, height / 2, 300, 40);
    
}
