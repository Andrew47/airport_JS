function Airport (capacity, storedPlanes) {
  'use strict';
  this._storedPlanes = storedPlanes || [];
  this.capacity = capacity || 20;
}

Airport.prototype.planes = function () {
  return this._storedPlanes;
};

Airport.prototype.isFull = function () {
  if (this._storedPlanes.length === this.capacity) return true;
  return false;
};

Airport.prototype.landplane = function (plane) {
  if (this.isFull === true) throw new TypeError ('Airport Full');
  this._storedPlanes.push(plane);
};

Airport.prototype.takeOffPlane = function (plane) {
  this._storedPlanes.pop(plane);
};
