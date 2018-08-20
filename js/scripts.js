// Business logic

function Location(city, state, country, date, landmark, notes) {
  this.city = city;
  this.state = state;
  this.country = country;
  this.dateVisited = date;
  this.landmark = landmark;
  this.notes = notes;
}

Location.prototype.title = function() {
  return this.city + ", " + this.state + ", " + this.country;
}



// User interface logic

$(document).ready(function() {
  $("form#places").submit(function(event) {
    event.preventDefault();

    var newCity = $("#city").val();
    var newState = $("#state").val();
    var newCountry = $("#country").val();
    var newDate = $("#date").val();
    var newLandmark = $("#landmark").val();
    var newNotes = $("#notes").val();

    var newLocation = new Location(newCity, newState, newCountry, newDate, newLandmark, newNotes);

    $("#location-list").append("<li>" + newLocation.title() + "</li>");
  })
});
