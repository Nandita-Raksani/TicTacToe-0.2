import React from 'react';
import { shallow } from 'enzyme';
import Status from '../component/Status';

describe(("<Status/> component"), () => {
    let wrapper;
    
    beforeEach(() => {
        const board = ['', '', '', '', '', '', '', '', ''];
        wrapper = shallow(<Status currentPlayer='X' board={board}/>);
    });

    it("should render correctly", () => {
        expect(wrapper).toMatchSnapshot();
    });

    it("should have the label to display game status", () => {
        expect(wrapper.find("label")).toBeDefined();
    });
});

describe(("<Status/> functionality"), () => {
    it("should render the player's turn correctly", () => {
        const EXPECT_PLAYER_X_INITIALLY = 'Next Player : X';
        const wrapper = shallow(<Status currentPlayer='X' board={Array(9).fill('')}/>);
        expect(wrapper.find('label').text()).toBe(EXPECT_PLAYER_X_INITIALLY);
    });

    it("should declare X as winner if first row is completely filled by X ", () => {
        const EXPECT_PLAYER_X_WINNER = 'Winner is : X';
        const board = ['X','X','X','O','O','','','',''];
        const wrapper = shallow(<Status currentPlayer='X' board={board}/>);
        expect(wrapper.find('label').text()).toBe(EXPECT_PLAYER_X_WINNER);
    });

    it("should declare O as winner if first row is completely filled by O ", () => {
        const EXPECT_PLAYER_O_WINNER = 'Winner is : O';
        const board = ['O','O','O','X','X','','','X',''];
        const wrapper = shallow(<Status currentPlayer='O' board={board}/>);
        expect(wrapper.find('label').text()).toBe(EXPECT_PLAYER_O_WINNER);
    });
}); 