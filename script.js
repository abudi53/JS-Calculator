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
        return (a / b).toFixed(2);
    }

    static modulo(a, b) {
        return (a % b).toFixed(2);
    }

    static operate(op, a, b) {
        // op can be +, -, *, /
        console.log(a, op, b);
        if (op !== "+" && op !== "-" && op !== "X" && op !== "÷" && op !== "%") {
            return 0
        } else if (op === "+") {
            return this.sum(parseInt(a), parseInt(b));
        } else if (op === "-"){
            return this.substract(parseInt(a), parseInt(b));
        } else if (op === "X"){
            return this.multiply(parseInt(a), parseInt(b));
        } else if (op === "÷") {
            if (parseInt(b) === 0) {
                alert("You can't divide by 0 you sussy baka")
                return 0
            }else{
            return this.divide(parseInt(a), parseInt(b));}
        } else if (op === "%") {
            return this.modulo(parseInt(a), parseInt(b));
        }
    }
}

const display = document.querySelector(".display");
const buttons = Array.from(document.querySelectorAll("button"));
let singleOperation = "";
let operations = [];
let total = 0;
let pastE = ""

buttons.forEach(button => {
    button.addEventListener("click", e => {
        let i = pastE;
        pastE = e.target.textContent;
        console.log(i);
        switch (e.target.textContent) {
            case "1":
                singleOperation += e.target.textContent;
                display.textContent = singleOperation;
                break;
            case "2":
                singleOperation += e.target.textContent;
                display.textContent = singleOperation;
                break;
            case "3":
                singleOperation += e.target.textContent;
                display.textContent = singleOperation;
                break;
           case "4":
                singleOperation += e.target.textContent;
                display.textContent = singleOperation;
                break;
            case "5":
                singleOperation += e.target.textContent;
                display.textContent = singleOperation;
                break;
            case "6":
                singleOperation += e.target.textContent;
                display.textContent = singleOperation;
                break;
            case "7":
                singleOperation += e.target.textContent;
                display.textContent = singleOperation;
                break;
            case "8":
                singleOperation += e.target.textContent;
                display.textContent = singleOperation;
                break;
            case "9":
                singleOperation += e.target.textContent;
                display.textContent = singleOperation;
                break;
            case "0":
                singleOperation += e.target.textContent;
                display.textContent = singleOperation;
                break;
            case "←":
                display.textContent = display.textContent.slice(0, display.textContent.length - 1);
                singleOperation = singleOperation.slice(0, singleOperation.length -1)
                break;
            case "+":
                if (i !== "+" && i !== "" && i !== "-" && i !== "X" && i !== "÷" && i !== "%" && display.textContent !== "") {
                    if (i === "=") {
                        let numA = display.textContent;
                        let opA = e.target.textContent;
                        operations = [{num: numA, op: opA}]
                        console.log(operations);
                        singleOperation = ""
                    }else{
                    let numA = display.textContent;
                    let opA = e.target.textContent;
                    singleOperation = ""
                    operations.push({num: numA, op: opA});
                    console.log(operations);
                    if (operations.length === 2) {
                        operations = [{num: Calculator.operate(operations[0].op, operations[0].num, numA), op: opA}]
                        display.textContent = operations[0].num
                    }}
                }
                break;
            case "-":
                if (i !== "+" && i !== "" && i !== "-" && i !== "X" && i !== "÷" && i !== "%" && display.textContent !== "") {
                    if (i === "=") {
                        let numA = display.textContent;
                        let opA = e.target.textContent;
                        operations = [{num: numA, op: opA}]
                        console.log(operations);
                        singleOperation = ""
                    }else{
                    let numA = display.textContent;
                    let opA = e.target.textContent;
                    singleOperation = ""
                    operations.push({num: numA, op: opA});
                    console.log(operations);
                    if (operations.length === 2) {
                        operations = [{num: Calculator.operate(operations[0].op, operations[0].num, numA), op: opA}]
                        display.textContent = operations[0].num
                    }}
                }
                break;
            case "X":
                if (i !== "+" && i !== "" && i !== "-" && i !== "X" && i !== "÷" && i !== "%" && display.textContent !== "") {
                    if (i === "=") {
                        let numA = display.textContent;
                        let opA = e.target.textContent;
                        operations = [{num: numA, op: opA}]
                        console.log(operations);
                        singleOperation = ""
                    }else{
                    let numA = display.textContent;
                    let opA = e.target.textContent;
                    singleOperation = ""
                    operations.push({num: numA, op: opA});
                    console.log(operations);
                    if (operations.length === 2) {
                        operations = [{num: Calculator.operate(operations[0].op, operations[0].num, numA), op: opA}]
                        display.textContent = operations[0].num
                    }}
                }
                break;
            case "÷":
                if (i !== "+" && i !== "" && i !== "-" && i !== "X" && i !== "÷" && i !== "%" && display.textContent !== "") {
                    if (i === "=") {
                        let numA = display.textContent;
                        let opA = e.target.textContent;
                        operations = [{num: numA, op: opA}]
                        console.log(operations);
                        singleOperation = ""
                    }else{
                    let numA = display.textContent;
                    let opA = e.target.textContent;
                    singleOperation = ""
                    operations.push({num: numA, op: opA});
                    console.log(operations);
                    if (operations.length === 2) {
                        operations = [{num: Calculator.operate(operations[0].op, operations[0].num, numA), op: opA}]
                        display.textContent = operations[0].num
                    }}
                }
                break;
            case "%":
                if (i !== "+" && i !== "" && i !== "-" && i !== "X" && i !== "÷" && i !== "%" && display.textContent !== "") {
                    if (i === "=") {
                        let numA = display.textContent;
                        let opA = e.target.textContent;
                        operations = [{num: numA, op: opA}]
                        console.log(operations);
                        singleOperation = ""
                    }else{
                    let numA = display.textContent;
                    let opA = e.target.textContent;
                    singleOperation = ""
                    operations.push({num: numA, op: opA});
                    console.log(operations);
                    if (operations.length === 2) {
                        operations = [{num: Calculator.operate(operations[0].op, operations[0].num, numA), op: opA}]
                        display.textContent = operations[0].num
                    }}
                }
                break;
            case "C":
                display.textContent = "";
                singleOperation = "";
                operations = [];
                total = 0;
                pastE = ""
                break;
            case "=":
                if (i !== "+" && i !== "" && i !== "-" && i !== "X" && i !== "÷" && i !== "%" && i !== "=") {
                    let numA = display.textContent;

                    if (operations.length === 1) {
                        display.textContent = Calculator.operate(operations[0].op, operations[0].num, numA)
                    }
                }
        }
    }
    )
});
