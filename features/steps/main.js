const assert = require('assert')
const { Given, When, Then } = require('cucumber')
const Calculator = require('../../lib/calculator.js')

let c

Given("the calculator", function() {
    c = new Calculator()
})

let numbers = []

When("{} number is {float}", function (place, number) {
    numbers.push(number)
})

When("we add them together", function () {
    for (number of numbers)
        c.add(number)
    numbers = []
})

When("add {int}", function(number) {
    c.add(number)
})

When("subtract {int}", function (number) {
    c.subtract(number)
})

When("multiply by {int}", function(number) {
    c.multiply(number)
})

When("divide by {int}", function (number) {
    c.divide(number)
})

When("modulo {int}", function (number) {
    c.modulo(number)
})

Then("result should be {}", function (expected) {
    if (Math.abs(c.result - expected) > Math.pow(10, 12))
        assert.equal(c.result, expected)
})

Then("an error should happen", function() {
    assert.throws(function() { c.result }, {name: "EvalError"})
})