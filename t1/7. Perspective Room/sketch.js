var img; 

function setup() {
	createCanvas(500, 500);	
	background(200);

	rect(260, 200, 90, 90);
	
	line(0, 0, 260, 200);
	
	line(80, 0, 275, 200);
	line(160, 0, 290, 200);	
	line(240, 0, 305, 200);	
	line(320, 0, 320, 200);	
	line(400, 0, 335, 200);
	line(480, 0, 350, 200);
	
	line(350, 215, 680, 0);	
	line(350, 230, 1280, 0);
	line(350, 245, 1040, 280);
	line(350, 260, 840, 500);	
	line(350, 275, 620, 500);

	line(0, 80, 260, 215);	
	line(0, 160, 260, 230);	
	line(0, 240, 260, 245);	
	line(0, 320, 260, 260);	
	line(0, 400, 260, 275);		
	line(0, 480, 260, 290);		

	line(350, 290, 500, 500);	
	
	line(233, 310, 363, 310);
	line(178, 350, 392, 350);
	line(123, 390, 420, 390);
	line(70, 430, 450, 430);
	line(16, 468, 478, 470);	
	
	img = loadImage("https://image.flaticon.com/icons/png/128/10/10525.png");
	// img = loadImage("https://image.flaticon.com/icons/png/512/48/48067.png");	
	
}

function draw() {
	
	image(img, 240, 150, img.width*1.2, img.height*1.2);
	image(img, 2, 346, img.width*1.2, img.height*1.2); 
		
}
