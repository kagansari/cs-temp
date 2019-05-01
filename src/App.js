import React from 'react';
import { BrowserRouter as Router, Route, Redirect } from "react-router-dom";
import {Switch} from 'react-router'
import styled from 'styled-components'
import MyPortfolio from './routes/MyPortfolio'
import Offers from './routes/Offers'
import Marketplace from './routes/Marketplace'
import InvestmentData from './routes/InvestmentData'
import Dashboard from './routes/Dashboard'
import NavigationBar from './layout/NavigationBar'
import Sidebar from './layout/Sidebar'
import './fonts/style.css'
import './index.css'

const App = styled(props => {
  return (
    <div {...props}>
      <Router>
        <Sidebar id="sidebar"/>
        <div id="main-container">
          <div id="page-container">
            <NavigationBar/>
            <Switch>
              <Route exact path="/portfolio" component={MyPortfolio}/>
              <Route exact path="/offers" component={Offers}/>
              <Route exact path="/marketplace" component={Marketplace}/>
              <Route exact path="/investment-data" component={InvestmentData}/>
              <Route exact path="/" component={Dashboard}/>
              <Route component={() => <Redirect to="/"/>}/>
            </Switch>
          </div>
        </div>
      </Router>
    </div>
  );
})`
  display: inline-block;
  min-width: 100%;
  max-width: 100%;
  min-height: 100vh;
  #sidebar {
    position: fixed;
    top: 0;
    left: 0;
    bottom: 0;
    width: 240px;
  }
  #main-container {
    min-height: 100vh;
    margin-left: 240px; 
    background-color: #F4F4F4;
    #page-container {
      min-height: 100vh;
      min-width: 100%;
    }
  }
`

export default App;
