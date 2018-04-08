import React from 'react';

class Smiley extends React.Component {
  constructor(props) {
    super(props)
  }
  pickSmiley() {
    if (this.props.lost) {
      return 'sad'
    } else {
      return 'happy'
    }
  }
  render() {
    const whichFace = this.pickSmiley();
    return (
      <div onClick={() => this.props.restart()} id="smiley" className="tile">
        <img className={whichFace} height="60px" width="60px" src="minesweeperfaces.png"/>
      </div>
    )
  }
}

export default Smiley;
