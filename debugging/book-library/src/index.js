// import { addBook, removeBook } from "../books.js";
// import { createBook } from "../book.js";

// get form elements
const form = document.getElementById("add-book");
const title = document.getElementById("titleInput");
const author = document.getElementById("authorInput");
const pages = document.getElementById("pagesInput");
const read = document.getElementById("readInput");
const bookList = document.querySelector("#book-list");

let books = [
  { title: "Book 1", author: "Author 1", pages: 200, read: "Yes" },
  { title: "Book 2", author: "Author 2", pages: 350, read: "No" },
];


const createBook = (title, author, pages, read) => ({
  title,
  author,
  pages,
  read: read ? "Yes" : "No",
});


const addBook = (books, newBook) => [...books, newBook];

// Remove a book from the books array
const removeBook = (books, index) => [
  ...books.slice(0, index),
  ...books.slice(index + 1),
];

const addNewBook = (book) => {
  books = addBook(books, book);
  render();
};


const removeSelectedBook = (index) => {
  books = removeBook(books, index);
  render();
};

// Render the UI
const render = () => {
  const template = document.getElementById("book-row");

  bookList.innerHTML = "";

  books.forEach((book, index) => {
    const row = template.content.cloneNode(true);

    row.querySelector("[data-title]").textContent = book.title;
    row.querySelector("[data-author]").textContent = book.author;
    row.querySelector("[data-pages]").textContent = book.pages;
    row.querySelector("[data-read]").textContent = book.read;

    const removeBtn = row.querySelector("[data-remove]");
    removeBtn.addEventListener("click", () => {
      removeSelectedBook(index);
    });

    bookList.appendChild(row);
  });
};

// ================== Event listener for the form
form.addEventListener("submit", (e) => {
  e.preventDefault();
  const newBook = createBook(
    title.value,
    author.value,
    pages.value,
    read.checked
  );
  addNewBook(newBook);
  form.reset();
});


render();

// export { title, author, pages, read };
