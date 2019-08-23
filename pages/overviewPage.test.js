import React from 'react';
import ReactDOM from 'react-dom';
import OverviewPage from './overviewPage'

it("renders without crashing", () => {
  const wrapper = shallow(<OverviewPage />);
  console.log(wrapper.html());
  expect(wrapper).toMatchSnapshot();
});
