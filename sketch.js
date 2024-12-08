/*let mario;
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
}*/
let model3D;
let texture1, texture2;
let tex1, tex2;

function preload() {
  model3D = loadModel('model/model.obj', true);
  texture1 = loadImage('img/jaskiniowiec_skin.png');
  texture2 = loadImage('img/steve.png');
}

function setup() {
  createCanvas(400, 400, WEBGL);

  // Pobieramy tekstury i ustawiamy interpolację na NEAREST
  tex1 = createGraphics(texture1.width, texture1.height);
  tex1.image(texture1, 0, 0);
  
  tex2 = createGraphics(texture2.width, texture2.height);
  tex2.image(texture2, 0, 0);
  
  // Możesz połączyć obie tekstury na jednym obiekcie graficznym
  tex1.blend(tex2, 0, 0, texture2.width, texture2.height, 0, 0, texture1.width, texture1.height, ADD);
}

function draw() {
  background(200);
  orbitControl();

  // Renderujemy model z nałożonymi teksturami
  texture(tex1); // Łączona tekstura
  model(model3D);
}

