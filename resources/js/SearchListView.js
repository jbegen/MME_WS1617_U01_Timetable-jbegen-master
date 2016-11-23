/* eslint-env browser */
/* global Timetable */

/*
 * SearchListView
 *
 * Dieses Modul ist für die Darstellung der Suchergebnisse verantwortlich.
 * Über zwei öffentliche Methoden kann 1) eine Liste an Kursen in der Ergebnissliste
 * dargestellt werden (renderList) und 2) die aktuell angezeigte Ergebnisliste 
 * geleert werden (clearList).
 *
 * Beim Erzeugen des Moduls wird als Parameter resultEl eine Referenz 
 * auf das HTML-Element übergeben, in dem die Ergebnisliste angezeigt werden soll. 
 */

Timetable.SearchListView = function(resultEl) {
  "use strict";
  var that = {};

  function clearList() {
  	resultEl.innerHTML = '';
  }

  function renderList(list) {
  	resultEl.appendChild(list);
  }

  that.clearList = clearList;
  that.renderList = renderList;
  return that;
};
