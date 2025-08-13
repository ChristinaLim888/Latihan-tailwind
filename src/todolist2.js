const prompt = require("prompt-sync")({ sigint: true });

// Data utama: array untuk menyimpan semua todo
let todos = [];

// ====== FUNGSI PENDUKUNG ======

// Fungsi untuk membuat ID unik
function generateUniqueId() {
  return Date.now().toString() + "-" + Math.random().toString(36).slice(3, 7);
}
/* 
function gererateUniqueInput(){
return Date.now().toString() + "-" + Math.random().toString(36).slice(3,7)};
function generateUniqueInput() {
return Date.now().toString() + "-" + Math.random().toString().slice(3, 7)};
function generateUniqueInput () {
return Date.now().toString() + "-" + Math.random().toString.slice(3, 7})};
*/

// Fungsi untuk menampilkan semua todo
function listTodos() {
  console.log("\n--- YOUR TO-DO LIST ---");
// 2. Cek apakah array `todos` kosong. Jika ya, tampilkan pesan "No to-dos to display."
  if (todos.length === 0) {
    console.log("No to-dos to display.");
    return;
  }
/* function listTodos() {
console.log("\n--- YOUR TO DO LIST ---")};
if (todos.lenght === 0) {console.log("No to-dos to display.")}; return;}
function listTodos() {
console.log("\n--- YOUR TO DO LIST ---")};
if (todos.lenght === 0) {
console.log("No to do's display."); return;}
*/

  todos.forEach((todo, index) => {
    const status = todo.isCompleted ? "[DONE]" : "[ACTIVE]";
    console.log(`${index + 1}. ${status} | ${todo.text}`);
  });
  console.log("------------------------\n");
}
/* todos.forEach((todo.index) => {
    const status = todo.isComplete ? "[DONE]" : "[ACTIVE]";
    console.log(`${index + 1} ${status} ${todo.text}`); });
    console.log("---------------------\n");

    todos.forEach((todo.text) => {
    const status = todo.isComplete ? "[DONE]" : "[ACTIVE]";
    console.log(`${index + 1} ${status} ${todo.text}`); });
    console.log("-------------------\n");

    todos.forEach((todo.index) => {
    const status = todo.isComplete ? "[DONE]' : "[ACTIVE]";
    console.log(`${index + 1} ${status} ${todos}`); });
    console.log("-------------------\n");

    todos.forEach((todo.index) =>
    const status = todo.isComplete ? "[DONE]" : "[ACTIVE]";
    console.log(`${index + 1} ${status} ${todos}`); });
    console.log("-------------\n");

    todos.forEach((todo.index) =>
    const status = todo.isComplete ? "[DONE]" : "[ACTIVE]";
    console.log(`${index + 1} $(status) ${todos}`); });
    console.log("--------------\n");
*/

// Fungsi untuk menambah todo
function addTodo() {
  const text = prompt("Enter your new to-do: ").trim();
  if (text === "") {
    console.log("❌ To-do cannot be empty.");
    return;
  }
/* function addTodo() {const text = prompt("Enter your list to do: ").trim();
    if (text = "") { console.log(" X To do cannot be empty."); return;}

    function addTodo() {const text = prompt("Enter your list to do: ").trim();
    if (text = "") {console.log("X To do cannot be empty."); return;}

    function addTodo() { const text = prompt("Enter your list to do: ").trim();
    if (text === "") {console.log("X To do cannot be empty."); return;}

    function addTodo() { const text = prompt("Enter your list to do: ").trim();
    if (text = "") console.log("X To do list cannot be empty."); return;}
*/

  const newTodo = {
    id: generateUniqueId(),
    text: text,
    isCompleted: false
  };
  todos.push(newTodo);
  console.log(`✅ To-do "${text}" added.`);
}
/* 











*/

// Fungsi untuk menandai todo sebagai selesai
function markTodoCompleted() {
  listTodos();
  if (todos.length === 0) return;

  const choice = parseInt(prompt("Enter the NUMBER of the to-do to mark as completed: "), 10);

  if (isNaN(choice) || choice < 1 || choice > todos.length) {
    console.log("❌ Invalid number.");
    return;
  }

  const selectedTodo = todos[choice - 1];
  if (selectedTodo.isCompleted) {
    console.log(`ℹ️ To-do "${selectedTodo.text}" is already completed.`);
    return;
  }

  selectedTodo.isCompleted = true;
  console.log(`✅ To-do "${selectedTodo.text}" marked as completed.`);
}
/* 












*/

// Fungsi untuk menghapus todo
function deleteTodo() {
  listTodos();
  if (todos.length === 0) return;

  const choice = parseInt(prompt("Enter the NUMBER of the to-do to delete: "), 10);

  if (isNaN(choice) || choice < 1 || choice > todos.length) {
    console.log("❌ Invalid number.");
    return;
  }

  const removed = todos.splice(choice - 1, 1);
  console.log(`🗑️ To-do "${removed[0].text}" deleted.`);
}
/* 












*/

// ====== FUNGSI UTAMA ======

// Top-down: mulai dari alur besar, lalu panggil fungsi-fungsi di atas
function runTodoApp() {
  let running = true;

  while (running) {
    console.log(`
=== MENU ===
1. Add a new to-do
2. Mark a to-do as completed
3. Delete a to-do
4. List all to-dos
5. Exit
    `);

    const command = prompt("Choose an option (1-5): ").trim();

    switch (command) {
      case "1":
        addTodo();
        break;
      case "2":
        markTodoCompleted();
        break;
      case "3":
        deleteTodo();
        break;
      case "4":
        listTodos();
        break;
      case "5":
        console.log("👋 Goodbye!");
        running = false;
        break;
      default:
        console.log("❌ Invalid option, please choose between 1-5.");
    }
  }
}
/* 












*/

// Eksekusi hanya jika file ini dijalankan langsung
if (require.main === module) {
  runTodoApp();
}
/* 












*/

// Ekspor fungsi untuk pengujian
module.exports = {
  todos,
  generateUniqueId,
  addTodo,
  markTodoCompleted,
  deleteTodo,
  listTodos,
  runTodoApp,
};
