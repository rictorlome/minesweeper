import React from 'react';
import * as Minesweeper from '../logic.js';
import Board from './board_component';

import Smiley from './smiley_component';
import Clock from './clock_component';

export default class Game extends React.Component {
  constructor(props) {
    super(props);
    this.cursize = 10;
    this.curbombs = 10;
    this.state = { board: new Minesweeper.Board(this.cursize,this.curbombs), curwidth: 'easy', flags:this.curbombs, clicking: false, started:false, restarted:0};
    this.updateGame = this.updateGame.bind(this);
    this.resetGame = this.resetGame.bind(this);
    this.setClicking = this.setClicking.bind(this);
    this.unsetClicking = this.unsetClicking.bind(this);
    this.setDifficulty = this.setDifficulty.bind(this);
  }

  updateGame (pos, flagging) {
    let i = pos[0];
    let j = pos[1];
    const tile = this.state.board.grid[i][j];
    if (flagging) {
      tile.flagged ? this.setState({flags: this.state.flags+1}) : this.setState({flags: this.state.flags-1})
      tile.toggleFlag()
    } else {
      tile.explore();
    }
    this.setState({ board: this.state.board});
  }
  resetGame() {
    this.setState({board: new Minesweeper.Board(this.cursize,this.curbombs), flags:this.curbombs, started: false, restarted:this.state.restarted+1 });
  }
  setClicking() {
    this.setState({clicking: true})
  }
  unsetClicking() {
    this.setState({clicking: false, started: true})
  }
  formatFlags(flags) {
    if (flags === 0) return '000';
    if (flags < 10) return '00'.concat(String(flags));
    if (flags < 100) return '0'.concat(String(flags));
  }
  setDifficulty(e) {
    if (e.target.id === 'easy') {
      this.cursize = 10;
      this.curbombs = 10;
    } else if (e.target.id === 'medium') {
      this.cursize = 16;
      this.curbombs = 40;
    } else {
      this.cursize = 22;
      this.curbombs = 99;
    }
    this.setState({curwidth: e.target.id})
    this.resetGame();
  }

  render () {
    const flags = this.formatFlags(this.state.flags)
    return (
      <div id="outer-game-wrapper">
        <div className={this.state.curwidth} id="skill-select">
          <div className="skill-choice" onClick={this.setDifficulty} id="easy">Easy</div>
          <div className="skill-choice" onClick={this.setDifficulty} id="medium">Medium</div>
          <div className="skill-choice" onClick={this.setDifficulty} id="hard">Hard</div>
        </div>

        <div className={this.state.curwidth} id="upper-info">
          <div id="flag-wrapper">{flags}</div>
          <Smiley clicking={this.state.clicking} restart={this.resetGame} won={this.state.board.won()} lost={this.state.board.lost()} />
          <Clock restarted={this.state.restarted} started={this.state.started} lost={this.state.board.lost()} />
        </div>

        <div className={this.state.curwidth} id="inner-game-wrapper">
          <Board setC={this.setClicking} unsetC={this.unsetClicking} board={this.state.board} updateGame={this.updateGame}/>
        </div>

        <div className={this.state.curwidth} id="game-info-and-contact">
            <div id="game-info">This little game was built in React by
              <a href="http://thingsishow.com">  Samuel Golland</a>.
            </div>

            <div id="contact-buttons-outer">
              <div id="contact-buttons-inner">
                <a href="http://www.github.com/rictorlome"><img className="contact-images" src='./github-logo.svg'/>
                </a>
                <a href="https://www.linkedin.com/in/sam-golland"><img className="contact-images" id="ln" src='./ln-logo.png'/>
                </a>
              </div>
            </div>
          </div>
      </div>
    );
  }
}
