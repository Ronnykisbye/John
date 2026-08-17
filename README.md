# Maskinoverdragelse

Responsiv PWA til overdragelse af en produktionsmaskine mellem operatører.

## Funktioner
- Maskinnummer
- Maskinstatus: A/B/C
- Fejlbeskrivelse ved status B eller C
- Batch-valg
- Ordrenummer
- Start- og forventet sluttid
- Afgående og tilkommende operatør
- Validering af obligatoriske felter
- Lokal historik med de seneste 25 overdragelser
- Offline-understøttelse via service worker
- Installerbar PWA på PC, Android og understøttede iPhone/iPad-versioner

## Vigtigt om denne prototype
Data gemmes kun i browserens `localStorage` på den enkelte enhed. Det er egnet til prototype/demo, men ikke som valideret produktionssystem til GMP-reguleret lægemiddelproduktion uden yderligere krav til bl.a. adgangskontrol, audit trail, dataintegritet, central database, backup, elektroniske signaturer, change control og validering.

## GitHub Pages
Publicér repositoryets `main` branch fra roden (`/`) via GitHub Pages for at få en HTTPS-adresse, som PWA-installation og service worker kan bruge.