import React from 'react';
import { shallow } from 'enzyme';
import Status from '../component/Status';

describe(("<Status/> component"), () => {
    it("should render correctly", () => {
        const wrapper = shallow(<Status currentPlayer='X'/>);
        expect(wrapper).toMatchSnapshot();
    });
    it("should have the label to display game status", () => {
        const wrapper = shallow(<Status currentPlayer='X'/>);
        expect(wrapper.find("label")).toBeDefined();
    });
});

describe(("<Status/> functionality"), () => {
    it("should render the player's turn correctly", () => {
        const wrapper = shallow(<Status currentPlayer='X' />);
        expect(wrapper.find('label').text()).toBe('Next Player : X');
    });
}); 