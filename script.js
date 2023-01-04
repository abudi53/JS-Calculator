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

const display = document.querySelector(".display");
// const sum = document.getElementById("sum")
// const substract = document.getElementById("substract")
// const multiply = document.getElementById("multiply")
// const divide = document.getElementById("divide")
// const modulo = document.getElementById("modulo")
// const clear = document.getElementById("clear")
// const operate = document.getElementById("operate")
// const one = document.getElementById("1")
// const two = document.getElementById("2")
// const three = document.getElementById("3")
// const four = document.getElementById("4")
// const five = document.getElementById("5")
// const six = document.getElementById("6")
// const seven = document.getElementById("7")
// const eight = document.getElementById("8")
// const nine = document.getElementById("9")
// const zero = document.getElementById("zero")

const buttons = Array.from(document.querySelectorAll("button"));

buttons.forEach(button => {
    button.addEventListener("click", e => {
        console.log(e.target.textContent);
        switch (e.target.textContent) {
            case "1":
                display.textContent += e.target.textContent;
                break;
            case "2":
                display.textContent += e.target.textContent;
                break;
            case "3":
                display.textContent += e.target.textContent;
                break;
           case "4":
                display.textContent += e.target.textContent;
                break;
            case "5":
                display.textContent += e.target.textContent;
                break;
            case "6":
                display.textContent += e.target.textContent;
                break;
            case "7":
                display.textContent += e.target.textContent;
                break;
            case "8":
                display.textContent += e.target.textContent;
                break;
            case "9":
                display.textContent += e.target.textContent;
                break;
            case "←":
                display.textContent = display.textContent.slice(0, display.textContent.length - 1);
                break;
            case "+":
                
                break;
        }
    })
});
console.log(Calculator.operate("+", 3, 5));
