let canvas;

//Swarm
let swarm = []
let num_particles = 500;

const MIN = 0; MAX = 1000;
let diam = 0;
let inc = 1;
let alf = 100
let deg = 0;
let H1 = 0;
let x = 0;
let y = 0;
let reset1;

function setup() {
  canvas = createCanvas(windowWidth, 350);
  canvas.position(0, 50);
  canvas.style('z-index', '-1');
  colorMode(HSB, 360, 100, 100, 100);
  frameRate(20);
  background(0);


  //build swarm
  for (let i = 0; i < num_particles; i++){
    swarm.push(new particle(random(width), random(height)));
  }
}

function draw() {
  background(0,1);
  
  for(let i=0; i < swarm.length; i++){
    // swarm[i].update();
    swarm[i].display(); 
  }
  rectMode(CENTER);
  strokeWeight(random(1,3));
  stroke(H1, random(100), random(100), 100)
  fill(H1,100, 100, 5);
  // noFill();
  
  push();
  translate(width/2, height/2);
  rotate(deg);
  rect(x, y, diam);
  pop();
  diam += inc;
  alf -= inc;
  deg += random(0.01, 0.05);

  if (width < height){
    reset1 = width/2
  } else {
    reset1 = height/2
  }
  if (diam == MIN || diam == reset1){
    inc *= -1;
  }
  if (diam <= 0){
    H1 = random(360);
    x = random(-width*.3, width*.3);
    y = random(-height*.3, height*.3);
  }

  }


//Particle class
function particle(x, y){
  this.loc = createVector(x, y);

this.display = function(){
  noStroke();
  fill(180, random(100), random(100), random(100));
  circle(this.loc.x, this.loc.y, random(5));
}

}

function windowResized() {
  //console.log('resized');
  resizeCanvas(windowWidth, 300);
//   background(0);
}


