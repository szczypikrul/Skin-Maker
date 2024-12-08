let mario;
let marioUV;

function preload() {
  // Ładujemy model i teksturę
  mario = loadModel('model/model.obj', true);
  marioUV = loadImage('img/steve.png');
}

function setup() {
  createCanvas(400, 400, WEBGL);

  // Wyłączamy interpolację tekstury
  marioUV.setInterpolation(NEAREST, NEAREST);
}

function draw() {
  // Tło i ustawienia
  background(100);
  orbitControl(5); // Sterowanie kamerą

  // Obrót modelu
  rotateZ(PI);

  // Renderowanie modelu z teksturą
  noStroke(); // Usunięcie obramowania modelu
  texture(marioUV); // Ustawienie tekstury
  model(mario); // Wyświetlenie modelu
}
