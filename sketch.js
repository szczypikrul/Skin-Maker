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
let texCanvas;
let textureFromCanvas;

function preload() {
    mario = loadModel('model/model.obj', true); // Załaduj model
}

function setup() {
    let canvas = createCanvas(400, 400, WEBGL);

    // Pobierz canvas z HTML jako źródło tekstury
    texCanvas = document.getElementById('canvas');

    // Utwórz teksturę z HTML canvas
    textureFromCanvas = createGraphics(texCanvas.width, texCanvas.height);
}

function draw() {
    background(220);
    orbitControl(); // Dodano kontrolę kamery

    // Odśwież teksturę z zawartości HTML canvas
    textureFromCanvas.clear();
    textureFromCanvas.image(texCanvas, 0, 0);

    // Renderuj model z aktualną teksturą
    noStroke();
    texture(textureFromCanvas); // Nałóż dynamiczną teksturę
    model(mario);               // Wyświetl model
}
