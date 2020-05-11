import React from 'react';
import { mount } from 'enzyme';
import Status from '../component/Status';
import Constants from './constants/Constants';

describe(("<Status/> component"), () => {
    let wrapper, board;

    beforeEach(() => {
        board = ['', '', '', '', '', '', '', '', ''];
        wrapper = mount(<Status currentPlayer='X' board={board} onPlayerWin={jest.fn()} />);
    });

    it("should render correctly", () => {
        expect(wrapper).toMatchSnapshot();
    });

    it("should have the label to display game status", () => {
        expect(wrapper.find("label")).toBeDefined();
        expect(wrapper.find("label").text()).toBe(Constants.EXPECT_CURRENT_PLAYER_X);
    });
});

describe(("<Status/> functionality"), () => {
    it("should render the current player correctly", () => {
        const wrapper = mount(<Status currentPlayer='X' board={Array(9).fill('')} onPlayerWin={jest.fn()} />);
        expect(wrapper.find('label').text()).toBe(Constants.EXPECT_CURRENT_PLAYER_X);
    });

    it("should declare X as winner if first row is completely filled by X ", () => {
        const board = ['X', 'X', 'X', 'O', 'O'];
        const wrapper = mount(<Status currentPlayer='X' board={board} onPlayerWin={jest.fn()} />);
        expect(wrapper.find('label').text()).toBe(Constants.EXPECT_WINNER_X);
    });

    it("should declare O as winner if first row is completely filled by O ", () => {
        const board = ['O', 'O', 'O', 'X', 'X', '', '', 'X'];
        const wrapper = mount(<Status currentPlayer='O' board={board} onPlayerWin={jest.fn()} />);
        expect(wrapper.find('label').text()).toBe(Constants.EXPECT_WINNER_O);
    });

    it("Should not allow player to play once player has won", () => {
        const board = ['X', 'X', 'X', '', 'O', '', 'O'];
        const onPlayerWonMockFn = jest.fn();
        expect(onPlayerWonMockFn).toHaveBeenCalledTimes(0);

        const wrapper = mount(<Status currentPlayer='O' board={board} onPlayerWin={onPlayerWonMockFn} />);
        expect(onPlayerWonMockFn).toHaveBeenCalled();
        expect(onPlayerWonMockFn).toHaveBeenCalledTimes(1);
        expect(wrapper.find('label').text()).toBe(Constants.EXPECT_WINNER_X);
    })

    it("should be draw when all tiles are completely filled and no winner", () => {
        const board = ['X', 'O', 'X', 'X', 'X', 'O', 'O', 'X', 'O'];
        const wrapper = mount(<Status currentPlayer='X' board={board} onPlayerWin={jest.fn()} />);
        expect(wrapper.find('label').text()).toBe(Constants.EXPECT_GAME_DRAW);
    });

}); 