// Number of cards in the memory game
const numCards = 16;

// Create an array with pairs of card values
const cardValues = [
  'images/2_of_clubs.png', 'images/2_of_clubs.png',
  'images/3_of_clubs.png', 'images/3_of_clubs.png',
  'images/2_of_diamonds.png', 'images/2_of_diamonds.png',
  'images/3_of_diamonds.png', 'images/3_of_diamonds.png',
  'images/2_of_hearts.png', 'images/2_of_hearts.png',
  'images/3_of_hearts.png', 'images/3_of_hearts.png',
  'images/2_of_spades.png', 'images/2_of_spades.png',
  'images/3_of_spades.png', 'images/3_of_spades.png'
];


// Get the memory game container element
const memoryGameContainer = document.querySelector('.memory-game');

// Create the cards and add them to the container
for (let i = 0; i < numCards; i++) {
  const card = document.createElement('div');
  card.className = 'card';
  const image = document.createElement('img');
  image.src = cardValues[i];

  card.appendChild(image);
  memoryGameContainer.appendChild(card);
}

