const addBookButton = document.getElementById('add-book');
const cardContainer = document.querySelector('.card-container');
const bookAuthorInput = document.getElementById('book-author');
const bookPagesInput = document.getElementById('book-pages');
const bookReadInput = document.getElementById('book-read');
const bookTitleInput = document.getElementById('book-title');
const cards = document.querySelectorAll('.card');
const closePopupButton = document.getElementById('close-popup');
const openPopupButton = document.getElementById('add-new-book');
const popup = document.getElementById('popup');
const cardForm = document.getElementById('card-form');

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
    this.title = title.value; // Property: title
    this.author = author.value; // Property: author
    this.pages = pages; // Property: pages
    this.read = read; // Property: read
};

// Add event listener to the "Add book" button
addBookButton.addEventListener('click', (e) => {
  e.preventDefault();

  // Get the input values
  const title = bookTitleInput.value;
  const author = bookAuthorInput.value;
  const pages = bookPagesInput.value;
  const read = bookReadInput.value;

  // Create a new card element
  const card = document.createElement('div');
  card.className = 'card';

    // Create the card content
    const cardContent = `
    <h1>${title}</h1>
    <p>Author: ${author}</p>
    <p>Pages: ${pages}</p>
    <button class="r-btn">Read</button>
    <button class="delete">Remove</button>
  `;

  // Add the card content to the card element
  card.innerHTML = cardContent;

  // Add the card to the card container
  cardContainer.appendChild(card);

  // Clear the input fields
  bookTitleInput.value = '';
  bookAuthorInput.value = '';
  bookPagesInput.value = '';
  bookReadInput.value = '';

  popup.style.display = 'none';
});



// function createBookCard() {
//     const cardHTML = document.createElement('div');
//     cardHTML.innerHTML = `
//     <div class="card">
//     <h1>${this.title}</h1>
//         <p>Author: ${this.author}</p>
//         <p>Pages: ${this.pages}</p>
//         <p>Read: ${this.read}</p>
//         <button class="r-btn">Read</button>
//         <button class="delete">Remove</button>
//         </div>
//     `;
//     return cardHTML;
// };

// cardForm.addEventListener('submit', (e) => {
//   e.preventDefault();
//   const title = bookTitle.value;
//   const author = bookAuthor.value;
//   const pages = bookPages.value;
//   const read = bookRead.value; 

//   const newBook = new Book(title, author, pages, read);
//   const bookCard = newBook.createBookCard();
//   bookList.appendChild(bookCard);
  
//   // clear input fields
//   bookTitle.value = '';
//   bookAuthor.value = '';
//   bookPages.value = '';
//   bookRead.value = '';

//   popup.style.display = 'none';

// })


// Description: Creates a new Book object with the specified properties 
// const theHobbit = new Book('The Hobbit', 'J.R.R. Tolkien', '295 pages', 'not read yet');

// Logs the information about the book to the console
// console.log(theHobbit.info()); // The Hobbit by J.R.R. Tolkien,