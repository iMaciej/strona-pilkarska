const karty = document.querySelectorAll('.karta-zawodnika');

karty.forEach(function(karta) {
    karta.addEventListener('click', function() {
        const szczegoly = karta.querySelector('.szczegoly');
        if (szczegoly.style.display === 'block') {
            szczegoly.style.display = 'none';
        } else {
            szczegoly.style.display = 'block';
        }
    });
});

const dataMeczu = new Date('2026-09-15T18:00:00');

function aktualizujOdliczanie() {
    const teraz = new Date();
    const roznica = dataMeczu - teraz;

    if (roznica <= 0) {
        document.getElementById('odliczanie').textContent = 'Mecz już trwa lub się zakończył!';
        return;
    }

    const dni = Math.floor(roznica / (1000 * 60 * 60 * 24));
    const godziny = Math.floor((roznica % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minuty = Math.floor((roznica % (1000 * 60 * 60)) / (1000 * 60));
    const sekundy = Math.floor((roznica % (1000 * 60)) / 1000);

    document.getElementById('odliczanie').textContent =
        `${dni}d ${godziny}g ${minuty}m ${sekundy}s do meczu`;
}

aktualizujOdliczanie();
setInterval(aktualizujOdliczanie, 1000);