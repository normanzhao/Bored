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

        this.drop = this.drop.bind(this);
    }

    //get the value of the dropped tile
    drop(e) {
        if(this.state.currentStates.length < this.props.maxStates){
            let update = this.state.currentStates
            update.push(e.dataTransfer.getData("Text"))
            this.setState({currentStates:update});
        }
        
    }

    //element default behavior is to prevent drops, this enables dropping by preventing default behavior
    allowDrop(e) {
        e.preventDefault();
    }

    render(){
        return(
            <td>
                <div className={"GameCell " + this.state.currentStates.length} id={this.props.id} onDrop={this.drop} onDragOver={this.allowDrop}>
                {this.state.currentStates[this.state.currentStates.length - 1]}
                </div>
            </td>
        )
    }
    
}

export default GameCell;