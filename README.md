# Tic Tac Toe

Implementation of Tic Tac Toe using React.js

## Using the demo

[Click here to access demo](http://elicsiegel.com/tic_tac_toe)

Click start button to start game then click a square to play a move. Click play again to restart game.

## Code

This game consists of three main React components - Game, Board, Square. The core game logic is housed in the Game component `game.jsx` which holds the game state (ie. current player, board, winner, over?). The Board component `board.jsx` consists of a three by three grid of Square `square.jsx` components. Event listeners were placed on each Square component to update the game state accordingly in the Game component.

To check whether the game is over I included a function in the Game component. This function holds an array of all possible wins (rows, columns, diagonals). The function then iterates through all these possible wins and checks if the board contains identical marks at those positions. If all three positions contain identical marks, the function returns the winner which is then displayed at the top of the game.
