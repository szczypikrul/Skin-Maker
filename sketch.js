let mario;
let marioUV;

function preload() {
  mario = loadModel('mario.obj', true);
  marioUV = loadImage('marioUV2.png');
}

function setup() {
  createCanvas(400, 400, WEBGL);
}

function draw() {
  stroke(0);
  strokeWeight(0);
  background(100);
  orbitControl(5)
  rotateZ(PI)
  model(mario);
  texture(marioUV);
}
