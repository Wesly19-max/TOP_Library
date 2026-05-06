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


