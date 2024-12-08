let mario; 
let marioUV;

function preload() {
  mario = loadModel('model/model.obj', true);
  marioUV = loadImage('img/steve.png');
}

function setup() {
  createCanvas(400, 400, WEBGL);
}

function draw() {
  stroke(0);
  strokeWeight(0);
  background(100);
  orbitControl(5)
  rotateZ(PI);
  filter(BLUR, 10);
  model(mario);
  texture(marioUV);
}
