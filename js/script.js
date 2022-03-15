let gameCardContainer = document.getElementById("game-cards-container");

let shuffledGames = games.sort(() => Math.random() - 0.5);

shuffledGames.forEach(game => {
    gameCardContainer.appendChild(GameCard(game.name, game.genre, game.price));
});