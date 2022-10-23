import { addDoc } from "firebase/firestore";
import { booksColection } from "./firebase";

const form = document.querySelector("form");

form.addEventListener("submit", (event) => {
  event.preventDefault();
  const newBook = {};
  const inputElements = Array.from(event.target.children).filter(
    (input) => input.name
  );
  inputElements.forEach((element) => {
    const inputName = element.name;
    if (element.type === "checkbox") {
      newBook[inputName] = element.checked;
      return;
    }
    newBook[inputName] = element.value;
  });
  console.log(newBook);

  addDoc(booksColection, newBook)
    .then(() => {
      form.reset();
      alert("Document has been added successfully");
    })
    .catch((error) => {
      console.error(error);
    });
});
