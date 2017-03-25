import React from 'react';
import { connect } from 'react-redux';
import {List, ListItem} from 'material-ui/List';
import Subheader from 'material-ui/Subheader';
import { sell } from '../../state/sales';



export const Sales = ({ products = [], onSell }) => {
  const handleClick = (product) => {
    if ('vibrate' in navigator) {
      navigator.vibrate(50);
    }

    onSell(product);
  };

  return (
    <div>
      <List>
        <Subheader>Mais vendido</Subheader>
        { products.map(product => (
          <ListItem secondaryText={`R$ ${product.price}`} primaryText={product.label} key={product.label} onClick={() => handleClick(product) } />
        ))}
      </List>

    </div>
  );
};

const mapStateToProps = state => ({
  products: state.products,
});

const mapDispatchToProps = dispatch => ({
  onSell: (item) => {
    dispatch(sell(item));
  },
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Sales);
