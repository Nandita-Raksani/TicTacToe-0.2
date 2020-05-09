import React from 'react';
import Game from '../component/Game';
import Tile from '../component/Tile';
import Status from '../component/Status'
import { shallow, mount } from 'enzyme';

describe(("<Game/> component"), () => {
    let wrapper;

    beforeEach(() => {
        wrapper = shallow(<Game />);
    });

    it("should render correctly", () => {
        expect(wrapper).toMatchSnapshot();
    });

    it("should render styles correctly", () => {
        expect(wrapper.find("ul").hasClass('board')).toBeTruthy();
    })
});

describe(("<Game/> component functionality"), () => {
    let wrapper;

    beforeEach(() => {
        wrapper = mount(<Game />);
    });

    it("Should render 9 empty Tiles", () => {
        const EXPECT_EMPTY_VALUE = '';
        expect(wrapper.find(Tile).length).toBe(9);

        wrapper.find(Tile).forEach(square => {
            expect(square.find('button').text()).toBe(EXPECT_EMPTY_VALUE);
        });
    })

    it("Should always assign first move to Player X", () => {
        const EXPECT_PLAYER_X = 'X';
        wrapper.find(Tile).at(0).find('button').simulate('click');
        expect(wrapper.find(Tile).at(0).find('button').text()).toBe(EXPECT_PLAYER_X);
    })


    it("Should assign the next move to Player O", () => {
        const EXPECT_PLAYER_O = 'O';
        wrapper.find(Tile).at(0).find('button').simulate('click');
        wrapper.find(Tile).at(1).find('button').simulate('click');
        expect(wrapper.find(Tile).at(1).find('button').text()).toBe(EXPECT_PLAYER_O);
    })

    it("Should display the status of game with next player turn", () => {
        const EXPECT_PLAYER_X_INITIALLY = 'Next Player : X';
        expect(wrapper.find(Status).find('label').text()).toBe(EXPECT_PLAYER_X_INITIALLY);
        wrapper.find(Tile).at(0).find('button').simulate('click');

        const EXPECT_PLAYER_O_SECOND_TURN = 'Next Player : O';
        expect(wrapper.find(Tile).at(0).find('button').text()).toBe('X');
        expect(wrapper.find(Status).find('label').text()).toBe(EXPECT_PLAYER_O_SECOND_TURN);

        const EXPECT_PLAYER_X_THIRD_TURN = 'Next Player : X';
        wrapper.find(Tile).at(1).find('button').simulate('click');
        expect(wrapper.find(Tile).at(1).find('button').text()).toBe('O');
        expect(wrapper.find(Status).find('label').text()).toBe(EXPECT_PLAYER_X_THIRD_TURN);
    })

    it("Should display the winner", () => {
        const EXPECT_PLAYER_X_WINNER = 'Winner is : X';
        const positions = [0, 3, 1, 4, 2];
        simulateButtonClick(positions);
        expect(wrapper.find(Status).find('label').text()).toBe(EXPECT_PLAYER_X_WINNER);
    });

    it("Should not allow next turn to be played on game over", () => {
        const positions = [0, 3, 1, 4, 2];
        simulateButtonClick(positions);
        const tileList = wrapper.find(Tile);
        tileList.forEach(tile => {
            expect(tile.find('button').props()["disabled"]).toBeTruthy();
        });
    });

    it("Should highlight the winning tiles on game won", () => {
        const positions = [0, 3, 1, 4, 2];
        simulateButtonClick(positions);
        expect(wrapper.find(Status).find('label').text()).toBe('Winner is : X');
        
        const winningPositions = [0, 1, 2];
        const tileList = wrapper.find(Tile);
        tileList.forEach(checkStyles);
        function checkStyles(item, index) {
            if (winningPositions.includes(index)) {
                expect(item.find("button").hasClass('tile-winning')).toBeTruthy();
            } else {
                expect(item.find("button").hasClass('tile-winning')).toBeFalsy();
            }
        }
    });

    it("Should reset game to initial state on clicking Reset button", () => {
        const EXPECT_PLAYER_X_INITIALLY = 'Next Player : X';
        const positions = [0, 3, 1, 4, 2];
        simulateButtonClick(positions);
        wrapper.find('button').at(9).simulate('click');
        const tileList = wrapper.find(Tile);
        tileList.forEach(tile => {
            expect(tile.find('button').text()).toBe('');
            expect(tile.find('button').props()["disabled"]).toBeFalsy();
        });
        expect(wrapper.find(Status).find('label').text()).toBe(EXPECT_PLAYER_X_INITIALLY);
    });

    const simulateButtonClick = (board) => {
        board.forEach(position => {
            wrapper.find(Tile).at(position).find('button').simulate('click');
        })
    };

});