let points = []

let x, y;

function setup() {
	createCanvas(windowWidth, windowHeight);

    for(let i = 0; i < 3; i++){
        let v = createVector(random(width), random(height));
    }
	x = random(width);
	y = random(height);

	background(0);
	stroke(255);
	strokeWeight(8);
	point(ax, ay);
	point(bx, by);
	point(cx, cy);
}

function draw() {
	for (let index = 0; index < 100; index++) {
		strokeWeight(0.5);
		point(x, y);
		let r = floor(random(3));
		if (r == 0) {
            stroke(50, 125, 30);
			x = lerp(x, ax, 0.5);
			y = lerp(y, ay, 0.5);
		} else if (r == 1) {
            stroke(255, 100, 0);

			x = lerp(x, bx, 0.5);
			y = lerp(y, by, 0.5);
		} else if (r == 2) {
            stroke(0, 0, 255);
			x = lerp(x, cx, 0.5);
			y = lerp(y, cy, 0.5);
		}
	}
}
