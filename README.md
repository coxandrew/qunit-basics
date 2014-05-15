Getting started with QUnit!

## Assertions

QUnit provides [8 assertions](http://api.qunitjs.com/category/assert/), but these are good enough to get started:

### ok()

    ok( truthy [, message ] )

A boolean check, equivalent to CommonJS’s assert.ok() and JUnit’s assertTrue(). Passes if the first argument is truthy.

### equal()

    equal( actual, expected [, message ] )

A non-strict comparison, roughly equivalent to JUnit's assertEquals.

### deepEqual()

    deepEqual( actual, expected [, message ] )

A deep recursive comparison, working on primitive types, arrays, objects, regular expressions, dates and functions. Like `equal()` but uses the `===` equality operator. Probably what you want.

### throws()

    throws( block [, expected ] [, message ] )

Test if a callback throws an exception, and optionally compare the thrown error.

## Synchronous Callbacks

Occasionally, circumstances in your code may prevent callback assertions to never be called, causing the test to fail silently.

QUnit provides a special assertion to define the number of assertions a test contains. When the test completes without the correct number of assertions, it will fail, no matter what result the other assertions, if any, produced.

Usage is plain and simple; just call `expect()` at the start of a test, with the number of expected assertions as the only argument:

    test( "a test", function() {
      expect( 2 );
     
      function calc( x, operation ) {
        return operation( x );
      }
     
      var result = calc( 2, function( x ) {
        ok( true, "calc() calls operation function" );
        return x * x;
      });
     
      equal( result, 4, "2 square equals 4" );
    });

Alternatively, pass in the number to the `test()` function:

    test( "a test", 1, function() {
      var $body = $( "body" );
     
      $body.on( "click", function() {
        ok( true, "body was clicked!" );
      });
     
      $body.trigger( "click" );
    });
