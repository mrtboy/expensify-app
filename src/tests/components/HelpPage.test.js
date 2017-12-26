import React from 'react';
import HelpPage from '../../components/HelpPage';
import { shallow } from 'enzyme';

test("should render HelpPage", () =>{
  const wrapper = shallow(<HelpPage />);
  expect(wrapper).toMatchSnapshot();
}); 