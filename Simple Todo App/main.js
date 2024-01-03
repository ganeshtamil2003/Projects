//getting elements from their id
const newToDoInput = document.getElementById("newToDoInput");
const addTodoBtn = document.getElementById("addTodoBtn");
const todoList = document.getElementById("todoList");

//adding event
addTodoBtn.addEventListener("click", () => {
  const newToDoText = newToDoInput.value;
  //logic
  if (newToDoText !== "") {
    const newToDoItem = document.createElement("li");
    newToDoItem.innerText = newToDoText;
    const deleteTodoBtn = document.createElement("button");
    deleteTodoBtn.innerText = "X";
    deleteTodoBtn.classList.add("delete-todo-btn");
    deleteTodoBtn.addEventListener("click", () => {
      newToDoItem.remove();
    });
    newToDoItem.appendChild(deleteTodoBtn);
    todoList.appendChild(newToDoItem);
    newToDoInput.value = "";
  }
});
