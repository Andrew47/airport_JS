describe('Feature Test:', function(){
  var plane, airport;

  beforeEach(function(){
    'use strict';
    plane = new Plane();
    airport = new Airport();
  });

  it('planes can land at an airport', function(){
    plane.land(airport);
    expect(airport.planes()).toContain(plane);
  });

  it('planes can takeoff', function(){
    plane.land(airport);
    plane.takeOff();
    expect(airport.planes()).not.toContain(plane);
  });
});
