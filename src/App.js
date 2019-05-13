import React from 'react';
import { BrowserRouter as Router, Route, Redirect } from 'react-router-dom'
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
import TokenDetails from './routes/Token'

const PageContainer = styled.div`
  margin-top: 60px; 
  transition: margin 200ms ease;
  ${media.desktop`
    margin-left: ${props => props.isSidebarOpen ? 240 : 60}px;
  `}
`

class App extends React.Component {
  state = {
    isSidebarOpen: false
  }
  toggleSidebar = () => this.setState(prevState => ({
    isSidebarOpen: !prevState.isSidebarOpen
  }))

  componentDidMount() {
    // open sidebar on desktop
    if (document.body.offsetWidth > 600 && !this.state.isSidebarOpen) {
      this.toggleSidebar()
    }
  }

  render() {
    const { isSidebarOpen } = this.state
    const { toggleSidebar } = this

    return (
      <div id="container" {...this.props}>
        <GlobalStyle/>
        <Router>
          <Sidebar id="sidebar" {...{ isSidebarOpen, toggleSidebar }}/>
          <NavigationBar id="navbar" {...{ isSidebarOpen, toggleSidebar }}/>
          <PageContainer id="page-container" {...{ isSidebarOpen }}>
            <Switch>
              <Route exact path="/portfolio" component={MyPortfolio}/>
              <Route exact path="/offers" component={Offers}/>
              <Route exact path="/marketplace" component={Marketplace}/>
              <Route exact path="/marketplace/:tokenId" component={TokenDetails}/>
              <Route exact path="/investment-data" component={InvestmentData}/>
              <Route exact path="/" component={Dashboard}/>
              <Route component={() => <Redirect to="/"/>}/>
            </Switch>
          </PageContainer>
        </Router>
      </div>
    )
  }
}

export default App;
