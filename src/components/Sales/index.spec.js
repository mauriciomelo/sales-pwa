import React from 'react';
import { shallow, mount, render } from 'enzyme';
import { Sales } from './index';
import { ListItem } from 'material-ui/List';

let wrapper;
describe('<Sales/>', () => {

  beforeEach(() => {
    const products = [
      { label: 'Item' },
      { label: 'Item 2' },
    ];
    wrapper = shallow(<Sales products={products} />);
  });

  it('render products', () => {
    expect(wrapper.find(ListItem)).toHaveLength(2);
  });

  describe('list item (product/service)', () => {
    it('vibrates on touch', () => {
      navigator.vibrate = jest.fn();
      wrapper.find(ListItem).first().simulate('click');
      expect(navigator.vibrate).toBeCalledWith(50);
    });

    it('does NOT crash when navigator does not support the vibrate API', () => {
      delete navigator.vibrate;
      wrapper.find(ListItem).first().simulate('click');
    });
  });
});
