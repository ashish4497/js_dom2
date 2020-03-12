let addBooks = document.querySelector(".add_books");
let ul = document.querySelector(".item_list ");
let bookAdd = document.querySelector(".add_button");
let hide = document.querySelector("#hide");
let search = document.querySelector(".search-books");

let id = 125050;

let bookArray = [
  {
    bookName: "The Alchamestic",
    id: id++
  },
  {
    bookName: "The story book",
    id: id++
  },
  {
    bookName: "The English book",
    id: id++
  }
];

function addBook(e) {
  e.preventDefault();
  console.log(addBooks.value, "console the input value");
  if (e.keyCode == 13) {
    displayInfo(bookArray);
  }
}

function addBookButton(e) {
  e.preventDefault();
  const bookObj = {
    bookName: addBooks.value,
    checked: false,
    id: id++
  };
  console.log(bookObj, "console the Object")
  bookArray.push(bookObj);
  displayInfo(bookArray);
}

function displayInfo(bookArray = []) {
  ul.textContent = "";
  bookArray.forEach(bookVal => {
    let li = document.createElement("li");
    li.textContent = bookVal.bookName;
    ul.append(li);
  });
  searchBooks()
};

function hideBooks(e) {
  if (hide.checked == true) {
    ul.style.display = "none";
  } else {
    ul.style.display = "block";
  }
}

function searchBooks(e) {
  let val = search.value;
  console.log(val, "check console val");
}

addBooks.addEventListener("keyup", addBook);
bookAdd.addEventListener("click", addBookButton);
hide.addEventListener("click", hideBooks);
search.addEventListener("keyup", searchBooks);

displayInfo(bookArray);

