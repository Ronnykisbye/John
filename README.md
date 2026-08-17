# Machine Handover

Professionel demo/PWA til struktureret overdragelse af en kostbar produktionsmaskine mellem operatører i en medicin-/pharma-lignende produktion.

Live demo: `https://ronnykisbye.github.io/John/`

## Formål
Når en operatørs arbejdsdag eller vagt slutter, skal maskinens aktuelle status kunne overdrages tydeligt til den næste operatør. Demoen viser, hvordan en enkel digital overdragelsesproces kan se ud på PC, iPhone, iPad og Android.

## Aktuelle funktioner
- Dato, automatisk sat til dags dato
- Maskinnummer
- Maskinstatus via dropdown:
  - A. Kørt perfekt
  - B. Kørt, men med fejl
  - C. Har en fejl – tekniker tilkaldt
- Fejl-/observationsfelt vises automatisk ved status B eller C
- Batch-valg: Batch 0001–0005
- Nuværende ordrenummer
- Ordre startet kl.
- Ordre forventes færdig kl.
- Afgående operatør
- Tilkommende operatør
- Operatørliste inkl. John Frimann
- Kontrol af at afgående og tilkommende operatør ikke er samme person
- Lokal historik med de seneste 25 overdragelser
- A/B/C-statusfarver i historikken
- Automatisk dato- og tidsregistrering
- Live ur
- Lys/mørk tilstand
- Professionelt pharma/medico-inspireret UI
- Diskret 3D-effekt på knapper og alle formularfelter
- Responsivt mobil-layout
- Offline-understøttelse via service worker
- Installerbar PWA
- Indbygget installationsvejledning til iPhone/iPad, Android og PC

## Mobil-layout
Ved skærmbredder under 720 px skifter formularen automatisk til én kolonne. Felterne står derfor efter hinanden i naturlig rækkefølge:

1. Dato
2. Maskinnummer
3. Hvordan har maskinen kørt?
4. Fejl/observationer, kun ved B eller C
5. Batch
6. Nuværende ordre
7. Ordre startet kl.
8. Ordre forventes færdig kl.
9. Afgående operatør
10. Tilkommende operatør

Selve hovedflowet er fortsat mærket som 9 kontrolpunkter, fordi fejlbeskrivelsen er et betinget underpunkt til maskinstatus.

## Installation
### iPhone / iPad
1. Åbn demoen i Safari.
2. Tryk på Del-knappen.
3. Vælg **Føj til hjemmeskærm**.
4. Tryk **Tilføj**.

### Android
1. Åbn demoen i Chrome.
2. Tryk på menuen med tre prikker.
3. Vælg **Installer app** eller **Føj til startskærm**.
4. Godkend installationen.

### PC
1. Åbn demoen i Edge eller Chrome.
2. Brug installationsikonet i adresselinjen eller browsermenuen.
3. Vælg **Installer**.
4. Appen kan derefter åbnes i sit eget vindue.

## Teknologi
- HTML5
- CSS3
- Vanilla JavaScript
- Web App Manifest
- Service Worker
- LocalStorage
- GitHub Pages

## Filstruktur
- `index.html` – brugerflade og formular
- `styles.css` – layout, light/dark mode, responsive design og 3D-effekter
- `app.js` – formularlogik, validering, historik, tema og PWA-installation
- `manifest.webmanifest` – PWA-oplysninger
- `sw.js` – offline-cache/service worker
- `icon.svg` – app-ikon
- `README.md` – projektbeskrivelse og masterprompt

## Vigtigt om denne demo
Data gemmes kun i browserens `localStorage` på den enkelte enhed. Appen er en prototype/demo og **ikke** et valideret produktionssystem til GMP-reguleret lægemiddelproduktion.

En reel produktionsversion vil typisk kræve yderligere krav til bl.a.:
- central database
- brugerlogin og roller
- adgangskontrol
- audit trail
- dataintegritet
- elektroniske signaturer
- backup og restore
- versionsstyring/change control
- validering og dokumentation
- evt. integration til MES/ERP/SCADA eller andet produktionssystem

---

# MASTERPROMPT – MACHINE HANDOVER

Brug nedenstående prompt, hvis projektet skal fortsættes i en ny ChatGPT-session.

