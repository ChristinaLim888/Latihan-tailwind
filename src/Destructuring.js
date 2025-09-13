// 13 September 2025 Mulai Pahami Javascript mulai dari:
//1. Destructuring
const perkenalan = ['Hallo', 'Nama', 'Saya', 'Christina', 'Lim'];
// const [salam, satu, dua, namaSaya, marga] = perkenalan;
const [salam, , , namaSaya, marga]= perkenalan; // Skip nama dan saya
console.log('namaSaya'); //Christina

/* Latihan:
const perkenalan = ['hallo', 'nama', 'saya', 'christina', 'lim'];
const [salam, satu, dua, namaku, marga] = perkenalan;
console.log('namaku');

const perkenalan = ['hallo', 'nama', 'saya', 'christina', 'lim'];
const [salam, satu, dua, namaku, marga] = perkenalan;
console.log('namaku');

const perkenalan = ['hallo', 'nama', 'saya', 'christina', 'lim'];
const [salam, satu, dua, namaku, marga] = perkenalan;
console.log('namaku');

*/

///////////////////////////////////////////////////////////////////////////////////////////////
// 2. Swap items (Destructuring)
let satu = 1;
let dua = 2;
console.log(satu); // 1
console.log(dua); // 2
[a, b] = [b, a];
console.log(satu); // 2
console.log(dua); // 1

/* Latihan:
let satu = 1;
let dua = 2;
console.log(satu);
console.log(dua);




*/

///////////////////////////////////////////////////////////////////////////////////////////////
// 3. Return value pada function (destructuring)
function jajan () {
  return [1, 2];
}
const beli = jajan();
console.log(beli); //[1, 2] 
// Atau
const [h, i] = jajan;
console.log (h); // 1

/* Latihan:
function jajan () { return [1, 2];}
const beli = jajan();
console.log(beli); 
function jajan () {return [1, 2];}
const beli = jajan();
console.log(beli);

atau
function jajan () {return [1, 2];}
const [h, i] = jajan;
console.log(h);
function jajan () {return [1, 2];}
const [h, i]= jajan;
console.log(h);

*/

///////////////////////////////////////////////////////////////////////////////////////////////
// 4. Rest Parameter : Mau bnyk array tapi gk tau ada berapa elemen (destructuring)
const [c, d, e] = [3, 4, 5];
console.log(c); // 3
console.log(d); // 4

/* Latihan:
const [c, d, e] = [3, 4, 5];
console.log(c);

const [ c, d, e] = [3, 4, 5];
console.log(c);

*/

///////////////////////////////////////////////////////////////////////////////////////////////
// 5. Destructuring Object
const mhs = {           // object
    nama : 'Sandhika',   // object
    umur : 30,           // object
}
const nama = mhs.nama // sandhika, (dgn object) atau dengan cara:
const {nama, umur} = mhs;  //(dgn object)
console.log(nama); // sandhika (dgn object)

/* Latihan:
const mhs = {
    nama: 'christina',
    umur: 30
}
const nama = mhs.nama
const umur = mhs.umur
const {nama, umur} = mhs;
console.log(nama);

const msh = {
    nama: 'christina',
    umur: 30,
}
const nama = mhs.nama;
const umur = mhs.umur;
const [nama, umur] = mhs;
console.log(nama);

*/

///////////////////////////////////////////////////////////////////////////////////////////////
 //6.  Bisa juga yang tanpa object: Assignment tanpa Declarasi Object > untuk yang simple

 ({ nama, umur} = { nama: 'Sandhika', umur: 30});
console.log(nama); // Sandhika

/* Latihan:





*/

///////////////////////////////////////////////////////////////////////////////////////////////
// 7. Assign ke variabel baru : mau kasi nama baru yg properti skrng sudah tidak sesuai
const mhs = {
    nama : 'Christina Lim',
    umur : 30
}
const {nama : n, umur : u } = mhs;
console.log(u); // 30

/* Latihan:
const mhs  = {
    nama : 'christina',
    umur : 30
}
const {nama: n, umur: u} = mhs;
console.log(n);


*/

///////////////////////////////////////////////////////////////////////////////////////////////
// 8. Memberikan Default Value
const mhs = {
    nama : 'Christina Lim',
    umur : 30
}
const {nama, umur, email: 'email@default.com'} = mhs;
console.log(email); // email@default.com

