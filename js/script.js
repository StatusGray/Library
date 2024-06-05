const addBookButton = document.getElementById('add-book');
const cardContainer = document.querySelector('.card-container');
const bookAuthorInput = document.getElementById('book-author');
const bookPagesInput = document.getElementById('book-pages');
const bookReadInput = document.getElementById('book-read');
const bookTitleInput = document.getElementById('book-title');
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

// Add event listener to the "Add book" button
addBookButton.addEventListener('click', (e) => {
  e.preventDefault();

  // Get the input values
  const title = bookTitleInput.value;
  const author = bookAuthorInput.value;
  const pages = bookPagesInput.value;
  let isRead = false;

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

  // Add the card to the card container
  cardContainer.appendChild(card);

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
      cardContainer.removeChild(card);
    }
  });

  // Add an event listener to the "Read" button to toggle the read status
  card.addEventListener('click', (e) => {
    if(e.target.classList.contains('r-btn')){
      isRead = !isRead;
      e.target.textContent = isRead ? 'Read' : 'Not Read';
    }
  })
});


