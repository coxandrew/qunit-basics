var log = function (msg) {
  console.log(msg);
};

var withinRange = function (val, min, max) {
  return (val >= min && val <= max);
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

// ok( truthy[, message ] )
// equal( actual, expected [, message] )
// deepEqual( actual, expected [, message ] )
// throws( block [, expected ] [, message ] )

// x The building has 1 elevator and 10 floors
// An elevator responds to an ordered list of trip requests
// An elevator delivers passengers to the requested floors
// You may write a visual simulator that runs the elevator

module("Building");
test('the building has 1 elevator', function () {
  var building = new Building();
  ok(building.elevator, "building has an elevator");
  ok(building.elevator instanceof Elevator, "building's elevator is an Elevator");
});

test('has 10 floors', function () {
  var building = new Building();
  equal(building.floors, 10, "building should have 10 floors");
});

module("Elevator");
test('elevator has a current floor', function () {
  var building = new Building();
  ok(withinRange(building.elevator.currentFloor, 1, 10), "current floor should be in the building");
});

test('elevator accepts a trip request', function () {
  var building = new Building();
  var request = {
    origin: 1,
    destination: 10
  };
  ok(building.elevator.addRequest(request), "takes a valid trip request");
});

test("elevator knows how many floors it has", function () {
  var building = new Building();
  equal(building.elevator.floors, 10, "elevator should have 10 floors");
});

test("elevator doesn't accept invalid trip requests", function () {
  var building = new Building();
  var request = {
    origin: 1,
    destination: 11
  };
  throws(
    function () {
      building.elevator.addRequest(request);
    },
    InvalidFloor,
    "does not accept an invalid floor"
  );
});

test('simulation', 0, function () {
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
