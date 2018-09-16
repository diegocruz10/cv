var img; 

function setup() {
	createCanvas(800, 800);	
	
    fill(0, 0, 0);	
	
	size = 40;
	
	for (var i = 0; i <= 10; i ++) {
		
		rect(size, 40, 40, 40);
		
		size2 = 40;
		
		for (var j = 0; j <= 10; j ++) {
		
		rect(size, size2, 40, 40);
		size2+=50;

		}
		size+=50;
    }
	
}

function draw() {					
	
}

