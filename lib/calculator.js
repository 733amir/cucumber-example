class Calculator {

    constructor() {
        this.m = 0
    }

    add(number) {
        this.m += number
    }

    subtract(number) {
        this.add(-number)
    }

    multiply(number) {
        this.m *= number
    }

    divide(number) {
        this.multiply(1/number)
    }

    modulo(number) {
        this.m %= number
    }

    get result() {
        if (!isFinite(this.m))
            throw new EvalError("an error")
        return this.m
    }

}

module.exports = Calculator