import React from 'react';
import '../App.css';
import PropTypes from "prop-types";
import StyleConstants from '../constants/StyleConstants';

const Tile = (props) => {
    return (
        <button className={StyleConstants.TILE_BUTTON} onClick={props.onClick}
            data-symbol-color={props.value}
            disabled={props.isGameOver || props.value}>
            {props.value}
        </button>
    );
}

Tile.propTypes = {
    onClick: PropTypes.func.isRequired,
    value: PropTypes.string.isRequired,
    isGameOver: PropTypes.bool.isRequired
};

export default Tile; 