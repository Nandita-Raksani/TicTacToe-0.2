import React, { useState } from 'react';
import Tile from './Tile';
import '../App.css';
import Constants from '../constants/Constants';
import StyleConstants from '../constants/StyleConstants';
import Status from './Status';

const Game = () => {
    const [board, setBoard] = useState(Array(Constants.NUMBER_OF_TILES).fill(Constants.EMPTY_VALUE));
    const [currentPlayer, setCurrentPlayer] = useState(Constants.PLAYER_X);
    const [gameWinningPositions, setGameWinningPositions] = useState([]);
    const [gameHasWinner, setGameHasWinner] = useState(false);

    const renderBoard = () => {
        let tiles = [];
        for (let position = Constants.INITIAL_TILE_POSITION; position < Constants.NUMBER_OF_TILES; position++) {
            tiles.push(
                <Tile key={position}
                    onClick={() => handleTileClick(position)}
                    value={board[position]}
                    gameHasWinner={gameHasWinner}
                    isWinningTile={gameWinningPositions && gameWinningPositions.includes(position)} />
            );
        }
        return tiles;
    }

    const handleTileClick = (position) => {
        const gameBoard = board.slice();
        gameBoard[position] = currentPlayer;
        setCurrentPlayer(currentPlayer === Constants.PLAYER_X ? Constants.PLAYER_O : Constants.PLAYER_X);
        setBoard(gameBoard);
    }

    const handlePlayerWon = (winningPosition) => {
        setGameWinningPositions(winningPosition);
        setGameHasWinner(true);
    }

    const reset = () => {
        setBoard(Array(Constants.NUMBER_OF_TILES).fill(Constants.EMPTY_VALUE));
        setCurrentPlayer(Constants.PLAYER_X);
        setGameWinningPositions([]);
        setGameHasWinner(false);
    };

    return (
        <div>
            <div className={StyleConstants.STATUS}>
                <Status currentPlayer={currentPlayer}
                    board={board}
                    onPlayerWin={(winningPosition) => handlePlayerWon(winningPosition)} />
            </div>
            <ul className={StyleConstants.BOARD}>
                {renderBoard()}
            </ul>
            <div className={StyleConstants.RESTART}>
                <button className={StyleConstants.RESTART_BUTTON} type="Submit" onClick={() => reset()}>{StyleConstants.RESTART_GAME}</button>
            </div>
        </div>
    );
}
export default Game;