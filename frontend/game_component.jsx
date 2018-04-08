import React from 'react';
import * as Minesweeper from '../logic.js';
import Board from './board_component';

import Smiley from './smiley_component';

export default class Game extends React.Component {
  constructor(props) {
    super(props);
    this.state = { board: new Minesweeper.Board(10,10) , clicking: false};
    this.updateGame = this.updateGame.bind(this);
    this.resetGame = this.resetGame.bind(this);
    this.setClicking = this.setClicking.bind(this);
    this.unsetClicking = this.unsetClicking.bind(this);

  }

  updateGame (pos, flagging) {
    let i = pos[0];
    let j = pos[1];
    const tile = this.state.board.grid[i][j];
    flagging ? tile.toggleFlag() : tile.explore();

    this.setState({ board: this.state.board});
  }
  resetGame() {
    this.setState({board: new Minesweeper.Board(10,10) });
  }
  setClicking() {
    this.setState({clicking: true})
  }
  unsetClicking() {
    this.setState({clicking: false})
  }

  render () {
    return (
      <div id="outer-game-wrapper">
        <div id="upper-info">
          <Smiley clicking={this.state.clicking} restart={this.resetGame} won={this.state.board.won()} lost={this.state.board.lost()} />
        </div>
        <div id="inner-game-wrapper">
          <Board setC={this.setClicking} unsetC={this.unsetClicking} board={this.state.board} updateGame={this.updateGame}/>
        </div>
      </div>
    );
  }
}
