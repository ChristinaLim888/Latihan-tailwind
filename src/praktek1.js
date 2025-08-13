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


/////////////////////////////////////////////////////////////////////
//operator > unary
let angka2 = 60;
let g = 60;
console.log(-g);

let angka3 = 81;
let h = 81;
console.log(-h);

let angka4 = 99;
let j = 99;
console.log(-j);

/////////////////////////////////////////////////////////////////////
//operator > binary

let d = 10;
let e = 50;
let f = d+e;
console.log(f);

let k = 15;
let l = 36;
let i = k+l;
console.log(i);

////////////////////////////////////////////////////////
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

///////////////////////////////////////////////////////

console.log('penjumlahan', k +l);
console.log('pengurangan', k-l);
console.log('perkalian', l*l);
console.log('pembagian', k/l);
console.log('perpangkatan', k ** l);
console.log('persentase', k % l);

///////////////////////////////////////////////////////

// Conditional Statement
let nama = "Christina";
if (nama == "Christina") {   
  console.log("Hallo Semangat latihannya ya......");
}

let nama2 = "Kamu";
if (nama2 == "Kamu"); {
    console.log ("Halo Kamu apa kabar");
}

let nama3 = "Jenny";
if (nama3 == "Jenny");
console.log("Halo Jenny apa kabarnya??")

let anjing = "Dolly"
if (anjing == "Dolly") {
  console.log("Si anak nakal")
} else {
  console.log("Bukan doggy saya")
}

let nama4 = "Jeahan";
if (nama4 == "Johan") {
    console.log("Halo Johan,bagaimana hari mu??")
} else {
    console.log("Halo, siapakah nama kamu??")}

let nama5 = "Dianeee"
if (nama5 == "Diana") {
    console.log ("Apakah hari ini kamu kerja??")
} else {
    console.log("Kamu kerja dimana??")
}

///////////////////////////////////////////////////////
let namac = "Christina";
if(namac == "Christina") {
  console.log("Selamat Datang di Javascript ya Christina")
} else if(namac == "Jessica") {
  console.log("Selamat Datang di Javascript ya Jessica")
} else {
  console.log("Selamat Datang di Javascript, Selamat Belajar")
}

let nama6 = "Karlina";
if (nama6 == "Andhika") {
    console.log("Selamat datang Andhika")
 }else if(nama6 == "Karlina") {
    console.log("Selamat datang Karlina")
} else {
    console.log("Selamat pagi")
}

////////////////////////////////////////////////////////////
let umur = 20;
if (umur >= 17) {
  console.log("Sudah boleh membuat SIM")
} else{
  console.log("Anda terlalu muda")
}

let umur2 = 17;
if(umur2 >= 21) {
    console.log("Anda sudah dewasa")
} else if (umur2 <=21) {
    console.log("Anda belum cukup umur")
}

//////////////////////////////////////////
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

///////// KENAPA TIDAK BISA BERFUNGSI???????????????????????????????????????????
// let hour2 = 19;
// if (hour2 < 9 || hour2 > 17) {
//     if (hour > 17) {
//         console.log("Kantor telah tutup sudah jam " hour2);
//     } else {
//         console.log(" Mohon datang kembali pukul " hour2);
//     }
// } else {
//     console.log ("Kntor sudah buka, silahkan masuk, sudah jam " hour2);
// }

///////////////////////////////////////////////////////////////////////
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

let makan2 = true;
let nyapu = true;
if (ngepel == true && )





