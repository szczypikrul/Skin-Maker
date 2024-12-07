let mario; 
let marioUV;

function preload() {
  mario = loadModel('model/model.obj', true);
  marioUV = loadImage('img/steve.png');
}

function setup() {
  createCanvas(400, 400, WEBGL);

  // Ustawienia tekstury dla lepszej jakości
  //textureWrap(REPEAT); // Powtarzanie tekstury
  textureMode(NORMAL); // Tryb tekstury w koordynatach normalnych
  noSmooth();          // Wyłącza antyaliasing
}

function draw() {
  stroke(0);
  strokeWeight(0);
  background(100);

  // Dodaj interaktywną kontrolę
  orbitControl(5);

  // Obrót modelu (jeśli wymagany)
  rotateZ(PI);

  // Renderuj model z teksturą
  texture(marioUV); // Tekstura musi być nałożona przed `model()`
  model(mario);
}
