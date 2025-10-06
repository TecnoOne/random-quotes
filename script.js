import quotes from './quotes.js';

const quoteElement = document.getElementById('quote');
const generateBtn = document.getElementById('generate-btn');
const quoteAutorElement = document.getElementById('quote-autor');

function generateRandomQuotes() {
  const randomIndex = Math.floor(Math.random() * quotes.length);
  const randomQuote = quotes[randomIndex];
  const { quote, autor } = randomQuote;
  quoteElement.textContent = quote;
  quoteAutorElement.textContent = autor;
}

generateBtn.addEventListener('click', generateRandomQuotes);

generateRandomQuotes;
