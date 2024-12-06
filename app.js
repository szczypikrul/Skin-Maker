// Scena
const scene = new THREE.Scene();

// Kamera
const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
camera.position.set(0, 1, 5); // Kamera ustawiona w kierunku modelu

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

// Testowy obiekt
const geometry = new THREE.BoxGeometry();
const material = new THREE.MeshStandardMaterial({ color: 0x00ff00 });
const cube = new THREE.Mesh(geometry, material);
scene.add(cube);

// Ładowanie modelu Steve'a
const loader = new THREE.GLTFLoader();
const textureLoader = new THREE.TextureLoader();
let steve;

loader.load(
    'https://cdn.discordapp.com/attachments/795996267620728905/1314706000716103741/model.gltf',
    function (gltf) {
        steve = gltf.scene;
        console.log('Model załadowany:', steve);
        scene.add(steve);

        // Dodanie tekstury bazowej
        const baseTexture = textureLoader.load('img/steve.png', () => {
            console.log('Tekstura załadowana');
        });

        steve.traverse((child) => {
            if (child.isMesh) {
                child.material.map = baseTexture;
            }
        });
    },
    undefined,
    (error) => console.error('Błąd ładowania modelu:', error)
);

// Funkcja animacji
function animate() {
    requestAnimationFrame(animate);
    renderer.render(scene, camera);
}
animate();
