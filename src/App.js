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
import {GlobalStyle, media} from './style'
import './fonts/style.css'

const App = styled(props => {
  return (
    <div id="container" {...props}>
      <GlobalStyle/>
      <Router>
        <NavigationBar id="navbar"/>
        <Sidebar id="sidebar"/>
        <div id="page-container">
          <Switch>
            <Route exact path="/portfolio" component={MyPortfolio}/>
            <Route exact path="/offers" component={Offers}/>
            <Route exact path="/marketplace" component={Marketplace}/>
            <Route exact path="/investment-data" component={InvestmentData}/>
            <Route exact path="/" component={Dashboard}/>
            <Route component={() => <Redirect to="/"/>}/>
          </Switch>
        </div>
      </Router>
    </div>
  )
})`
  display: inline-block;
  min-width: 100%;
  max-width: 100%;
  min-height: 100vh;
  #sidebar {
    position: fixed;
    top: 0;
    bottom: 0;
    z-index: 2500;
    transition: all 250ms ease;
    ${media.mobile`
      width: 100%;
      left: -100%;
    `}
    ${media.desktop`
      width: 240px;
      left: -180px;
    `}
  }
  #navbar {
    position: fixed;
    top: 0;
    right: 0;
    left: 0;
    height: 80px;
    z-index: 2000;
    transition: all 250ms ease;
  }
  #page-container {
    margin-top: 80px; 
    min-height: 100vh;
    transition: margin 200ms ease;
    background-color: #F4F4F4;
  }
  ${media.mobile`
    &.sidebar-active {
      #sidebar { left: 0 }
    }
  `}
  ${media.desktop`
    #page-container, #navbar {
      margin-left: 60px;
    }
    &.sidebar-active {
      #sidebar {
        left: 0;
      }
      #page-container, #navbar {
        margin-left: 240px;
      } 
    }
  `}
`

export default App;
