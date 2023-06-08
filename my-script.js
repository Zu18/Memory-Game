// Number of cards in the memory game
const numCards = 16;

// Create an array with pairs of card values
const cardValues = [
  'A', 'A',
  'B', 'B',
  'C', 'C',
  'D', 'D',
  'E', 'E',
  'F', 'F',
  'G', 'G',
  'H', 'H'
];


// Get the memory game container element
const memoryGameContainer = document.querySelector('.memory-game');

// Create the cards and add them to the container
for (let i = 0; i < numCards; i++) {
  const card = document.createElement('div');
  card.className = 'card';
  card.textContent = cardValues[i];
  memoryGameContainer.appendChild(card);
}

