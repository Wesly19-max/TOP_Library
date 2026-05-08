//list of books

let myLibrary = [];

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

//dialog
const newBookButton = document.querySelector(".addNewBook");
const dialog = document.querySelector("dialog");
const confirmBtn = document.querySelector(".confirmBtn");



//click "New Book" button and dialog will popup
newBookButton.addEventListener("click", () => {
  dialog.showModal();
});


function createNewBookCard(index) {
  //create new element div (book-card)
    let div = document.createElement("div");
    div.classList.add("book-card");
    div.setAttribute("data-id",index.id);

    //fill the div with the properties of objects(e.g.title,author,pages,readstatus)
    let title = document.createElement("h1");
    let author = document.createElement("p");
    let page = document.createElement("p");
    let removeBtn = document.createElement("button");
    let readStatusBtn = document.createElement("button");
    readStatusBtn.classList("")

    title.textContent = `"${index.bookName}"`;
    author.textContent =  index.author;
    page.textContent = `${index.numberOfPages} pages`;
    removeBtn.textContent = "remove";
    
    if (index.readStatus === true) {
      readStatusBtn.textContent = "read";
    }else {
      readStatusBtn.textContent = "not read"
    }
    
    div.appendChild(title);
    div.appendChild(author);
    div.appendChild(page);
    div.appendChild(removeBtn);
    div.appendChild(readStatusBtn);


    document.querySelector(".mainContent").appendChild(div);

    //when remove button is clicked, the book that is clicked will be deleted
  removeBtn.addEventListener("click", () => {
    //remove book object in array with the corresponding id 
    //of the parent node of removebtn that was clicked
    myLibrary = myLibrary.filter((index) => {
      console.log(removeBtn.parentNode.dataset.id);
      console.log(index.id);
      return !(removeBtn.parentNode.dataset.id === index.id);
    })
    
    console.log(myLibrary);
    displayBookCards();
  })
  
}

function displayBookCards() {
  //delete current book cards first
  let bookCards = document.querySelectorAll(".book-card");

  for (let i=0;i<bookCards.length;i++) {
    bookCards[i].remove();
  }

  //display user input on the bookcard
  //for each book object in myLibrary array
  myLibrary.forEach((index) => {
    createNewBookCard(index);

    
  });
};

//display new book card if confirmBtn is clicked
confirmBtn.addEventListener("click", (event) => {
  event.preventDefault(); // We don't want to submit this fake form

  //get user inputs
  const title = document.querySelector("#title").value;
  const author = document.querySelector("#author").value;
  const pages = document.querySelector("#pages").value;
  const readStatus = document.querySelector("#readstatus").checked;

  //add new book card based on user input
  addBookToLibrary(title,author,pages,readStatus);

  document.querySelector("form").reset();
  //display new book card based on library array
    //delete no books added text
    const defaultMessage = document.getElementById("default-message");
    if (defaultMessage) {
      defaultMessage.remove();
    }
  
    
    displayBookCards();
    dialog.close();
});




