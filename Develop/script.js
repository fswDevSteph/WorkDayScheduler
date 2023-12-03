/*Requirements:
GIVEN I am using a daily planner to create a schedule
WHEN I open the planner
THEN the current day is displayed at the top of the calendar
*/
var today = dayjs(); //Creates a variable"var" named"today" & sets"=" it to the result of calling"()" the dayjs method"function" provided by using the dayjs library.
console.log(dayjs().hour());
var formatDate = today.format('MMMM D, YYYY'); //Creates a variable"formatDate" & sets"=" it to calling() the format method"function" on the today variable and passes it the formatting style argument"('MMMM D, YYYY')

document.getElementById('currentDay').textContent = formatDate; // Grabs the HTML element with the id 'currentDay' and updates its text content with the formatted date stored in the variable "formatDate".

/*WHEN I scroll down
THEN I am presented with timeblocks for standard business hours of 9am&ndash;5pm

WHEN I view the timeblocks for that day
THEN each timeblock is color coded to indicate whether it is in the past, present, or future
 */
var nineAM = document.getElementById('hour-9');
if (dayjs().hour() === 9) {
  nineAM.classList.add('present');
  nineAM.classList.remove('future');
  nineAM.classList.remove('past');
} else if (dayjs().hour() > 9) {
  nineAM.classList.add('past');
  nineAM.classList.remove('future');
  nineAM.classList.remove('present');
} else if (dayjs().hour() < 9) {
  nineAM.classList.remove('past');
  nineAM.classList.add('future');
  nineAM.classList.remove('present');
}
var tenAM = document.getElementById('hour-10');
if (dayjs().hour() === 10) {
  tenAM.classList.add('present');
  tenAM.classList.remove('future');
  tenAM.classList.remove('past');
} else if (dayjs().hour() > 10) {
  tenAM.classList.add('past');
  tenAM.classList.remove('future');
  tenAM.classList.remove('present');
} else if (dayjs().hour() < 10) {
  tenAM.classList.remove('past');
  tenAM.classList.add('future');
  tenAM.classList.remove('present');
}
var elevenAM = document.getElementById('hour-11');
if (dayjs().hour() === 11) {
  elevenAM.classList.add('present');
  elevenAM.classList.remove('future');
  elevenAM.classList.remove('past');
} else if (dayjs().hour() > 11) {
  elevenAM.classList.add('past');
  elevenAM.classList.remove('future');
  elevenAM.classList.remove('present');
} else if (dayjs().hour() < 11) {
  elevenAM.classList.remove('past');
  elevenAM.classList.add('future');
  elevenAM.classList.remove('present');
}
var twelvePM = document.getElementById('hour-12');
if (dayjs().hour() === 12) {
  twelvePM.classList.add('present');
  twelvePM.classList.remove('future');
  twelvePM.classList.remove('past');
} else if (dayjs().hour() > 12) {
  twelvePM.classList.add('past');
  twelvePM.classList.remove('future');
  twelvePM.classList.remove('present');
} else if (dayjs().hour() < 12) {
  twelvePM.classList.remove('past');
  twelvePM.classList.add('future');
  twelvePM.classList.remove('present');
}
var thirteenPM = document.getElementById('hour-13');
if (dayjs().hour() === 13) {
  thirteenPM.classList.add('present');
  thirteenPM.classList.remove('future');
  thirteenPM.classList.remove('past');
} else if (dayjs().hour() > 13) {
  thirteenPM.classList.add('past');
  thirteenPM.classList.remove('future');
  thirteenPM.classList.remove('present');
} else if (dayjs().hour() < 13) {
  thirteenPM.classList.remove('past');
  thirteenPM.classList.add('future');
  thirteenPM.classList.remove('present');
}
var fourteenPM = document.getElementById('hour-14');
if (dayjs().hour() === 14) {
  fourteenPM.classList.add('present');
  fourteenPM.classList.remove('future');
  fourteenPM.classList.remove('past');
} else if (dayjs().hour() > 14) {
  fourteenPM.classList.add('past');
  fourteenPM.classList.remove('future');
  fourteenPM.classList.remove('present');
} else if (dayjs().hour() < 14) {
  fourteenPM.classList.remove('past');
  fourteenPM.classList.add('future');
  fourteenPM.classList.remove('present');
}
var fifteenteenPM = document.getElementById('hour-15');
if (dayjs().hour() === 15) {
  fifteenteenPM.classList.add('present');
  fifteenteenPM.classList.remove('future');
  fifteenteenPM.classList.remove('past');
} else if (dayjs().hour() > 15) {
  fifteenteenPM.classList.add('past');
  fifteenteenPM.classList.remove('future');
  fifteenteenPM.classList.remove('present');
} else if (dayjs().hour() < 15) {
  fifteenteenPM.classList.remove('past');
  fifteenteenPM.classList.add('future');
  fifteenteenPM.classList.remove('present');
}
var sixteenteenPM = document.getElementById('hour-16');
if (dayjs().hour() === 16) {
  sixteenteenPM.classList.add('present');
  sixteenteenPM.classList.remove('future');
  sixteenteenPM.classList.remove('past');
} else if (dayjs().hour() > 16) {
  sixteenteenPM.classList.add('past');
  sixteenteenPM.classList.remove('future');
  sixteenteenPM.classList.remove('present');
} else if (dayjs().hour() < 16) {
  sixteenteenPM.classList.remove('past');
  sixteenteenPM.classList.add('future');
  sixteenteenPM.classList.remove('present');
}
var seventeenPM = document.getElementById('hour-17');
if (dayjs().hour() === 17) {
  seventeenPM.classList.add('present');
  seventeenPM.classList.remove('future');
  seventeenPM.classList.remove('past');
} else if (dayjs().hour() > 17) {
  seventeenPM.classList.add('past');
  seventeenPM.classList.remove('future');
  seventeenPM.classList.remove('present');
} else if (dayjs().hour() < 17) {
  seventeenPM.classList.remove('past');
  seventeenPM.classList.add('future');
  seventeenPM.classList.remove('present');
}

/*
WHEN I click into a timeblock
THEN I can enter an event
WHEN I click the save button for that timeblock
THEN the text for that event is saved in local storage
WHEN I refresh the page
THEN the saved events persist */

var saveBtns = document.getElementsByClassName('saveBtn'); //selects the element fr html
for (var i = 0; i < saveBtns.length; i++) {
  saveBtns[i].addEventListener('click', function() {
    localStorage.setItem('value', );
  });
}

//$(function () {
  // TODO: Add a listener for click events on the save button. This code should
  // use the id in the containing time-block as a key to save the user input in
  // local storage. HINT: What does `this` reference in the click listener
  // function? How can DOM traversal be used to get the "hour-x" id of the
  // time-block containing the button that was clicked? How might the id be
  // useful when saving the description in local storage?
  //
  // TODO: Add code to apply the past, present, or future class to each time
  // block by comparing the id to the current hour. HINTS: How can the id
  // attribute of each time-block be used to conditionally add or remove the
  // past, present, and future classes? How can Day.js be used to get the
  // current hour in 24-hour time?
  //
  // TODO: Add code to get any user input that was saved in localStorage and set
  // the values of the corresponding textarea elements. HINT: How can the id
  // attribute of each time-block be used to do this?
  //
  // TODO: Add code to display the current date in the header of the page.
});
