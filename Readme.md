![Screenshot der finalen Anwendung](/docs/cover.png)

# Übungsaufgabe: Timetable

In dieser Übung implementieren Sie eine einfache Javascript-Anwendung, die es Studierenden der Medieninformatik erlaubt, einen persönlichen Stundenplan zu entwerfen. Die Nutzer können Kurse aus einer Liste verfügbarer Veranstaltungen auswählen. Selektierte Kurse werden in einem Stundenplan angezeigt. Beachten Sie bei der Bearbeitung der Aufgabe die Kommentare im vorgegebenen Quelltext und die Informationen aus der Übung.

**Die Aufgabe beschränkt sich auf die Implementierung der Programmlogik mit Javascript. Sie müssen keine Änderungen am vorgegebenen CSS-Dokument oder der HTML-Datei vornehmen. Erweitern Sie nur den bereits vorhanden Javascript-Code.**

![Screenshot der finalen Anwendung](/docs/screenshot-final-stage.png)

Bei Fragen zur Übungsaufgabe können Sie in das [GRIPS-Forum](https://elearning.uni-regensburg.de/mod/forum/view.php?id=731537) *posten* oder diese per Mail (mi.mme@mailman.uni-regensburg.de) stellen.

**Abgabetermin ist der 23. November 2016. Wir bewerten den letzten Commit, der an diesem Abgabetag in das Repository *gepusht* wird.** Informationen zur Nutzung von *Github* finden Sie in den Folien vom 26. Oktober bzw. 2. November. 

**Formatierung und Eslint:** Sie finden im Starterprojekt bereits Dateien mit Formatvorgaben für [JS-Beautify](https://github.com/beautify-web/js-beautify) bzw. Regeldateien für [ESLint](http://eslint.org/). In der ersten Aufgabe ist eine vollständige Validierung Ihres Codes gegen diese Dateien noch kein Bewertungskriterium. Es ist trotzdem ratsam, diese Vorgaben bereits jetzt zu verwenden. 

### Bewertungskriterien
Wir werden Ihre Abgabe hinsichtlich der folgenden Kriterien bewerten:
* Ist die Aufgabenstellung vollständig erfüllt worden?
* Ist die Aufgabe fehler- und bugfrei implementiert worden?
* Lässt sich eine ausreichend hohe Codequalität feststellen?
* Wurde (im Rahmen der Aufgabenstellung) auf eine gute Bedienbarkeit der Anwendung geachtet?

Sie müssen die Aufgabenstellung nicht erweitern. Es reicht völlig, wenn Sie die geforderten Anforderungen implementieren. Unabhängig davon können Sie gerne weitere Features, Verbesserungsvorschläge oder andere Inhalte ergänzen.
 
## Kurzbeschreibung
Die Anwendung Timetable hilft Studierenden der Medieninformatik bei der Erstellung eines persönlichen Stundenplans. Über eine Maske kann nach verfügbaren Kursen gesucht werden. Die Suchergebnisse werden in einer Liste dargestellt. Aus dieser Ergebnisliste kann der Nutzer einzelne Kurse auswählen. Ausgewählte Kurse werden in einem Stundenplan dargestellt.

![Screencast der finalen Anwendung](/docs/screencast-timetable.gif)

## Aufgabenstellung
Die im Folgenden beschriebenen Anforderungen müssen erfüllt werden, um die gestellte Aufgabe erfolgreich zu bestehen.
### Auswahl von Kursen
Der Nutzer hat die Möglichkeit, einzelne Kurse aus der Liste der vorhandenen Veranstaltungen auszuwählen, um diese im Stundenplan anzeigen zu lassen. Dazu steht ihm eine Suchmaske zur Verfügung. Sobald Text in der Maske eingegeben wird, werden in einer Ergebnisliste alle Kurse angezeigt, deren Titel - an beliebiger - Stelle den eingegebenen Suchbegriff enthalten. Groß- bzw. Kleinschreibung wird dabei nicht beachtet. Ist die Suchmaske leer, wird keine Ergebnisliste angezeigt.

**Vorgegebene Elemente und Styles**

* Suchmaske und Ergebnisliste sind Kindelemente des HTML-Elements mit der CSS-Klasse `course-list`
* Die Suchmaske wird über die CSS-Klasse `course-search-input` identifiziert
* Die Ergebnisliste wird als (unsortierte) Liste mit der CSS-Klasse `course-search-result-list` dargestellt
* Einzelne Einträge werden in der Ergebnisliste als deren Kindelemente dargestellt 
* Einzelne Einträge der Ergebnisliste bestehen aus einem `li`-Element (Listeneintrag), dessen `innerHTML`-Eigenschaft den jeweiligen Kurstitel enthält

### Darstellung der ausgewählten Kurse

Der eigentliche Stundenplan wird durch eine Reihen von Listen dargestellt. Für jeden Wochentag existiert eine separate Liste. Innerhalb dieser finden sich - neben dem Name des jeweiligen Wochentags - jeweils 12 Kindelemente. Diese Kindelemente repräsentieren einstündige Zeitslots von 8 Uhr bis (inklusive) 19 Uhr. Diese Slots werden zur Darstellung der ausgewählten Kurse verwendet. Jedes der Listenelemente verfügt über zwei weitere Kindelemente, in dem Titel oder Raum der jeweilige Veranstaltung eingetragen werden können. Bei zweistündigen Veranstaltungen wird im ersten Slot der Titel und im zweiten Slot der Raum eingetragen.

Ein Beispiel: *Der Kurs "Javascript" finde Montags von 8 bis 10 Uhr statt. In dem Stundenplan würde er in der Liste für den Wochentag "Montag" die ersten beiden Kindelemente für die Stunden 8 bzw. 9 einnehmen.*

Achtung: Es gibt Kurse, die wöchentlich an mehr als einem Termin stattfinden.

Gehen Sie bei der Darstellung des Stundenplans wie folgt vor:

1. Betrachten Sie für jeden ausgewählten Kurs die hinterlegten Zeitslots (siehe auch: *Bereitgestellter Datensatz*)
2. Wählen Sie anhand der Angaben zum Wochentag und zur Uhrzeit die HTML-Elemente aus, die im Stundenplan für die Darstellung der belegten Zeitslots benötigt werden
3. Tragen Sie an passender Stelle den Titel und den Raum des Kurses ein
4. Formatieren Sie die jeweiligen HTML-Elemente um die gewünschte Darstellung zu erreichen

Für jeden Kurs ist im Datensatz eine Farbe hinterlegt. In der vorgegebenen CSS-Datei existieren parallel dazu Klassen mit dem Präfix `color-`. Nutzen Sie diese Klassen, um die Veranstaltungsterminen der einzelnen Kurse im Stundenplan farblich unterschiedlich zu kennzeichnen.

**Vorgegebene Elemente und Styles**
* Der Stundenplan wird in dem HTML-Element mit der ID `timetable` dargestellt
* Für jeden Wochentag existiert eine List (`ul`) die über die CSS-Klasse `day-column` und das Attribut `data-day-of-week` eindeutig selektierbar ist
* Innerhalb der jeweiligen Tageslisten werden die Zeitslots durch `li`-Elemente dargestellt
* Freie Zeitslots sind mit der CSS-Klasse `day-column-empty` gekennzeichnet
* Belegte Zeitslots sind mit der CSS-Klasse `day-column-content` gekennzeichnet
* Der erste Zeitslot für jeden Veranstaltungstermin wird zusätzlich mit der CSS-Klasse `course-start` gekennzeichnet
* Der letzte Zeitslot für jeden Veranstaltungstermin wird zusätzlich mit der CSS-Klasse `course-end` gekennzeichnet
* Titel bzw. Raum für den Veranstaltungstermin können in den Kindelementen des `li`-Elements eingetragen werden (Titel: `course-title`, Raum: `course-room`)
* Verwenden Sie im Stundenplan den Kurztitel der Veranstaltung (`shortTitle`)
* Die Kursfarbe wird als zusätzliche CSS-Klasse auf der Ebene des `li`-Elements eingetragen

### MVC-Architektur

Verwenden Sie für die Implementierung der Anwendung die vorgegebene Modulstruktur. Achten Sie darauf, dass die bereits angelegten Module jeweils genau die Aufgaben erfüllen, die in den Quelltext-Kommentaren beschrieben werden. Achten Sie besonders darauf, das [MVC](https://de.wikipedia.org/wiki/Model_View_Controller)-Prinzip möglichst sauber und streng zu implementieren. In dieser Aufgabe sind die *Views* für die Darstellung und die *Controller* für die Interaktion zuständig. Im *Model* wird der aktuelle Zustand der Anwendung (Liste der vorhandenen und selektierten Kurse) gespeichert und manipuliert. Das zentrale Modul `Timetable` überwacht und steuert die übrigen Module.

### Kommunikation zwischen den Modulen

Verzichten Sie auf eine feste Verbindung der Module untereinander und sorgen Sie für eine möglichst unabhängige Arbeit der einzelnen Komponenten. Im besten Fall kennt nur das zentrale `Timetable`-Modul die übrigen Komponenten der Anwendung und vermittelt zwischen diesen. Verwenden Sie zur Kommunikation wichtiger Ereignisse (z.B. der Eingabe von Suchbegriffen oder die Auswahl von Kursen aus der Ergebnisliste) *Listener*-Strukturen bzw. im Vorfeld gespeicherte *Callbacks*. Versuchen Sie dazu vor der Implementierung Ihrer Lösung den vorgegebenen Code nachzuvollziehen und achten Sie dabei vor allem auf die in Grundzügen bereits implementierte Kommunikation zwischen `Timetable` und `SearchListController`. Generell gilt, alle übrigen Module kommunizieren nur mit dem zentralen `Timetable`-Modul.

## Bereitgestellter Datensatz

Verwenden Sie in der Anwendung die Kursliste, die in der [JSON](https://en.wikipedia.org/wiki/JSON)-formatierten Datei `courses.json` im Verzeichnis `resources/data`  abgespeichert ist. 

Die Kursliste wird beim Anwendungsstart über den Aufruf der Methode `MME.loadJSON` im `Timetable`-Modul asynchron geladen und steht als Parameter der `init`-Methode des selben Moduls zur Verfügung (Die Methode `init` wird als Callback an `loadJSON` übergeben!). Der Parameter enthält bereits die aus dem JSON-Format in ein Javascript-Objekt transformierte Kursliste. Dieses Objekt verfügt über mehrere Eigenschaften. Die eigentliche Liste der Kurse finden Sie als Array unter  `courses`. Das Objekt wird beim Anwendungsstart auf der Konsole des Browser ausgegeben. Nutzen Sie dies, um sich mit der Struktur des Datensatzes vertraut zu machen.

**Darstellung einer einzelnen Veranstaltung**

Jede Veranstaltung wird im JSON-Datensatz als einzelner Eintrag abgebildet. Für jeden Eintrag werden Titel, Kurztitel und Farbe angegeben. Die Eigenschaft `slots` stellt ein Array mit allen Zeitslots dar, die von diesem Kurs belegt werden. Dieses Array ist aufsteigend von Montag bis Freitag sortiert. Hängen zwei Einträge - wie im Beispiel - zeitlich direkt aneinander (hier: Stunde 12 und Stunde 13) so stellt dies einen zusammenhängenden Veranstaltungstermin dar. 

```json
{
        "title": "Objektorientierte Programmierung mit Java",
        "shortTitle": "OOP",
        "slots": [{
            "day": "tu",
            "hour": 12,
            "room": "H24"
        },
        {
            "day": "tu",
            "hour": 13,
            "room": "H24"
        }],
        "color": "green"
}