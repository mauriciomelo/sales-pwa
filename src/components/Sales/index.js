import React from 'react';
import {List, ListItem} from 'material-ui/List';
import Subheader from 'material-ui/Subheader';

export const Sales = () => {
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
          <ListItem primaryText={item} key={item} />
        ))}
      </List>

    </div>
  );
};
