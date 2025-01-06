import quotes from './src/quotes.js';
import {
  hideFavoriteCard,
  showFavoriteCard,
  hideToggleFavoriteBtn,
  showToggleFavoriteBtn,
  toggleFavoriteIcon,
} from './src/favoritesHandler.js';
import { generateRandomInt } from './src/utils/math.js';
const generateBtn = document.getElementById('generate-btn');
const toggleFavoriteBtn = document.getElementById('toggle-favorite-btn');

const favoriteContainer = document.getElementById('favorites-container');

let currentQuoteIndex;
hideToggleFavoriteBtn(toggleFavoriteBtn);

function displayQuote(quote) {
  const { text, author, isFavorite } = quote;
  const quoteElement = document.getElementById('quote');
  const quoteAuthorElement = document.getElementById('quote-author');
  quoteElement.textContent = text;
  quoteAuthorElement.textContent = author;
  showToggleFavoriteBtn(toggleFavoriteBtn);
  toggleFavoriteIcon(isFavorite, toggleFavoriteBtn);
}

function chooseRandomQuote(quotes) {
  const randomIndex = generateRandomInt(quotes.length);
  currentQuoteIndex = randomIndex;
  return quotes[randomIndex];
}

function generateAndDisplayRandomQuote() {
  const randomQuote = chooseRandomQuote(quotes);
  displayQuote(randomQuote);
}

function toggleFavorite() {
  const currentQuote = quotes[currentQuoteIndex];
  currentQuote.isFavorite = !currentQuote.isFavorite;
  toggleFavoriteIcon(currentQuote.isFavorite, toggleFavoriteBtn);

  if (currentQuote.isFavorite) {
    showFavoriteCard(currentQuote.text, currentQuote.author, favoriteContainer);
  } else {
    hideFavoriteCard(currentQuote.text);
  }
}

generateBtn.addEventListener('click', generateAndDisplayRandomQuote);
toggleFavoriteBtn.addEventListener('click', toggleFavorite);

// generateRandomQuote();
