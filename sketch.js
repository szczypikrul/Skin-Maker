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
let tex;
let newImage1, newImage2;  // Zmienna do nowych grafik

function preload() {
  mario = loadModel('model/model.obj', true); // Załaduj model
  marioUV = loadImage('img/steve.png');       // Załaduj teksturę
  newImage1 = loadImage('img/steve.png'); // Załaduj pierwszą nową grafikę
  newImage2 = loadImage('img/jaskiniowiec_skin.png'); // Załaduj drugą nową grafikę
}

function setup() {
  let canvas = createCanvas(400, 400, WEBGL);

  // Utwórz teksturę dla obrazu
  tex = createTexture(marioUV);  // Tworzenie tekstury z obrazka 'steve.png'

  // Ustawienie interpolacji dla ostrych tekstur
  tex.setInterpolation(NEAREST, NEAREST);
}

function draw() {
  background(220);
  orbitControl(); // Dodano ręczną kontrolę kamery (możesz używać myszy, jeśli chcesz)

  // Obróć model w celu poprawy orientacji
  rotateX(PI);  // Obraca model do właściwej orientacji (jeśli jest do góry nogami)
  noStroke();

  // Renderowanie modelu z teksturą
  // Możesz nałożyć różne tekstury w zależności od warunków lub wejścia
  texture(newImage1); // Nakłada pierwszą nową teksturę
  model(mario);       // Wyświetl model

  // Jeśli chcesz zmienić teksturę na drugą grafikę, użyj np. conditionals lub zmiennych
  // W tym przypadku na przykład zmieniając teksturę na 'newImage2' po jakimś czasie
  texture(newImage2); // Nakłada drugą nową teksturę
  model(mario);       // Wyświetl model ponownie z drugą teksturą
}


