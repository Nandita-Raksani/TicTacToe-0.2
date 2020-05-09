import React from "react";
import PropTypes from "prop-types";
import Constants from '../constants/Constants';

const Status = (props) => {
    const getStatus = () => {
        const { board, currentPlayer } = props;
        const winner = isFirstRowCompletedByAPlayer(board);
        if (winner && winner.player) {
            return Constants.WINNER + winner.player;
        } else {
            return Constants.NEXT_PLAYER + currentPlayer;
        }
    };

    const isFirstRowCompletedByAPlayer = (board) => {
        const [a, b, c] = [0, 1, 2];
        if (board && board[a] && board[a] === board[b] && board[a] === board[c]) {
            return { player: board[a] };
        }
        return null;
    };

    return (
        <label>{getStatus()}</label>
    );
}
Status.propTypes = {
    currentPlayer: PropTypes.string.isRequired,
    board: PropTypes.array.isRequired
};
export default Status; 