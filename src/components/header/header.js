
import React, { Component } from 'react'
import logo from '../../images/logo.png'
import './header.css'

class Header extends Component {
  render() {
    return (
        <header className="sl-header">
          <img src={logo} alt="logo" />
        </header>
    )
  }
}

export default Header