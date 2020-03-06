"use strict";
let input = document.querySelector(".input-box");
let ul = document.querySelector(".todo-list");
let all = document.querySelector(".all");
let compleate = document.querySelector(".compleate");
let active = document.querySelector(".active");
let clear = document.querySelector(".clear");
let itemLeft = document.querySelector(".item-left");
let id = 12001;
let todoData = [
  {
    text: "HTML",
    checked: true,
    id: id++
  },
  {
    text: "CSS",
    checked: true,
    id: id++
  },
  {
    text: "Javascript",
    checked: false,
    id: id++
  },
  {
    text: "DOM",
    checked: false,
    id: id++
  },
];

input.addEventListener("keyup", function (e) {
  var txt = input.value;
  console.log(txt)
  if (e.keyCode === 13 && txt.trim().length !== 0) {
    const obj = {
      text: input.value,
      checked: false,
      id: id++
    };
    todoData.push(obj);
    create(todoData);
    input.value = "";
  }
});


function deleteItem(e) {
  let id = e.target.parentElement.id;
  console.dir(e.target.parentElement, "parent element")
  let removed = todoData.findIndex(item => item.id == id);
  todoData.splice(removed, 1);
  console.log(todoData);
  create(todoData);
}

function checkedTodo(e) {
  let id = e.target.parentElement.id;
  console.log(id, "check the id of element");
  todoData.map(elm => {
    if (elm.id == id) {
      elm.checked = !elm.checked;
    }
    return elm;
  });
  create(todoData);
  console.log(todoData, "check ");
}

// uiFunction 
function create(todo = []) {
  console.log(todo);
  ul.textContent = "";

  todo.forEach(todo => {
    let li = document.createElement("li");
    li.setAttribute("id", todo.id);
    let checkbox = document.createElement("input");
    checkbox.type = "checkbox";
    checkbox.checked = todo.checked;
    let p = document.createElement("p");
    p.textContent = todo.text;
    let span = document.createElement("span");
    span.textContent = "X";
    li.append(checkbox, p, span);
    ul.append(li);
    span.addEventListener("click", deleteItem);
    checkbox.addEventListener("click", checkedTodo);
    all.addEventListener("click", alllist);
    compleate.addEventListener("click", compleatelist);
    active.addEventListener("click", activelist);
    clear.addEventListener("click", cleartodo);
  });
  leftitem();
}

function leftitem() {
  var items = todoData.filter(data => !data.checked);
  itemLeft.textContent = `${items.length} items left`;
}
function alllist() {
  return create(todoData);
}
function compleatelist(e) {
  var checklist = todoData.filter(v => v.checked);
  create(checklist);

}

function activelist() {
  var checklist = todoData.filter(v => !v.checked);
  create(checklist);
}
function cleartodo() {
  var clearlist = todoData.filter(v => !v.checked);
  todoData = clearlist;
  create(clearlist);
}

create(todoData);