import React from 'react';

class Smiley extends React.Component {
  constructor(props) {
    super(props)
    this.handleMDown = this.handleMDown.bind(this);
    this.handleMUp = this.handleMUp.bind(this);
  }
  pickSmiley() {
    if (this.props.lost) return 'sad';
    if (this.props.won) return 'cool';
    if (this.props.clicking) return 'surprise';
    return 'happy';
  }

  handleMDown(e) {
    e.currentTarget.classList.add('explored')
  }
  handleMUp(e) {
    e.currentTarget.classList.remove('explored')
    this.props.restart();
  }

  render() {
    const whichFace = this.pickSmiley();
    return (
      <div onMouseDown={this.handleMDown} onMouseUp={this.handleMUp} id="smiley" className="tile">
        <img className={whichFace} height="60px" width="60px" src="minesweeperfaces.png"/>
      </div>
    )
  }
}

export default Smiley;
