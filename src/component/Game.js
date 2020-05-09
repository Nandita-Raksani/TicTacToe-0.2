import React, { useState } from 'react';
import Tile from './Tile';
import '../App.css';
import Constants from '../constants/Constants';
import StyleConstants from '../constants/StyleConstants';
import Status from './Status';

const Game = () => {
    const [state, setState] = useState({
        boardArray: Array(Constants.NUMBER_OF_TILES).fill(Constants.EMPTY_VALUE),
        isNextSymbolX: true,
        gameOver: false
    });

    const renderBoard = () => {
        let tileList = [];
        for (let position = Constants.INITIAL_TILE_POSITION; position < Constants.NUMBER_OF_TILES; position++) {
            tileList.push(<li key={position}>
                <Tile onClick={() => handleTileClick(position)} value={state.boardArray[position]}
                    isGameOver={state.gameOver} />
            </li>);
        }
        return tileList;
    }

    const handleTileClick = (position) => {
        const boardArray = state.boardArray.slice();
        boardArray[position] = state.isNextSymbolX ? Constants.SYMBOL_X : Constants.SYMBOL_O;
        setState((prevState) => ({ ...prevState, boardArray: boardArray, isNextSymbolX: !state.isNextSymbolX }));
    }

    const handlePlayerWon = () => {
        setState((prevState) => ({ ...prevState, gameOver: true }));
    }

    return (
        <div>
            <div className={StyleConstants.STATUS}>
                <Status currentPlayer={state.isNextSymbolX ? Constants.SYMBOL_X : Constants.SYMBOL_O}
                    board={state.boardArray} isGameOver={state.gameOver}
                    onPlayerWon={() => handlePlayerWon()} />
            </div>
            <ul className={StyleConstants.BOARD}>
                {renderBoard()}
            </ul>
        </div>
    );
}
export default Game;