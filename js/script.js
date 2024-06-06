// Get all the necessary elements
const addBookButton = document.getElementById('add-book');
const cardContainerParent = document.querySelector('.card-container-parent');
const bookAuthorInput = document.getElementById('book-author');
const bookPagesInput = document.getElementById('book-pages');
const bookReadInput = document.getElementById('book-read');
const bookTitleInput = document.getElementById('book-title');
const closePopupButton = document.getElementById('close-popup');
const openPopupButton = document.getElementById('add-new-book');
const popup = document.getElementById('popup');
const cardForm = document.getElementById('card-form');

// Initialize an empty array to store the book data
let books = [];

// Add event listener to the "Add new book" button
openPopupButton.addEventListener('click', () => {
  popup.style.display = 'block';
});

// Add event listener to the "Close popup" button
closePopupButton.addEventListener('click', () => {
  popup.style.display = 'none'; // Hide the pop-up
});

// Add event listener to the "Add book" button
addBookButton.addEventListener('click', (e) => {
  e.preventDefault();

  // Initialize the card container counter
let cardContainerCounter = 0;

  // Get the input values
  const title = bookTitleInput.value;
  const author = bookAuthorInput.value;
  const pages = bookPagesInput.value;
  let isRead = false;

  // Create a new book object
  const book = {
    title,
    author,
    pages,
    isRead
  };

  // Add the book to the books array
  books.push(book);

  // Create a new card element
  const card = document.createElement('div');
  card.className = 'card';

  // Create the card content
  const cardContent = `
  <h1>${title}</h1>
  <p>Author: ${author}</p>
  <p>Pages: ${pages}</p>
  <button class="r-btn">${isRead ? 'Read' : 'Not Read'}</button>
  <button class="delete">Remove</button>
  `;

  // Add the card content to the card element
  card.innerHTML = cardContent;

  // Get the current card container
  let currentCardContainer;

  // checks if the cardContainerParent is returning null
  const cardContainerParent = document.querySelector('.card-container-parent');
  if (!cardContainerParent) {
    console.error("cardContainerParent is null");
    return;
  }

  if (cardContainerCounter === 0) {
    currentCardContainer = document.querySelector('.card-container');
  } else {
    currentCardContainer = document.querySelector(`.card-container-${cardContainerCounter}`);
  }

  // Check if the current card container has 4 cards
if (currentCardContainer.childElementCount >= 4) {
  console.log(`Creating new card container ${cardContainerCounter}`);
  
  // Create a new card container
  const newCardContainer = document.createElement('div');

  // checks if this is returning null
  if (!newCardContainer) {
    console.error("newCardContainer is null");
    return;
  }
  
  newCardContainer.className = `card-container card-container-${++cardContainerCounter}`;
  cardContainerParent.appendChild(newCardContainer);
  
  console.log(`New card container appended to cardContainerParent`);
  
  // Append the new card to the new container
  newCardContainer.appendChild(card);
  
  console.log(`New card appended to new card container`);
} else {
  console.log(`Appending new card to current container`);
  
  // Append the new card to the current container
  currentCardContainer.appendChild(card);
}

  // Add the card to the current card container
  currentCardContainer.appendChild(card);

  // Clear the input fields
  bookTitleInput.value = '';
  bookAuthorInput.value = '';
  bookPagesInput.value = '';

  popup.style.display = 'none';

  // Add an event listener to the delete button to remove the card
  card.addEventListener('click', (e) => {
    // Check if the clicked element is the delete button
    if (e.target.classList.contains('delete')) {
      // Remove the card from the card container
      currentCardContainer.removeChild(card);

      // Remove the book from the books array
      const index = books.findIndex((book) => book.title === title);
      if (index !== -1) {
        books.splice(index, 1);
      }
    }
  });

  // Add an event listener to the "Read" button to toggle the read status
  card.addEventListener('click', (e) => {
    if (e.target.classList.contains('r-btn')) {
      // Find the book in the books array
      const book = books.find((book) => book.title === title);

      // Toggle the read status
      if (book) {
        book.isRead = !book.isRead;
        e.target.textContent = book.isRead ? 'Read' : 'Not Read';
      }
    }
  });
});