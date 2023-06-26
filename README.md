# Memory Game
Memory Game is a simple card game where you need to match pairs by turning over 2 cards at a time. 
To create this game I used vanilla(plain) JavaScript, HTML, and CSS. During the work on this project, I learned:

1. Basics about Grid and its properties.
2. How to display a particular piece of text with CSS and JavaScript by wrapping it in a span tag.
3. How to make a close button using the times(&times;) symbol.
4. Modal/pop-up windows and how to implement them.
5. How to sets or return the text content of the specified node using textContent and innerHTML property (depending on tags presence). 
6. How to add the cards by using the appendChild() method.
7. Basics about code refactoring and why it is so important to clean up your code.

## Step-by-step process:

1. Sketch the game on the paper.
2. Build basic elements of the HTML page (header, body, footer) and add images for testing purposes.
3. Add the game board and cards by using the appendChild() method.
4. Show/hide each card's value (image) on click by using the classList.toggle('show').
5. Implement the code that allows opening only two cards, comparing them, keeping open matching cards, or closing the unmatching cards after a short delay.
6. Create a variable to track open cards and display a winning message using alert() if all cards are open.
7. Track and display the number of moves.
8. Reload the page after an alert message (winning message) 
9. Add new images and card covers.
10. Add a function to shuffle the cards. 
11. Remove the alert message, and implement modal message for the winning message 
12. Change the height of cards for screens less than 600px.
13. Clean up the code.

## How to play the memory game. 
- You have to start the game by flipping over one card.
- If the next card you flip does not match, then the cards 
will disappear.
- Moves score will be increased by 1.
- If the next card you flip matches, the matching cards will stay open.

![Matched cards](<screenshoots/Matched cards.png>)
- Moves score will be increased by 1.
- The game continues until you match all the cards on the board.
- A winning message will appear. You can choose to start a new game by pressing the "Restart" button or close the message.

![Winning message](<screenshoots/Winning message.png>)






