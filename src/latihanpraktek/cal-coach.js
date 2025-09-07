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
const prompt = require('prompt-sync') ({sigint:true});
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
/*

*/

function getValidNumberInput(message) {
  while (true) {
    // loop terus sampai input valid -> kita keluar dengan `return`
    const raw = prompt(message).trim(); // baca input (string) dan hilangkan spasi pinggir
    const n = Number(raw); // konversi string ke Number (tidak pakai parseFloat)
    if (raw !== "" && !Number.isNaN(n)) return n; // jika bukan string kosong dan bukan NaN -> kembalikan angka, raw !== '' supaya enter kosong tidak dianggap 0
    console.log("Invalid number. Please enter a valid number."); // pesan kesalahan dan ulangi loop
  }
}
/*function getValidNumberInput(message) {
    while (true) {
    const raw = prompt(message).trim();
    const n = number(raw); 
    if (raw !== "" && !Number.isNan(n)) return n;
    console.log("Invalid number. Please enter a valid number.");   }}

    function getValidNumberInput(message) {
    while (true) {
    const raw = prompt(message).trim();
    const n = Number(raw);
    if (raw !== "" && !Number.isNan(n)) return n;
    console.log("Invalid number. Please enter a valid number.");   }}

    function getValidNumberInput (message) {
    while (true) {
    const raw = prompt(message).trim();
    const n = number(raw);
    if (raw !== "" && !Number.isNan(n)) return n;
    console.log("Invalid number. Please enter a valid number.");  }}

    function getValidNumberInput (message) {
    while (true) {
    const raw = prompt(message).trim();
    const n = Number(raw);
    if (raw !== "" && !Number.isNan(n)) return n;
    console.log("Invalid number. Please enter a valid number.");   }}

*/
function getValidOperatorInput(message) {
  const valid = ["+", "-", "*", "/", "%", "**"]; // daftar operator yang diperbolehkan (note: '**' = pangkat)
  while (true) {
    // loop sampai operator valid dimasukkan
    const op = prompt(message).trim(); // ambil input operator, hapus spasi
    if (valid.includes(op)) return op; // kalau ada di daftar valid -> kembalikan operator
    console.log("Invalid operator. Use one of: +, -, *, /, %, **"); // pesan kesalahan + ulangi
  }
}
/* function getValidOperationInput(message) {
    const valid = ['+', '-', '*', '/', '%', '**'];
    while (true) {
      const op = prompt (message).trim();
      if (valid.includes(op)) return op;
      console.log("Invalid operator. Use one of: +, -, *, /, %, **"); }}

function getValidOperationInput(message) {
  const valid = ['+', '-', '*', '/', '%', '**'];
  while (true) {
    const op = prompt(message).trim();
    if (valid.includes(op)) return op;
    console.log("Invalid operator. Use one of: +, -, *, /, %, **");  }}

function getValidOperationInput (message) {
  const valid = ['+', '-', '*', '/', '%', '**'];
  while (true) {
    const op = prompt(message).trim():
    if (valid.includes(op)) return op;
    console.log ("Invalid operator. Use one of: +, -, /, *, %, **");   } }

function getValidOperationInput (message) {
  const valid = ['+', '-', '*', '/', '%', '**'];
  while (true) {
    const op = prompt(message).trim();
    if (valid.includes(op)) return op;
    console.log ("Invalid operator. Use one of: +, -, /, *, %, **"); }}





*/

/* ============================
 * 2) BASIC ARITHMETIC OPS
 * ========================== */
function add(a, b) {
  // fungsi untuk penjumlahan dua nilai: a + b
  return a + b; // kembalikan hasil penjumlahan (perhatikan: jika a atau b string, + bisa melakukan concatenation)
}
function subtract(a, b) {
  // fungsi untuk pengurangan: a - b
  return a - b; // kembalikan selisih (JS mencoba konversi ke Number jika operand string)
}
function multiply(a, b) {
  // fungsi untuk perkalian: a * b
  return a * b; // kembalikan hasil kali
}
function divide(a, b) {
  // fungsi untuk pembagian: a / b
  return b === 0 ? "Error: Division by zero!" : a / b; // jika b === 0 -> kembalikan string error, selain itu -> kembalikan hasil pembagian
}
function modulo(a, b) {
  // fungsi untuk sisa bagi: a % b
  return b === 0 ? "Error: Division by zero!" : a % b; // jika b === 0 -> kembalikan string error, selain itu -> kembalikan remainder JS
}
function power(a, b) {
  // fungsi pemangkatan: a ** b
  return a ** b; // kembalikan a pangkat b (percobaan: b negatif/pecahan punya behavior spesifik)
}

/* function add(a,b) {return (a + b);}
  function substract (a , b) {return (a -b);}
  function multiply (a , b) {return (a * b);}
  function devide (a , b) {return b === 0 ? "Error: Division by zero!" : a / b;}
  function modulo (a , b) {return b === 0 ? "Error: Division by zero!" : a % b;}
  function power (a , b) {return (a ** b);}

*/

/* ============================
 * 3) MAIN CALCULATOR LOOP
 * ========================== */
