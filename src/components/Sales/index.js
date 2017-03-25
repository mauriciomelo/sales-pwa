import React from 'react';
import { connect } from 'react-redux';
import {List, ListItem} from 'material-ui/List';
import Subheader from 'material-ui/Subheader';

const handleClick = () => {
  if ('vibrate' in navigator) {
    navigator.vibrate(50);
  }
};

export const Sales = ({ sales = [] }) => {

  return (
    <div>
      <List>
        <Subheader>Mais vendido</Subheader>
        { sales.map(sale => (
          <ListItem primaryText={sale.label} key={sale.label} onClick={handleClick} />
        ))}
      </List>

    </div>
  );
};

const mapStateToProps = state => ({
  sales: state.sales,
});

export default connect(
  mapStateToProps,
)(Sales);
