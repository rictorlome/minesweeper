import Tile from './tile_component';
import React from 'react';

const Board = function(props) {
  const update = props.updateGame;
  const grid = props.board.grid.map(function (row, i) {
   return (
     <div key={i} className="row">
       {
         row.map(function (tile, j) {
           return (<Tile lost={props.board.lost()} update={update} key={i, j} tile={tile}/>);
         })
       }
     </div>
   );
 });

  return (
    <div id='grid-wrapper'>
    {
      grid
    }
    </div>
  );
};

export default Board;
