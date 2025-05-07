function loadHTML(id, file) {
  fetch(file)
    .then(response => response.text())
    .then(data => {
      document.getElementById(id).innerHTML = data;
    })
    .catch(error => console.error('Error loading HTML:', error));
}

loadHTML('header', 'partials/header.html');
loadHTML('modal', 'partials/modal.html');
loadHTML('hero', 'partials/hero.html');
loadHTML('about', 'partials/about.html');
loadHTML('game', 'partials/game.html');
loadHTML('how', 'partials/how.html');
loadHTML('game-a', 'partials/game-a.html');
loadHTML('reviews', 'partials/reviews.html');
loadHTML('faq', 'partials/faq.html');
loadHTML('footer', 'partials/footer.html');
