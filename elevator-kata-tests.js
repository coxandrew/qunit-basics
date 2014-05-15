test('hello world', function () {

  // ok( truthy[, message ] )
  // equal( actual, expected [, message] )
  // deepEqual( actual, expected [, message ] )
  // throws( block [, expected ] [, message ] )

  equal(1, 1, 'this test should pass');
  equal(1, 0, 'this test shall not pass');
});

test('an elevator', function () {
  var elevator = new Elevator(5);

  equal(elevator.floors, 5, "has a number of floors");
});
