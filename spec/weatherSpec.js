describe('Weather', function () {

  var weather;

  beforeEach (function () {
    'use strict';
    weather = new Weather();
  });

  describe('#isStormy', function () {

    it('can be stormy', function () {
      spyOn(weather, '_numberGenerator').and.returnValue(0);
      expect(weather.isStormy()).toBeTruthy();
    });

    it('can not be stormy', function () {
      spyOn(weather, '_numberGenerator').and.returnValue(3);
      expect(weather.isStormy()).toBeFalsy();
    });
  });

});
