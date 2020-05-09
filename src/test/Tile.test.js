import React from 'react';
import Tile from '../component/Tile';
import { shallow } from 'enzyme';

describe(("<Tile/> component"), () => {
    let wrapper;

    beforeEach(() => {
        wrapper = shallow(<Tile value='X' onClick={jest.fn()} />);
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
        const wrapper = shallow(<Tile value='X' onClick={jest.fn()} />);
        expect(wrapper.find('button').props()["data-symbol-color"]).toBe('X');
        expect(wrapper.find("button").text()).toEqual('X');
    });
}); 