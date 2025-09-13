// Dari ChatGpt utk challange 6

// Import library prompt-sync untuk input dari user lewat terminal
// "require" biasanya dipakai di JS, tapi di TS kita bisa pakai import
// Namun untuk contoh sederhana CLI, kita tetap bisa pakai require dengan deklarasi tipe
const prompt = require("prompt-sync")({ sigint: true });

// Definisikan tipe data untuk ToDo item
interface Todo {
  id: string;         // unik identifier (string)
  text: string;       // teks to-do
  isCompleted: boolean; // status selesai / belum
}

// Array utama untuk menyimpan daftar todo
let todos: Todo[] = [];

// Fungsi untuk membuat ID unik menggunakan timestamp + random string
function generateUniqueId(): string {
  return Date.now().toString() + Math.random().toString(36).substring(2, 9);
}

// Fungsi untuk menambahkan todo baru
function addTodo(): void {
  const text: string = prompt("Enter new to-do text:").trim(); // input user
  if (!text) {
    console.log("To-do text cannot be empty!"); // validasi input kosong
    return;
  }

  const newTodo: Todo = {
    id: generateUniqueId(), // panggil generator ID unik
    text: text,             // isi teks
    isCompleted: false,     // default: belum selesai
  };

  todos.push(newTodo); // masukkan ke array
  console.log(`To-do "${newTodo.text}" added.`); // tampilkan konfirmasi
}

// Fungsi untuk menandai todo sudah selesai
function markTodoCompleted(): void {
  listTodos(); // tampilkan daftar dulu supaya user bisa pilih

  const input: string = prompt("Enter the NUMBER of the to-do to mark as completed:").trim();
  const todoIndex: number = parseInt(input) - 1; // user pilih berdasarkan nomor

  // Validasi input
  if (!input || isNaN(todoIndex + 1) || todoIndex < 0 || todoIndex >= todos.length) {
    console.log("Invalid number. Please enter a valid number from the list.");
    return;
  }

  // Cek apakah sudah selesai sebelumnya
  if (todos[todoIndex].isCompleted) {
    console.log(`To-do "${todos[todoIndex].text}" is already completed.`);
  } else {
    todos[todoIndex].isCompleted = true;
    console.log(`To-do "${todos[todoIndex].text}" marked as completed.`);
  }
}

// Fungsi untuk menghapus todo
function deleteTodo(): void {
  listTodos(); // tampilkan daftar dulu

  const input: string = prompt("Enter the NUMBER of the to-do to delete:").trim();
  const todoIndex: number = parseInt(input) - 1;

  // Validasi input
  if (!input || isNaN(todoIndex + 1) || todoIndex < 0 || todoIndex >= todos.length) {
    console.log("Invalid number. Please enter a valid number from the list.");
    return;
  }

  // Hapus dari array
  const deletedTodo: Todo = todos.splice(todoIndex, 1)[0];
  console.log(`To-do "${deletedTodo.text}" deleted.`);
}

// Fungsi untuk menampilkan semua todo
function listTodos(): void {
  console.log("\n--- YOUR TO-DO LIST ---");

  if (todos.length === 0) {
    console.log("No to-dos to display.");
    return;
  }

  // Looping todo dan tampilkan dengan status
  todos.forEach((todo, index) => {
    const status = todo.isCompleted ? "[DONE]" : "[ACTIVE]";
    console.log(`${index + 1}. ${status} | ${todo.text}`);
  });

  console.log("-----------------------\n");
}

// Fungsi utama untuk menjalankan aplikasi to-do list
function runTodoApp(): void {
  let running = true;

  while (running) {
    console.log("\nWelcome to Simple To-Do List!");
    console.log("Commands:");
    console.log("1. add");
    console.log("2. complete");
    console.log("3. delete");
    console.log("4. list");
    console.log("5. exit");

    const command: string = prompt("Enter command:").toLowerCase().trim();

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
        running = false;
        console.log("Exiting To-Do List. Goodbye!");
        break;
      default:
        console.log("Invalid command. Please try again.");
    }
  }
}

// Jalankan aplikasi kalau file ini dijalankan langsung
if (require.main === module) {
  runTodoApp();
}

// Export fungsi & variabel (berguna untuk testing)
export { todos, generateUniqueId, addTodo, markTodoCompleted, deleteTodo, listTodos, runTodoApp };
