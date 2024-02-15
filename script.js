/** @format */

const sortBy = document.getElementById("sort-by");
const cardContainer = document.getElementById("cards-container");

let groups = [];
let cards = [];

// make a new card

function renderCard(cardArray) {
  while (cardContainer.firstChild) {
    cardContainer.firstChild.remove();
  }
}
