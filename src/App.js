import React, { Component } from 'react'
import './App.css'
import Header from './components/header/header.js'
import ProductOverview from './components/productOverview/productOverview.js'
import ProductTags from './components/productTags/productTags.js'
import Navigation from './components/navigation/navigation.js'
import SalesChart from './components/salesChart/salesChart.js'
import SalesGrid from './components/salesGrid/salesGrid.js'
import Grid from '@material-ui/core/Grid'
import Divider from '@material-ui/core/Divider'
import { Card, CardContent, Typography } from '@material-ui/core'
import axios from 'axios'

class App extends Component {

  constructor(props) {
    super(props)

    this.state = {
      data: {}
    }
  }

  componentDidMount() {
    axios
      .get(`/static/data/Webdev_data2.json`)
      .then(res => this.setState({ data: res.data[0] })) // array - assume supposed to be one item
      .catch(err => console.log(err))
  }

  render() {
    return (
      <div className="App">
        <Grid container spacing={0}>
          <Grid item xs={12} className="headerWrapper">
            <Card>
              <CardContent>
                <Header />
              </CardContent>
            </Card>
          </Grid>
          <Grid container spacing={16}>
            <Grid item xs={2}>
              <Card>
                <CardContent>
                  <ProductOverview
                    image={this.state.data.image}
                    title={this.state.data.title}
                    subtitle={this.state.data.subtitle}
                  />
                  <br />
                  <Divider />
                  <br />
                  <ProductTags
                    data={this.state.data.tags}
                  />
                  <br />
                  <Divider />
                  <br />
                  <Navigation />
                </CardContent>
              </Card>
            </Grid>
            <Grid item xs={10}>
            <Card>
              <CardContent>
                <Typography variant="h6" align="left" gutterBottom>
                  Retail Sales
                </Typography>
                <SalesChart data={this.state.data.sales} />
              </CardContent>
            </Card>
            <br />
            <Card>
              <CardContent>
                <SalesGrid rows={this.state.data.sales} />
              </CardContent>
            </Card>
          </Grid>
          </Grid>
        </Grid>
      </div>
    )
  }
}

export default App
