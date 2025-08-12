// CLASS 10

// OR (||) : Salah satu benar maka hasil benar
let hour = 19;
if (hour < 10 || hour > 18) {
  if (hour > 18) {
    console.log("Kantor TUTUP karena sudah jam", hour);
  } else {
    console.log("Kantor TUTUP karena masih jam", hour);
  }
} else {
  console.log("Kantor sudah buka, karena sudah jam", hour);
}

/////////////////////////////////////////////////////////////////////////////
console.log("\n");

// AND (&&) : Salah satu salah maka hasil salah
let makan = true;
let cuciPiring = true;
if (makan == true && cuciPiring == true) {
  console.log("Budi sudah boleh bermain");
} else {
  if (makan == false) {
    console.log("Budi, makan dulu...");
  }
}
if (cuciPiring == false) {
  console.log("Budi, cuci piring dulu... Jangan malas!!");
}

/////////////////////////////////////////////////////////////////////////////
console.log("\n");

// PERBEDAAN == DENGAN ===
let umur = "5";
if (umur === 5) {
  //tinggal ubah == atau === untuk melihat hasil
  console.log("Sudah lebih dari 4 tahun");
} else {
  console.log("Tipe datanya beda boss");
}

/////////////////////////////////////////////////////////////////////////////
console.log("\n");

// NOT (!) > Berkebalikan dari nilai
console.log(!true); // Maka hasilnya FALSE
console.log(!false); // Maka hasilnya TRUE

// Nullish Coalescing Operator (??) : Memperlakukan null dan undefined secara serupa.
let user = "Rudi"; //Jika let user = undefined >> maka hasilnya Anonymous
console.log(user ?? "Anonymous");
// " " != null (null artinya hampa)

let userInput = "Jessica";
let username = userInput ?? "Guest";
if (username === "Guest") {
  console.log("Tidak ada username yang diberikan");
} else {
  console.log(`Selamat datang, ${username}`);
}

/////////////////////////////////////////////////////////////////////////////
console.log("\n");

// ?? tdk boleh ada && atau || : alasan keamanan, kecuali di tandai dengan ()
if ((true && false) ?? true) {
  console.log("true");
} // Hasilnya tidak keluar apapun
// ?? menyediakan cara singkat utk memilih nilai "terdefinisi" pertama dari daftar

// LOOPING
// 1. (COUNTED) FOR : Uda tau perputaran sampai berapa kali/ter-ukur/ter-hitung
// 2. (UNCOUNTED) WHILE & DO....WHILE : Tdk ada waktu perputaran sampai brp kali

/////////////////////////////////////////////////////////////////////////////
console.log("\n");

// Akan melelahkan jika dilakukan hal yg sama ber-ulang apalagi dalam jumlah yg banyak
console.log("Nama saya Christina");
console.log("Nama saya Christina");
console.log("Nama saya Christina");

console.log("\n");
// Oleh karena itu dilakukan rumus LOOP yg seperti ini:
// Jumlah per-ulangan bisa di ubah dari nilai i nya
// LOOPING : akan berhenti jika pakai FOR
// Artinya i yg dimulai dari O, yg di ulang sampai kurang sama dgn 10 dan bertambah 1, hasilnya ada 11 karena dimulai dari nol
for (let i = 0; i <= 10; i++) {
  console.log("Christina adalah nama saya");
}

////////////////////////////////////////////////////////////////
console.log("\n");
//1. LOOPING : WHILE
// Struktu:
// while(parameter_kondisi){
//    kode yg ingin dijalankan
// }

// Ini hasilnya akan looping secara infinity
// solusi hentikan: klik ctrl C >berkali kali sampai looping nya berhenti
// Cara lain: klik kanan + kill terminal
// let i = 0;
// while (i < 3) {
//     console.log(i)      // ini hasil nya looping, jgn dihidupkan, ini hanya contoh
// }

// Hasilnya akan keluar angka dari nilai O sampai 4
let i = 0;
while (i < 5) {
  // Jika ini kondisi angkanya 0, maka tidak akan keluar apapun
  console.log(i);
  i++;
}

