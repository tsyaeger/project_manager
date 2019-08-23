import React from 'react';
import ReactDOM from 'react-dom';
import GroupCard from './groupCard'

it("renders without crashing", () => {
  const wrapper = shallow(<GroupCard />);
  console.log(wrapper.html());
  expect(wrapper).toMatchSnapshot();
});
