"use strict"; // Wajib sesuai brief

const prompt = require("prompt-sync")({ sigint: true });
/*
- require('prompt-sync') memuat modul yang mengembalikan factory function. Memanggilnya dengan opsi ({ sigint: true }) mengembalikan fungsi prompt(...).
- Kenapa prompt-sync? Karena ia memberikan prompt synchronous (blocking) yang mudah untuk skrip CLI sederhana — kamu bisa langsung const answer = prompt('> ').
- Opsi sigint: true: memudahkan user keluar dengan Ctrl+C; berguna untuk UX CLI.
- Trade-off: synchronous blocking oke untuk skrip kecil, tapi buruk untuk aplikasi server/yang perlu concurrency. Di aplikasi lebih besar, gunakan readline/readline/promises (async).

'use strict';
const prompt = require('prompt-sync') ({sigint:true});
'use strict';
const prompt = require('prompt-sync') ({sigint:true});)
'use strict'
conts promot = require('prompt-sync') ({sigint:true});
'use strict'
conts prompt= require('prompt-sync') ({sigint:true});
'use strict'
const prompt = require('prompt-sync') ({sigint:true});
'use strict'
conts prompt = require('prompt-sync') ({sigint:true});
*/

/* ============================
 * 1) USER INPUT HANDLING
 * ========================== */
function getValidNumberInput(message) {
  while (true) {
    // loop terus sampai input valid -> kita keluar dengan `return`
    const raw = prompt(message).trim(); // baca input (string) dan hilangkan spasi pinggir
    const n = Number(raw); // konversi string ke Number (tidak pakai parseFloat)
    if (raw !== "" && !Number.isNaN(n)) return n; // jika bukan string kosong dan bukan NaN -> kembalikan angka
    console.log("Invalid number. Please enter a valid number."); // pesan kesalahan dan ulangi loop
  }
}
/*






*/
function getValidOperatorInput(message) {
  const valid = ["+", "-", "*", "/", "%", "**"]; // daftar operator yang diperbolehkan (note: '**' = pangkat)
  while (true) { // loop sampai operator valid dimasukkan
    const op = prompt(message).trim(); // ambil input operator, hapus spasi
    if (valid.includes(op)) return op; // kalau ada di daftar valid -> kembalikan operator
    console.log("Invalid operator. Use one of: +, -, *, /, %, **"); // pesan kesalahan + ulangi
  }
}

/* ============================
 * 2) BASIC ARITHMETIC OPS
 * ========================== */
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
  return b === 0 ? "Error: Division by zero!" : a % b;
}
function power(a, b) {
  return a ** b;
}

/* ============================
 * 3) MAIN CALCULATOR LOOP
 * ========================== */
while (true) {
  console.log("----------------------------------------");
  console.log("Interactive Calculator & Data Analyzer");
  console.log("----------------------------------------");

  const num1 = getValidNumberInput("Enter the first number: ");
  const operator = getValidOperatorInput("Enter operator (+, -, *, /, %, **): ");
  const num2 = getValidNumberInput("Enter the second number: ");

  let result;
  switch (operator) {
    case "+":
      result = add(num1, num2);
      break;
    case "-":
      result = subtract(num1, num2);
      break;
    case "*":
      result = multiply(num1, num2);
      break;
    case "/":
      result = divide(num1, num2);
      break;
    case "%":
      result = modulo(num1, num2);
      break;
    case "**":
      result = power(num1, num2);
      break;
    default:
      result = "Unknown operator";
  }

  /* ============================
   * 4) DATA TYPE ANALYSIS
   * ========================== */
  console.log(`\nResult: ${result}`);
  console.log(`Type  : ${typeof result}`);

  if (typeof result === "number") {
    if (result > 0) console.log("It is a positive number.");
    else if (result < 0) console.log("It is a negative number.");
    else console.log("It is zero.");

    const isInt = Number.isInteger(result);
    console.log(`Number type: ${isInt ? "Integer" : "Floating-point"}`);

    console.log(isInt ? (result % 2 === 0 ? "Even" : "Odd") : "Cannot determine even/odd for non-integer values.");

    if (result > 0 && isInt && result % 2 === 0) {
      console.log("The number is positive AND even.");
    }
    if (result < 0 || result === 0) {
      console.log("The number is negative OR zero.");
    }
  } else if (typeof result === "string") {
    console.log(`Error Message: ${result}`);
  } else {
    console.log(result ?? "Result is undefined or null, something went wrong!");
  }

  /* ============================
   * 5) EXIT MECHANISM
   * ========================== */
  const again = prompt("\nDo you want to perform another calculation? (yes/no): ")?.trim().toLowerCase();
  if (again === "no") {
    console.log("Goodbye!");
    break;
  }
}