/////////////////////////////////////////////////////////////////////////////
console.log("\n");

// WHILE : Angka perulangan nya ter-ukur jumlahnya
// 2. LOOPING: DO...WHILE > Masih ada konsep trial, akan coba dulu 1 kali
/* Struktur:
do{
   // Kode yang ingin dijalankan
    }
   while(parameter_kondisi);
*/
// Hasilnya sama dengan cara While di atas
console.log("DO WHILE");
let j = 0;
do {
  console.log(j);
  j++;
} while (j < 5); // Jika kondisi angkanya 0 maka akan keluar satu angka yaitu 0, karena dia trial 1 angka dulu
// Contohnya: tester, percobaan sebelum subcribtion

/////////////////////////////////////////////////////////////////////////////
console.log("\n");
console.log("FOR");
//3. LOOPING : FOR >
/* Structur:
for(inisialisasi; kondisi; step){
    // Kode yang ingin dijalankan
}
*/
// Akan muncul angka mulai dari 0 sampai 9 total 10
// Bacanya: kondisi awal nya: 0, & akan tny ke kondisi, tny k caounter apakah kurang dari 10, lalu jalan ke paling bwh, stlh di console baru di counter++/increment. Dan akhirnya muter lagi dari awal hingga nilainya 10 yaitu nilai False dan selesai.
for (let counter = 0; counter < 10; counter++) {
  console.log(counter);
}

/////////////////////////////////////////////////////////

console.log("\n");
console.log("BREAK");

//4. KEYWORD : BREAK & CONTINUE
// BREAK : Menghentikan LOOP secara paksa
// i kalo uda 5 pokoknya saya mau berhenti
for (let i = 0; i <= 5; i++) {
  console.log(i);
  if (i == 5) {
    break;
  }
}

/////////////////////////////////////////////////////////

console.log("\n");
console.log("CONTINUE");
// CONTINUE : Mengabaikan
// angka akan dimulai dari 0 hingga 7 (<8), jika <=8 maka hingga 8, tapi tanpa angka 3
// angka 3 ny gak di ajak
// Jika console.log(i); berada di bwh console.log(i); maka hasilnya hanya muncul angka 3 aja, yg lain tdk muncul (hanya muncul nilai continue nya aja)
for (let i = 0; i <= 8; i++) {
  if (i == 3) {
    continue;
  }
  console.log(i);
}

/////////////////////////////////////////////////////////

console.log("\n");
console.log("SWITCH");

// SWITCH : Membandingkan nilai variabel/ekspresi dgn nilai potensial dan mengeksekusi kode yg sesuai berdsrkan kecocokkan.
// Sama dengan IF, bedanya ini pakai Switch
// case ibarat seperti IF
// Default ibarat seperti Else
// Seperti saklar
// Break wajib di dalam case
/* Struktur:
    switch(ekspresi_kondisi) {
    case "1":
        // kode yang akan dijalankan
        break;
     case "2":
        // kode yang akan dijalankan
        break;
    default:    // tidak perlu ada break
    // kode yang akan dijalankan
    }
*/
// Pemberitahu yg keluar berdasarkan Grade
let grade = "C";

switch (grade) {
  case "A":
    console.log("Nilai anda rentang dari 91-100");
    break;
  case "B":
    console.log("Nilai anda rentang dari 81-90");
    break;
  case "C":
    console.log("Nilai anda rentang dari 71-80 ");
    break;
  default:
    console.log("Anda tidak lulus");
}

/////////////////////////////////////////////////////////

console.log("\n");
console.log("SWITCH - Kalkulator");

let operator = "+";
nilai1 = 10;
nilai2 = 20;

switch (operator) {
  case "+":
    console.log(nilai1 + nilai2);
    break;
  case "-":
    console.log(nilai1 - nilai2);
    break;
  case "/":
    console.log(nilai1 / nilai2);
    break;
  case "*":
    console.log(nilai1 * nilai2);
    break;
  case "**":
    console.log(nilai1 ** nilai2);
    break;
}
/////////////////////////////////////////////////////////

