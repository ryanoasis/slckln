
import React, { Component } from 'react'
import './productTags.css'
import Chip from '@material-ui/core/Chip'

class ProductTags extends Component {

  render() {
    return (
        <div className="sl-productTags">
          {this.props.data && this.props.data.map(function(item, index) {
            return (<Chip variant="outlined" key={index} label={item} />)
          })}
        </div>
    )
  }
}

export default ProductTags