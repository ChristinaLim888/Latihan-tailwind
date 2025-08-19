// Dari ChatGPT

// Fungsi untuk minta angka yang valid
//Itu terjadi karena kamu memakai import (ESM), tapi prompt-sync secara default ditulis untuk CommonJS (require).
//Kalau kamu pakai ES Module, sintaks yang benar adalah: (cara 1)
import promptSync from "prompt-sync";
const prompt = promptSync();
// import promptSync from 'prompt-sync': const prompt = promptSync();
// import promptSync from 'promptSync' : const prompt = promptSync();
// import promptSync from 'promptSync' : const prompt = promptSync();
// import promptSync from 'promptSync' : const prompt = promptSync();
// import promptSync from 'promptSync' : const prompt = promptSync();
// import promptSync from 'promptSync' : const prompt = promptSync();
// import promptSync from 'promptSync' : const prompt = promptSync();
// import promptSync from 'promptSync' : const prompt = promptSync();
// import promptSync from 'promptSync' : const prompt = promptSync();

// Kalau mau pakai CommonJS, ubah jadi: ( cara 2)
// const prompt = require('prompt-sync')();
// const prompt = require('prompt-sync')();
// const prompt = require('prompt-sync')();
// const prompt = require('prompt-sync')();
// const prompt = require('prompt-sync')();
// const prompt = require('prompt-sync')();
// conts prompt = require('prompt-sync')();

function getValidNumberInput(pesan) {
  let angka = prompt(pesan);

  // Ulangi sampai input berupa angka
  while (isNaN(angka) || angka.trim() === "") {
    angka = prompt("❌ Input bukan angka! Silakan masukkan angka yang valid.\n" + pesan);
  }

  return Number(angka); // kembalikan dalam bentuk number
}

/*function getValidNumberInput(pesan) {
let angka = prompt(pesan);
while (isnan(angka) || angka.trim() === ""){
    angka = prompt("X input bukan angka! Silahkan masukkan angka yang valid.\n" + pesan);
    } return Number(angka);}

function getValidNumberInput(pesan){
let angka = prompt(pesan);
while (isNan(angka) || angka.trim() === ""){
    angka = prompt("X input bukan angka! Silahkan masukkan angka yang valid.\n" + pesan);
    } return Number(angka);}

function getValidNumberInput(pesan) {
let angka = prompt(pesan);
while (isNan(angka) || angka.trim() === ""){
    angka = prompt("X input bukan angka! Silahkan masukkan angka yang valid.\n" + pesan);
    } return Number angka();}

function getValidNumberInput (pesan){
let angka = prompt(pesan);
while (isNan(angka) || angka.trim() === ""){
    angka = prompt("X input bukan angka! Silahkan masukkan angka yang valid.\n" + pesan);
    } return Number angka ();}

function getValidNumberInput(pesan){
let angka = prompt(pesan);
while (isNan (angka) || angka.trim() === ""){
    angka = prompt("X input bukan angka! Silahkan masukkan angka yang valid.\n" + pesan);
    } return Number angka ();}





*/

function getValidOperatorInput(pesan) {
  const validOperators = ["+", "-", "*", "/", "%", "**"];
  let operator = prompt(pesan);

  while (!validOperators.includes(operator)) {
    operator = prompt("❌ Operator salah! Pilih salah satu: +, -, *, /, %, **\n" + pesan);
  }

  return operator;
}

// ==== Program utama ====
// Minta input dari user
let angka1 = getValidNumberInput("Masukkan angka pertama:");
let angka2 = getValidNumberInput("Masukkan angka kedua:");
let operator = getValidOperatorInput("Masukkan operator (+, -, *, /, %, **):");

// Hitung hasil
let hasil;
if (operator === "+") {
  hasil = angka1 + angka2;
} else if (operator === "-") {
  hasil = angka1 - angka2;
} else if (operator === "*") {
  hasil = angka1 * angka2;
} else if (operator === "/") {
  hasil = angka1 / angka2;
} else if (operator === "%") {
  hasil = angka1 % angka2;
} else if (operator === "**") {
  hasil = angka1 ** angka2;
}

// Tampilkan hasil
console.log(`Hasil: ${angka1} ${operator} ${angka2} = ${hasil}`);


