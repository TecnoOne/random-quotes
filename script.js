const quotes = [
  'Жизнь коротка, искусство вечно, случайные обстоятельства скоропреходящи, опыт обманчив, суждения трудны.',
  'Бесполезные люди живут только для того, чтобы есть и пить. Достойные люди едят и пьют только для того, чтобы жить.',
  'Благо везде и повсюду зависит от соблюдения двух условий: правильного установления конечных целей и отыскания соответствующих средств, ведущих к конечной цели.',
];

const quoteElement = document.getElementById('quote');
const generateBtn = document.getElementById('generate-btn');

function generateRandomQuotes() {
  const randomIndex = Math.floor(Math.random() * quotes.length);
  const randomQuote = quotes[randomIndex];
  console.log(randomIndex);
  quoteElement.textContent = randomQuote;
}

generateBtn.addEventListener('click', generateRandomQuotes);

generateRandomQuotes;
