import React from 'react';

export default class Tile extends React.Component {
  constructor(props) {
    super(props);
    this.explore = this.explore.bind(this);
    this.anticipateClick = this.anticipateClick.bind(this);
  }

  anticipateClick(e) {
    if (!this.props.lost && !e.altKey && e.nativeEvent.button !== 2) {
      this.props.setC();
      e.target.classList.add('explored')
    }
  }



  explore(e) {
    if (!this.props.lost) {
      this.props.unsetC();
      this.props.update(this.props.tile.pos, e.altKey);
    }
  }

  getClass () {
    const {tile: {bombed, explored, flagged}} = this.props;
    if (bombed && explored) {
      return "tile BOOM tripped";
    } else if (bombed && this.props.lost) {
      return "tile BOOM"
    } else if (flagged) {
      return "tile flagged";
    } else if (explored) {
      return "tile explored";
    } else {
      return "tile";
    }
  }

  getShow() {
    const {tile: {bombed, explored, flagged}} = this.props;
    if (bombed && explored || bombed && this.props.lost) {
      return "💣";
    } else if (flagged) {
      return "🚩";
    } else if (explored) {
      let d = this.props.tile.adjacentBombCount();
      return d > 0 ? d : " ";
    } else {
      return " ";
    }
  }
  addColorClass(show,tileClass) {
    if (show === 1) return tileClass.concat(' blue');
    if (show === 2) return tileClass.concat(' green');
    if (show === 3) return tileClass.concat(' red');
    if (show === 4) return tileClass.concat(' purple');
    if (show === 5) return tileClass.concat(' maroon');
    if (show === 6) return tileClass.concat(' torquoise');
    if (show === 7) return tileClass.concat(' black');
    if (show === 8) return tileClass.concat(' gray');
  }

  render() {
    const show = this.getShow();
    let tileClass = this.getClass();

    if (typeof show === 'number') tileClass = this.addColorClass(show,tileClass);

    return (
      <div className={ tileClass } onMouseDown={ this.anticipateClick } onMouseUp={ this.explore }>
        {show}
      </div>
    );
  }
}
