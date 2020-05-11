import React from 'react';
import Tile from '../component/Tile';
import { shallow } from 'enzyme';
import Constants from './constants/Constants';

describe(("<Tile/> component"), () => {
    let wrapper;

    beforeEach(() => {
        wrapper = shallow(<Tile value='X' onClick={jest.fn()} gameHasWinner={false} isWinningTile={false} />);
    });

    it("should render correctly", () => {
        expect(wrapper).toMatchSnapshot();
    });

    it("should have the button with style class", () => {
        expect(wrapper.find("button").hasClass('tile-button')).toBeTruthy();
    });
});

describe(("<Tile/> component functionality"), () => {
    let wrapper;
    beforeEach(() => {
        wrapper = shallow(<Tile value='X' onClick={jest.fn()} gameHasWinner={false} isWinningTile={false} />);
    });

    it("should display symbol X when value passed from Game is X", () => {
        expect(wrapper.find('button').props()["data-symbol-color"]).toBe('X');
        expect(wrapper.find("button").text()).toEqual(Constants.EXPECT_PLAYER_X);
    });

    it("should display symbol O when value passed from Game is O", () => {
        wrapper = shallow(<Tile value='O' onClick={jest.fn()} gameHasWinner={false} isWinningTile={false} />);
        expect(wrapper.find('button').props()["data-symbol-color"]).toBe('O');
        expect(wrapper.find("button").text()).toEqual(Constants.EXPECT_PLAYER_O);
    });

    it("should not allow the already occupied tile to be clicked again", () => {
        wrapper = shallow(<Tile value='X' onClick={jest.fn()} gameHasWinner={false} isWinningTile={false} />);
        expect(wrapper.find('button').props()["disabled"]).toBeTruthy();
    });

    it("Should not allow next turn to be played on game over", () => {
        wrapper = shallow(<Tile value='X' onClick={jest.fn()} gameHasWinner={true} isWinningTile={true} />);
        expect(wrapper.find('button').props()["disabled"]).toBeTruthy();
    });

    it("Should highlight the winning tiles on game won", () => {
        wrapper = shallow(<Tile value='X' isWinningTile={true} onClick={jest.fn()} gameHasWinner={true} />);
        expect(wrapper.find('button').hasClass('tile-winning')).toBeTruthy();
    });
}); 