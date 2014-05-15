var isEven = function (val) {
  return val % 2 === 0;
};

test('isEven()', function () {
  ok(isEven(0), 'Zero is an even number');
  ok(isEven(2), 'So is two');
  ok(isEven(-4), 'So is negative four');
  ok(!isEven(1), 'One is not an even number');
  ok(!isEven(-7), 'Neither is negative seven');
});

test('assertions', function () {
  // equals(<expected value, actual value>)
  equal(1, 1, 'one equals one');
});
