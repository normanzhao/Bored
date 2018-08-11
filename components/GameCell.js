import React, {Component} from 'react';
import './component-styles.css';

//a single game cell on the game board
//props: current cell value, max stored states
//state: cell value states
class GameCell extends Component {
    constructor(props){
        super();
        this.state = {
            currentStates: []
        }
    }

    render(){
        return(
            <td className="GameCell" id={this.props.id}>
                {this.props.id}
            </td>
        )
    }
    
}

export default GameCell;