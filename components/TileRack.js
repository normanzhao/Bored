import React, {Component} from 'react';
import './component-styles.css';

//the player's "hand"
//props: rackSize, tileValues
//state: tile values on the rack, the rack itself
class TileRack extends Component {
    constructor(props){
        super();
        this.state = {
            tileValues: [],
            tileRack: []
        }
    }

    dragStartSetData(e) {
       e.dataTransfer.setData("Text", e.target.innerHTML);
    }

    //push rack values recieved from props to state
    setTileValues(){
        let rack = [];
        this.setState({tileValues: this.props.tileValues})
        for(var i = 0; i < this.props.rackSize; i++){
            rack.push(<td key={"tile"+i} className="GameTile" draggable={true} onDrop={() => { return false; }} onDragStart={this.dragStartSetData}>{this.state.tileValues[i]}</td>)
        }
        this.setState({tileRack : rack})
    }

    //set tile rack to render to the specified height and width when GameBoard mounts
    componentWillMount() {
        this.setTileValues()
    }

    componentWillReceiveProps(){
        this.setTileValues()
    }

    render(){
        return(
            <table className="TileRack">
                <tbody>
                    <tr>
                        {this.state.tileRack}
                    </tr>
                </tbody>  
            </table> 
        )
    }
    
}

export default TileRack;