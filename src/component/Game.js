import React, { useState } from 'react';
import Tile from './Tile';
import '../App.css';
import Constants from '../constants/Constants';
import StyleConstants from '../constants/StyleConstants';
import Status from './Status';

const Game = () => {
    const [board, setBoard] = useState(Array(Constants.NUMBER_OF_TILES).fill(Constants.EMPTY_VALUE));
    const [currentPlayer, setCurrentPlayer] = useState(Constants.PLAYER_X);
    const [gameWinningTiles, setGameWinningTiles] = useState([]);
    const [gameHasWinner, setGameHasWinner] = useState(false);

    const renderBoard = () => {
        let tiles = [];
        for (let tile = Constants.INITIAL_TILE_POSITION; tile < Constants.NUMBER_OF_TILES; tile++) {
            tiles.push(
                <Tile key={tile}
                    onClick={() => handleCurrentPlayerTurn(tile)}
                    value={board[tile]}
                    gameHasWinner={gameHasWinner}
                    isWinningTile={gameWinningTiles && gameWinningTiles.includes(tile)} />
            );
        }
        return tiles;
    }

    const handleCurrentPlayerTurn = (tile) => {
        const gameBoard = board.slice();
        gameBoard[tile] = currentPlayer;
        setBoard(gameBoard);
        togglePlayer();
    }

    const togglePlayer = () => {
        setCurrentPlayer(currentPlayer === Constants.PLAYER_X ? Constants.PLAYER_O : Constants.PLAYER_X);
    }

    const handlePlayerWon = (winningTiles) => {
        setGameWinningTiles(winningTiles);
        setGameHasWinner(true);
    }

    const reset = () => {
        setBoard(Array(Constants.NUMBER_OF_TILES).fill(Constants.EMPTY_VALUE));
        setCurrentPlayer(Constants.PLAYER_X);
        setGameWinningTiles([]);
        setGameHasWinner(false);
    };

    return (
        <div className={StyleConstants.APP}>
            <header className={StyleConstants.APP_HEADER}>
                {Constants.APP_TITLE}
            </header>
            <div>
                <div className={StyleConstants.STATUS}>
                    <Status currentPlayer={currentPlayer}
                        board={board}
                        onPlayerWin={(winningTiles) => handlePlayerWon(winningTiles)} />
                </div>
                <ul className={StyleConstants.BOARD}>
                    {renderBoard()}
                </ul>
                <div className={StyleConstants.RESTART}>
                    <button className={StyleConstants.RESTART_BUTTON}
                        type="Submit" onClick={() => reset()}>{StyleConstants.RESTART_GAME}</button>
                </div>
            </div>
        </div>
    );
}
export default Game;