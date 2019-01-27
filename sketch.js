let ax, ay;
let bx, by;
let cx, cy;

function setup() {
	createCanvas(windowWidth, windowHeight);
	ax = random(width);
	ay = random(height);
	bx = random(width);
	by = random(height);
	cx = random(width);
    cy = random(height);
    
    background(0);
    stroke(255);
    strokeWeight(8);
    point(ax, ay);
    point(bx, by);
    point(cx, cy);

}


function draw() {
	
}
