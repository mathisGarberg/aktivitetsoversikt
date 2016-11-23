# Webbasert aktivitetsoversikt

Prosjektet består av en server del og en klient del. På kleintsiden brukes Vue.js og på serversiden brukes Express.js

## Oppsett
* Klon prosjektet
* Kjør `npm install`
* Opprett en database.json i samme mappe som denne README-filen

Husk å kjøre `npm install` etter at du har kjørt `git pull`. Det kan hende
at nye avhengigheter er blitt lagt til.

## `database.json` struktur
```json
{
    "host": "localhost",
    "user": "root",
    "password": "",
    "database": "aktivitetsoversikt"
}
```

## Utvikling
For å kjøre prosjektet kreves det at man kjører to forskjellige kommandoer parallelt.
<br>
`npm start`
<br>
`npm run debug`
<br>
Prosjektet serveres på port 3001 (gjennom en proxy til port 3000). Webpack vil automatisk refreshe
nettleseren når du endrer filene og lagrer dem, så det er ikke nødvendig å refreshe nettleseren
manuelt.

## Admin bruker
Brukernavn: admin
Passord: fotball
