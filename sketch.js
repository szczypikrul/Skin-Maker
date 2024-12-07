let mario; 
let marioUV;

function preload() {
  mario = loadModel('model/model.obj', true);
  marioUV = loadImage('img/steve.png');

}

function setup() {
  createCanvas(800, 800, WEBGL);
}

function draw() {
  stroke(0);
  strokeWeight(0);
  background(100);
  orbitControl(5)
  rotateZ(PI)
  texture(marioUV);
  
  scale(5); // Dwukrotnie zwiększa skalę modelu
  model(mario);

}
