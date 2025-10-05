const quotes = [
  {
    quote:
      'Жизнь коротка, искусство вечно, случайные обстоятельства скоропреходящи, опыт обманчив, суждения трудны',
    autor: 'Гипократ',
  },
  {
    quote:
      'Бесполезные люди живут только для того, чтобы есть и пить. Достойные люди едят и пьют только для того, чтобы жить',
    autor: 'Сократ',
  },
  {
    quote:
      'Благо везде и повсюду зависит от соблюдения двух условий: правильного установления конечных целей и отыскания соответствующих средств, ведущих к конечной цели',
    autor: 'Аристотель',
  },
  {
    quote: 'Познай самого себя — и ты познаешь вселенную и богов',
    autor: 'Дельфийская надпись (приписывается Сократу)',
  },
  {
    quote:
      'Не тот велик, кто никогда не падал, а тот велик — кто падал и поднимался',
    autor: 'Конфуций',
  },
  {
    quote: 'Счастье зависит от нас самих',
    autor: 'Аристотель',
  },
  {
    quote:
      'Мудрец требует всего от себя, а ничтожный человек — всего от других',
    autor: 'Конфуций',
  },
  {
    quote: 'Кто хочет двигать мир, пусть сначала сдвинет себя самого',
    autor: 'Сократ',
  },
  {
    quote: 'Мера есть лучшее из всего',
    autor: 'Пиндар',
  },
  {
    quote:
      'Не тот свободен, кто не имеет господина, а тот, кто не является рабом своих страстей',
    autor: 'Сенека',
  },
];

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
