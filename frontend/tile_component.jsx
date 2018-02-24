import React from 'react';

export default class Tile extends React.Component {
  constructor(props) {
    super(props);
    this.explore = this.explore.bind(this);
  }

  explore(e) {
    this.props.update(this.props.tile.pos, e.altKey);
  }

  getClass () {
    const {tile: {bombed, explored, flagged}} = this.props;
    if (bombed && explored) {
      return "tile BOOM";
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
    if (bombed && explored) {
      return "\u1F4A3";
    } else if (flagged) {
      return "F";
    } else if (explored) {
      let d = this.props.tile.adjacentBombCount();
      return d > 0 ? d : " ";
    } else {
      return " ";
    }
  }

  render() {
    const tileClass = this.getClass();
    const show = this.getShow();
    return (
      <div className={ tileClass } onClick={ this.explore }>
        {show}
      </div>
    );
  }
}
