function toggleFavoriteIcon(isFavorite, btn) {
  btn.classList.toggle('fa-star', isFavorite);
  btn.classList.toggle('fa-star-o', !isFavorite);
}

function showFavoriteCard(quote, autor, container) {
  const favoriteCard = document.createElement('div');
  favoriteCard.classList.add('favorite-card');
  favoriteCard.innerHTML = `
        <p>${quote}</p>
        <p class='autor'>${autor}</p> 
      `;
  container.appendChild(favoriteCard);
}

function hideFavoriteCard(quote) {
  const favoriteCards = document.querySelectorAll('.favorite-card');
  favoriteCards.forEach((card) => {
    if (card.textContent.includes(quote)) {
      card.remove();
    }
  });
}

export { toggleFavoriteIcon, showFavoriteCard, hideFavoriteCard };
