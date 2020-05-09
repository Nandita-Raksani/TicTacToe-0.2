import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";
import Constants from '../constants/Constants';
import determineWinner from '../helper/DetermineWinner';

const Status = (props) => {
    const [state, setState] = useState({});

    useEffect(() => {
        const getStatus = () => {
            const { board, currentPlayer, onPlayerWon } = props;
            const winner = determineWinner(board);
            const draw = isDraw(board);
            if (winner && winner.player) {
                setState((prevState) => ({ ...prevState, gameStatus: Constants.WINNER + winner.player }));
                onPlayerWon(winner.positions);
            } else if (draw) {
                setState((prevState) => ({ ...prevState, gameStatus: Constants.GAME_DRAW }));
                onPlayerWon();
            } else {
                setState((prevState) => ({ ...prevState, gameStatus: Constants.NEXT_PLAYER + (currentPlayer) }));
            }
        };
        if (!props.isGameOver) {
            getStatus();
        }
    }, [props])

    const isDraw = (board) => {
        return board.indexOf(Constants.EMPTY_VALUE) === Constants.INDEX_NOT_FOUND;
    };

    return (
        <label>{state.gameStatus}</label>
    );
}
Status.propTypes = {
    currentPlayer: PropTypes.string.isRequired,
    board: PropTypes.array.isRequired,
    isGameOver: PropTypes.bool.isRequired,
    onPlayerWon: PropTypes.func.isRequired
};
export default Status; 