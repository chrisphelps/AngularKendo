'use strict';

/* jasmine specs for controllers go here */

describe('MyCtrl1', function(){
  var myCtrl1;
  var myScope;

  beforeEach(function(){
    myScope = {},
    myCtrl1 = new MyCtrl1(myScope);
  });


  it('should ....', function() {
    //spec body
  });

  it('should return false for 5', function() {
      expect(myScope.myfun(5)).toBe(true);
  });
});


describe('MyCtrl2', function(){
  var myCtrl2;


  beforeEach(function(){
    myCtrl2 = new MyCtrl2();
  });


  it('should ....', function() {
    //spec body
  });
});
