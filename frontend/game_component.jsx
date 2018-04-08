import React from 'react';
import * as Minesweeper from '../logic.js';
import Board from './board_component';

export default class Game extends React.Component {
  constructor(props) {
    super(props);
    this.state = { board: new Minesweeper.Board(10,10) };
    this.updateGame = this.updateGame.bind(this);
  }

  updateGame (pos, flagging) {
    let i = pos[0];
    let j = pos[1];
    const tile = this.state.board.grid[i][j];
    flagging ? tile.toggleFlag() : tile.explore();

    this.setState({ board: this.state.board});
  }

  render () {
    return (
      <div id="outer-game-wrapper">
        <div id="upper-info"></div>
        <div id="inner-game-wrapper">
          <Board board={this.state.board} updateGame={this.updateGame}/>
        </div>
      </div>
    );
  }
}
