// var jmlAngkot = 10;
// var angkotBeroperasi = 6;
// var noAngkot = 1;

// while (noAngkot <= angkotBeroperasi) {
//   console.log("Angkot No. " + noAngkot + " beroperasi dengan baik.");
//   noAngkot++;
// }

// for (noAngkot = 7; noAngkot <= jmlAngkot; noAngkot++) {
//   console.log("Angkot No. " + noAngkot + " sedang tidak beroperasi.");
// }

// MULAI DARI AWAL
console.log(Date());

//  Operator berdasarkan jumlah operandnya:
let angka1 = 10;
// 1. UNARY > operasi hanya pada 1 operand (nilai atau variabel)
let x = 10;
console.log(-x);

// 2.BINARY > Operasi yg membutuhkan 2 operand yaitu variabel a dan variabel b
let a = 4;
let b = 2;
let c = a + b;
console.log(c);

// OPERATOR ARITMATIKA:
let y = 10;
let z = 5;

// 1. Penjumlahan (+)
console.log("Penjumlahan", y + z);
// 2. Pengurangan (-)
console.log("Pengurangan", y - z);
// 3. Perkalian (*)
console.log("Perkalian", y * z);
// 4. Pembagian (/)
console.log("Pembagian", y / z);
// 5. Perpangkatan (**)
console.log("Perpangkatan", y ** z);
// 6. Sisa Bagi/modulus (%)
console.log("Persentase", y % z);

// OPERATOR ASSIGNMENT (PENUGASAN)
let d = 10;
// 1. Penugasan (=)
console.log(d);
// 2. Penugasan dan Penjumlahan (+=)
d += 2;
console.log(d);
// 3. Penugasan dan Pengurangan (-=)
d -= 4;
console.log(d);
// 4. Penugasan dan Perkalian (*=)
d *= 5;
console.log(d);
// 5. Penugasan dan Pembagian (/=)
d /= 2;
console.log(d);
// 6. Penugasan dan Pangkat (**=)
d **= 2;
console.log(d);
// 7. Penugasan dan Sisa Bagi (%=)
d %= 100;
console.log(d);

for(let i =0; i <= 10; i+=1) {
  console.log(i)
}

// Nomor ber-urutan dari no 11 sampai no 20
for(let i = 11; i <= 20; i+=1) {
  console.log(i)
}

// Operator Increment (++) dan Decrement (--)
let counter = 10;
// 1. Postfix : Counter++ atau counter-- >masih butuh proses utk memanggil, masi mengembalikan nilai awal
console.log("increment", counter++); //blm terjadi sesuatu
console.log("increment", counter); //baru akan menambah

// 2. Prefix : ++Counter atau --counter > bisa langsung tanpa memanggil 2 kali, mengembalikan nilai yg baru
console.log("increment", ++counter); //otomatis akan bertambah
console.log("increment", counter); //tanpa ini sudah keluar hasil penambahannya, jika di panggil lagi maka akan stuck di angka terakhir

// Konversi Tipe dengan Operator
let teks = "123"; //jika ada huruf maka hasilnya NaN (Not a Number)
let teksNumber = +teks;
console.log(teksNumber);

// Conditional Statement
// 1. IF Statement: Sebuah statement dgn sebuah parameter (yg di dlm kurung)
// struktur: 
// if(parameter_kondisi) { 
//    # code eksekusi
// }
let nama = "Christina";
if (nama == "Christina") {    //wajib pake ()>itulah parameternya, jika tidak,maka hasilnya bisa error
  console.log("Hallo Christina......");
}

// 2. IF/ELSE Statement : Sebuah statement dgn 1 kondisi parameter dan 1 kondisi alternatif lain
// Struktur: 
// if (parameter_kondisi) {
//     # Code eksekusi
// } else{
//    # Code eksekusi
// }
if (nama == "Christina") {
  console.log("Hallo Selamat Malam Christina");
} else {
  console.log(`Hallo Selamat Malam untuk ${nama}`);  //"Hallo Selamat Malam Saudara/i"
}

//Contoh lain:
let anjing = "Dolly"
if (anjing == "Dolly") {
  console.log("Si anak nakal")
} else {
  console.log("Bukan doggy saya")
}

// 3. IF/ELSE IF/ELSE Statement : Sebuah statement dgn 2 atau lebih kondisi parameter serta 1 kondisi alternatif lain
// Struktur: 
// if (parameter_kondisi) {
//     # Code eksekusi
// } else if(parameter_kondisi){
//    # Code eksekusi
// } else{
//    # Code eksekusi
// }
if(nama == "Christina") {
  console.log("Selamat Datang di Javascript ya Christina")
} else if(nama == "Jessica") {
  console.log("Selamat Datang di Javascript ya Jessica")
} else {
  console.log("Selamat Datang di Javascript, Selamat Belajar")
}

// Mini project conditional statement
let umur = 20;
if (umur >= 17) {
  console.log("Sudah boleh membuat SIM")
} else{
  console.log("Anda terlalu muda")
}

// 4. Operator Ternary (?)
// Struktur:
// Kondisi? ekspresi_benar : ekspresi_salah

const age = 18;
// Arti: jika umurnya lebih dari 18 berarti Adult, jika tidak berarti Minor
const msg = age >= 18 ? "Adult" : "Minor";
console.log(`JIka umur = ${age} berarti adalah ${msg}`);

// CONTOH PROJECT SYSTEM LOGIN YANG SANGAT SEDERHANA
let email= "christina@gmail.com";
let password = "123";

if(email == "christina@gmail.com" && password == "123"){
  console.log("Selamat datang di dashboard");
} else {
  console.log("Anda Salah memasukkan email/password");
}









