import React, { Component } from 'react';
import GameBoard from './components/GameBoard';
import TileManager from './components/TileManager';
import './components/component-styles.css';

//holds the states for the entire game
//state: GameCell values, TileRack values, TileManager Values
class Bored extends Component {
  constructor(props){
    super();
    this.state = {
      GameCellState: [],
      TileManagerState: 0
    }
  }

  //initialize cell states before mounting
  componentWillMount(){
    let initState = [];
    for(var h = 0; h < this.props.height; h++){
      let row = []
      row.length = this.props.width
      initState.push(row)
    }
    this.setState({GameCellState: initState})
  }

  //change current cell state
  changeCellState(){

  }

  render() {
    return (
      <div className="App">
        <GameBoard height={this.props.height} width={this.props.width} maxStates={this.props.maxStates}/>
        <TileManager rackSize={this.props.rackSize} tileSet={this.props.tileSet} />
      </div>
    );
  }
}

export default Bored;

//definitions
//cell: a square on the game board
//tile: a square that's yet to be played, once played, it becomes a value of a cell
