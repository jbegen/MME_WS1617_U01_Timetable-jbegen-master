/* eslint-env browser */
/* global Timetable */

/*
 * Model
 *
 * Dieses Modul bildet den aktuellen Zustand der Anwendung ab. Es verwaltet die Liste der 
 * verfügbaren Kurse und erlaubt das Selektieren bestimmter Kurse. Das Model erlaubt die Rückgabe 
 * einer Liste aller selektierten Kurse. Zusätzlich kann die gespeicherte Kursliste anhand 
 * des Titel-Attributs der jeweiligen Einträge gefiltert und zurückgegeben werden.
 */

Timetable.Model = function() {
  "use strict";
  var that = {},
    courses;

  function setCourseList(list) {
    courses = list;
  }

  function getCourseList() {
	return courses;
	}
 
  that.setCourseList = setCourseList;
  that.getCourseList = getCourseList;
  return that;
};
