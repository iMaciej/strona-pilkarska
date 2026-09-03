const zawodnicy = 
{
    marek: 
    {
        imie: "Marek Nowicki",
        pozycja: "Bramkarz",
        opis: "Kapitan drużyny od 5 lat, filar defensywy Lechii.",
        mecze: 142,
        statystyka: "Czyste konta: 38",
        zdjecie: "zdjecia/marek.svg",
        historia: "Marek gra w klubie od juniora - to właśnie w Grodzisku stawiał pierwsze piłkarskie kroki. Znany z refleksu i pewności między słupkami, w 2023 roku został kapitanem drużyny."
    },
    piotr: 
    {
        imie: "Piotr Wiśniewski",
        pozycja: "Obrońca",
        opis: "Wychowanek klubu, filar linii obrony.",
        mecze: 98,
        statystyka: "Kartki żółte: 6",
        zdjecie: "zdjecia/piotr.svg",
        historia: "Piotr dołączył do akademii Lechii jako 10-latek i przeszedł wszystkie szczeble juniorskie. Ceniony za czysta grę i skuteczność w powietrzu."
    },
    adam: 
    {
        imie: "Adam Kowalczyk",
        pozycja: "Pomocnik",
        opis: "Najlepszy strzelec sezonu, motor napędowy drużyny.",
        mecze: 76,
        statystyka: "Gole: 21",
        zdjecie: "zdjecia/adam.svg",
        historia: "Adam dołączył do klubu trzy sezony temu z sąsiedniej drużyny i szybko stał się kluczowym zawodnikiem. Jego uderzenie z dystansu to wizytówka drużyny."
    },
    tomasz: 
    {
        imie: "Tomasz Zieliński",
        pozycja: "Napastnik",
        opis: "Dołączył w tym roku, najmłodszy zawodnik kadry.",
        mecze: 12,
        statystyka: "Gole: 5",
        zdjecie: "zdjecia/tomasz.svg",
        historia: "Tomasz to najnowsze wzmocnienie klubu - trafił do Lechii latem tego roku. Szybko zdobył zaufanie trenera dzięki szybkości i instynktowi strzeleckiemu."
    }
};
const listaKadry = document.getElementById('lista-kadry');

if (listaKadry) {
    for (const id in zawodnicy) {
        const z = zawodnicy[id];

        const li = document.createElement('li');
        li.className = 'karta-zawodnika';

        li.innerHTML = `
            <img src="${z.zdjecie}" alt="${z.imie}" class="zdjecie-zawodnika">
            <strong>${z.imie}</strong>
            <p>${z.pozycja} - ${z.opis}</p>
            <p class="szczegoly">Liczba meczów: ${z.mecze} | ${z.statystyka}</p>
            <a href="zawodnik.html?id=${id}" class="link-profilu">Zobacz profil →</a>
        `;

        li.addEventListener('click', function(event) {
            if (event.target.tagName === 'A') {
                return;
            }
            const szczegoly = li.querySelector('.szczegoly');
            szczegoly.style.display = szczegoly.style.display === 'block' ? 'none' : 'block';
        });

        listaKadry.appendChild(li);
    }
}

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

const kontenerProfilu = document.getElementById('profil-zawodnika');

if (kontenerProfilu) {
    const parametry = new URLSearchParams(window.location.search);
    const id = parametry.get('id');
    const z = zawodnicy[id];

    if (z) {
        kontenerProfilu.innerHTML = `
            <img src="${z.zdjecie}" alt="${z.imie}" class="zdjecie-profilu">
            <h2>${z.imie}</h2>
            <p class="pozycja-profilu">${z.pozycja}</p>
            <p>${z.historia}</p>
            <ul class="statystyki-profilu">
                <li>Liczba meczów: ${z.mecze}</li>
                <li>${z.statystyka}</li>
            </ul>
            <p><a href="kadra.html">← Wróć do kadry</a></p>
        `;
    } else {
        kontenerProfilu.innerHTML = `
            <p>Nie znaleziono takiego zawodnika.</p>
            <p><a href="kadra.html">← Wróć do kadry</a></p>
        `;
    }
}