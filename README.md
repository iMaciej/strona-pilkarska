# ⚽ KS Lechia Grodzisk — strona klubu piłkarskiego

Pełnostackowa aplikacja webowa dla fikcyjnego klubu piłkarskiego: statyczny frontend połączony z własnym backendem REST API i bazą danych w chmurze.

**🔗 Live demo:** [imaciej.github.io/strona-pilkarska](https://imaciej.github.io/strona-pilkarska/)
**🔗 Backend API:** [strona-pilkarska-backend.onrender.com](https://strona-pilkarska-backend.onrender.com)

> Backend hostowany na darmowym planie Render — pierwsze żądanie po dłuższej przerwie może potrwać do minuty (serwer "budzi się" ze stanu uśpienia).

---

## O projekcie

Projekt zbudowany od podstaw jako nauka pełnego cyklu tworzenia aplikacji webowej — od statycznego HTML po działający backend z uwierzytelnianiem i bazą danych. Każda funkcja została wdrożona świadomie, jedna na raz, z naciskiem na zrozumienie *dlaczego* dane rozwiązanie działa, a nie tylko *że* działa.

## Funkcje

- **6 połączonych podstron** ze wspólną nawigacją i podświetlaniem aktywnej strony
- **Responsywny design** — Flexbox, CSS Grid, media queries (RWD)
- **Dynamiczna kadra zawodników** — karty generowane z danych, filtrowanie po pozycji, indywidualne profile (routing przez parametry URL)
- **Formularz kontaktowy** zapisujący wiadomości trwale w bazie danych
- **Dynamiczny terminarz meczów** — dane pobierane z API, sortowalna tabela
- **Panel administracyjny** chroniony logowaniem (JWT) do przeglądania wiadomości z formularza
- **Animacje przy przewijaniu** (IntersectionObserver)

## Stack technologiczny

| Warstwa | Technologie |
|---|---|
| Frontend | HTML5, CSS3 (Flexbox, Grid), JavaScript (Vanilla, fetch API) |
| Backend | Node.js, Express |
| Baza danych | MongoDB Atlas |
| Uwierzytelnianie | JWT (JSON Web Token) |
| Hosting | GitHub Pages (frontend), Render (backend) |
| Narzędzia | Git / GitHub |

## Architektura

```
Przeglądarka  →  Frontend (GitHub Pages)  →  Backend / API (Render)  →  MongoDB Atlas
```

Frontend to statyczne pliki bez własnego serwera. Cała logika biznesowa (zapis wiadomości, logowanie, odczyt terminarza) żyje w osobnym repozytorium backendu i komunikuje się z frontendem przez REST API zabezpieczone CORS i, w przypadku panelu admina, tokenem JWT.

## Struktura repozytorium

```
├── index.html          strona główna
├── mecze.html           terminarz meczów (dane z API)
├── kadra.html            kadra zawodników + filtr pozycji
├── zawodnik.html        szablon profilu (routing przez ?id=)
├── galeria.html          galeria zdjęć
├── kontakt.html         formularz kontaktowy
├── login.html            logowanie do panelu admina
├── admin.html            panel administracyjny (chroniony JWT)
├── style.css              wszystkie style
├── script.js              cała logika frontendu
└── zdjecia/                grafiki SVG (herb, awatary, galeria)
```

Backend (osobne repozytorium [strona-pilkarska-backend](https://github.com/iMaciej/strona-pilkarska-backend)):

```
├── server.js            serwer Express, endpointy API, middleware JWT
├── wgraj-mecze.js      jednorazowy skrypt do zasilania bazy danymi
└── .env.example         wzór zmiennych środowiskowych (bez sekretów)
```

## Uruchomienie lokalnie

**Frontend** — wystarczy otworzyć dowolny plik `.html` bezpośrednio w przeglądarce.

**Backend:**
```bash
git clone https://github.com/iMaciej/strona-pilkarska-backend.git
cd strona-pilkarska-backend
npm install
cp .env.example .env   # i uzupełnij własnymi danymi (MongoDB, hasło admina, JWT secret)
node server.js
```

## Czego się nauczyłem, budując ten projekt

- Semantycznego HTML i responsywnego CSS (Flexbox vs. Grid — kiedy które)
- Manipulacji DOM i obsługi zdarzeń w czystym JavaScript
- Budowy REST API w Express (GET/POST, middleware, kody statusu HTTP)
- Pracy z bazą danych NoSQL (MongoDB) i operacjami asynchronicznymi (`async`/`await`)
- Uwierzytelniania opartego o JWT
- Bezpiecznego zarządzania sekretami (zmienne środowiskowe, `.gitignore`)
- Wdrażania aplikacji (GitHub Pages, Render) i debugowania środowiska produkcyjnego

## Autor

Maciej — [GitHub: @iMaciej](https://github.com/iMaciej)

*Projekt stworzony w celach edukacyjnych — nazwa klubu i dane zawodników są fikcyjne.*
