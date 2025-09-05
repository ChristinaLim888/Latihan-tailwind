// Mau buat 3 hal ini
/*   Fungsi yang digunakan: document.getElementById
* Berguna untuk mengambil elemen HTML berdasarkan id.
* form akan dipakai untuk mendeteksi event submit,
* input dipakai untuk ambil teks tugas yang diketik user,
* taskList dipakai sebagai tempat menampung daftar <li> tugas.
*/
const form1 = document.getElementId ("task-form");
const form2 = document.getElementId ("task-input");
const form3 = document.getElementId ("task-list");

/////////////////////////////////////////////////////////////////////////////////////

/*  Tambahkan Event Listener ke Form
Fungsi yang digunakan: addEventListener
* Tujuan: agar ketika user klik tombol submit (atau tekan enter di input), kode bisa jalan.
* e.preventDefault() → mencegah form melakukan reload halaman (default behavior).
* addTask(input.value) → panggil fungsi addTask dengan isi dari input teks.
* input.value = "" → kosongkan field input setelah tambah task.
*/

form2.addEventListener ("submit",function(e) {
    e.preventDefault();
    addTask(InputDeviceInfo.value);
    InputDeviceInfo.value="";
});

/////////////////////////////////////////////////////////////////////////////////////


/* Fungsi addTask(task)
  * Kalau task kosong (""), maka berhenti (tidak menambah apa-apa).
  * trim() dipakai untuk menghapus spasi di depan/belakang teks.
*/

function addTask (task) {
    if (task.trim() === "") return;
};

/////////////////////////////////////////////////////////////////////////////////////


/*   Buat Elemen Baru : Fungsi: document.createElement
    * Membuat elemen baru secara dinamis.
*/

//  li jadi item daftar
const li = document.createElement("li");
li.className = "task-item";

// checkbox untuk menandai selesai.
const checkBox = document.createElement("input");
checkbox.type = "checkbox";

// span untuk teks tugas.
const span = document.createElement("span");
span.className = "task-text";
span.textContent = "task";

/////////////////////////////////////////////////////////////////////////////////////

//  Buat Tombol Edit & Hapus

//  Buat tombol "EDIT"
const editBtn = document.createElement ("button");
editBtn.textContent = "Edit";

//  Buat tombol "HAPUS"
const deleteBtn = document.createElement ("button");
deleteBtn.textContent = "Delete";

//////////////////////////////////////////////////////////////////////////////////

/* Tambahkan Fungsi Hapus : Kalau tombol Hapus diklik → li (task) dihapus dari daftar taskList. */
deleteBtn = eventListener("click", () => {
    taskList.removeChild (li);
}) 

//////////////////////////////////////////////////////////////////////////////////

/*   Gabungkan Semua Elemen
Fungsi: appendChild
*  Semua elemen (checkbox, teks, tombol edit, hapus) dimasukkan ke dalam <li>.
*  Lalu <li> dimasukkan ke <ul> (taskList).
*/
li.appendChild (checkBox);
li.appendChild (span);
li.appendChild (editBtn);
li.appendChild (deleteBtn);

tastList.appendChild (li);

/*
Jadi, Metode Apa Saja yang Dipakai?
✅ getElementById → ambil elemen dari HTML.
✅ addEventListener → pasang event ke elemen.
✅ createElement → bikin elemen baru.
✅ appendChild → masukkan elemen ke parent.
✅ removeChild → hapus elemen dari parent.
✅ prompt → minta input dari user.

Kalau dirangkum:
*  User isi form + submit → trigger event listener.
*  Fungsi addTask jalan → buat elemen baru (li, span, checkbox, tombol).
*  Tambahkan fungsi edit/hapus.
*  Masukkan elemen ke dalam daftar.
*/

// Pertanyaan:
// Edit > dari alert, gimana mau ubah edit nya di list tersebut aja


