var InvalidFloor = function (message) {
  this.message = message || "Invalid Floor";
};
InvalidFloor.prototype.toString = function () {
  return this.message;
};

var Elevator = function (floors) {
  this.floors = floors;
  this.currentFloor = 1;
  this.addRequest = function (request) {
    if (request.destination === 11) {
      throw new InvalidFloor();
    } else {
      return true;
    }
  };
};

var Building = function () {
  this.floors = 10;
  this.elevator = new Elevator(this.floors);
};
