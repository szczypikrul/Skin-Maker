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
let combinedTexture;

function preload() {
    mario = loadModel('model/model.obj', true);
}

function setup() {
    // Tworzenie canvasu dla modelu 3D
    const modelCanvas = createCanvas(400, 400, WEBGL);
    modelCanvas.parent('model-canvas');

    // Pobieranie tekstury z canvasu do łączenia grafik
    const sourceCanvas = document.getElementById('canvas');
    combinedTexture = createImage(sourceCanvas.width, sourceCanvas.height);

    // Aktualizacja tekstury w czasie rzeczywistym
    setInterval(() => {
        combinedTexture.loadPixels();
        combinedTexture.copy(sourceCanvas, 0, 0, sourceCanvas.width, sourceCanvas.height, 0, 0, sourceCanvas.width, sourceCanvas.height);
        combinedTexture.updatePixels();
    }, 100);
}

function draw() {
    background(220);
    orbitControl();

    // Obrót modelu dla poprawnej orientacji
    rotateX(HALF_PI);
    rotateZ(PI);

    // Nałożenie tekstury na model
    if (combinedTexture instanceof p5.Image) {
        texture(combinedTexture);
    } else {
        noTexture();
    }
    model(mario);
}

