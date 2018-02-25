import Tile from './tile_component';
import React from 'react';

const Board = function(props) {
  const update = props.updateGame;
  const grid = props.board.grid.map(function (row, i) {
   return (
     <div key={i} className="row">
       {
         row.map(function (tile, j) {
           return (<Tile update={update} key={i, j} tile={tile}/>);
         })
       }
     </div>
   );
 });

  return (
    <div>
    {
      grid
    }
    </div>
  );
};

export default Board;
