function Location(city, state, country) {
  this.city = city;
  this.state = state;
  this.country = country;
}

Location.prototype.title = function() {
  return this.city + " " + this.state + " " + this.country;
}
