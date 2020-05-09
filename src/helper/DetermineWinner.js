const determineWinner = (board) => {
    return isFirstRowCompletedByAPlayer(board) || isSecondRowCompletedByAPlayer(board)
        || isThirdRowCompletedByAPlayer(board);
};

const isFirstRowCompletedByAPlayer = (board) => {
    return isPositionsOccupiedBySamePlayer(board, [0, 1, 2]);
};

const isSecondRowCompletedByAPlayer = (board) => {
    return isPositionsOccupiedBySamePlayer(board, [3, 4, 5]);
};

const isThirdRowCompletedByAPlayer = (board) => {
    return isPositionsOccupiedBySamePlayer(board, [6, 7, 8]);
};

const isPositionsOccupiedBySamePlayer = (board, positions) => {
    const [a, b, c] = positions;
    if (board && board[a] && board[a] === board[b] && board[a] === board[c]) {
        return { player: board[a], positions: [a, b, c] };
    }
    return null;
}

export default determineWinner;