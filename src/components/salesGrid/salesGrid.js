
import React, { Component } from 'react'
import './salesGrid.css'
import Table from '@material-ui/core/Table'
import TableBody from '@material-ui/core/TableBody'
import TableCell from '@material-ui/core/TableCell'
import TableHead from '@material-ui/core/TableHead'
import TableRow from '@material-ui/core/TableRow'

class SalesGrid extends Component {

  render() {
    return (
        <div className="sl-salesGrid">
          <Table>
            <TableHead>
              <TableRow>
                <TableCell>Week Ending</TableCell>
                <TableCell numeric>Retail Sales</TableCell>
                <TableCell numeric>Wholesale Sales</TableCell>
                <TableCell numeric>Units Sold</TableCell>
                <TableCell numeric>Retailer Margin</TableCell>
              </TableRow>
            </TableHead>
            <TableBody children=
              {this.props.rows && this.props.rows.map(row => {
                return (
                  <TableRow key={row.id}>
                    <TableCell component="th" scope="row">
                      {row.weekEnding}
                    </TableCell>
                    <TableCell numeric>${row.retailSales.toLocaleString()}</TableCell>
                    <TableCell numeric>${row.wholesaleSales.toLocaleString()}</TableCell>
                    <TableCell numeric>{row.unitsSold.toLocaleString()}</TableCell>
                    <TableCell numeric>{row.retailerMargin.toLocaleString()}</TableCell>
                  </TableRow>
                );
              })}
            />
          </Table>
        </div>
    )
  }
}

export default SalesGrid