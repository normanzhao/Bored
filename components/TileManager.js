import React, {Component} from 'react';
import TileTracker from './TileTracker';
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
            tilesLeft: 0
        }
    }
    
    //parse tile set from incoming prop and puts it into a state variable
    //Can chain together characters using brackets, Ex: "[Qu]" yields a "Qu" tile
    getTileSet(tileSet){
        let parsedTileSet = {};
        for(var key of Object.keys(tileSet)){
            let tileAmount = tileSet[key];
            //match multi character tiles first
            //use regex to match characters in [] and set them as one tile
            let multiCharacters = key.match(/\[.*?\]/g);
            if(multiCharacters != null){
                //if there are multiple characters, add them to tile set, then delete them from the key
                for(var match of multiCharacters){
                    parsedTileSet[match.replace(/\[|\]/g, "")] = tileAmount;
                    key = key.replace(match,"")
                }
            }
            for(var letter of key){
                if (!(letter in parsedTileSet)){
                    parsedTileSet[letter] = tileAmount;
                }
            }
        }
        this.getTilesLeft(parsedTileSet)
        this.setState({tileSet:parsedTileSet})
    }

    //gets the sum of the current tile set and puts it in a state variable
    getTilesLeft(tileSet){
        let sum = 0;
        for(var tile of Object.entries(tileSet)){
            sum += tile[1];
        }
        this.setState({tilesLeft:sum})
    }

    //deal tiles from the "bag" to the player's rack
    dealTiles(tiles = 1){
        if(this.state.currentStates.length < this.props.rackSize){
            let rack = this.state.currentStates;
            let tempTileSet = this.state.tileSet;
            for(let i = rack.length; i < tiles; i++){
                //random number multiplied by amount of unique tiles)
                let tileNum = Math.round(Math.random() * (Object.keys(tempTileSet).length - 1));
                //select a tile based on the number selected
                let selectedTile = Object.keys(tempTileSet)[tileNum]
                tempTileSet[selectedTile] -= 1;
                if(tempTileSet[selectedTile] === 0){
                    delete tempTileSet[selectedTile]
                }
                rack.push(selectedTile)
            }
            this.setState({currentStates: rack, tileSet: tempTileSet});
        }
    }

    componentWillMount(){
        this.getTileSet(this.props.tileSet);
    }

    componentDidMount(){
        this.dealTiles(this.props.rackSize);
    }

    render(){
        return(
            <div>
                <div>
                    <TileTracker tileSet={this.state.tileSet}/>
                </div>
                <div>
                    <TileRack rackSize={this.props.rackSize} tileValues={this.state.currentStates}/>
                </div>
            </div>
            
        )
    }
    
}

export default TileManager;