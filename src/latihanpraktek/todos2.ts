// Dari ChatGpt utk challange 6, jawaban versi 2

// Import library prompt-sync dengan gaya ES Module (lebih modern & cocok di TS)
import promptSync from "prompt-sync";

// Inisialisasi fungsi prompt (supaya bisa terima input dari user di terminal)
const prompt = promptSync({ sigint: true });

// Definisi tipe data Todo: tiap item punya id, text, dan status selesai/belum
interface Todo {
  id: string; // ID unik (string)
  text: string; // teks todo yang dimasukkan user
  isCompleted: boolean; // status true = sudah selesai, false = aktif
}

// Array utama untuk menyimpan daftar to-do (list kosong awalnya)
let todos: Todo[] = [];

// Fungsi untuk membuat ID unik: gabungan timestamp + random string
function generateUniqueId(): string {
  return Date.now().toString() + Math.random().toString(36).substring(2, 9);
}

// Fungsi untuk menambahkan todo baru
function addTodo(): void {
  const text: string = prompt("Enter new to-do text:").trim(); // input dari user
  if (!text) {
    // validasi: kalau kosong, tampilkan pesan & keluar fungsi
    console.log("To-do text cannot be empty!");
    return;
  }

  // Buat object Todo baru
  const newTodo: Todo = {
    id: generateUniqueId(), // ID unik
    text: text, // isi teks dari user
    isCompleted: false, // default status: belum selesai
  };

  todos.push(newTodo); // simpan ke array todos
  console.log(`To-do "${newTodo.text}" added.`); // tampilkan konfirmasi
}

// Fungsi untuk menandai todo sudah selesai
function markTodoCompleted(): void {
  listTodos(); // tampilkan daftar dulu biar user tahu nomor todo

  const input: string = prompt("Enter the NUMBER of the to-do to mark as completed:").trim();
  const todoIndex: number = parseInt(input) - 1; // konversi input ke index array

  // Validasi input
  if (!input || isNaN(todoIndex + 1) || todoIndex < 0 || todoIndex >= todos.length) {
    console.log("Invalid number. Please enter a valid number from the list.");
    return;
  }

  // Cek apakah sudah selesai sebelumnya
  if (todos[todoIndex].isCompleted) {
    console.log(`To-do "${todos[todoIndex].text}" is already completed.`);
  } else {
    todos[todoIndex].isCompleted = true; // ubah status jadi selesai
    console.log(`To-do "${todos[todoIndex].text}" marked as completed.`);
  }
}

// Fungsi untuk menghapus todo berdasarkan nomor
function deleteTodo(): void {
  listTodos(); // tampilkan daftar

  const input: string = prompt("Enter the NUMBER of the to-do to delete:").trim();
  const todoIndex: number = parseInt(input) - 1; // ubah ke index array

  // Validasi input
  if (!input || isNaN(todoIndex + 1) || todoIndex < 0 || todoIndex >= todos.length) {
    console.log("Invalid number. Please enter a valid number from the list.");
    return;
  }

  // Hapus 1 item dari array, simpan yang dihapus untuk ditampilkan
  const deletedTodo: Todo = todos.splice(todoIndex, 1)[0];
  console.log(`To-do "${deletedTodo.text}" deleted.`);
}

// Fungsi untuk menampilkan semua todo
function listTodos(): void {
  console.log("\n--- YOUR TO-DO LIST ---");

  if (todos.length === 0) {
    // kalau kosong
    console.log("No to-dos to display.");
    return;
  }

  // Looping todo dengan nomor urut
  todos.forEach((todo, index) => {
    const status = todo.isCompleted ? "[DONE]" : "[ACTIVE]"; // tampilkan status
    console.log(`${index + 1}. ${status} | ${todo.text}`); // format output
  });

  console.log("-----------------------\n");
}

// Fungsi utama untuk menjalankan aplikasi to-do
function runTodoApp(): void {
  let running = true; // flag untuk loop utama

  while (running) {
    // terus berjalan sampai user pilih exit
    console.log("\nWelcome to Simple To-Do List!");
    console.log("Commands:");
    console.log("1. add");
    console.log("2. complete");
    console.log("3. delete");
    console.log("4. list");
    console.log("5. exit");

    const command: string = prompt("Enter command:").toLowerCase().trim(); // input user

    // Switch untuk handle perintah
    switch (command) {
      case "add":
      case "1":
        addTodo();
        break;
      case "complete":
      case "2":
        markTodoCompleted();
        break;
      case "delete":
      case "3":
        deleteTodo();
        break;
      case "list":
      case "4":
        listTodos();
        break;
      case "exit":
      case "5":
        running = false; // hentikan loop
        console.log("Exiting To-Do List. Goodbye!");
        break;
      default:
        console.log("Invalid command. Please try again."); // input tidak valid
    }
  }
}

// Jalankan aplikasi hanya kalau file ini dieksekusi langsung
if (require.main === module) {
  runTodoApp();
}

// Export semua fungsi & variabel (berguna untuk testing atau reuse di file lain)
export { todos, generateUniqueId, addTodo, markTodoCompleted, deleteTodo, listTodos, runTodoApp };
