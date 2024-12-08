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
}

function draw() {
  background(220);
  orbitControl();

  // Ustawienie interpolacji na podstawie stanu myszy
  if (mouseIsPressed) {
    tex.setInterpolation(LINEAR, LINEAR); // Ustaw rozmycie tekstury
  } else {
    tex.setInterpolation(NEAREST, NEAREST); // Ustaw ostrość tekstury
  }

  // Renderowanie modelu z teksturą
  rotateY(frameCount * 0.01); // Powolny obrót modelu
  texture(marioUV);          // Ustaw teksturę
  model(mario);              // Wyświetl model
}
