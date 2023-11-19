const add = (n1, n2) => n1 + n2;
const subtract = (n1, n2) => n1 - n2;
const multiply = (n1, n2) => n1 * n2;

// higher order function
const calculator = (mathOperation, initialVale, values) => {
    let total = initialVale;
    values.forEach((value) => {
        total = mathOperation(total, value);
    });
    return total;
}

console.log(calculator(add, 0, [5,4]))