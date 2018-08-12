import React, {Component} from 'react';
import './component-styles.css';

//the player's "hand"
//props: rackSize
//state: tile values on the rack
class TileRack extends Component {
    constructor(props){
        super();
        this.state = {
            tileRack: []
        }
    }

    //set tile rack to render to the specified height and width when GameBoard mounts
    componentWillMount() {
        let rack = [];
        for(var i = 0; i < this.props.rackSize; i++){
            rack.push(<td key={"tile"+i} className="GameTile">{this.props.tileValues[i]}</td>)
        }
        this.setState({tileRack : rack})
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