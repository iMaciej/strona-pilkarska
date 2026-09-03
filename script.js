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
    const elementOdliczania = document.getElementById('odliczanie');
    if (!elementOdliczania) {
        return;
    }

    const teraz = new Date();
    const roznica = dataMeczu - teraz;

    if (roznica <= 0) {
        elementOdliczania.textContent = 'Mecz już trwa lub się zakończył!';
        return;
    }

    const dni = Math.floor(roznica / (1000 * 60 * 60 * 24));
    const godziny = Math.floor((roznica % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minuty = Math.floor((roznica % (1000 * 60 * 60)) / (1000 * 60));
    const sekundy = Math.floor((roznica % (1000 * 60)) / 1000);

    elementOdliczania.textContent =
        `${dni}d ${godziny}g ${minuty}m ${sekundy}s do meczu`;
}

aktualizujOdliczanie();
setInterval(aktualizujOdliczanie, 1000);

const linki = document.querySelectorAll('nav a');
const aktualnaStrona = window.location.pathname.split('/').pop();

linki.forEach(function(link) {
    if (link.getAttribute('href') === aktualnaStrona) {
        link.classList.add('aktywny');
    }
});

const formularz = document.getElementById('formularz-kontaktowy');

if (formularz) {
    formularz.addEventListener('submit', function(event) {
        event.preventDefault();

        const potwierdzenie = document.getElementById('potwierdzenie');
        potwierdzenie.classList.remove('ukryty');
        potwierdzenie.classList.add('pokazany');

        formularz.reset();
    });
}