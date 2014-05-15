var log = function (msg) {
  console.log(msg);
};

// Example input
var calls = [
  {
    origin: 1,
    destination: 10
  },
  {
    origin: 5,
    destination: 10
  },
  {
    origin: 8,
    destination: 2
  },
  {
    origin: 1,
    destination: 6
  }
];

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
  equal(calls.length, 4, "there are 4 calls");
});

test('simulation', function () {
  var elevator = new Elevator(10);
  var $building = $("#building");

  for (var ii = 0; ii < elevator.floors; ii++) {
    $building.append(
      "<div class='floor floor" + (ii + 1) + "'>" +
        "<div class='waiting'></div>" +
        "<div class='elevator'></div>" +
        "<div class='arrived'></div>" +
      "</div>"
    );
  }
});
