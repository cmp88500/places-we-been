// Business logic

function Location(city, state, country, date, landmark, notes) {
  this.city = city;
  this.state = state;
  this.country = country;
  this.date = date;
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
    console.log(newLocation.dateVisited);

    $("#location-list").append("<li>" + newLocation.title() + "</li>");

    $("#location-list").last().click(function() {
      $("#location-full").show();
      $(".location-name").text(newLocation.title());
      $(".city").text(newLocation.city);
      $(".state").text(newLocation.state);
      $(".country").text(newLocation.country);
      $(".date").text(newLocation.date);
      $(".landmark").text(newLocation.landmark);
      $(".notes").text(newLocation.notes);
    });

  });
});
