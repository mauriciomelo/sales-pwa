import React from 'react';
import { connect } from 'react-redux';
import {List, ListItem} from 'material-ui/List';
import Subheader from 'material-ui/Subheader';

const handleClick = () => {
  if ('vibrate' in navigator) {
    navigator.vibrate(50);
  }
};

export const Sales = ({ products = [] }) => {

  return (
    <div>
      <List>
        <Subheader>Mais vendido</Subheader>
        { products.map(sale => (
          <ListItem primaryText={sale.label} key={sale.label} onClick={handleClick} />
        ))}
      </List>

    </div>
  );
};

const mapStateToProps = state => ({
  products: state.products,
});

export default connect(
  mapStateToProps,
)(Sales);
