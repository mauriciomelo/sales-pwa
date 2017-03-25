import React from 'react';
import { shallow, mount, render } from 'enzyme';
import Sales from './index';
import { ListItem } from 'material-ui/List';

describe('<Sales/>', () => {
  it('render three <ListItem /> components', () => {
    const wrapper = shallow(<Sales />);
    expect(wrapper.find(ListItem)).toHaveLength(4);
  });

  describe('list item (product/service)', () => {
    it('vibrates on touch', () => {
      navigator.vibrate = jest.fn();
      const wrapper = shallow(<Sales />);
      wrapper.find(ListItem).first().simulate('click');
      expect(navigator.vibrate).toBeCalledWith(50);
    });

    it('does NOT crash when navigator does not support the vibrate API', () => {
      delete navigator.vibrate;
      const wrapper = shallow(<Sales />);
      wrapper.find(ListItem).first().simulate('click');
    });
  });
});
