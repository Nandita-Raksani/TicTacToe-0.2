import React from 'react';
import Tile from './Tile';
import '../App.css';
import Constants from '../constants/Constants';
import StyleConstants from '../constants/StyleConstants';

const Game = () => {

    const renderBoard = () => {
        let tileList = [];
        for (let position = Constants.INITIAL_TILE_POSITION; position < Constants.NUMBER_OF_TILES; position++) {
            tileList.push(<li key={position}>
                <Tile />
            </li>);
        }
        return tileList;
    }

    return (
        <div>
            <ul className={StyleConstants.BOARD}>
                {renderBoard()}
            </ul>
        </div>
    );
}
export default Game;