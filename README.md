The Airport Challenge in JavaScript
===================================

This is a solution to Makers Academy's [Airport Challenge](https://github.com/makersacademy/airport_challenge). The original
was written in Ruby, and can be found  [here](https://github.com/Andrew47/airport_challenge). There is also a version in
[Python](https://github.com/Andrew47/airport-Python)

This solution uses a test-driven approach, with feature and unit tests
implemented using [jasmine](http://jasmine.github.io).

##Installation notes

The repository should be cloned and the directory changed into:

```
$ git git@github.com:Andrew47/airport_JS.git
$ cd airport_JS
```

##Using the program

First open SpecRunner.html (`open SpecRunner.html`), then open up the console.

Then an airport can be created by typing `airport = new Airport()` and a plane by typing
`plane = new Plane()` in the command line.

The plane can land at the airport (`plane.land(airport)`) and can take off (`plane.take_off()`). Weather is randomly generated each time the plane
seeks to take off or to land. Stormy weather prevents take off or landing.

If `plane.isAirborne` returns `true`, the plane is in the air. If `plane.isAirborne`
returns `false`, the plane has landed.

The default airport capacity is 20. However, a new airport (airport1000) can be created
with this default overridden (`airport1000 = Airport(1000)`). Planes cannot be landed at
a full airport (`airport.isFull()` returns true).

##User Stories being met
```
As an air traffic controller
So I can get passengers to a destination
I want to instruct a plane to land at an airport and confirm that it has landed

As an air traffic controller
So I can get passengers on the way to their destination
I want to instruct a plane to take off from an airport and confirm that it is no longer in the airport

As an air traffic controller
To ensure safety
I want to prevent takeoff when weather is stormy

As an air traffic controller
To ensure safety
I want to prevent landing when weather is stormy

As an air traffic controller
To ensure safety
I want to prevent landing when the airport is full

As the system designer
So that the software can be used for many different airports
I would like a default airport capacity that can be overridden as appropriate
```

##Author
* [Andrew Burnie](https://github.com/Andrew47)
