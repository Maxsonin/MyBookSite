import { doc, updateDoc } from "firebase/firestore";
import { booksColection, db } from "./firebase";
import { bookLi, bookLiforUpd } from "./renderers";
import { getBooks } from "./index";

const form = document.querySelector("form");
let books;
const bookRend = document.querySelector(".bookRend");

const submit = document.querySelector("button");

let bookId;
function addListener() {
  const bookLi = document.querySelectorAll(".cardBookItem");
  Array.from(bookLi).forEach((li) => {
    li.addEventListener("click", (event) => {
      bookId = event.currentTarget.id;
      processForm();
      addValue(bookId);
    });
  });
}

function processForm() {
  const activeBook = books.find((book) => book.id === bookId);
  console.log(activeBook);
}

function renderToUpd(books) {
  bookRend.innerHTML = "";
  books.forEach((book) => {
    bookRend.innerHTML += bookLiforUpd(book);
  });
}

const BookTitle = document.getElementById("BookTitle");
const BookWriter = document.getElementById("BookWriter");
const BookAbout = document.getElementById("BookAbout");
const BookVideo = document.getElementById("BookVideo");
const BookImg = document.getElementById("BookImg");

const popBook = document.getElementById("popBook");
const BookOfMonth = document.getElementById("BookOfMonth");
const BookInStock = document.getElementById("BookInStock");

function addValue(bookId) {
  const activeBook = books.find((book) => book.id === bookId);
  BookTitle.value = activeBook.title;
  BookWriter.value = activeBook.writer;
  BookAbout.value = activeBook.about;
  BookVideo.value = activeBook.video;
  BookImg.value = activeBook.img;

  popBook.value = activeBook.popBook;
  BookOfMonth.value = activeBook.BookOfMonth;
  BookInStock.value = activeBook.BookInStock;
  console.log(activeBook.popBook);
}

submit.addEventListener("click", updateBook);
function updateBook(event) {
  event.preventDefault();
  const documentref = doc(db, "BookRoot", bookId);
  const newBook = {};
  const formsInputs = document.querySelectorAll("input");
  const inputElements = Array.from(formsInputs).filter((input) => input.name);
  inputElements.forEach((element) => {
    const inputName = element.name;
    if (element.type === "checkbox") {
      newBook[inputName] = element.checked;
      return;
    }
    newBook[inputName] = element.value;
  });
  updateDoc(documentref, newBook);
}

getBooks().then((response) => {
  books = response;
  renderToUpd(books);
  addListener();
});
