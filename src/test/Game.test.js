import React from 'react';
import Game from '../component/Game';
import Tile from '../component/Tile';
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
    it("Should render 9 empty Tiles", () => {
        let wrapper = mount(<Game />);
        expect(wrapper.find(Tile).length).toBe(9);

        wrapper.find(Tile).forEach(square => {
            expect(square.find('button').text()).toBe('');
        });
    })
});