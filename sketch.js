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
    mario = loadModel('model/model.obj', true); // Wczytanie modelu 3D
}

function setup() {
    // Tworzenie canvasu dla modelu 3D
    const modelCanvas = createCanvas(400, 400, WEBGL);
    modelCanvas.parent('model-canvas');

    // Tworzenie pustej tekstury
    combinedTexture = createGraphics(64, 64); // Tworzenie pustego p5.Graphics

    // Dynamiczne aktualizowanie tekstury
    setInterval(() => {
        const sourceCanvas = document.getElementById('canvas');
        const ctx = sourceCanvas.getContext('2d');
        const imageData = ctx.getImageData(0, 0, sourceCanvas.width, sourceCanvas.height);

        combinedTexture.loadPixels(); // Wczytanie pikseli w p5.Graphics
        for (let i = 0; i < imageData.data.length; i++) {
            combinedTexture.pixels[i] = imageData.data[i];
        }
        combinedTexture.updatePixels(); // Zaktualizowanie pikseli w p5.Graphics
    }, 100);
}

function draw() {
    background(220);
    orbitControl();

    // Obracanie modelu dla właściwej orientacji
    rotateX(HALF_PI);
    rotateZ(PI);

    // Nakładanie tekstury na model 3D
    if (combinedTexture instanceof p5.Graphics) {
        texture(combinedTexture);
    } else {
        noTexture();
    }
    model(mario);
}
