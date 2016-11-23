/* eslint-env browser */
/* global Timetable */

/*
 * SearchListController
 *
 * Dieses Modul ist für die Steuerung der Interaktion des Nutzers mit der Suchmaske verantwortlich.
 * In dem Modul werden die nötigen DOM-Events abgefangen und entsprechende Informationen an
 * andere Komponenten der Anwendung (Listener) weitergegeben.
 *
 * Das Module überwacht die Eingabe in das Suchfeld sowie die Auswahl von dargestellten Elementen in 
 * der Suchliste.
 *
 * Beim Erzeugen des Moduls werden als Parameter inputEl und resultEl eine Referenz 
 * auf die HTML-Element übergeben, die die Suchmaske und die Ergebnisliste darstellen. 
 */

Timetable.SearchListController = function(inputEl, resultEl) {
  "use strict";
  var that = {},
    onSearchInputCleared,
    onSearchInputChanged,
    onSearchResultSelected;

  function onInputChanged(event) {
    var inpString = inputEl.value;
    onSearchInputChanged(inpString);
  }

  function onSearchResultListClicked(event) {
    var selString = event.target.innerText;
    onSearchResultSelected(selString);
  }

  function setSearchInputClearedListener(listener) {
    onSearchInputCleared = listener;
  }

  function setSearchInputChangedListener(listener) {
    onSearchInputChanged = listener;
  }

  function setSearchResultSelectedListener(listener) {
    onSearchResultSelected = listener;
  }

  function init() {
    inputEl.addEventListener("keyup", onInputChanged);
    resultEl.addEventListener("click", onSearchResultListClicked);
  }

  that.setSearchInputChangedListener = setSearchInputChangedListener;
  that.setSearchInputClearedListener = setSearchInputClearedListener;
  that.setSearchResultSelectedListener = setSearchResultSelectedListener;
  that.init = init;
  return that;
};
