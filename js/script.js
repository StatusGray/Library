const cards = document.querySelectorAll('.card');
const openPopupButton = document.getElementById('add-new-book');
const popup = document.getElementById('popup');
const closePopupButton = document.getElementById('close-popup');


openPopupButton.addEventListener('click', () => {
    popup.style.display = 'block';
});

closePopupButton.addEventListener('click', () => {
    popup.style.display = 'none'; // Hide the pop-up
  });
  
cards.forEach(card => {
    const deleteButton = card.querySelector('.delete');
  
    deleteButton.addEventListener('click', () => {
      // Remove the card from the DOM
      card.remove();
})});

// Creates new Book function 4 properties
function Book (title, author, pages, read) { 
    this.title = title; // Property: title
    this.author = author; // Property: author
    this.pages = pages; // Property: pages
    this.read = read; // Property: read
};

Book.prototype.render = function() {
  const cardHTML = `
  <div class="card">
  <h1>${this.title}</h1>
      <p>Author: ${this.author}</p>
      <p>Pages: ${this.pages}</p>
      <p>Read: ${this.read}</p>
      <button class="r-btn">Read</button>
      <button class="delete">Remove</button>
      </div>
  `;
  return cardHTML;
};

const newBook = new Book(title, author, pages, read);
const cardHTML = newBook.render();

const bookList = document.querySelector('.card-container');
const addBook = document.getElementById('add-book');
addBook.addEventListener('click', () => {
  bookList.innerHTML += cardHTML;
})


// Description: Creates a new Book object with the specified properties 
// const theHobbit = new Book('The Hobbit', 'J.R.R. Tolkien', '295 pages', 'not read yet');

// Logs the information about the book to the console
// console.log(theHobbit.info()); // The Hobbit by J.R.R. Tolkien,