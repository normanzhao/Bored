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
            <td>
                <div className={"GameCell " + this.state.currentStates.length} id={this.props.id} >
                    {this.props.id}
                </div>
            </td>
        )
    }
    
}

export default GameCell;