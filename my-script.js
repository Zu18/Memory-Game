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

// Create an array to keep the open cards
let openCards = [];


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

  // Show/hide/match each card's value (image) on click
  card.addEventListener('click', function () {
    console.log('Card clicked')
    if (openCards.length < 2 && !this.classList.contains('show') && !this.classList.contains('matched')) {
      console.log('This card is not shown')
      this.classList.add('show');
      openCards.push(this);
      console.log('Show the card')
      if (openCards.length === 2) {
        console.log('Two cards are open')
        // Get the card values for comparison
        const cardValue1 = openCards[0].querySelector('img').src;
        const cardValue2 = openCards[1].querySelector('img').src;
        console.log(`cardValue1 ${cardValue1} and cardValue2 ${cardValue2}`)
        if (cardValue1 === cardValue2) {
          console.log('Cards are the same')
          // If the cards match, mark them as matched
          openCards.forEach(card => card.classList.add('matched'));
          openCards = [];
          console.log('Cards matched')
        } else {
          console.log('Cards are different')
          // If the cards don't match, hide them after a short delay
          setTimeout(() => {
            openCards.forEach(card => card.classList.remove('show'));
            openCards = [];
            console.log('Cards closed')
          }, 1000);
        }
      }
    }
  });
}
