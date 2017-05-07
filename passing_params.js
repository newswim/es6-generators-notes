/*

Generators can pass paremeters to the `yield` statements when evoking.
One GOTCHA: the first yield statement does not receive a paremeter, so
you'll need to call next() at least once to gain access to this functionality.

*/

function* logGenerator() {
  console.log(`${yield} dinner!`);
  console.log(yield);
  console.log(yield);
}

var gen = logGenerator();

// the first call of next executes from the start of the function
// until the first yield statement
gen.next();
gen.next('pretzel');    // pretzel dinner!
gen.next('california'); // california
gen.next('mayonnaise'); // mayonnaise