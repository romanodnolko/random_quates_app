const quotes = [
  {
    quote: 'Be yourself; everyone else is already taken.',
    author: 'Oscar Wilde',
  },

  {
    quote:
      "In three words I can sum up everything I've learned about life: it goes on.",
    author: 'Robert Frost',
  },

  {
    quote: 'The only thing we have to fear is fear itself.',
    author: 'Franklin D. Roosevelt',
  },

  {
    quote: 'The unexamined life is not worth living.',
    author: 'Socrates',
  },

  {
    quote: 'To be yourself in a world that is constantly trying to make you something else is the greatest accomplishment.',
    author: 'Ralph Waldo Emerson',
  },

  {
    quote: 'Success is not final, failure is not fatal: It is the courage to continue that counts.',
    author: 'Winston Churchill',
  },

  {
    quote: 'Injustice anywhere is a threat to justice everywhere.',
    author: 'Martin Luther King Jr.',
  },

  {
    quote: 'Happiness is not something ready made. It comes from your own actions.',
    author: 'Dalai Lama',
  },

  {
    quote: 'The way to get started is to quit talking and begin doing.',
    author: 'Walt Disney',
  },

  {
    quote: 'Life is what happens when you’re busy making other plans.',
    author: 'John Lennon',
  },
];


const quoteElement = document.getElementById('quote');
const quoteAuthorElement = document.getElementById('quote-author');
const generateBtn = document.getElementById('generate-btn');

function generateRandomQuote() {
  const randomIndex = Math.floor(Math.random() * quotes.length);
  const {quote, author} = quotes[randomIndex];
  // const quote = randomQuote.quote;
  // const quoteAuthor = randomQuote.author;
  quoteElement.textContent = quote;
  quoteAuthorElement.textContent = author;
}
generateBtn.addEventListener('click', generateRandomQuote);

generateRandomQuote();
