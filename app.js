//list of books

const myLibrary = [];

//Book constructor
function Book (bookName,author,numberOfPages,readStatus) {
  this.id = crypto.randomUUID();
  this.bookName = bookName;
  this.author = author;
  this.numberOfPages = numberOfPages;
  this.readStatus = readStatus;
}

//add book instances
function addBookToLibrary(bookName,author,numberOfPages,readStatus) {
  //take params, create a book object from those params
  const book = new Book(bookName,author,numberOfPages,readStatus);
  //store new book object in myLibrary array
  myLibrary.push(book);
}


//display books

addBookToLibrary("Hunger Games","Suzanne Collins",98,false);
addBookToLibrary("Hunger Games","Suzanne Collins",98,false);

//let display = document.querySelector("p");
//myLibrary.forEach((index) => {
//  display.textContent += `${index.bookName} from ${index.author} has ${index.numberOfPages} pages`;
// }
//);

//dialog
const newBookButton = document.querySelector(".addNewBook");
const dialog = document.querySelector("dialog");



//click "New Book" button and dialog will popup
newBookButton.addEventListener("click", () => {
  dialog.showModal();
});

confirmBtn.addEventListener("click", (event) => {
  event.preventDefault(); // We don't want to submit this fake form
});

