import React from 'react';
import { shallow } from 'enzyme';
import Docs from './docs';

describe('Docs page', () => {
  it('renders', () => {
    const wrapper = shallow(<Docs />);
    expect(wrapper).toMatchSnapshot();
  });
});
