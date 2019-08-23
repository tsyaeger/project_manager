import React from 'react';
import ReactDOM from 'react-dom';
import TodoCard from './groupCard'

it("renders without crashing", () => {
  const wrapper = shallow(<TodoCard />);
  console.log(wrapper.html());
  expect(wrapper).toMatchSnapshot();
});
