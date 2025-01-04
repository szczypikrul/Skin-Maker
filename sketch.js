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
let marioUV;
let combinedTexture;

function preload() {
    mario = loadModel('model/model.obj', true);
    marioUV = createGraphics(128, 128); // Stwórz tymczasową teksturę
}

function setup() {
    const modelCanvas = createCanvas(400, 400, WEBGL);
    modelCanvas.parent('model-canvas');

    // Nasłuchuj zmian w canvasie połączonych grafik
    const sourceCanvas = document.getElementById('canvas');
    combinedTexture = createImage(sourceCanvas.width, sourceCanvas.height);

    // Aktualizuj teksturę co klatkę
    setInterval(() => {
        combinedTexture.copy(sourceCanvas, 0, 0, sourceCanvas.width, sourceCanvas.height, 0, 0, sourceCanvas.width, sourceCanvas.height);
    }, 100);
}

function draw() {
    background(220);
    orbitControl();

    // Wyświetl model z teksturą
    if (combinedTexture instanceof p5.Image) {
        texture(combinedTexture);
    } else {
        noTexture();
    }
    model(mario);
}
