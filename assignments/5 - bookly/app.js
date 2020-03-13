let addBooks = document.querySelector(".add_books");
let ul = document.querySelector(".item_list ");
let bookAdd = document.querySelector(".add_button");
let hide = document.querySelector("#hide");
let search = document.querySelector(".search-books");

let id = 125050;

let bookArray = [
  {
    bookName: "The God of Small Things",
    id: id++
  },
  {
    bookName: "Beloved by Toni Morrison",
    id: id++
  },
  {
    bookName: "Blood Meridian",
    id: id++
  }
];

function addBook(e) {
  e.preventDefault();
}

function addBookButton(e) {
  var textVal = addBooks.value;
  e.preventDefault();
  if (textVal.trim().length !== 0) {

    const bookObj = {
      bookName: addBooks.value,
      checked: false,
      id: id++
    };
    bookArray.push(bookObj);
    displayInfo(bookArray);
    addBooks.value = "";
  }
}

function displayInfo(bookArray = []) {
  ul.textContent = "";
  bookArray.forEach(bookVal => {
    let li = document.createElement("li");
    li.setAttribute("id", bookVal.id);
    let button = document.createElement("button");
    let p = document.createElement("p");
    button.setAttribute("class", "delete");
    button.textContent = "Delete";
    li.append(button);
    p.textContent = bookVal.bookName;
    li.append(p);
    ul.append(li);
    button.addEventListener("click", deleteItem);
  });
};

function deleteItem(e) {
  let id = e.target.parentElement.id;
  console.dir(id);
  let removed = bookArray.findIndex(item => item.id == id);
  bookArray.splice(removed, 1);
  displayInfo(bookArray);
}

function hideBooks(e) {
  if (hide.checked == true) {
    ul.style.display = "none";
  } else {
    ul.style.display = "block";
  }
}

function searchBooks(e) {
  let val = search.value.toLowerCase();
  var searchBook = bookArray.filter((book) => {
    return book.bookName.toLowerCase().includes(val);
  })
  displayInfo(searchBook);
}

addBooks.addEventListener("keyup", addBook);
bookAdd.addEventListener("click", addBookButton);
hide.addEventListener("click", hideBooks);
search.addEventListener("keyup", searchBooks);

displayInfo(bookArray);

