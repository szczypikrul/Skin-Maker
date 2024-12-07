let mario; 
let marioUV;

function preload() {
  // Ładujemy model i teksturę
  mario = loadModel('model/model.obj', true);
  marioUV = loadImage('img/steve.png');
}

function setup() {
  createCanvas(400, 400, WEBGL);

  // Konfiguracja tekstury dla ostrości
  noSmooth(); // Wyłącza antyaliasing dla tekstur
  marioUV.resize(marioUV.width, marioUV.height); // Upewnij się, że tekstura zachowuje pełną rozdzielczość
  marioUV.loadPixels(); // Wymusza załadowanie pikseli tekstury
}

function draw() {
  background(100);

  // Sterowanie kamerą
  orbitControl(5);

  // Konfiguracja oświetlenia
  ambientLight(255); // Pełne, równomierne oświetlenie

  // Renderowanie modelu
  push();
  texture(marioUV); // Nakładanie tekstury
  noStroke(); // Usunięcie obramowania
  model(mario);
  pop();
}
