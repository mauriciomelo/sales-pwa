import React from 'react';
import { shallow, mount, render } from 'enzyme';
import { Sales } from './index';
import { ListItem } from 'material-ui/List';

let wrapper;
let onSellMock;
let products;
describe('<Sales/>', () => {

  beforeEach(() => {
    products = [
      { label: 'Item', price: 10 },
      { label: 'Item 2', price: 20 },
    ];
    onSellMock = jest.fn();
    wrapper = shallow(<Sales onSell={onSellMock} products={products} />);
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

    it('calls onSell with product', () => {
      wrapper.find(ListItem).first().simulate('click');
      expect(onSellMock).toBeCalledWith(products[0]);
    });

    it('does NOT crash when navigator does not support the vibrate API', () => {
      delete navigator.vibrate;
      wrapper.find(ListItem).first().simulate('click');
    });
  });
});
