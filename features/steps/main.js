const assert = require('assert')
const { Given, When, Then } = require('cucumber')
const Calculator = require('../../lib/calculator.js')

let c

Given("the calculator", function() {
    c = new Calculator()
})