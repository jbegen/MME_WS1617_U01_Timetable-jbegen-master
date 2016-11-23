/* eslint-env browser */
/* global MME */

/*
 * Timetable
 *
 * Dieses Modul stellt die zentrale Schnittstelle der Anwendung dar.
 * Aus der HTML-Datei heraus wird die start-Methode aufgerufen. In dieser Methode
 * wird die Kursliste über eine bereitgestellte Methode der MME-Hilfsbibliothek bezogen.
 * Sobald diese Daten vorhanden sind, werden die weiteren Module der Anwendung geladen.
 * Das Modul Timetable steuert die Kommunikation zwischen den übrigen Modulen.
 */

var Timetable = function() {
  "use strict";

  var that = {},
    searchController,
    searchResultView,
    timetableView,
    model;

  /* 
   * Callback, der an den SearchController übergeben wird
   * Diese Methode soll aufgerufen werden, wenn der Nutzer eine Suchanfrage
   * im Suchfenster eingegeben hat.
   */
  function onSearchInputChanged(query) {
    searchResultView.clearList();
    var rlist = document.createElement('ul');
    rlist.setAttribute("class", "course-search-result-list");
    var courses1 = model.getCourseList();
    for (var i = courses1.length - 1; i >= 0; i--) {
        var title1 = courses1[i].title;
        if(title1.toLowerCase().trim().match(query.toLowerCase())&&query!=""&&query!=" "){
          var item = document.createElement('li');
          item.setAttribute("class", "course-search-result-entry")
          item.appendChild(document.createTextNode(title1));
          rlist.appendChild(item);
        }
    }

    searchResultView.renderList(rlist);

    
  }

  /* 
   * Callback, der an den SearchController übergeben wird
   * Diese Methode soll aufgerufen werden, wenn der Nutzer die aktuelle Suchanfrage
   * aus dem Suchfenster gelöscht hat.
   */
  function onSearchInputCleared() {
  }

  /*
   * Callback, der an den SearchController übergeben wird 
   * Diese Methode soll aufgerufen werden, wenn der Nutzer einen Eintrag der
   * Ergebnisliste selektiert hat.
   */
  function onSearchResultSelected(title) {
    var courses1 = model.getCourseList();
    var selectedCourses = new Array();
    for (var i = courses1.length - 1; i >= 0; i--) {
        var title1 = courses1[i].title;
        if(title1.match(title)){
          selectedCourses.push(courses1[i]);
        }
    }
    timetableView.render(selectedCourses);
    searchResultView.clearList();
  }

  function init(data) {
    /* 
     * Selektion der HTML-Elemente, die von der Anwendung verwendet werden 
     */ 
    var searchInput = document.querySelector(".course-search-input"),
      searchOutput = document.querySelector(".course-search-result-list"),
      timetable = document.querySelector(".timetable");

    /*
     * Debug-Ausgabe: Vor Abgabe bitte entfernen.
     * Ausgabe der Kursliste auf der Konsole.
     */
    console.log(data);

    /* 
     * Initalisierung des Models mit der geladenen Kursliste 
     */
    model = new Timetable.Model();
    model.setCourseList(data.courses);


    /*
     * Initialisierung des SearchControllers
     * Übergeben werden Referenzen auf diejenigen HTML-Elemente, die vom Controller
     * verwaltet werden (Suchmaske und Ergebnisliste).
     */
    searchController = new Timetable.SearchListController(searchInput,
      searchOutput);
    searchController.init();

    /*
     * Setzen von Listener- bzw. Callback-Methoden. 
     * Die Kommunikation zwischen Controller und diesem Modul (Timetable) wird
     * über Listener realisiert:
     *  - Timetable übergibt Referenzen auf hier notierte Methoden als Callbacks an den Controller
     *  - Die Referenzen werden im Controller gespeichert
     *  - Wenn nötig nutzt der Controller diese Referenzen um das Modul Timetable über bestimmte
     *    Ereignisse zu informieren. 
     */
    searchController.setSearchInputClearedListener(onSearchInputCleared);
    searchController.setSearchInputChangedListener(onSearchInputChanged);
    searchController.setSearchResultSelectedListener(onSearchResultSelected);

    /* 
     * Initialisierung des SearchListView
     * Übergeben werden Referenzen auf diejenigen HTML-Elemente, die vom View
     * verwaltet werden (Ergebnisliste).
     */
    searchResultView = new Timetable.SearchListView(searchOutput);

     /* 
     * Initialisierung des TimetableViews
    * Übergeben werden Referenzen auf diejenigen HTML-Elemente, die vom View
     * verwaltet werden (Stundenplan-Darstellung).
     */
    timetableView = new Timetable.TimetableView(timetable);
  }

  function start() {
    /* 
     * Laden der JSON-formatierten Datei mit der Kursliste
     * Dem Methodenaufruf (loadJSON) wird als zweiten Parameter eine Callback-Methode
     * (hier init) übergeben. Diese wird aufgerufen, sobald die angeforderte Datei eingelesen und 
     * geparst wurde. Die geladene Kursliste wird der Methode als Parameter übergeben. Die
     * Methode loadJSON ist bereits komplett implementiert und liefert die benötigte Kursliste
     * über den Callback-Parameter zurück.
     * 
     * Achtung: Die Anwendung muss über einen Webserver ausgeführt werden, 
     * damit dieser Aufruf funktioniert.
     */
    MME.loadJSON("resources/data/courses.json", init);
  }

  that.start = start;
  return that;
}();
