import React, { Component } from 'react';
import GameBoard from './components/GameBoard';
import './components/component-styles.css';


class Bored extends Component {
  render() {
    return (
      <div className="App">
        <GameBoard height={this.props.height} width={this.props.width} maxStates={this.props.maxStates}/>
      </div>
    );
  }
}

export default Bored;

//definitions
//cell: a square on the game board
//tile: a square that's yet to be played, once played, it becomes a value of a cell
