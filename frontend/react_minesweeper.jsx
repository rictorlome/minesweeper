import React from 'react';
import ReactDOM from 'react-dom';
import Game from './game_component';

document.addEventListener("DOMContentLoaded", ()=> {
  const root = document.getElementById("root");
  ReactDOM.render(<Game />, root);
});
