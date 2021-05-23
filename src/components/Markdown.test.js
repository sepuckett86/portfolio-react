import React from 'react';
import { shallow } from 'enzyme';
import Markdown from './Markdown';

describe('Markdown component', () => {
  it('renders', () => {
    const content = 'markdown here';
    const wrapper = shallow(<Markdown content={content}/>);
    expect(wrapper).toMatchSnapshot();
  });
});
