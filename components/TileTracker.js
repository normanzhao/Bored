import React, {Component} from 'react';
import './component-styles.css';
import {TRACK_TILE_COUNT} from './constants'

//keeps track of the tiles "in the bag"
class TileTracker extends Component {
    constructor(props){
        super();
        this.state = {
            tileSet: 0,
            tileTracker: "a"
        }
    }

    //set tracker to render if tile tracker is set on
    componentWillMount() {
        let tileCounts = {};
        for(var entry of Object.entries(this.props.tileSet)){
            if (!(entry[1] in tileCounts)){
                tileCounts[entry[1]] = "";
            }
            tileCounts[entry[1]] += " " + entry[0]
        }
        let table = [];
        for(var count of Object.entries(tileCounts)){
            table.push(
                <tr key={count}>
                    <td className="TrackerCell">{count[1]}</td>
                    <td className="TrackerCell">{count[0]}</td>
                </tr>
            )
        }
        this.setState({tileSet: this.props.tileSet, tileTracker: table});
    }

    render(){
        return(
            <table className="TileTracker">
                <tbody>
                    {this.state.tileTracker}
                </tbody>  
            </table> 
        )
    }
    
}

export default TileTracker;