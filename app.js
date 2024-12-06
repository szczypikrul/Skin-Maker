// Scena
const scene = new THREE.Scene();

// Kamera
const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
camera.position.set(0, 1, 5);

// Renderer
const renderer = new THREE.WebGLRenderer();
renderer.setSize(window.innerWidth, window.innerHeight);
document.getElementById('container').appendChild(renderer.domElement);

// Oświetlenie
const light = new THREE.PointLight(0xffffff, 1, 100);
light.position.set(10, 10, 10);
scene.add(light);

const ambientLight = new THREE.AmbientLight(0xffffff, 0.5);
scene.add(ambientLight);

// Ładowanie modelu GLTF
const loader = new THREE.GLTFLoader();
const textureLoader = new THREE.TextureLoader();

loader.load(
    'model/model.gltf', // Ścieżka do modelu
    function (gltf) {
        const steve = gltf.scene;

        // Dodanie tekstury bazowej
        const baseTexture = textureLoader.load('img/steve.png', () => {
            console.log('Tekstura załadowana');
        });

        // Przejdź przez wszystkie elementy modelu i ustaw teksturę
        steve.traverse((child) => {
            if (child.isMesh) {
                child.material.map = baseTexture; // Przypisz teksturę
            }
        });

        scene.add(steve);
    },
    undefined,
    function (error) {
        console.error('Błąd ładowania modelu:', error);
    }
);

// Funkcja animacji
function animate() {
    requestAnimationFrame(animate);
    renderer.render(scene, camera);
}
animate();

// Obsługa zmiany rozmiaru okna
window.addEventListener('resize', () => {
    camera.aspect = window.innerWidth / window.innerHeight;
    camera.updateProjectionMatrix();
    renderer.setSize(window.innerWidth, window.innerHeight);
});
