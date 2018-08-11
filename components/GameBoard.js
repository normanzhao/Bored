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

    //renders the game board to the specified height and width
    //can be overriden, but defaults to props
    renderBoard(height = this.props.height, width = this.props.width){
        let boardCells = [];
        for(var h = 0; h < height; h++){
            let cellRow = [];
            for(var w = 0; w < width; w++){
                cellRow.push(
                    <GameCell key={"" + h + w } id={"" + h + w } maxStates={this.props.maxStates}/>
                )
            }
            boardCells.push(<tr key={"row"+h}>{cellRow}</tr>)
        }
        this.setState({gameCells : boardCells})
    };

    componentDidMount() {
        this.renderBoard();
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