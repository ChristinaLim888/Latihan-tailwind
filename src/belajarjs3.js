// HASILNYA BEDA DENGAN DI VIDEO ZOOM MATERI ??????????????????
"use strict";
// OBJECT : Struktur data dgn pasangan key dan value

// 1. Cara membuat object
// - Menggunakan object construktor
// let objConstructor = new Object();
// console.log(objConstruktor);
// // - Menggunakan object literal
// let objLiteral = {};
// console.log(objLiteral);

////////////////////////////////////////////////////////////////
console.log("\n");
console.log("2.Literal dan Properti");
// 2. Literal dan Properti
let user = {
    nama : "Christina",
    alamat : "Medan",
    tinggiBadan : 158,
    isStudentWPH : true,
};
console.log(user);

////////////////////////////////////////////////////////////////
console.log("\n");
console.log("3.Cara Mengakses Nilai dari Object");
// 3. Cara Mengakses Nilai dari Object
// console.log(user.nama); >>> atau dengan cara dibawah
console.log(
    `Saya adalah ${user.nama}, saya tinggal di ${user.alamat} dan mengikuti bootcamp ${user.isStudentWPH == true ? "WPH" : "Yang lain"}`);

////////////////////////////////////////////////////////////////
console.log("\n");
console.log("4.DELETE");    
// 4. Delete : Menghapus Object 
delete user.alamat;
console.log(user);

////////////////////////////////////////////////////////////////
console.log("\n");
console.log("5.COMPUTED PROPERTIES");  
// 5. Computed Properties
let fruit = "apple";
let bag = {
    [fruit]: 5,
};
console.log(bag.apple);

////////////////////////////////////////////////////////////////
console.log("\n");
console.log("6.Nama Object Bebas");  
// 6. Nama Object Bebas
let objNamaBebas = { 0: "nol"};
console.log(objNamaBebas["0"]);   // ini cara yg benar
// console.log(objNamaBebas.0);    // ini cara yg salah

////////////////////////////////////////////////////////////////
console.log("\n");
console.log("7.Operator 'in'");  
// 7. Operator "in" dan Pengujian Eksistensi Properti
// Arti: properti nama apakah ada di objek user?? jika true = ada
let cekNama = "nama" in user;
let cekUmur = "umur" in user;
console.log(cekNama 
    ? "Ada property nama di dalam obj user"
    : "Tidak ada property nama di dalam obj user"
);
console.log(cekUmur 
    ? "Ada property umur di dalam obj user"
    : "Tidak ada property umur di dalam obj user"
);

////////////////////////////////////////////////////////////////
console.log("\n");
console.log("8.LOOPING dengan FOR...IN");  
// 8. LOOPING dengan FOR...IN
// Tujuan: panggil data yg ada aja
for (let key in user) {
    console.log(key);   // data yg di tanya seperti: nama, tinggiBadan, isStudentWPH
    console.log(user[key]);   // isi dari data nya seperti: christina, 158, true
}
// Cara lain
for (let key in user) {
    console.log(`key : ${key} dengan nilai : ${user[key]}`);
}

////////////////////////////////////////////////////////////////
console.log("\n");
console.log("9.Object References and Copying"); 
// 9. Object References and Copying
console.log("Bagian Copying");
let message = "Hello"
let phrase = message
console.log(message)
console.log(phrase)

// KENAPA EROR YA???????????????????????????????
console.log("Bagian Reference");
let toko = {nama : "Sederhana"}
let referensiToko = toko
console.log(referensiToko)
referensiToko.nama = "Mewah"
console.log(toko);

////////////////////////////////////////////////////////////////
console.log("\n");
console.log("10.Perbandingan Berdasarkan Referensi"); 
// 10. Perbandingan Berdasarkan Referensi
// Dua objek hanya di anggap sama jika mereka adalah obje yang sama
let a = 2
let b = 2
console.log(a === b)

// Namun dua objek yg independen akan selalu berbeda meskipun mereka konten yg sama (nilainya independen jd tdk bisa di anggap sama)
// Reference Data Types yg punya nilai independen yaitu:
// a. Array
// b. Object
// c. Function
// d. Class
// e. ....

