import React from 'react';
import App from '../App';
import Game from '../component/Game';
import { shallow } from 'enzyme';

describe(("<App/> component"), () => {

  it("should render correctly", () => {
    const wrapper = shallow(<App />);
    expect(wrapper).toMatchSnapshot();
  });

  it("should have the title", () => {
    const wrapper = shallow(<App />);
    expect(wrapper.find("header").text()).toEqual("Tic-Tac-Toe");
  });

  it("should render styles correctly", () => {
    const wrapper = shallow(<App />);
    expect(wrapper.find("div").hasClass('App')).toBeTruthy();
    expect(wrapper.find("header").hasClass('App-header')).toBeTruthy();
  });

  it("should load Game component", () => {
    const wrapper = shallow(<App />);
    expect(wrapper.find(Game)).toBeDefined();
  });

});