// KAPAN HARUS PAKAI SWITCH dibanding IF...ELSE ???????
// Ketika jlh kondisinya sedikit, bisa pakai IF...ELSE krna lebih sederhana. Jika kondisinya banyak maka pakai SWITCH
// Keterbacaan: SWTICH memberikan struktur lebih jelas, jika pakai IF...ELSE bisa menjadi rumit dan sulit diikuti jika ada banyak kondisi
// Tapi di dalam contoh kalkulator di atas boleh pakai IF...ELSE
// SWITCH: fitur fall-through > menjalankan kode yang sama agar hasil lebih tepat

/////////////////////////////////////////////////////////////////////////////
console.log("\n");
console.log("SWITCH- if...else");

if (operator == "+") {
  console.log(nilai1 + nilai2);
} else if (operator == "-") {
  console.log(nilai1 - nilai2);
}

/////////////////////////////////////////////////////////

// FUNCTION
// Berbicara tentang hasil, contoh: tempe orek
// Kumpulan kode yang di panggil dengan 1 nama
// Method/Metode : function yg bekerja dlm sebuah object (.lenght(), number(), integer(), .append(), .map(), .toUpperCase(), .toLowerCase(), .......)
// Method: berjalan hanya jika ada object nya
console.log("\n");
console.log("Contoh Method");

let nama = "Christina";
console.log(nama.toUpperCase());

/////////////////////////////////////////////////////////

console.log("\n");
console.log("FUNCTION");

// FUNCTION DECLARATION
/* Function namaFungsi (parameter) {
    // list kode yang akan dijalankan
}
*/

function showMsg() {
  console.log("Haii Coach....");
}
showMsg(); // Invoke (pemanggilan fungsi)
showMsg();
showMsg();
showMsg();

// ini bisa digabung dengan looping.
for (let i = 0; i < 5; i++) {
  showMsg();
}

/////////////////////////////////////////////////////////

console.log("\n");
console.log("FUNCTION-contoh lain");

function fuYungHai() {
  console.log("Fu Yung Hai");
}
fuYungHai();
fuYungHai();
fuYungHai();

/////////////////////////////////////////////////////////

console.log("\n");
console.log("LOCAL VS GLOBAL VARIABEL");

// LOCAL VS GLOBAL VARIABEL
// Variabel hanya bisa di akses oleh yg lokal kalau gk ya sbg global
let fasum = "Kolam Renang Umum";
function rumahDicky() {
  console.log(fasum);
}
rumahDicky();

// let fasilitasUmum = "Taman"
// function rumahDolly(){
//     let fasilitasDolly = "Private Pool"
//     console.log(fasum);
// }
// console.log(fasilitasDolly);   // Tidak boleh di akses di luar karena nanti akan eror
// rumahDolly();

/////////////////////////////////////////////////////////

console.log("\n");
console.log("SHADOWING VARIABEL");

// yg ini kenapa tdk bisa????????????????????
// SHADOWING VARIABEL
let pelajar = "Farizi";

function greeting() {
  pelajar = "Farizka"
  console.log("Hello", pelajar);
}
console.log("Hello....", pelajar);
greeting();

/////////////////////////////////////////////////////////

console.log("\n");
console.log("PARAMETERS DAN ARGUMENTS");

// PARAMETERS DAN ARGUMENTS
/* Struktur:
function namaFungsi(parameter){ -> Parameter adanya di dlm fungsi
  // kode yang bekerja dan memanggil parameter
}
namaFungsi(argument) -> Argumen hanya berada pada pemanggilan (invoke)
*/
function tanyaAlamat(kec, kel, kota) {
  console.log(`kec : ${kec}, kel : ${kel}, kota : ${kota}`);
}
tanyaAlamat("Bantan", "Tembung", "Medan");
tanyaAlamat("Karawaci", "Cinmone", "Tangerang");
tanyaAlamat("Jakarta", "Jakarta", "Jakarta");

/////////////////////////////////////////////////////////

console.log("\n");
console.log("KEYWORD RETURN");

