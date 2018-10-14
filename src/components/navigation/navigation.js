
import React, { Component } from 'react'
import './navigation.css'
import MenuList from '@material-ui/core/MenuList'
import MenuItem from '@material-ui/core/MenuItem'
import ListItemIcon from '@material-ui/core/ListItemIcon'
import ListItemText from '@material-ui/core/ListItemText'
import HomeIcon from '@material-ui/icons/Home'
import BarChart from '@material-ui/icons/BarChart'


class Navigation extends Component {

  render() {
    return (
        <div className="sl-navigation">
          <MenuList>
            <MenuItem>
              <ListItemIcon>
                <HomeIcon />
              </ListItemIcon>
              <ListItemText inset primary="Overview" />
            </MenuItem>
            <MenuItem>
              <ListItemIcon>
                <BarChart />
              </ListItemIcon>
              <ListItemText inset primary="Sales" />
            </MenuItem>
          </MenuList>
        </div>
    )
  }
}

export default Navigation