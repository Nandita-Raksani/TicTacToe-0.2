import React from 'react';
import Tile from '../component/Tile';
import { shallow } from 'enzyme';

describe(("<Tile/> component"), () => {
    it("should render correctly", () => {
        let wrapper = shallow(<Tile />);
        expect(wrapper).toMatchSnapshot();
    });

    it("should have the button with style class", () => {
        let wrapper = shallow(<Tile />);
        expect(wrapper.find("button").hasClass('tile-button')).toBeTruthy();
    });
});