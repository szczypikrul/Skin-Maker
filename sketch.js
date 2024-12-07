let mario; 
let marioUV;

function preload() {
  // Ładujemy model i teksturę
  mario = loadModel('model/model.obj', true);
  marioUV = loadImage('img/steve.png');
}

function setup() {
  createCanvas(400, 400, WEBGL);

  // Wyłączenie interpolacji tekstury
  textureWrap(REPEAT, REPEAT);
  marioUV.setInterpolation(NEAREST);
}

function draw() {
  background(100);

  // Sterowanie kamerą
  orbitControl(5);

  // Oświetlenie
  ambientLight(255); // Równomierne oświetlenie dla pełnej widoczności

  // Renderowanie modelu z teksturą
  push();
  texture(marioUV);
  noStroke(); // Usunięcie obramowania modelu
  model(mario);
  pop();
}
