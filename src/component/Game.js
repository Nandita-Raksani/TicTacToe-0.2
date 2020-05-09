import React from 'react';
import Tile from './Tile';
import '../App.css';
import StyleConstants from '../constants/StyleConstants';

const Game = () => {

    const renderBoard = () => {
        let tileList = [];
        for (let position = 0; position < 9; position++) {
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