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
document.addEventListener('DOMContentLoaded', () => {
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
            ctx.clearRect(0, 0, canvas.width, canvas.height);
            ctx.drawImage(img1, 0, 0, canvas.width, canvas.height);

            img2.onload = () => {
                ctx.drawImage(img2, 0, 0, canvas.width, canvas.height);
            };
        };
    };

    document.getElementById('list1').addEventListener('change', updateCanvas);
    document.getElementById('list2').addEventListener('change', updateCanvas);

    document.getElementById('combine').addEventListener('click', () => {
        const downloadLink = document.getElementById('download');
        downloadLink.href = canvas.toDataURL('image/png');
        downloadLink.style.display = 'inline';
    });

