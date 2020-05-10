import Constants from '../constants/Constants';

const determineWinner = (board) => {
    return isRowCompletedByAPlayer(board) || isColumnCompletedByAPlayer(board)
        || isDiagonalCompletedByAPlayer(board);
};

const isFirstRowCompletedByAPlayer = (board) => {
    return isPositionsOccupiedBySamePlayer(board, Constants.FIRST_ROW_POSITIONS);
};

const isSecondRowCompletedByAPlayer = (board) => {
    return isPositionsOccupiedBySamePlayer(board, Constants.SECOND_ROW_POSITIONS);
};

const isThirdRowCompletedByAPlayer = (board) => {
    return isPositionsOccupiedBySamePlayer(board, Constants.THIRD_ROW_POSITIONS);
};

const isRowCompletedByAPlayer = (board) => {
    return isFirstRowCompletedByAPlayer(board) || isSecondRowCompletedByAPlayer(board)
        || isThirdRowCompletedByAPlayer(board);
};

const isFirstColumnCompletedByAPlayer = (board) => {
    return isPositionsOccupiedBySamePlayer(board, Constants.FIRST_COLUMN_POSITIONS);
};

const isSecondColumnCompletedByAPlayer = (board) => {
    return isPositionsOccupiedBySamePlayer(board, Constants.SECOND_COLUMN_POSITIONS);
};

const isThirdColumnCompletedByAPlayer = (board) => {
    return isPositionsOccupiedBySamePlayer(board, Constants.THIRD_COLUMN_POSITIONS);
};

const isColumnCompletedByAPlayer = (board) => {
    return isFirstColumnCompletedByAPlayer(board)
        || isSecondColumnCompletedByAPlayer(board) || isThirdColumnCompletedByAPlayer(board);
};

const isUpperLeftToLowerRightDiagonalCompletedByAPlayer = (board) => {
    return isPositionsOccupiedBySamePlayer(board, Constants.UPPER_LEFT_TO_LOWER_RIGHT_DIAGONAL_POSITIONS);
};

const isUpperRightToLowerLeftDiagonalCompletedByAPlayer = (board) => {
    return isPositionsOccupiedBySamePlayer(board, Constants.UPPER_RIGHT_TO_LOWER_LEFT_DIAGONAL_POSITIONS);
};

const isDiagonalCompletedByAPlayer = (board) => {
    return isUpperLeftToLowerRightDiagonalCompletedByAPlayer(board)
        || isUpperRightToLowerLeftDiagonalCompletedByAPlayer(board);
};

const isPositionsOccupiedBySamePlayer = (board, positions) => {
    if (positions.map((position) => board[position]).every((value, index, arr) => value && value === arr[0])) {
        return { player: board[positions[Constants.INITIAL_TILE_POSITION]], positions: positions };
    }
    return null;
};

export default determineWinner;