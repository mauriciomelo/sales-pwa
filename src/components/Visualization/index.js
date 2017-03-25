import React from 'react';
import { connect } from 'react-redux';
import {
  Table,
  TableBody,
  TableHeader,
  TableHeaderColumn,
  TableRow,
  TableRowColumn,
  TableFooter,
} from 'material-ui/Table';
import _ from 'lodash';

export const Visualization = ({ sales = [] }) => {
  const items = _.chain(sales)
  .groupBy('label')
  .toPairs()
  .map(item => ({ label: item[0], count: item[1].length, total: _.sumBy(item[1], 'price') }))
  .value();

  const total = _.sumBy(items, 'total');

  return (
    <div>
      <Table>
        <TableHeader displaySelectAll={false} adjustForCheckbox={false}>
          <TableRow>
            <TableHeaderColumn>Name</TableHeaderColumn>
            <TableHeaderColumn>Qtd</TableHeaderColumn>
            <TableHeaderColumn>Total (R$)</TableHeaderColumn>
          </TableRow>
        </TableHeader>

        <TableBody displayRowCheckbox={false}>
          { items.map(item => (
            <TableRow className="Item" key={item.label}>
              <TableRowColumn>{item.label}</TableRowColumn>
              <TableRowColumn>{item.count}</TableRowColumn>
              <TableRowColumn>{item.total}</TableRowColumn>
            </TableRow>
          ))}
        </TableBody>

        <TableFooter adjustForCheckbox={false}>
         <TableRow>
           <TableRowColumn colSpan="2">Total Geral</TableRowColumn>
           <TableRowColumn>{total}</TableRowColumn>
         </TableRow>
       </TableFooter>
      </Table>
    </div>
  );
};

const mapStateToProps = state => ({
  sales: state.sales,
});

export default connect(
  mapStateToProps,
)(Visualization);
