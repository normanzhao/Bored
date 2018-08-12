import React, {Component} from 'react';
import TileRack from './TileRack';
import './component-styles.css';

//props: rackSize, tileSet
//state: tile values on the rack, tileSet (contains letters still "in the bag", and how many of each), tileLeft (sum of tileSet tile counts)
class TileManager extends Component {
    constructor(props){
        super();
        this.state = {
            currentStates: [],
            tileSet: 0,
            tileLeft: 0
        }
    }

    getTileSet(tileSet){
        let parsedTileSet = {};
        for(var key of Object.keys(tileSet)){
            for(var letter of key){
                if (!(letter in parsedTileSet)){
                    parsedTileSet[letter] = tileSet[key];
                }
            }
        }
        this.getTileLeft(parsedTileSet)
        this.setState({tileSet:parsedTileSet})
    }

    getTileLeft(tileSet){
        let sum = 0;
        for(var tile of Object.entries(tileSet)){
            sum += tile[1];
        }
        this.setState({tileLeft:sum})
    }

    componentWillMount(){
        this.getTileSet(this.props.tileSet);
    }

    render(){
        return(
            <div>
                <TileRack rackSize={this.props.rackSize} tileValues={this.state.currentStates}/>
            </div>
        )
    }
    
}

export default TileManager;