```text
Du skal fortsætte udviklingen af GitHub-projektet Machine Handover.

Repository:
https://github.com/Ronnykisbye/John

Live GitHub Pages:
https://ronnykisbye.github.io/John/

PROJEKTETS FORMÅL
Machine Handover er en professionel demo/PWA til overdragelse af en kostbar produktionsmaskine mellem to operatører i en medicin-/pharma-lignende produktion. Det er en demo og ikke et valideret GMP-produktionssystem.

DESIGN
Appen skal se professionel, moderne og troværdig ud som software fra medicin-/pharmabranchen.
Brug et rent kontrolrums-/produktionslook med blå/grønne toner, tydelige statussignaler og god læsbarhed.
Den må ikke ligne et spil eller et legetøj.
Der må gerne bruges diskrete 3D-effekter på felter og knapper.
Appen skal have både Light Mode og Dark Mode.
Designet skal fungere på PC, iPhone, iPad og Android.

MOBIL
På mobil skal alle formularfelter stå i én kolonne og i naturlig arbejdsrækkefølge.
Ingen felter må hoppe rundt eller stå i en ulogisk rækkefølge.
Store trykflader og god læsbarhed prioriteres.

NUVÆRENDE FORMULAR
1. Dato – automatisk dags dato, men kan ændres.
2. Maskinnummer – tekstfelt.
3. Hvordan har maskinen kørt? – dropdown:
   A. Kørt perfekt
   B. Kørt, men med fejl
   C. Har en fejl – tekniker tilkaldt

Hvis B eller C vælges, vises et obligatorisk tekstfelt til fejl/observationer.

4. Er i gang med batch – dropdown med Batch 0001–0005.
5. Nuværende ordre – tekstfelt, fx ORD-123456-A.
6. Ordre startet kl. – tidsfelt.
7. Ordre forventes færdig kl. – tidsfelt.
8. Afgående operatør – dropdown.
9. Tilkommende operatør – dropdown.

OPERATØRER
Anna Jensen
Brian Nielsen
Camilla Sørensen
Daniel Hansen
Eva Madsen
Frederik Larsen
John Frimann

Afgående og tilkommende operatør må ikke være samme person.

HISTORIK
Gem de seneste 25 overdragelser lokalt i browserens localStorage.
Vis maskine, ordre, batch, dato, start/sluttid, operatørskifte og eventuelle fejl.
A-status skal fremstå grøn, B-status gul/orange og C-status rød.

PWA
Appen skal fortsat være en installerbar Progressive Web App.
Den skal kunne bruges offline efter installation/cache.
Der skal være installationsvejledning til:
- iPhone/iPad via Safari → Del → Føj til hjemmeskærm
- Android via Chrome → Installer app/Føj til startskærm
- PC via Edge/Chrome → Installer

Når filer ændres, skal service-workerens cache-version opdateres, så gamle versioner ikke hænger fast.

GITHUB
Arbejd direkte i repositoryet, når GitHub-værktøjerne er tilgængelige.
Push ændringer til main, da GitHub Pages publicerer fra main-roden.
Kontrollér efter større ændringer, at GitHub Pages stadig bygger korrekt.

KODEPRINCIPPER
Hold løsningen enkel og uden frameworks, medmindre der senere er en god grund til andet.
Brug separate filer efter funktion:
- index.html
- styles.css
- app.js
- manifest.webmanifest
- sw.js
- icon.svg
- README.md

Bevar eksisterende funktionalitet, når der tilføjes nye funktioner.
Kvalitetssikr responsivt design, Light/Dark Mode og PWA-funktion efter ændringer.

DEMOGRÆNSE
Appen må ikke fremstilles som GMP-valideret eller egnet til reel medicinproduktion uden yderligere sikkerhed, validering, audit trail, adgangskontrol, database, elektroniske signaturer og øvrige regulatoriske krav.

ARBEJDSMÅDE
Fortsæt så meget som muligt uden hele tiden at spørge om godkendelse.
Kom gerne med professionelle og praktiske forbedringsforslag, hvis de passer til appens formål.
Bevar et enkelt og intuitivt brugerflow.
```

## Status
README og masterprompt skal holdes opdateret, når projektets funktioner eller arkitektur ændres væsentligt.
