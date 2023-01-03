class Calculator {
    static sum(a, b) {
        return a + b;
    }

    static substract(a, b) {
        return a - b;
    }

    static multiply(a, b) {
        return a * b;
    }

    static divide(a, b) {
        return a / b;
    }

    static operate(op, a, b) {
        // op can be +, -, *, /
        console.log(a, op, b);
        if (op !== "+" && op !== "-" && op !== "*" && op !== "/") {
            return 0
        } else if (op === "+") {
            return this.sum(a, b);
        } else if (op === "-"){
            return this.substract(a, b);
        } else if (op === "*"){
            return this.multiply(a, b);
        } else if (op === "/") {
            return this.divide(a, b);
        }
    }



}

console.log(Calculator.operate("+", 3, 5));