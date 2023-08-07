const toDoForm = document.getElementById("todo-form");
const toDoInput = toDoForm.querySelector("input");
const toDoList = document.getElementById("todo-list");

const TODOS_KEY = "todos";

let toDos = [];

function saveToDos() {
  localStorage.setItem(TODOS_KEY, JSON.stringify(toDos));
}

function deleteToDo(event) {
  console.log(event.target.parentElement.innerText);
  const li = event.target.parentElement;
  const delLi = event.target.parentElement.firstChild.innerText;
  const confirmasw = confirm(`[${delLi}]항목을 삭제하시겠습니까?`);

  if (confirmasw == true) {
    li.remove();
    toDos = toDos.filter((toDo) => toDo.id != parseInt(li.id));
    saveToDos();
  }
}

function paintToDo(newToDo) {
  const li = document.createElement("li");
  const span = document.createElement("span");
  li.id = newToDo.id;
  span.innerText = newToDo.text;

  const button = document.createElement("button");
  button.innerText = "❌";
  button.addEventListener("click", deleteToDo);

  li.appendChild(span);
  li.appendChild(button);
  toDoList.appendChild(li);
}

function handleToDoSubmit(event) {
  event.preventDefault();
  console.log(toDoInput.value);
  const newToDo = toDoInput.value;
  toDoInput.value = "";

  const newToDoObj = {
    text: newToDo,
    id: Date.now(),
  };
  toDos.push(newToDoObj);
  paintToDo(newToDoObj);
  saveToDos();
}

toDoForm.addEventListener("submit", handleToDoSubmit);

// function sayHello(item) {
// console.log("Hello!", item);
// }

const savedToDos = localStorage.getItem(TODOS_KEY);
console.log(saveToDos); //문자열

if (savedToDos !== null) {
  const parsedToDos = JSON.parse(savedToDos);
  console.log(parsedToDos); //배열

  toDos = parsedToDos;
  // parsedToDos.forEach((item) => console.log("hello", item));
  parsedToDos.forEach(paintToDo);
}
