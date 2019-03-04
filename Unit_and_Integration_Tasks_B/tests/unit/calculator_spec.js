var Calculator = require('../../public/js/calculator.js')
var assert = require('assert')

describe('calculator', function () {
  beforeEach(function () {
    calculator = new Calculator()
  });

  // write unit tests here in the form of "it should do something..."
  it('it has a sample test', function(){
    assert.equal(true, true)
  });

  it("outputs the correct result of two numbers added together", function(){
    calculator.previousTotal = 4
    calculator.add(1)
    const actual = calculator.runningTotal
    assert.equal(actual, 5)
  });

  it("outputs the correct result of a number subtracted from another", function(){
    calculator.previousTotal = 7
    calculator.subtract(4)
    const actual = calculator.runningTotal
    assert.equal(actual, 3)
  });

  it("outputs the correct total when a number is multiplied by another number", function(){
    calculator.previousTotal = 3
    calculator.multiply(5)
    const actual = calculator.runningTotal
    assert.equal(actual, 15)
  });

  it("outputs the correct total when a number is divided by another", function(){
    calculator.previousTotal = 21
    calculator.divide(7)
    const actual = calculator.runningTotal
    assert.equal(actual, 3)
  });

  it("accepts multiple numbers as an input", function(){
    calculator.numberClick(1)
    calculator.numberClick(2)
    calculator.numberClick(3)
    const actual = calculator.runningTotal
    assert.equal(actual, 123)
  });

  it("functions correctly when operators are selected", function(){
    calculator.numberClick(1)
    calculator.operatorClick("+")
    calculator.numberClick(1)
    calculator.operatorClick("-")
    calculator.numberClick(1)
    calculator.operatorClick("*")
    calculator.numberClick(4)
    calculator.operatorClick("/")
    calculator.numberClick(2)
    calculator.operatorClick("=")
    const actual = calculator.runningTotal
    assert.equal(actual, 2)
  });

  it("clears the running total without affecting the calculation", function(){
    calculator.numberClick(1)
    calculator.operatorClick("+")
    calculator.numberClick(100)
    calculator.clearClick()
    calculator.numberClick(2)
    calculator.operatorClick("=")
    const actual = calculator.runningTotal
    assert.equal(actual, 3)
  });
});
