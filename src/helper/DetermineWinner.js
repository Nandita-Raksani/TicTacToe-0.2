import Constants from '../constants/Constants';

const determineWinner = (board) => {
    return isRowCompletedByAPlayer(board) || isColumnCompletedByAPlayer(board)
        || isDiagonalCompletedByAPlayer(board);
};

const isFirstRowCompletedByAPlayer = (board) => {
    return isPositionsOccupiedBySamePlayer(board, Constants.FIRST_ROW_TILES);
};

const isSecondRowCompletedByAPlayer = (board) => {
    return isPositionsOccupiedBySamePlayer(board, Constants.SECOND_ROW_TILES);
};

const isThirdRowCompletedByAPlayer = (board) => {
    return isPositionsOccupiedBySamePlayer(board, Constants.THIRD_ROW_TILES);
};

const isRowCompletedByAPlayer = (board) => {
    return isFirstRowCompletedByAPlayer(board) || isSecondRowCompletedByAPlayer(board)
        || isThirdRowCompletedByAPlayer(board);
};

const isFirstColumnCompletedByAPlayer = (board) => {
    return isPositionsOccupiedBySamePlayer(board, Constants.FIRST_COLUMN_TILES);
};

const isSecondColumnCompletedByAPlayer = (board) => {
    return isPositionsOccupiedBySamePlayer(board, Constants.SECOND_COLUMN_TILES);
};

const isThirdColumnCompletedByAPlayer = (board) => {
    return isPositionsOccupiedBySamePlayer(board, Constants.THIRD_COLUMN_TILES);
};

const isColumnCompletedByAPlayer = (board) => {
    return isFirstColumnCompletedByAPlayer(board)
        || isSecondColumnCompletedByAPlayer(board) || isThirdColumnCompletedByAPlayer(board);
};

const isUpperLeftToLowerRightDiagonalCompletedByAPlayer = (board) => {
    return isPositionsOccupiedBySamePlayer(board, Constants.UPPER_LEFT_TO_LOWER_RIGHT_DIAGONAL_TILES);
};

const isUpperRightToLowerLeftDiagonalCompletedByAPlayer = (board) => {
    return isPositionsOccupiedBySamePlayer(board, Constants.UPPER_RIGHT_TO_LOWER_LEFT_DIAGONAL_TILES);
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