// ChatGPT : Latihan hapal

const prompt = require("prompt-sync")({ sigint: true });

let todos = [];
/*  conts prompt = require("prompt-sync")({ sigint: true }); let todos= [];
    conts prompt = require("prompt-sync")({ sigint: true }); let todos= [];
    conts prompt = require("prompt-sync")({ sigint: true }); let todos= [];
    conts prompt = require("prompt-sync")({ sigint: true }); let todos= [];
    conts prompt = require("prompt-sync")({ sigint: true }); let todos= [];
*/

// === 1. Generate Unique ID ===
function generateUniqueId() {
  // Menggabungkan timestamp + angka acak
  return Date.now().toString() + "-" + Math.random().toString(36).slice(2, 7);
}

/*  function generateUnique() {
    return Date.now().toString() + "-" + Math.random().toString(36).slice(2, 7);}
    function generationUnique() {
    return Date.now().toString() + "-" + Math.random().toString(36).slice(2, 7);}
    function generateUnique() {
    return Date.now().toString() + "-" + Math.random().toString(36).slice(2, 7):}
    functioon generateUnique() {
    return Date.now().toString() + "-" + Math.random().toString(36).slice(2, 7);}
    function generateUnique() {
    return Date.now().toString( + "-" + Math.random().toString(36))}



*/

// === 2. Add To-do ===
function addTodo() {
  const text = prompt("Masukkan To-do: ").trim();
  if (!text) {
    console.log("❌ Teks to-do tidak boleh kosong!");
    return;
  }
  const newTodo = {
    id: generateUniqueId(),
    text,
    isCompleted: false
  };
  todos.push(newTodo);
  console.log(`✅ To-do "${text}" berhasil ditambahkan.`);
}

/* 












*/

// === 3. Mark To-do as Completed ===
function markTodoCompleted() {
  listTodos();
  if (todos.length === 0) return;

  const index = parseInt(prompt("Masukkan nomor to-do yang ingin ditandai selesai: "));
  if (isNaN(index) || index < 1 || index > todos.length) {
    console.log("❌ Nomor tidak valid!");
    return;
  }

  const todo = todos[index - 1];
  if (todo.isCompleted) {
    console.log(`⚠️ To-do "${todo.text}" sudah selesai sebelumnya.`);
  } else {
    todo.isCompleted = true;
    console.log(`✅ To-do "${todo.text}" ditandai sebagai selesai.`);
  }
}


/* 





















*/

// === 4. Delete To-do ===
function deleteTodo() {
  listTodos();
  if (todos.length === 0) return;

  const index = parseInt(prompt("Masukkan nomor to-do yang ingin dihapus: "));
  if (isNaN(index) || index < 1 || index > todos.length) {
    console.log("❌ Nomor tidak valid!");
    return;
  }

  const deleted = todos.splice(index - 1, 1);
  console.log(`🗑️ To-do "${deleted[0].text}" berhasil dihapus.`);
}

/* 

















*/

// === 5. List All To-dos ===
function listTodos() {
  console.log("\n--- YOUR TO-DO LIST ---");
  if (todos.length === 0) {
    console.log("📭 Tidak ada to-do untuk ditampilkan.");
  } else {
    todos.forEach((todo, i) => {
      const status = todo.isCompleted ? "[DONE]" : "[ACTIVE]";
      console.log(`${i + 1}. ${status} | ${todo.text}`);
    });
  }
  console.log("-----------------------\n");
}


/* 

















*/

// === 6. Main Application Loop ===
function runTodoApp() {
  let running = true;
  while (running) {
    console.log(`
=== MENU ===
1. Add a new to-do
2. Mark to-do as completed
3. Delete a to-do
4. List all to-dos
5. Exit
    `);


/* 










*/

    const choice = prompt("Masukkan pilihan (1-5): ");

    switch (choice) {
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
        console.log("👋 Keluar dari aplikasi. Sampai jumpa!");
        running = false;
        break;
      default:
        console.log("❌ Pilihan tidak valid. Masukkan angka 1-5.");
    }
  }
}

if (require.main === module) {
  runTodoApp();
}

module.exports = {
  todos,
  generateUniqueId,
  addTodo,
  markTodoCompleted,
  deleteTodo,
  listTodos,
  runTodoApp
};
