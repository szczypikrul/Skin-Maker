let mario;
let marioUV;

function preload() {
  // Ładujemy model i teksturę
  mario = loadModel('model/model.obj', true);
  marioUV = loadImage('img/steve.png');
}

function setup() {
  createCanvas(400, 400, WEBGL);

  // Uzyskaj dostęp do kontekstu WebGL
  const gl = this._renderer.GL;
  
  // Wyłącz interpolację tekstury
  const tex = canvas.getTexture(marioUV);
  gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_MIN_FILTER, gl.NEAREST);
  gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_MAG_FILTER, gl.NEAREST);
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
