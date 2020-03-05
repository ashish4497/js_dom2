let input = document.querySelector(".input-box");
let ul = document.querySelector(".todo-list");
let id = 12001;
let todoData = [

];

input.addEventListener("keyup", function (e) {
  if (e.keyCode === 13) {
    const obj = {
      text: input.value,
      isChecked: false,
      id: id++
    };
    todoData.push(obj);
    create(todoData);
    input.value = "";
  }
});
function deleteItem(e) {
  let id = e.target.parentElement.id;
  console.dir(e.target.parentElement)
  todoData = todoData.filter(todo => todo.id !== id);
  create(todoData);
}
// uiFunction 
function create(todo = []) {
  console.log(todo);
  ul.textContent = "";
  todo.forEach(todo => {
    let li = document.createElement("li");
    li.setAttribute("id", todo.id)
    let checkbox = document.createElement("input");
    checkbox.type = "checkbox";
    input.checked = todo.isChecked;
    let p = document.createElement("p");
    p.textContent = todo.text;
    let span = document.createElement("span");
    span.textContent = "X";
    span.addEventListener("click", deleteItem);
    ul.append(li);
    li.append(checkbox, p, span);

  });

}
create(todoData)