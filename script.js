document.addEventListener('DOMContentLoaded', () => {
    document.getElementById('combine').addEventListener('click', () => {
        const canvas = document.getElementById('canvas');
        const ctx = canvas.getContext('2d');

        // Pobierz wartości z list
        const list1Value = document.getElementById('list1').value;
        const list2Value = document.getElementById('list2').value;

        // Załaduj obrazy
        const img1 = new Image();
        const img2 = new Image();

        img1.src = list1Value;
        img2.src = list2Value;

        img1.onload = () => {
            ctx.clearRect(0, 0, canvas.width, canvas.height); // Wyczyść canvas
            ctx.drawImage(img1, 0, 0, canvas.width / 2, canvas.height); // Pierwsza połowa
            img2.onload = () => {
                ctx.drawImage(img2, canvas.width / 2, 0, canvas.width / 2, canvas.height); // Druga połowa

                // Ustawienie linku do pobrania
                const downloadLink = document.getElementById('download');
                downloadLink.href = canvas.toDataURL('image/png');
                downloadLink.style.display = 'inline'; // Pokaż przycisk pobierania
            };
        };
    });
});
