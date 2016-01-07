function Plane(isAirborne) {
  'use strict';
  this.isAirborne = isAirborne || true;
}

Plane.prototype.land = function (airport, weather) {
  this._suitableConditionsCheck(weather, false);
  airport.landplane(this);
  this.isAirborne = false;
  return this;
};

Plane.prototype.takeOff = function (airport, weather) {
  this._suitableConditionsCheck(weather, true);
  airport.takeOffPlane(this);
  this.isAirborne = true;
  return this;
};

Plane.prototype._suitableConditionsCheck = function (weather, condition) {
  this._weatherCheck(weather);
  this._planeStatusCheck(condition);
};

Plane.prototype._weatherCheck = function (weather) {
    weather = weather || new Weather();
    if (weather.isStormy === true) throw new TypeError ('Weather is stormy');
};

Plane.prototype._planeStatusCheck = function (condition) {
    if (condition === true) {planeStatusChecked = 'airborne';} else {planeStatusChecked = 'landed';}
    if (this.isAirborne === condition) throw new TypeError ('Plane already ' + planeStatusChecked);
};
