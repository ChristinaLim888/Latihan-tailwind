// Function dan Method > serupa tapi tak sama
// Function : berdiri sendiri
// Method : dibangun menggunakan objek
console.log("Contoh Membuat Method");

let user = {
  username: "renday123",
  email: "renday@gmail.com",
  password: "123",
  isAdmin: false,
};

user.login = function () {
  console.log("Login, menggunakan email dan password");
};

user.logout = function () {
  console.log("Logout, menggunakan button logout");
};
console.log(user);

////////////////////////////////////////
console.log("\n");

// 1.Contoh Membuat Method
let manusia = {
  nama: "Dicky",
  umur: 30,
};

manusia.ngomong = function () {
  console.log("Haiii, saya Dicky!!");
};

manusia.ngomong();
console.log(manusia);

///////////////////////////////////////////////////////////////////
console.log("\n");
console.log("2.Object-Oriented Programming");
// 2. Object-Oriented Programming
// Cara membuat property baru di object
// a. Tdk ada property nya
// b. Gunakan nama object sbg object
// Contoh:
// let user = { name: "Rudy",}
// user.umur = 20;
// user.sayHi = function () { // kode disini}
console.log("2a.Method Shorthand");
// Entitas => object
// Entitas adalah object itu sendiri
// Perilaku adalah sebuah fungsi atau method
// Contoh: let person = { ngomong()};   >>>> Person: Entitas
// Contoh2: let hewan = {
//            jenis: "herbivora",  >>>> jenis: property, herbivora: value of prop
//             run(){            >>>>Perilaku
//             // method}};      >>>>Perilaku

// Method Shorthand: menghilangkan kata "function" dan lngsng menulis sayHi(), Contoh:
// kenapa tidak keluar hasil ya????????????????????????????
let human = {
  nama: "Dolly",
  sayHi() {
    console.log("Hello");
  },
};

///////////////////////////////////////////////////////////////////
console.log("\n");
console.log("2b.Keyword 'THIS' dalam Method");
// 2b. Keyword "THIS" dalam Method
// Biasanya, method dlm sebuah objek perlu mengakses informasi yg disimpan dlm objek tsb utk melakukan tugasnya. Untuk mengakses objek itu sendiri, method dpt menggunakan keyword "THIS".
// Keyword "THIS" : itu merepresentasikan object itu sendiri
let person = {
  panggilan: "Rendy",
  isBasketPlayer: true,
  slamDunkSkill() {
    console.log(`Hello... ${this.panggilan} is SlamDunk player`);
  },
  running() {
    console.log(`and ${this.panggilan} is running too.`);
  },
};
person.slamDunkSkill();
person.running();

// Ini adalah cara suatu objek utk merepresentasikan objek itu sndri.
// THIS : kita melakukan encapsulation, fungsinya agar bisa mengakses sesuatu
// Jika tanpa THIS maka hasil akan error
// THIS : Merujuk objek yg ada di dlm nya, dan biar lebih flexibel

console.log("\n");
// THIS : Ini tidak terikat
let staff = {
  peserta: "Hartono",
};
let admin = {
  peserta: "Hendy",
};
function isLogin() {
  console.log(`${this.peserta} is login`);
}
staff.login = isLogin;
admin.login = isLogin;

staff.login();
admin.login();

///////////////////////////////////////////////////////////////////
console.log("\n");
console.log("2c.Memanggil tanpa objek: THIS == Undefined");
// 2c. Memanggil tanpa objek: THIS == Undefined (detik 48.00)
// masih kurang ngerti ???????????????????????????????????????

///////////////////////////////////////////////////////////////////
console.log("\n");
console.log("2d.Arrow Function tdk memiliki THIS");
// 2d. Arrow Function tidak memiliki THIS
// masih kurang ngerti ??????????????????????????????????????

///////////////////////////////////////////////////////////////////
console.log("\n");
console.log("3.Construktor, Operator 'new'");
// 3. Construktor, Operator "new"
// Construktor function dimulai dengan huruf kapital
// Construktor function sebaiknya dijalankan hanya dgn operator 'new'
// tidak mengerti, 'nama' mana yg jadi pembeda ????????????????????
// seperti membuat template utk nambahin object lebih bnyk biar gk ribet????????????????????????
// kenapa tidak muncul?????????????????????????????????

