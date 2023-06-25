// Number of cards in the memory game
const numCards = 16;

// Create an array with pairs of card values
const cardValues = [
  'images/sheep.png', 'images/sheep.png',
  'images/dragon.png', 'images/dragon.png',
  'images/owl.png', 'images/owl.png',
  'images/cat.png', 'images/cat.png',
  'images/tiger.png', 'images/tiger.png',
  'images/snake.png', 'images/snake.png',
  'images/giraffe.png', 'images/giraffe.png',
  'images/fox.png', 'images/fox.png'
];

// Create an array to keep the open cards
let openCards = [];

// Create a variable to count the number of open cards
let openCardsCount = 0;

// Create  and display a variable to track the number of moves
let movesCount = 0;
const moves = document.getElementById("moves-count");
moves.innerHTML = `<span>Moves:</span> ${movesCount}`;

//For calculating moves
const movesCounter = () => {
  movesCount += 1;
  moves.innerHTML = `<span>Moves:</span>${movesCount}`;
};

// Function to shuffle an array using Fisher-Yates algorithm
function shuffleArray(array) {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
}

// Function to display a winning message
function showModal() {
  const modal = document.getElementById('modal');
  modal.style.display = 'block';
  const modalContentText = document.getElementById('modal-content-text');
  modalContentText.textContent = `You have won the game! Moves: ${movesCount}!`;
}

// Create button to close a winning message
const closeButton = document.querySelector('.close');
closeButton.addEventListener('click', closeModal);

// Function to close a winning message and restart game
function closeModal() {
  const modal = document.getElementById('modal');
  modal.style.display = 'none';
}

function startNewGame() {
  // Perform the window reset logic here
  window.location.reload();
}

// Create the cards
function createCard(cardValue) {
  const card = document.createElement('div');
  card.className = 'card';

  const image = document.createElement('img');
  image.src = cardValue;

  card.appendChild(image);
  return card;
}

function showCard(card) {
  card.classList.add('show');
}

function addCardToOpenCards(card) {
  openCards.push(card);
}

// Add matched for the same cards(image) and count the matched cards.
function matchCards() {
  openCards.forEach(card => card.classList.add('matched'));
  openCards = [];
  openCardsCount += 2;
 // Display the winning message if all cards matched/open
  if (openCardsCount === numCards) {
    showModal();
  }
}

function closeCards() {
  // If the cards don't match, hide them after a short delay
  setTimeout(() => {
    openCards.forEach(card => card.classList.remove('show'));
    openCards = [];
  }, 1000);
}



// Shuffle the card values
shuffleArray(cardValues);

// Get the memory game container element
const memoryGameContainer = document.querySelector('.memory-game');

// Create the cards and add them to the container
for (let i = 0; i < numCards; i++) {
  const card = createCard(cardValues[i]);
  memoryGameContainer.appendChild(card);

  // Show/hide/match each card's value (image) on click
  card.addEventListener('click', function () {
    if (openCards.length < 2 && !this.classList.contains('show') && !this.classList.contains('matched')) {
      showCard(card);
      addCardToOpenCards(card);
      if (openCards.length === 2) {
        // Count the moves
        movesCounter();
        // Get the card values for comparison
        const cardValue1 = openCards[0].querySelector('img').src;
        const cardValue2 = openCards[1].querySelector('img').src;
        if (cardValue1 === cardValue2) {
          // If the cards match, mark them as matched; count the open cards + show the winnig message
          matchCards();
          }
         else {
          closeCards();
        }
      }
    }
  });
}

