import React from 'react';
import { shallow } from 'enzyme';
import Main from './main';

describe('Main page', () => {
  it('renders', () => {
    const wrapper = shallow(<Main />);
    expect(wrapper).toMatchSnapshot();
  });
});
