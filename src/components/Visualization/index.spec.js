import React from 'react';
import { shallow, mount, render } from 'enzyme';
import { Visualization } from './index';
import { ListItem } from 'material-ui/List';

let wrapper;
describe('<Visualization/>', () => {

  beforeEach(() => {
    const sales = [
      { label: 'Item' },
      { label: 'Item 2' },
    ];
    wrapper = shallow(<Visualization sales={sales} />);
  });

  it('render visualizations', () => {
    expect(wrapper.find('.Item')).toHaveLength(2);
  });
});
