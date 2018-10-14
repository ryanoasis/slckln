
import React, { Component } from 'react'
import './productOverview.css'
import Typography from '@material-ui/core/Typography'

class ProductOverview extends Component {

  render() {
    return (
        <div className="sl-productOverview">
          <img src={this.props.image} alt={this.props.title} />
          <Typography variant="h5" align="center" gutterBottom>
            {this.props.title}
          </Typography>
          <Typography variant="subheading" align="center">
            {this.props.subtitle}
          </Typography>
        </div>
    )
  }
}

export default ProductOverview