let obj1 = {}
let obj2 = {}
console.log(obj1 === obj2)

////////////////////////////////////////////////////////////////
console.log("\n");
console.log("11.Const Object dapat Dimodifikasi"); 
// 11. Const Object dapat Dimodifikasi
// Const bersifat imutable, konstant dan tdk bisa di ubah
// Tapi jika objek yg const ini bisa di ubah
// Contoh: dari nama meja coklat menjadi coklat tua
const meja = {nama : "coklat"};
meja.nama = "Coklat Tua"
console.log(meja)

////////////////////////////////////////////////////////////////
console.log("\n");
console.log("12A.Cloning Object dgn Looping"); 
// 12. Cloning dan Merging Objek dengan Object.assign > Jarang
// - Cloning Object dgn Looping
let userloop = {
    buah: "Apel",
    berat: 10,
};
console.log(userloop);

let clone = {};
for (let key in userloop) {
    clone[key] = user[key];
}
clone.buah = "Mangga";
clone.berat = 20;
console.log(clone);

// Note: Dgn mengkloning property, nilai obj asal tdk berubah

console.log("12B.Cloning Object dgn Object.assign"); 
// - Cloning Object dgn Object.assign:
let userAssign = { kursi : "Chena",};
console.log(userAssign);

let userCloning = Object.assign({}, userAssign);
userCloning.kursi = "Joane"
console.log(userCloning);

console.log("12C.Object Template-sama2 berubah"); 
// Object Template
// tentang hewan carnivora, dari jaguar, dan bertambah tiger
// jika ada penambahan di jaguar, maka otomatis tiger juga berubah sesuai dgn perubahan pada jaguar, yaitu jaguar dan tiger sama same umurnya 20 dan dewasa
let hewanCarnivora = {
    nama : "Jaguar",
    age: 20,
    dewasa: true,};
console.log(hewanCarnivora);

let tiger = Object.assign({}, hewanCarnivora);
tiger.nama = "tiger";
console.log(tiger);

////////////////////////////////////////////////////
console.log("12D.Object Template-mengubah data yg d dlm obj.assign");
// Jika yg ini,ada perubahan pada spesifikasi kucing
let hewanMamalia = {
    jenis : "Anjing",
    umur: 5,
    dewasa: true,};
console.log(hewanMamalia);

let kucing = Object.assign({}, hewanMamalia);
kucing.jenis = "kucing";
kucing.umur = 1;
kucing.dewasa = false;
console.log(kucing);

////////////////////////////////////////////////////////////////
console.log("\n");
console.log("13.Nested Cloning"); 
// 13. Nested Cloning
// jika obj memiliki properti yg jg merupakan obj lain, kita perlu melakukan deep cloning agar obj2 tsb benar2 terpisah.
let rumahsaya = {
    isinya: "anjing",
    size: {
        height: 5,
        width: 10,
    },
};
console.log(rumahsaya);
let cloneHewan = structuredClone(rumahsaya);
console.log(cloneHewan);

///////////////////////////////////////////////////////////////////
console.log("\n");
console.log("14.Object Methods and 'THIS'> pelajari lagi")
// 14. Object Methods and "THIS" >>> PENTING!!!!
// kenapa tidak bisa?????????????????????????????
// detik: 2.33.15 >> pelajari kembali
// "use strict";

// const templateIndonesia = {
//     negara : "",
//     wilayah : "", // Sumatera
//     penduduk : 100,
//     jumlah : {
//         wanita : 50,
//         pria : 20,
//         banci : 30,
//     },
//     // kalimantan : false,
// };

// let kebunBinatang = [];

// let harimau = Object.assign({}, templateHewanBuas);
//     harimau.nama = "Harimau Jawa";
//     harimau.jenis = "Karnivora";
//     harimau.umur = 10;
//     harimau.ukuran = {
//         tinggi: 120,
//         lebar: 50,
//         panjang: 80,
//     };
//     kebunBinatang.push(harimau);

//     console.log(kebunBinatang);





































// di detik ke: 2.14.44



