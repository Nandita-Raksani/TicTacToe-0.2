import React from "react";
import PropTypes from "prop-types";

const Status = (props) => {
    const getStatus = () => {
        const { currentPlayer } = props;
        return "Next Player : " + currentPlayer;
    };

    return (
        <label>{getStatus()}</label>
    );
}
Status.propTypes = {
    currentPlayer: PropTypes.string.isRequired
};
export default Status; 