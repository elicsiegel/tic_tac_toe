import React from 'react';
import Board from './board';

class Game extends React.Component {

  constructor() {
    super();
    this.state = {
      squares: [null, null, null, null, null, null, null, null, null],
      started: false
    }
    this.startGame = this.startGame.bind(this);
  }

  startGame() {
    this.setState({started: true});
  }

  render() {
    let startButton;

    if (!this.state.started) {
      startButton = <button onClick={this.startGame}>Click here to Start</button>
    } 

    return (
      <div className="game-wrapper">
        <h1>Welcome to Tic Tac Toe</h1>
        {startButton}
        <Board squares={this.state.squares}/>
      </div>
    )
  }
}

export default Game;
