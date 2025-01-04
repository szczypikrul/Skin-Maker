/* document.addEventListener('DOMContentLoaded', () => {
    const canvas = document.getElementById('canvas');
    const ctx = canvas.getContext('2d');

    // Funkcja do odświeżania podglądu
    const updateCanvas = () => {
        const list1Value = document.getElementById('list1').value;
        const list2Value = document.getElementById('list2').value;

        const img1 = new Image();
        const img2 = new Image();

        img1.src = list1Value;
        img2.src = list2Value;

        img1.onload = () => {
            // Wyczyść canvas
            ctx.clearRect(0, 0, canvas.width, canvas.height);
            // Narysuj pierwszy obraz
            ctx.drawImage(img1, 0, 0, canvas.width, canvas.height);

            img2.onload = () => {
                // Nałóż drugi obraz na pierwszy
                ctx.drawImage(img2, 0, 0, canvas.width, canvas.height);
            };
        };
    };

    // Obsługa zmiany wartości w polach <select>
    document.getElementById('list1').addEventListener('change', updateCanvas);
    document.getElementById('list2').addEventListener('change', updateCanvas);

    // Obsługa kliknięcia przycisku "Połącz grafiki"
    document.getElementById('combine').addEventListener('click', () => {
        // Połączenie grafik na canvasie jest już widoczne, wystarczy przygotować link do pobrania
        const downloadLink = document.getElementById('download');
        downloadLink.href = canvas.toDataURL('image/png');
        downloadLink.style.display = 'inline'; // Pokaż przycisk pobierania
    });

    // Zainicjuj podgląd na start
    updateCanvas();
});
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

