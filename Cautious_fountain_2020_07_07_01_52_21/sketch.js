// Object Communication Part 2
// Code! Programming with p5.js
// The Coding Train / Daniel Shiffman
// https://thecodingtrain.com/beginners/p5js/7.7-object-communication-2.html
// https://youtu.be/5Q9cA0REztY
// https://editor.p5js.org/codingtrain/sketches/7SjPmXN2
let k = 0;
let bubbles = [];
function windowResized() { 
    resizeCanvas(windowWidth, windowHeight); 
} 
function setup() {
  createCanvas(windowWidth, windowHeight);
  for (let i = 0; i < 6; i++) {
    let x = random(width);
    let y = random(height);
    let r = random(30, 50);
    bubbles[i] = new Bubble(x, y, r,random(0,255));
  }
}
function mousePressed() {
    let x = mouseX
    let y = mouseY
    let r = random(30, 50);
	k = k + 1;
	document.getElementById("num").innerHTML = k;
	if(k == 10000000000){
		document.getElementById("num").innerHTML = "Wow, amazing you reached ten to the power of ten, but that's the limit sorry.";
	k=0;
	}
	
    append(bubbles, new Bubble(x, y, r,random(0,255)));
}
function draw() {


  for (let b of bubbles) {
    b.show();
    b.move();
  }
  if(bubbles.length > 200){
	   bubbles.splice(0,1);
  }
}

class Bubble {
  constructor(x, y, r = 50,yellowness ) {
    this.x = x;
    this.y = y;
    this.r = r;
    this.yellowness = yellowness;
  }
  
  

  move() {
    this.x = this.x + random(random(-5,0), random(0, 5));
    this.y = this.y + random(random(-5,0), random(0,5));
  }

  show() {
    noStroke()
        fill(255,this.yellowness,180,100)
    ellipse(this.x, this.y, this.r * 2);
    

   
  }
}
