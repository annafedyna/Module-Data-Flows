import { title, author, pages, read } from "./src/index.js";

const createBook = (title, author, pages, read) => {
  const book = {
    title,
    author,
    pages,
    read: read ? "Yes" : "No",
  };
  return book;
};

export default createBook;
