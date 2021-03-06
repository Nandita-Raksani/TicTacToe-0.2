import React from 'react';
import '../App.css';
import PropTypes from "prop-types";
import StyleConstants from '../constants/StyleConstants';

const Tile = (props) => {
    return (
        <li>
            <button className={StyleConstants.TILE_BUTTON + (props.isWinningTile ?
                StyleConstants.TILE_WINNING : null)}
                onClick={props.onClick}
                data-symbol-color={props.value}
                disabled={props.gameHasWinner || props.value}>
                {props.value}
            </button>
        </li>
    );
}

Tile.propTypes = {
    onClick: PropTypes.func.isRequired,
    value: PropTypes.string.isRequired,
    gameHasWinner: PropTypes.bool.isRequired,
    isWinningTile: PropTypes.bool.isRequired
};

export default Tile; 