# Frontend data

![De applicatie](https://github.com/rbntimes/frontend-data/wiki/static/waar-ben-ik.png)
De applicatie

![Vergelijken](https://github.com/rbntimes/frontend-data/wiki/static/comparing.png)
Het scoren

## Mijn concept

Dit concept is gebaseerd op een talk van [Bert Spaan](https://github.com/bertspaan) en zijn versie van [Waar ben ik](bertspaan.nl/waar-ben-ik).

Het idee van de app is dat je als gebruiker 1 foto uit de meer dan 100.000 foto's uit de database van het Nationaal Museum van Volkenkunde krijgt.

Elke foto wordt voorzien van coordinaten. Zo is de foto dus eigenlijk een plek op de map, en is het aan de gebruiker de vraag waar op de map dit is. Hoe dicht bij kom jij?

![Afghanistan](https://github.com/rbntimes/frontend-data/wiki/static/afghanistan.png)

## De API

De app werkt met 2 API's.

1. De NMVW database

Deze database wordt bij binnenkomst van de app en bij het verversen hiervan aangsproken. De database geeft bij elke aanvraag een random land met daarbinnen een random foto terug met coordinaten.

![Lijst](https://github.com/rbntimes/frontend-data/wiki/static/lijst.png)

2. Mijn `glitch` server

In mijn eigen glitch server sla ik alle user entries op. Zo weet ik het unieke id van de foto, de afstand die de gebruiker ernaast zat en de coordinaten van de gebruikers muisklik! Deze gebruik ik in de leaderboards:

![Leaderboard](https://github.com/rbntimes/frontend-data/wiki/static/leaderboard.png)

## De app gebruiken/installeren

De app is simpel te installeren en te gebruiken. De app is wel afhankelijk van het Nationaal Museum van Volkenkunde, wanneer zij de API op slot zetten zal hij niet meer werken lokaal.

Je zult [hier](https://robin.amsterdam/projects/2) een live applicatie vinden die wel zou moeten blijven bestaan!

### Using the app: (In english)

Clone the repo

```bash
git clone https://github.com/rbntimes/frontend-data.git
```

Enter the directory

```bash
cd frontend-data
```

Install the needed packages:

```bash
yarn # (or npm i)
```

Build the application:

```bash
yarn build # (or npm run build)
```

Run it:

```bash
yarn start # (or npm run start)
```

### Contributing to the app:

First fork the Repo in github

Then:

```bash
git clone https://github.com/[your handle here]/frontend-data.git
```

Enter the directory

```bash
cd frontend-data
```

Install the needed packages:

```bash
yarn # (or npm i)
```

Build the application:

```bash
yarn build # (or npm run build)
```

Run it in development mode:

```bash
yarn dev # (or npm run dev)
```

In development mode you can write your changes and contribute to the app.

Once you are happy with the contribution commit it and create an pull-request! I will review it when i have the time!

If you change something fundimentally be sure to see if the [wiki](https://github.com/rbntimes/frontend-data/wiki) needs changing!

## Packages

De applicatie is gemaakt in [nextjs](https://nextjs.org/). Hiermee maak je serverside-rendered [react](https://reactjs.org/) applicaties. De reden dat ik hiervoor heb gekozen is omdat ik het fijn vindt werken, maar ook benieuwd was hoe goed het met [d3](https://d3js.org/) zou werken.

[D3](https://d3js.org/) natuurlijk om de mappen en de grafiek te maken. Om deze app zo goed mogelijk met d3 te laten werken heb ik ervoor gekozen om basis React praktijken zoals state achterwegen te laten. Hierdoor is D3 echt in controle en werkt het naar behoren!

Verdere packages staan beschreven als ik ze gebruikt heb in de wiki.

## De data

Deze app werkt met data van het Nationaal Museum van Volkenkunde.

Zij hebben een database tot onze beschikking gesteld met haar gehele collectie. Ik query deze data op hetvolgende:

1. Ik wil alle foto objecten in de database
2. Grouppeer deze per land
3. Kies per land een random foto object uit

![Lijst](https://github.com/rbntimes/frontend-data/wiki/static/lijst.png)

4. En kies vervolgens van deze lijst 1 object

Wat je dan terug kan krijgen is hetvolgende:

```json
{
  "cho": {
    "type": "uri",
    "value": "https://hdl.handle.net/20.500.11840/1222190"
  },
  "img": {
    "type": "literal",
    "value": "http://collectie.wereldculturen.nl/cc/imageproxy.a…=17581&filename=images/Images/TM//tm-20044238.jpg"
  },
  "lat": { "type": "literal", "value": "31.61332" },
  "long": { "type": "literal", "value": "65.71013" },
  "landLabel": { "type": "literal", "value": "Afghanistan" }
}
```

Dit object is altijd random en zo kun je zo vaak als je wilt proberen jouw wereldkennis te testen!

In de wiki leg ik uit hoe ik dit doe en waarom!

## Wat heb ik geleerd

Ik heb enorm veel geleerd van dit project.

Een allereerste shoutout naar [Bert Spaan](https://github.com/bertspaan), mijn app is grotendeels gebaseerd op [Waar ben ik](bertspaan.nl/waar-ben-ik) wat hij heeft gedemo'd. Verder heb ik de vondst van [Glitch](https://github.com/rbntimes/frontend-data/wiki/Glitch) aan hem te danken. Dit heeft de app een stuk dinamischer gemaakt en gezorgt voor het hele leaderboard onderdeel.

![Leaderboard](https://github.com/rbntimes/frontend-data/wiki/static/comparing.png)

Verder een shoutout naar [Ivo Zandhuis](https://github.com/ivozandhuis). Sparql was voor mij helemaal nieuw en aan het begin voelde het ook onbegrijpbaar. Wel heeft hij mij via `slack` uit de brand geholpen en mijn query zo weten te tweaken dat het uiteindelijk speelbaar was. Zonder hem had je altijd in Indonesië kunnen gokkenen zat je vaak heel dichtbij [Lees hier waarom](https://github.com/rbntimes/frontend-data/wiki/The-data).

Special thanks to [Laurens](https://github.com/Razpudding) voor het helpen met de opdracht.
