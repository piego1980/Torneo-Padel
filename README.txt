TORNEO PADEL - PWA

File principali:
- index.html
- manifest.json
- service-worker.js
- icons/

Per installarla su iPhone:
1. Pubblica l'intera cartella su un hosting HTTPS (GitHub Pages, Netlify, Cloudflare Pages, ecc.).
2. Apri l'URL con Safari su iPhone.
3. Tocca Condividi > Aggiungi alla schermata Home.
4. Assicurati che sia attiva l'opzione per aprirla come app, quindi Aggiungi.
5. Aprila una prima volta con connessione internet; da quel momento l'app shell funziona anche offline.

Nota: dati, squadre, risultati e storico vengono salvati nel localStorage del browser sul dispositivo.

ACCESSO CON PASSWORD
- L'app ora usa un gate locale con confronto SHA-256.
- La password NON e' memorizzata in chiaro dentro index.html.
- Dopo il primo accesso il dispositivo resta autenticato finche' non premi il lucchetto in alto.
- IMPORTANTE: e' una protezione client-side. Non sostituisce autenticazione server-side e il codice resta pubblico se ospitato su GitHub Pages.
