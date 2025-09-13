// Challenge 6 untuk JS nya

// Import library prompt-sync dengan gaya ES Module
import promptSync from "prompt-sync";

// Inisialisasi fungsi prompt (supaya bisa terima input dari user di terminal)
const prompt = promptSync({ sigint: true });

// Array utama untuk menyimpan daftar to-do (list kosong awalnya)
let todos = [];

// Fungsi untuk membuat ID unik: gabungan timestamp + random string
function generateUniqueId() {
  return Date.now().toString() + Math.random().toString(36).substring(2, 9);
}

// Fungsi untuk menambahkan todo baru
function addTodo() {
  const text = prompt("Enter new to-do text:").trim();
  if (!text) {
    console.log("To-do text cannot be empty!");
    return;
  }

  const newTodo = {
    id: generateUniqueId(),
    text: text,
    isCompleted: false,
  };

  todos.push(newTodo);
  console.log(`To-do "${newTodo.text}" added.`);
}

// Fungsi untuk menandai todo sudah selesai
function markTodoCompleted() {
  listTodos();
  const input = prompt("Enter the NUMBER of the to-do to mark as completed:").trim();
  const todoIndex = parseInt(input) - 1;

  if (!input || isNaN(todoIndex + 1) || todoIndex < 0 || todoIndex >= todos.length) {
    console.log("Invalid number. Please enter a valid number from the list.");
    return;
  }

  if (todos[todoIndex].isCompleted) {
    console.log(`To-do "${todos[todoIndex].text}" is already completed.`);
  } else {
    todos[todoIndex].isCompleted = true;
    console.log(`To-do "${todos[todoIndex].text}" marked as completed.`);
  }
}

// Fungsi untuk menghapus todo berdasarkan nomor
function deleteTodo() {
  listTodos();
  const input = prompt("Enter the NUMBER of the to-do to delete:").trim();
  const todoIndex = parseInt(input) - 1;

  if (!input || isNaN(todoIndex + 1) || todoIndex < 0 || todoIndex >= todos.length) {
    console.log("Invalid number. Please enter a valid number from the list.");
    return;
  }

  const deletedTodo = todos.splice(todoIndex, 1)[0];
  console.log(`To-do "${deletedTodo.text}" deleted.`);
}

// Fungsi untuk menampilkan semua todo
function listTodos() {
  console.log("\n--- YOUR TO-DO LIST ---");

  if (todos.length === 0) {
    console.log("No to-dos to display.");
    return;
  }

  todos.forEach((todo, index) => {
    const status = todo.isCompleted ? "[DONE]" : "[ACTIVE]";
    console.log(`${index + 1}. ${status} | ${todo.text}`);
  });

  console.log("-----------------------\n");
}

// Fungsi utama untuk menjalankan aplikasi
function runTodoApp() {
  let running = true;
  while (running) {
    console.log("\nWelcome to Simple To-Do List!");
    console.log("Commands:");
    console.log("1. add");
    console.log("2. complete");
    console.log("3. delete");
    console.log("4. list");
    console.log("5. exit");

    const command = prompt("Enter command:").toLowerCase().trim();

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

// Jalankan aplikasi kalau file ini dieksekusi langsung
if (import.meta.url === `file://${process.argv[1]}`) {
  runTodoApp();
}

// Export fungsi untuk testing atau reuse
export { todos, generateUniqueId, addTodo, markTodoCompleted, deleteTodo, listTodos, runTodoApp };
