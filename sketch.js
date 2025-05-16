/*
let mario;
let marioUV;
let tex;

function preload() {
  mario = loadModel('model/model.obj', true); // Załaduj model
  marioUV = loadImage('img/steve.png');       // Załaduj teksturę
}

function setup() {
  let canvas = createCanvas(400, 400, WEBGL);

  // Utwórz teksturę dla obrazu
  tex = canvas.getTexture(marioUV);

  // Ustaw stałą interpolację na NEAREST (dla ostrych tekstur)
  tex.setInterpolation(NEAREST, NEAREST);
}

function draw() {
  background(220);
  orbitControl(); // Dodano ręczną kontrolę kamery (możesz używać myszy, jeśli chcesz)

  // Obróć model w celu poprawy orientacji
  rotateX(PI);  // Obraca model do właściwej orientacji (jeśli jest do góry nogami)
  noStroke();
  // Renderowanie modelu z teksturą
  texture(marioUV); // Nałóż teksturę na model
  model(mario);     // Wyświetl model
}
*/
let mario;
let dynamicCanvas;
let dynamicTexture;

function preload() {
  mario = loadModel('model/model.obj', true); // Ładuj model
}

function setup() {
  createCanvas(400, 400, WEBGL);
  noStroke();

  // Pobierz referencję do HTML canvas (z łączenia grafik)
  dynamicCanvas = document.getElementById('canvas');

  // Ustaw początkową teksturę jako grafikę z tego canvasu
  dynamicTexture = createGraphics(128, 128);
}

function draw() {
  background(220);
  orbitControl();
  rotateX(PI);

  // Skopiuj zawartość HTML canvas do p5.Graphics
  dynamicTexture.drawingContext.drawImage(dynamicCanvas, 0, 0);

  texture(dynamicTexture);
  model(mario);
}


