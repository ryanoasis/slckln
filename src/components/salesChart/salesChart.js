
import React, { Component } from 'react'
import C3Chart from 'react-c3js'
import 'c3/c3.css'
import './salesChart.css'

class SalesChart extends Component {
  constructor(props) {
    super(props)
    this.state = {
      data: {
        columns: [],
        type: 'spline',
        colors: {
          'Retail Sales': '#45a8f6',
          'Wholesale Sales': '#9aa5bf'
        },
        labels: false
      },
      axis: {
        y: {
          show: false
        }
      }
    }
  }

  componentDidUpdate(prevProps, prevState) {

    if (!prevProps.data) {
      let retailSales = this.props.data.map(function (data) { return data.retailSales })
      let wholesaleSales = this.props.data.map(function (data) { return data.wholesaleSales })
      let data = Object.assign({}, this.state.data)

      data.columns = [
        ['Retail Sales', ...retailSales],
        ['Wholesale Sales', ...wholesaleSales]
      ]
      this.setState({data})
    }
  }
  render() {
    return (
      <div className="sl-salesChart">
        <C3Chart data={this.state.data} axis={this.state.axis} />
      </div>
    )
  }
}

export default SalesChart