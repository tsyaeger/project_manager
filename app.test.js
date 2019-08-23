import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

it("renders without crashing", () => {
  const wrapper = shallow(<App />);
  console.log(wrapper.html());
  expect(wrapper.exists('div.App')).toBeTruthy();
  expect(wrapper).toMatchSnapshot();
});
