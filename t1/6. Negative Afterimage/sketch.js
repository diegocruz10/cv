var img; 

function preload() {  
  img = loadImage("http://cdn.shopify.com/s/files/1/1634/8849/products/bb067_grande.jpg");
  img2 = loadImage("http://cdn.shopify.com/s/files/1/1634/8849/products/bb067_grande.jpg");
}

function setup() {
	createCanvas(500, 500);
	
	image(img, 0, 0);
	filter(INVERT);
	
	stroke(0,0,0);
	line(0, 250, 500, 250);	
	line(250, 0, 250, 500);
	line(0, 0, 500, 500);
	line(0, 500, 500, 0);


	setTimeout(test, 10000);	
}

function test() {
	
	image(img2, 0, 0);
	filter(GRAY);	
	return 0;
}