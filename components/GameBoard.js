import React, { Component } from 'react';
import GameCell from './GameCell';
import './component-styles.css';

//renders gameboard and keeps track of cell states
//props: height, width, maxStates (max states to maintain)
//state: gameCells (all GameCells)
class GameBoard extends Component {
    constructor(props){
        super();
        this.state = {
            gameCells: undefined
        }
    }

    //set game board to render to the specified height and width when GameBoard mounts
    componentWillMount() {
        let boardCells = [];
        for(var h = 0; h < this.props.height; h++){
            let cellRow = [];
            for(var w = 0; w < this.props.width; w++){
                cellRow.push(
                    <GameCell key={"" + h + w } id={"" + h + w } maxStates={this.props.maxStates}/>
                )
            }
            boardCells.push(<tr key={"row"+h}>{cellRow}</tr>)
        }
        this.setState({gameCells : boardCells})
    }

    render(){
        return(
            <table className="GameBoard">
                <tbody>
                    {this.state.gameCells}
                </tbody>  
            </table>   
        )
    }
    
}

export default GameBoard;