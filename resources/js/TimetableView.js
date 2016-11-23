/* eslint-env browser */
/* global Timetable */

/*
 * TimetableView
 *
 * Dieses Modul ist für die Darstellung des Stundenplans zuständig.
 * Über eine öffentliche Methoden (render) kann eine Liste an Kursen in dem
 * Stundenplan eingetragen werden.
 *
 * Beim Erzeugen des Moduls wird als Parameter timetableEl eine Referenz 
 * auf das HTML-Element übergeben, in dem der Stundenplan angezeigt werden soll. 
 */

Timetable.TimetableView = function(timetableEl) {
  "use strict";
  var that = {};

  function render(courseList) {
  	//iterate through courseList
  	for (var i = courseList.length - 1; i >= 0; i--) {
  		//iterate through timeslots on each course
  		for (var j = courseList[i].slots.length - 1; j >= 0; j--) {
  			var daySel = courseList[i].slots[j].day;
  			var dayElements = timetableEl.getElementsByClassName("day-column");

  			//iterate through all Days
  			for (var k = dayElements.length - 1; k >= 0; k--) {
  				if(dayElements[k].getAttribute("data-day-of-week")==courseList[i].slots[j].day){
  					var hourElements = dayElements[k].getElementsByClassName("day-column-empty");

  					//iterate through all Hours
  					for (var l = hourElements.length - 1; l >= 0; l--) {
  						if (hourElements[l].getAttribute("data-hour-of-day")==courseList[i].slots[j].hour){ 				
  							hourElements[l].children[0].innerHTML = courseList[i].shortTitle;
  							hourElements[l].children[1].innerHTML = courseList[i].slots[j].room;
  							hourElements[l].className = "day-column-content color-" + courseList[i].color;
  							

  						}
  					}
  				}
  			}
  		}
  	}

  	var thisSlot;
  	var lastSlot;
  	var dayElements = timetableEl.getElementsByClassName("day-column");
  	for (var k =  0; k < dayElements.length; k++) {
  		lastSlot = null;
  		var hourElements = dayElements[k].children;
  		for (var l = 1; l < hourElements.length; l++) {
  			thisSlot = hourElements[l];
  			
	

  			if(lastSlot!=null){
  				if(thisSlot.children[0].innerHTML == lastSlot.children[0].innerHTML && thisSlot.children[0].innerHTML != "" && thisSlot.children[0].innerHTML != null){

  					if(!thisSlot.className.match("course-end")&&!thisSlot.className.match("course-start")){
  						thisSlot.className = thisSlot.className + " course-end";
  						thisSlot.children[0].innerHTML = "";
  					}
  					if(!lastSlot.className.match("course-start")&&!lastSlot.className.match("course-end")){
  						lastSlot.className = lastSlot.className + " course-start";
  						lastSlot.children[1].innerHTML = "";
  					}
  					
  				

  				}
  			}
  					
  			lastSlot = thisSlot;
  		}
  	}
  }

  that.render = render;
  return that;
};
