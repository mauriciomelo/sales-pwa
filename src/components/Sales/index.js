import React from 'react';
import {List, ListItem} from 'material-ui/List';
import Subheader from 'material-ui/Subheader';

const handleClick = () => {
  if ('vibrate' in navigator) {
    navigator.vibrate(50);
  }
};

const Sales = () => {
  const items = [
    'Corte M',
    'Corte F',
    'Escova Progressiva',
    'Hidratação',
  ];

  return (
    <div>
      <List>
        <Subheader>Mais vendido</Subheader>
        { items.map(item => (
          <ListItem primaryText={item} key={item} onClick={handleClick} />
        ))}
      </List>

    </div>
  );
};

export default Sales;