/* Latihan:
const mhs = {
    nama : 'christina',
    umur : 30
}
const {nama, umur, email: 'default@gmail.com'}= mhs;
console.log(email);


*/

///////////////////////////////////////////////////////////////////////////////////////////////
// 9. Memberikan nilai default + assign ke variabel baru
const mhs = {
    nama : 'Christina Lim',
    umur : 30,
    email : 'christina@gmail.com'
}
const { nama: n, umur: u, email: e};
console.log(n);

/* Latihan:
const mhs = {
    nama : 'christina',
    umur : 30,
    email : 'default@gmail.com'
}
const {nama: n, umur: u, email: e};
console.log(e);



*/

///////////////////////////////////////////////////////////////////////////////////////////////
// 10. Mengambil field pada object, stlh di kirim sbg parameter utk function 
const mhs = {
    id : 123,
    nama : 'Christina Lim',
    umur : 30,
    email : 'christina@gmail.com'
}
function getIdMhs(mhs) { // atau cara 2
    return mhs.id;    // atau cara 2
}
console.log(getIdMhs(mhs)); // 123

/* Latihan:
const mhs = {
    id : 123,
    nama : 'christina'
    umur : 30,
    email : 'christina@gmail.com'
}
function getIdMhs(mhs) {
    return mhs.id;
}
console.log(getIdMhs (mhs));



*/

//cara 2
function getIdMhs({id}) {
    return id; 
}
console.log(getIdMhs(mhs)); // 123

/* Latihan:





*/

///////////////////////////////////////////////////////////////////////////////////////////////////////////
// Lanjutan Destructuring Function

function penjumlahanPerkalian (a, b) {
    return [a + b, a * b];
}
// hasilnya 5 (hasil penjumlahan), 6 (hasil perkalian)
const jumlah = penjumlahanPerkalian (2, 3);
console.log(jumlah);
// cara yang agak panjang
const jumlah = penjumlahanPerkalian (2, 3)[0];
console.log(jumlah);
const kali = penjumlahanPerkalian (2, 3)[1];
console.log(kali);

// cara lain:
const [jumlah, kali] = penjumlahanPerkalian (2, 3);
console.log(jumlah); // 5
console.log(kali);  // 6

// Jika ada banyak 
function kalkulator (a, b) {
    return [a + b, a - b, a * b, a / b];
}
const [tambah, kurang, kali, bagi]; // urutan harus sesuai dengan urutan yang di return, tidak bole ada yang beda, jika beda maka hasil pun beda
console.log (bagi);

// Atau di inisialisasi secara langsung:
function kalkulator (a, b) {
    return {      // bukan sebagai array lagi tapi sebagai object
        tambah: a + b, 
        kurang: a - b, 
        kali: a * b, 
        bagi: a / b 
    };
}

// destructuring object pakai {} bukan []
const {bagi, kali, tambah, kurang} = kalkulator (2, 3); // Tidak masalah jika tidak ber-urutan karena sudah diinisialisasi di awal
console.log(kurang); // -1

// Destructuring Function Arguments = Instruktur pada argumen
const mhs1 = {
    nama : 'christina',
    umur : 30,
    email : 'christina@gmail.com'
}
function cetakMhs (nama, umur) {
    return `Halo, nama saya ${nama}, saya berumur ${umur} tahun.`;
}
console.log (cetakMhs (mhs.nama, mhs.umur));

// Cara lain pakai object
const mhs1 = {
    nama : 'christina',
    umur : 30,
    email : 'christina@gmail.com'
}
function cetakMhs (mhs) {
    return `Halo, nama saya ${mhs.nama}, saya berumur ${mhs.umur} tahun.`;
}
console.log (cetakMhs(mhs1));

// Cara lain lagi > Mempermudah penulisan jika object nya kompleks
const mhs1 = {
    nama : 'christina',
    umur : 30,
    email : 'christina@gmail.com',
    nilai : {       // ada properti yang punya object lagi
        tugas : 80,
        uts : 85,
        uas : 75
    }
}
function cetakMhs ({nama, umur, nilai: {tugas, uts, uas} }) {
    return `Halo, nama saya ${nama}, saya berumur ${umur} tahun, dan nilai UAS saya adalah ${uas}.`;
}
console.log (cetakMhs(mhs1));



/* Latihan:





*/

/* Latihan:





*/