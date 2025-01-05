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

    // Tworzenie pustej tekstury za pomocą createImage
    combinedTexture = createImage(64, 64); // Używamy createImage, aby mieć dostęp do interpolacji
    combinedTexture.loadPixels();
    combinedTexture.setInterpolation(NEAREST); // Ustawienie interpolacji NEAREST dla ostrości

    // Dynamiczne aktualizowanie tekstury
    setInterval(() => {
        const sourceCanvas = document.getElementById('canvas');
        const ctx = sourceCanvas.getContext('2d');
        const imageData = ctx.getImageData(0, 0, sourceCanvas.width, sourceCanvas.height);

        combinedTexture.loadPixels(); // Wczytanie pikseli w combinedTexture
        for (let i = 0; i < imageData.data.length; i++) {
            combinedTexture.pixels[i] = imageData.data[i];
        }
        combinedTexture.updatePixels(); // Zaktualizowanie pikseli w combinedTexture
    }, 100);
}

function draw() {
    background(220);
    orbitControl();

    // Obracanie modelu dla właściwej orientacji
    rotateX(0);
    rotateZ(PI);

    // Nakładanie tekstury na model 3D
    if (combinedTexture) {
        texture(combinedTexture); // Nakładanie tekstury na model
    } else {
        noTexture();
    }
    model(mario);
}
