const searchInput = document.querySelector('.search-form input');
const searchButton = document.querySelector('.search-form button');
const bookList = document.querySelector('.book-list');

searchButton.addEventListener('click', () => {
const searchTerm = searchInput.value.toLowerCase();
const bookCards = bookList.getElementsByClassName('book-card');

for (let i = 0; i < bookCards.length; i++) {
  const bookCard = bookCards[i];
  const bookTitle = bookCard.querySelector('h3').textContent.toLowerCase();
  const bookAuthor = bookCard.querySelector('p:nth-of-type(2)').textContent.toLowerCase();
  const bookGenre = bookCard.querySelector('p:nth-of-type(3)').textContent.toLowerCase();

  if (
    bookTitle.includes(searchTerm) ||
    bookAuthor.includes(searchTerm) ||
    bookGenre.includes(searchTerm)
  ) {
    bookCard.style.display = 'block';
  } else {
    bookCard.style.display = 'none';
  }
}
});

const registerForm = document.querySelector('.register-form');
const nameInput = registerForm.querySelector('input:first-of-type');
const emailInput = registerForm.querySelector('input:nth-of-type(2)');
const passwordInput = registerForm.querySelector('input:last-of-type');
const registerButton = registerForm.querySelector('button');

registerButton.addEventListener('click', () => {
const name = nameInput.value.trim();
const email = emailInput.value.trim();
const password = passwordInput.value.trim();

if (name === '' || email === '' || password === '') {
  alert('Please fill in all the fields.');
  return;
}

// Here you can add logic to handle the registration process
console.log('Registering user:', { name, email, password });
});