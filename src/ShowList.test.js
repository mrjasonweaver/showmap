import React from 'react';
import ReactDOM from 'react-dom';
import ShowList from './ShowList';
import { shallow, mount, render } from 'enzyme';

const wrapper = shallow(<ShowList />);

test('two plus two is four', () => {
    expect(2 + 2).toBe(4);
});