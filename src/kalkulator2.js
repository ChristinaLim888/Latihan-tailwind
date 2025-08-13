'use strict';

const prompt = require('prompt-sync')();

// === 1. VALIDASI INPUT ANGKA ===
function getValidNumberInput(promptMessage) {
    let input;
    while (true) {
        input = prompt(promptMessage);
        const number = Number(input);
        if (!isNaN(number)) {
            return number;
        }
        console.log("Invalid input. Please enter a valid number.");
    }
}

// === 1. VALIDASI INPUT OPERATOR ===
function getValidOperatorInput(promptMessage) {
    const validOperators = ['+', '-', '*', '/', '%', '**'];
    let operator;
    while (true) {
        operator = prompt(promptMessage);
        if (validOperators.includes(operator)) {
            return operator;
        }
        console.log("Invalid operator. Please enter one of +, -, *, /, %, **");
    }
}

// === 2. FUNGSI ARITMATIKA ===
function add(a, b) {
    return a + b;
}

function subtract(a, b) {
    return a - b;
}

function multiply(a, b) {
    return a * b;
}

function divide(a, b) {
    return b === 0 ? "Error: Division by zero!" : a / b;
}

function modulo(a, b) {
    return a % b;
}

function power(a, b) {
    return a ** b;
}

// === 3. MAIN LOOP ===
while (true) {
    console.log("\n--- Simple Calculator ---");

    const num1 = getValidNumberInput("Enter the first number: ");
    const num2 = getValidNumberInput("Enter the second number: ");
    const operator = getValidOperatorInput("Enter an operator (+, -, *, /, %, **): ");

    let result;

    switch (operator) {
        case '+':
            result = add(num1, num2);
            break;
        case '-':
            result = subtract(num1, num2);
            break;
        case '*':
            result = multiply(num1, num2);
            break;
        case '/':
            result = divide(num1, num2);
            break;
        case '%':
            result = modulo(num1, num2);
            break;
        case '**':
            result = power(num1, num2);
            break;
        default:
            result = "Something went wrong!";
    }

    // === 4. ANALISIS HASIL ===
    console.log(`\nResult: ${result}`);

    if (typeof result === "number") {
        if (result > 0) {
            console.log("The result is a positive number.");
        } else if (result < 0) {
            console.log("The result is a negative number.");
        } else {
            console.log("The result is zero.");
        }

        if (Number.isInteger(result)) {
            console.log("It is an integer.");
        } else {
            console.log("It is a floating-point number.");
        }

        // Ternary operator: even or odd
        const evenOrOdd = Number.isInteger(result) ? (result % 2 === 0 ? "Even" : "Odd") : "N/A for decimals";
        console.log(`Even/Odd: ${evenOrOdd}`);

        // Tambahan: kombinasi kondisi
        if (result > 0 && result % 2 === 0) {
            console.log("The result is positive and even.");
        }
    } else if (typeof result === "string") {
        console.log("Message:", result);
    } else {
        console.log(result ?? "Result is undefined or null, something went wrong!");
    }

    // === 5. EXIT MECHANISM ===
    const continueInput = prompt("\nDo you want to perform another calculation? (yes/no): ");
    if (continueInput.toLowerCase() === 'no') {
        console.log("Thank you for using the calculator. Goodbye!");
        break;
    }
}