// function User(nama) {
//     this.nama = nama;
//     this.isAdmin = false;
// }
// let user = new User("Jack");
// console.log(user);
// console.log(user.nama);

///////////////////////////////////////////////////////////////////
console.log("\n");
console.log("4.New Function");
// 4. New Function () {....}
// detik: 1.06.03
let anggota = new (function () {
  this.name = "Rudy";
  this.isAdmin = false;
})();
console.log(anggota);

///////////////////////////////////////////////////////////////////
console.log("\n");
console.log("5.Construktor Mode Test");
// 5. Construktor Mode Test > Tidak terlalu penting
// Wajib pakai THIS
console.log("5a.Return dari Construktors");
// Biasanya, constructors tdk memiliki pernyataan 'return'
// Tugas mrka adalh menulis semua hal yg diperlukan ke dlm 'THIS', dan itu secara otomatis menjadi hasil akhir
// Namun, jika ada pernyataan 'return', maka aturannya sederhana:
// a.Jika 'return' dipanggil dgn sebuah objek, maka objek tsb dikembalikan, bkn 'THIS'
// b.Jika 'return' dipanggil dgn sebuah 'primitive', itu akan diabaikan.
function BigUser() {
  this.name = "Big Show";
  return {
    name: "Rey Masterio",
  };
}

console.log(new BigUser().name);

function SmallUser() {
  this.name = "Lebron";
  return;
}
console.log(new SmallUser().name);

///////////////////////////////////////////////////////////
console.log("5b.Menghilangkan Tanda Kurung");
// 5b. Menghilangkan Tanda Kurung >> hanya info saja
// Bisa dihilangkan tanda kurung yg konstruktornya tdk ada parameter/isi, nanum ini bukan suatu yg aman, karena memang di sarankan di pakai aja walaupun kosong

////////////////////////////////////////////////////////////////
console.log("5c.Methods dalam Constructor");
// 5c. Methods dalam Constructor
// Utk membuat objek memberikan banyak fleksibilitas. Kita bisa menambahkan properti maupun methods ke dalam 'THIS'
function UserBesar(name) {
  this.name = name;

  this.sayHallo = function () {
    console.log("My name is: " + this.name);
  };
}
let johnChena = new UserBesar("Johnnns");
johnChena.sayHallo();

///////////////////////////////////////////////////////////////////
console.log("\n");
console.log("6.Optional Chaining '?'");
// 6. Optional Chaining '?'
// Utk properti yg blm ada, namun nanti bakal ada
let userj = {};
console.log(userj.name?.firstname); // name? : artinya nanti bakal ada namanya tapi tdk skrng. Oleh karena itu, hasilnya 'undefined'. Jika tidak taruh '?' maka hasilnya akan eror.

// Method of Primitives
// string, null, undefined, number, bigint, boolean, symbol

///////////////////////////////////////////////////////////////////
console.log("\n");
console.log("7.Array'");

// Arrays > sering di gunakan : struktur data yg digunakan utk menyimpan koleksi nilai yg BER-URUTAN.
// Object tidak ber-urutan tapi berdasarkan i, menyimpan key dan value
// Arrays berguna saat menyimpan data elemen
// Array memiliki simbol>>> []

// 1. Deklarasi Array
// - Constructor Array (not rekomended)
let arrConstructor = new Array();

// - Array literal > lebih simple, lebih gampang
let arrLiteral = [];

// Contoh
let vipPerson = ["dicky", "Berta", "Doddy", "Fatar"];

// 2. Mengakses dan Mengelola Elemen Array
// Cara mengakses array disebut indexing (selalu dimulai dari nol)
// Indexing : start from zero

console.log(vipPerson[3]); // akan muncul Fatar

// Mengelola Array
vipPerson[2] = "Ronaldo"; // Mengubah index 2 yaitu Doddy menjadi Ronaldo
console.log(vipPerson);