// KEYWORD RETURN : Mengembalikan nilai ke dalam fungsi (function)
function tambah(a, b) {
  return a + b;
}
let tambahAngka = tambah(10, 6);
console.log(tambahAngka);

/////////////////////////////////////////////////////////

// FUNCTION EXPRESSION
// Berikut adalah konsep dasar yg menjadikan function expression
function salam() {
  return "Hello, bagaimana harimu hari ini??";
}
let salamToday = salam;
console.log(salamToday());

/////////////////////////////////////////////////////////

console.log("\n");
// Fungsi tanpa nama
let pembuka = function () {
  console.log("Selamat Pagi");
};
pembuka();

/////////////////////////////////////////////////////////////////////////////
console.log("\n");
console.log("CALLBACK");

/////////////////////////////////////////////////////////

// CALLBACK FUNCTION : Fungsi yang di panggil kembali
function ask(question, yes, no) {
  if (true) yes();
  else no();
}

function OKE() {
  console.log("You say okayyyy");
}
function NO() {
  console.log("You say NOOOOOO");
}
ask("Are you okay??", OKE, NO);

//////////////////////////////////////////////////
console.log("\n");
console.log("CARA LAIN : CALLBACK");

function tanya(pertanyaan, ada, tidak) {
  if (true) ada();
  else tidak();
}

tanya(
  "Apakah ada yang lain lagi??",
  function () {
    console.log("Ya ada lagi");
  },
  function () {
    console.log("Sudah tidak ada");
  }
);

/////////////////////////////////////////////////////////

console.log("\n");
console.log("Studi kasus: kalkulator");

// Studi kasus : Kalkulator
function calculator(a, b, operator) {
  return operator(a, b);
}
function perkalian(x, y) {
  return x * y;
}
function penjumlahan(x, y) {
  return x + y;
}
let result = calculator(3, 5, penjumlahan); //tergantung ini yg dipanggil
console.log(result);

/////////////////////////////////////////////////////////

console.log("\n");
console.log("ARROW FUNCTION");

// ARROW FUNCTION (=>)
let kamar = () => {
  return "Kamar Melati di lantai 1";
};
console.log(kamar());

////////////////////////////////////////////////////
console.log("\n");
console.log("ARROW FUNCTION - Oneline code");

let kost = () => "Ada di Mandala";
console.log(kost());

////////////////////////////////////////////////////
console.log("\n");
console.log("ARROW FUNCTION - Oneline code 2");

let alamat = (kota, kodePos) => `${kota} dan ${kodePos}`;
console.log(alamat("Tangerang", 12033));

////////////////////////////////////////////////////
console.log("\n");
console.log("ARROW FUNCTION - Oneline code 3");

let christina = (domisili, jurusan) => `${domisili} dan ${jurusan}`;
console.log(christina("Medan", "Manajemen Bisnis"));

//////////////////////////////////////////////////////////
console.log("\n");
console.log("ARROW FUNCTION - Oneline code 4");

let age = 16;
let welcome = age >= 18 ? () => console.log("Anda boleh masuk") : () => console.log("Anda belum cukup umur");
welcome();

//////////////////////////////////////////////////////////

console.log("\n");
console.log("ARROW FUNCTION - multiline code");

// Arrow Function : bisa multiline code
let sayHi = (nama) => {
  console.log("Haii saya adalah", nama);
};
sayHi("Christina");

////////////////////////////////////////////////////////////
console.log("\n");
console.log("ARROW FUNCTION - multiline code");

// bagaimana tau dia jawab ya atau tidak????????????????????????????

// CALLBACK dengan Arrow Function
// Anonymous Arrow Function : Arrow function tanpa nama
let kipas = (berputar, ya, tidak) => {
  if (true) ya();
  else tidak();
};
kipas(
  "Apakah putarnya kencang??",
  () => console.log("Yaaa... kencang sekali"),
  () => console.log("Tidak, tidak terlalu kencang")
);

/////////////////////////////////////////////////////////////////////////////
console.log("\n");
console.log("Coba pembukaan kalkulator");
