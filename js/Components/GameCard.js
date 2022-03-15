const GameCard = (gameName, gameGenre, price) => {
    const template = document.createElement("template")
    template.innerHTML = 
    `<div class='gameCard'>`
        + `<img class='d-inline' src='img/games/${gameName}.jpg'>`
        + `<div class='game-info-container'>`
        + `<h1 class='d-inline game-title'>${gameName}</h1>`
        + `<h1 class='d-inline game-genre'>${gameGenre.join(", ")}</h1>`
        + `</div>`
        + `<h1 class='d-inline game-price'>R$${price}</h1>` +
    `</div>`;
    return template.content.firstChild;
}