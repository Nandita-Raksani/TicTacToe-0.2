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
});