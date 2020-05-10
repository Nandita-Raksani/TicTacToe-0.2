import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";
import Constants from '../constants/Constants';
import determineWinner from '../helper/DetermineWinner';

const Status = (props) => {
    const [state, setState] = useState({});

    const getStatus = () => {
        const { board, currentPlayer } = props;
        const winner = determineWinner(board);
        if (winner && winner.player) {
            hasPlayerWon(winner);
        } else if (isDraw(board)) {
            setState((prevState) => ({ ...prevState, gameStatus: Constants.GAME_DRAW }));
        } else {
            setState((prevState) => ({ ...prevState, gameStatus: Constants.CURRENT_PLAYER + (currentPlayer) }));
        }
    };

    useEffect(() => {
        getStatus();
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [props.board])

    const isDraw = (board) => {
        return board.indexOf(Constants.EMPTY_VALUE) === Constants.INDEX_NOT_FOUND;
    };

    const hasPlayerWon = (winner) => {
        setState((prevState) => ({ ...prevState, gameStatus: Constants.WINNER + winner.player }));
        props.onPlayerWin(winner.positions);
    };

    return (
        <label>{state.gameStatus}</label>
    );
}
Status.propTypes = {
    currentPlayer: PropTypes.string.isRequired,
    board: PropTypes.array.isRequired,
    onPlayerWin: PropTypes.func.isRequired
};
export default Status; 