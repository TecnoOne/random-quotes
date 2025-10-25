//import { createElement } from 'react';
import quotes from './quotes.js';

const quoteElement = document.getElementById('quote');
const generateBtn = document.getElementById('generate-btn');
const quoteAutorElement = document.getElementById('quote-autor');
const toggleFavoriteBtn = document.getElementById('toggle-favorite-btn');
const favoritesContainer = document.getElementById('favorites-container');

let currentQuoteIndex;

function generateRandomQuotes() {
  currentQuoteIndex = Math.floor(Math.random() * quotes.length);
  const randomQuote = quotes[currentQuoteIndex];
  const { quote, autor } = randomQuote;
  quoteElement.textContent = quote;
  quoteAutorElement.textContent = autor;
  toggleFavoriteBtn.textContent = randomQuote.isFavorite
    ? 'Remove to favorite'
    : 'Add to favorite';
  toggleFavoriteBtn.style.display = 'inline-block';
}

function toggleFavorite() {
  const currentQuote = quotes[currentQuoteIndex];
  currentQuote.isFavorite = !currentQuote.isFavorite;
  toggleFavoriteBtn.textContent = currentQuote.isFavorite
    ? 'Remove to favorite'
    : 'Add to favorite';

  if (currentQuote.isFavorite) {
    const favoriteCard = document.createElement('div');
    favoriteCard.classList.add('favorite-card');
    favoriteCard.innerHTML = `
        <p>${currentQuote.quote}</p>
        <p class='autor'>${currentQuote.autor}</p> 
      `;
    favoritesContainer.appendChild(favoriteCard);
  } else {
    const favoriteCards = document.querySelectorAll('.favorite-card');
    favoriteCards.forEach((card) => {
      if (card.textContent.includes(currentQuote.quote)) {
        card.remove();
      }
    });
  }
}

generateBtn.addEventListener('click', generateRandomQuotes);
toggleFavoriteBtn.addEventListener('click', toggleFavorite);

generateRandomQuotes;