while (true) {
  // loop utama, berjalan terus-menerus (infinite loop)
  // sampai nanti dihentikan manual (Ctrl+C) atau ditambah logika break.
  console.log("----------------------------------------"); // cetak garis pemisah agar tampilan rapih di terminal
  console.log("Interactive Calculator & Data Analyzer"); // judul program supaya user tahu sedang pakai kalkulator interaktif
  console.log("----------------------------------------"); // cetak lagi garis pemisah sebagai dekorasi/formatting

  const num1 = getValidNumberInput("Enter the first number: ");
  // panggil fungsi getValidNumberInput → minta user input angka pertama
  // fungsi ini sudah divalidasi: input harus angka, tidak boleh kosong
  // hasil valid dikembalikan ke variabel num1
  const operator = getValidOperatorInput("Enter operator (+, -, *, /, %, **): ");
  // panggil fungsi getValidOperatorInput → minta user input operator
  // operator harus salah satu dari daftar valid (+, -, *, /, %, **)
  // hasil valid dikembalikan ke variabel operator
  const num2 = getValidNumberInput("Enter the second number: ");
  // panggil lagi getValidNumberInput → minta angka kedua
  // hasilnya disimpan ke variabel num2
  let result; // deklarasi variabel result untuk menampung hasil perhitungan nanti
/* while (true) {
console.log("---------------------------------------");
console.log("Interactive Calculator & Data Analyzer");
console.log("---------------------------------------");
const num1 = getValidNumberInput("Enter the first number: ");
const operator = getValidOperatorInput ("Enter operator (+, -, *, /, %, **): ");
const num2 = getValidNumberInput ("Enter the second number: ");
let result;

while (true) {
console.log("---------------------------------------");
console.log("Interactive Calculator & Data Analyzer");
console.log("---------------------------------------");
const num1 = getValidNumberInput ("Enter the first number: ");
const operator = getValidOperatorInput ("Enter operator (+, -, /, *, %, **): ");
const num2 = getValidNumberInput ("Enter the second number:  ");
let result;
*/

  switch (operator) {  // switch dipakai untuk memilih logika berdasarkan operator yang user pilih
    case "+":
      result = add(num1, num2); // jika operator '+', panggil fungsi add → num1 + num2
      break;
    case "-":
      result = subtract(num1, num2); // jika operator '-', panggil fungsi subtract → num1 - num2
      break;
    case "*":
      result = multiply(num1, num2); // jika operator '*', panggil fungsi multiply → num1 * num2
      break;
    case "/":
      result = divide(num1, num2); // jika operator '/', panggil fungsi divide → num1 / num2 (cek error divide by zero)
      break;
    case "%":
      result = modulo(num1, num2); // jika operator '%', panggil fungsi modulo → num1 % num2 (cek error divide by zero)
      break;
    case "**":
      result = power(num1, num2); // jika operator '**', panggil fungsi power → num1 ** num2 (pangkat)
      break;
    default:
      result = "Unknown operator";
    // jika operator tidak dikenal (harusnya tidak terjadi karena validasi sudah ada),
    // fallback ini dipakai sebagai pengaman
  }
/* switch (operator) {
case "+": result = add (num1, num2); break;
case "-" : result = substract (num1, num2); break;
case "*" : result = multiply (num1, num2); break;
case "/" : result = divide (num1, num2); break;
case "%" : result = modulo (num1, num2); break;
case "**" : result = power (num1, num2); break;
default: result = "Unknown operator";}

*/

  /* ============================
   * 4) DATA TYPE ANALYSIS
   * ========================== */
  console.log(`\nResult: ${result}`);
  // cetak hasil perhitungan, dengan \n supaya ada baris kosong sebelum "Result"
  // contoh: "Result: 10"
  console.log(`Type  : ${typeof result}`);
  // cetak tipe data hasil perhitungan
  // typeof bisa mengembalikan: "number", "string", "undefined", "object", dll.
  // contoh: "Type  : number"
 /* 




*/

  if (typeof result === "number") {
    // jika hasil perhitungan berupa angka (number), lakukan analisis lebih lanjut
    if (result > 0) console.log("It is a positive number."); // kalau hasil lebih dari 0 → tulis keterangan "positif"
    else if (result < 0) console.log("It is a negative number."); // kalau hasil kurang dari 0 → tulis keterangan "negatif"
    else console.log("It is zero."); // kalau hasil sama dengan 0 → tulis "nol"
 /* 




*/

    const isInt = Number.isInteger(result);
    // cek apakah result bilangan bulat (integer) atau pecahan (float)
    // Number.isInteger(5) → true, Number.isInteger(5.5) → false
    console.log(`Number type: ${isInt ? "Integer" : "Floating-point"}`);
    // tampilkan tipe angka: "Integer" kalau bulat, "Floating-point" kalau pecahan
/* 




*/

    console.log(isInt ? (result % 2 === 0 ? "Even" : "Odd") : "Cannot determine even/odd for non-integer values.");
    // jika integer: cek genap/ganjil
    //   pakai result % 2 === 0 → genap kalau sisa bagi 2 = 0
    // jika bukan integer: tampilkan pesan "tidak bisa menentukan genap/ganjil"
 /* 




*/

    if (result > 0 && isInt && result % 2 === 0) {
      console.log("The number is positive AND even."); // jika result positif DAN integer DAN genap, cetak pesan tambahan
    }
 /* 




*/

    if (result < 0 || result === 0) {
      console.log("The number is negative OR zero."); // jika result negatif ATAU sama dengan nol, cetak pesan tambahan
    }

 /* 




*/

  } else if (typeof result === "string") {
    // kalau result bukan angka, tapi string
    // misalnya karena divide by zero → result = "Error: Division by zero!"
    console.log(`Error Message: ${result}`); // tampilkan pesan error yang ada dalam string
 /* 




*/

  } else {
    // kalau tipe data selain number/string (misalnya undefined/null)
    console.log(result ?? "Result is undefined or null, something went wrong!");
    // tampilkan nilai result jika ada
    // kalau null/undefined, tampilkan pesan default: "something went wrong!"
  }
 /* 




*/

  /* ============================
   * 5) EXIT MECHANISM
   * ========================== */
  const again = prompt("\nDo you want to perform another calculation? (yes/no): ")?.trim().toLowerCase();
  if (again === "no") {
    console.log("Goodbye!");
    break;
  }
}
