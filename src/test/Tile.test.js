import React from 'react';
import Tile from '../component/Tile';
import { shallow } from 'enzyme';

describe(("<Tile/> component"), () => {
    let wrapper;

    beforeEach(() => {
        wrapper = shallow(<Tile value='X' onClick={jest.fn()} isGameOver={false}/>);
    });

    it("should render correctly", () => {
        expect(wrapper).toMatchSnapshot();
    });

    it("should have the button with style class", () => {
        expect(wrapper.find("button").hasClass('tile-button')).toBeTruthy();
    });
});

describe(("<Tile/> component functionality"), () => {
    it("should display symbol X when value passed from Game is X", () => {
        const EXPECT_PLAYER_X = 'X';
        const wrapper = shallow(<Tile value='X' onClick={jest.fn()} isGameOver={false}/>);
        expect(wrapper.find('button').props()["data-symbol-color"]).toBe('X');
        expect(wrapper.find("button").text()).toEqual(EXPECT_PLAYER_X);
    });

    it("should display symbol O when value passed from Game is O", () => {
        const EXPECT_PLAYER_O = 'O';
        const wrapper = shallow(<Tile value='O' onClick={jest.fn()} isGameOver={false}/>);
        expect(wrapper.find('button').props()["data-symbol-color"]).toBe('O');
        expect(wrapper.find("button").text()).toEqual(EXPECT_PLAYER_O);
    });

    it("should not allow the already occupied tile to be clicked again", () => {
        let wrapper = shallow(<Tile value='X' onClick={jest.fn()} isGameOver={false}/>);
        expect(wrapper.find('button').props()["disabled"]).toBeTruthy();
    });

    it("Should not allow next turn to be played on game over", () => {
        const wrapper = shallow(<Tile value='X' onClick={jest.fn()} isGameOver={true}/>);
        expect(wrapper.find('button').props()["disabled"]).toBeTruthy();
    });
}); 