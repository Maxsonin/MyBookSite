import { getDocs } from "firebase/firestore";
import { booksColection } from "./firebase";
import { bookOfMonth, bookLi } from "./renderers";
export async function getBooks() {
  const books = [];
  const snapshoot = await getDocs(booksColection);
  snapshoot.forEach((document) => {
    books.push({
      ...document.data(),
      id: document.id,
    });
  });
  return books;
}

const popList = document.querySelector(".popList");
const libraryBooksList = document.querySelector(".libraryBooksList");
const bookOfMonthUl = document.querySelector(".bookOfMonthUl");

// RenderBooks
function render(books) {
  books.forEach((book) => {
    const isInStock = book.BookInStock;
    if (book.popBook) {
      popList.innerHTML += bookLi(book, isInStock);
    } else {
      libraryBooksList.innerHTML += bookLi(book, isInStock);
    }

    if (book.BookOfMonth) {
      bookOfMonthUl.innerHTML += bookOfMonth(book);
    }

    console.log(bookOfMonth);
  });
}
// RenderBooks

// ToTop
const toTop = document.querySelector(".toTop");
window.addEventListener("scroll", () => {
  if (window.pageYOffset > 100) {
    toTop.classList.add("active");
  } else {
    toTop.classList.remove("active");
  }
});
// ToTop

getBooks().then((books) => {
  render(books);
});
