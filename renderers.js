export const bookOfMonth = (
  book
) => `<li class="cardInProgressBookItemActive"id ="${book.id}">
  <img class="bookInProgresCardImg" src="${book.img}" alt="bookPic">
  <div class="inProgressInfo">
      <b><p class="cardBookInProgresName">${book.title}</p></b>
      <p class="cardInProgresWriterTitle"><b>${book.writer}</b></p>
      <p class="inProgresAbout">${book.about}</p>
      <a class="bookSite" href="${book.video}"><button class="cardVideoBtn">Дізнатися більше</button></a>
  </div>
  </li>`;

export const bookLi = (book, inStock) => `<li class="cardBookItem ${
  inStock ? "Stock" : "outOfStock"
}" id ="${book.id}" >
  <img class="bookCardImg" src=" ${book.img}" alt="bookPic">
  <b><p class="cardBookName">${book.title}</p></b>
  <p class="cardWriterTitle">${book.writer}</p>
  <a class="bookSite" href="${
    book.video
  }"><button class="cardVideoBtn">Дізнатися більше</button></a>
  </li>`;

export const bookLiforUpd = (book) => `<li class="cardBookItem" 
style="width: 150px;"
id ="${book.id}" >
  <b><p class="cardBookName">${book.title}</p></b>
  <p class="cardWriterTitle">${book.writer}</p>
  <img class="ImgToUpd"
  style="width: 100px;"
  src="${book.img}" alt="img">
  </li>`;
