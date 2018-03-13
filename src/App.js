import React, { Component } from 'react';
/* import PropTypes from 'prop-types'; */
/* import { connect } from 'react-redux'; */
/* import { createStore } from 'redux' */
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import { Grid, Row, Col } from 'react-flexbox-grid';
import Paper from 'material-ui/Paper'
import AppBar from 'material-ui/AppBar'
import LocationListContainer from './containers/LocationListContainer';
/* import ForecastExtended from './components/ForecastExtended'
 */import { setCity } from './actions'
/* import { store } from './store' */
import './App.css';
import ForcastExtendedContainer from './containers/ForcastExtendedContainer';


const cities = ['Barquisimeto,ve',
  'Buenos Aires,ar',
  'Ciudad de México,mx',
  'Madrid,es',
  'Bogotá,co',
  'Santiago,scl',
  'Rio de Janeiro,br'
];

class App extends Component {
  render() {
    return ( 
    <MuiThemeProvider>
      <Grid>
        <Row>
          <Col xs = { 12 } >
            <AppBar title = 'Weather App'/>
          </Col>
        </Row > 
        <Row>
          <Col xs = { 12 } md = { 6 }>
            <LocationListContainer cities={cities}></LocationListContainer>      
          </Col> 
          <Col xs = { 12 } md = { 6 }>
            <Paper zDepth = { 4 } >
              <div className = "detail"> 
              <ForcastExtendedContainer></ForcastExtendedContainer>
              </div > 
            </Paper> 
          </Col > 
        </Row> </Grid > 
          </MuiThemeProvider>        
      );
    }
  }
  
  export default (App);

