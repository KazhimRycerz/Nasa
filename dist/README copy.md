# API-NASA

https://api.nasa.gov/

## Was ist die NASA API?
Das Ziel dieser Seite ist es, NASA-Daten, einschließlich Bilder, zugänglich zu machen.
 
## API Schlüssel?
Zum Ausprobieren braucht man keinen API Schlüssel.

Allerdings gibt es ein Ratenlimit.

Ein Schlüssel lässt sich auf der Seite sehr einfach generieren.

## Aufgabenstellung
Setze dich mit der ersten NASA-API **APOD** auseinander.

_Was ist ein Astronomiebild?_

_Funktioniert der Beispielaufruf `https://api.nasa.gov/planetary/apod?api_key=DEMO_KEY` im Browser_?

_Welche Daten kann ich sehen?_

_Welche Abfrageparameter stehen mir zur Verfügung?_

## Programmieraufgabe - Teil 1
Schreibe in JavaScript eine API-Abfrage mit `fetch`

Prüfe mit `console.log`, ob du Daten von der NASA erhalten hast.

Finde eine Möglichkeit, aus der Antwort nur die URL des Bildes **url** oder **hdurl** in einer Konstanten zu speichern.

## Programmieraufgabe - Teil 2
Mit der _URL_ des Astronomiebildes kannst du in HTML ein `<img>`-Bild generieren. Die `src` bekommt die URL übergeben. Theoretisch solltest du jetzt das Bild anzeigen können.

Ergänze als Nächstes deine Homepage mit den übrigen Daten der NASA-Antwort.
Deine Seite sollte eine `explanation`, einen `titel` und ein `date`anzeigen.

## Programmieraufgabe - Teil 3
Style deine Seite mit CSS.

Ein Beispiel ohne Styling findest du hier: https://fbw-w21-d03.github.io/NASA-APOD/
