import React from 'react';
import Board from './board';

class Game extends React.Component {

  constructor() {
    super();
    this.state = {
      squares: [null, null, null, null, null, null, null, null, null],
      started: false,
      currentPlayer: null
    }
    this.startGame = this.startGame.bind(this);
    this.handleMove = this.handleMove.bind(this);
  }

  startGame() {
    this.setState({started: true, currentPlayer: "X"});
  }

  handleMove(i) {
    if (!this.state.started) return;
    if (this.state.over) return;

    const squares = this.state.squares;
    squares[i] = this.state.currentPlayer;

    const nextPlayer = this.state.currentPlayer === "O" ? "X" : "O";

    this.setState({ squares: squares, currentPlayer: nextPlayer });

    if (this.checkForWinner() === "X" || this.checkForWinner() === "O") {
      this.setState({ over: true, winner: this.checkForWinner() });
    }
  }

  checkForWinner() {
    const possibleWins = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],
      [0, 4, 8],
      [2, 4, 6]
    ];

    for (let i = 0; i < possibleWins.length; i++) {
      const [a, b, c] = possibleWins[i];
      if (this.state.squares[a] && this.state.squares[a] === this.state.squares[b] && this.state.squares[a] === this.state.squares[c]) {
        return this.state.squares[a];
      }
    }
    return null;
  }

  render() {
    let startButton;
    let currentPlayer;
    let winner;

    if (!this.state.started && !this.state.over) {
      startButton = <button onClick={this.startGame}>Click here to Start</button>
    } else if (!this.state.over){
      currentPlayer = "Hey " + this.state.currentPlayer + ", it's your turn!";
    } else {
      winner = this.state.winner + " is the victor!";
    }

    return (
      <div className="game-wrapper">
        <h1>Welcome to Tic Tac Toe</h1>
        <p>by Eli Siegel</p>

        <div className="message-div">
          {startButton}
          {currentPlayer}
          {winner}
        </div>
        <Board squares={this.state.squares} handleMove={this.handleMove}/>
      </div>
    )
  }
}

export default Game;
