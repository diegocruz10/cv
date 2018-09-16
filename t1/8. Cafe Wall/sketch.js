function setup() {
	createCanvas(800, 500);	
}

function draw() {

	if (mouseIsPressed) {
		background(255);
		for (var i = 0; i <= 400; i+=40) {
			stroke(153);
			line(0, 40 + i, 800, 40 + i);
		}	
	} else {
		background(255);
		
		fill(0, 0, 0, 255);	
		
		sizex = 0;
		sizey = 0;
		
		for (var i = 0; i <= 10; i++) {
			
			rect(sizex, sizey, 40, 40);

			x = 20;
			y = 0;
			for (var j = 0; j <= 10; j++) {
				sizey += 40;
				rect(sizex + x, sizey, 40, 40);

				if (x < 50 && y < 2) {
					x+=15;
					y++;
				} else {
					x-=15;
					if(x < 0) {
						y = 0;
						x = 20;
					}
				}
			}
			sizey = 0;
			sizex += 80;
		}
		
		for (var i = 0; i <= 400; i+=40) {
			stroke(153);
			line(0, 40 + i, 800, 40 + i);
		}		
	}
}