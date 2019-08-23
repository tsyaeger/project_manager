import React from 'react';
import ReactDOM from 'react-dom';
import DetailsPage from './detailsPage'

it("renders without crashing", () => {
  const wrapper = shallow(<DetailsPage />);
  console.log(wrapper.html());
  expect(wrapper).toMatchSnapshot();
});
