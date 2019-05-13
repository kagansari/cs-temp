import React, {Component, Fragment} from 'react'
import styled from 'styled-components'
import {Button, Grid, Icon} from 'semantic-ui-react'
import logoText from './logo-text-white.png'
import logo from './logo-white.png'
import {Link} from 'react-router-dom'
import {media} from '../../style'
import PropTypes from 'prop-types'

export const SidebarButton = styled(({isSidebarOpen, ...props}) => (
  <button {...props}>
    <Icon link name={isSidebarOpen ? 'outdent' : 'indent'} size="large"/>
  </button>
))`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 60px;
  height: 60px;
  border: none;
  color: #DDE5ED;
  background-color: #522984 !important;
  &:hover {
    color: #DDE5ED !important;
    background-color: #6935AA;
  }
  &:active, &:focus {
    color: #DDE5ED !important;
    background-color: #462371;
  }
`

const LogoText = styled(props => (
  <div {...props}><img src={logoText} alt="Creosafe"/></div>
))`
  height: 60px;
  display: flex;
  justify-content: center;
  align-items: center;
  img {
    max-height: 40px;
  }
`

const Logo = styled(props => (
  <div {...props}><img src={logo} alt="Creosafe"/></div>
))`
  height: 60px;
  img {
    max-height: 60px;
    margin: 0 0 0 auto;
  }
`

const TokenizeButton = styled(props => (
  <Button icon labelPosition="right" {...props}>
    Tokenize Contract
    <Icon name="chain"/>
  </Button>
))`
  &.ui.button {
    display: block;
    //width: 210px;
    height: 60px;
    margin: auto;
    //padding: 20px 15px;
    color: #753BBD;
    .icon { width: 50px !important; }
  }
`

const TokenizeIcon = styled(props => (
  <Button icon {...props}>
    <Icon name="chain" floated="right"/>
  </Button>
))`
  &.ui.button {
    width: 50px;
    height: 60px;
    margin: 0 5px;
    color: #753BBD;
  }
`

const MenuItem = styled(Link)`
  color: #DDE5ED;
  transition: all 250ms ease;
  display: flex;
  align-items: center;
  ${media.desktop`
    justify-content: space-between;
    height: 60px;    
    padding: 0 20px;
  `}
  ${media.mobile`
    justify-content: center;
    height: 80px;    
    flex-direction: column;
    .icon { margin-bottom: 10px; }
  `}
  &:hover {
    color: #DDE5ED;
    background-color: #6935AA;
  }
  &:active {
    background-color: #462371;
  }
`

class RawSidebar extends Component {
  static propTypes = {
    isSidebarOpen: PropTypes.bool,
    toggleSidebar: PropTypes.func
  }

  render() {
    const { isSidebarOpen, ...props } = this.props

    return (
      <div {...props}>
        { isSidebarOpen ? <LogoText/> : <Logo/> }
        { isSidebarOpen ? <TokenizeButton/> : <TokenizeIcon/> }
        <MenuItem to="/">
          Dashboard <Icon name="tachometer alternate"/>
        </MenuItem>
        <MenuItem to="/portfolio">
          My portfolio <Icon name="folder open"/>
        </MenuItem>
        <MenuItem to="/offers">
          Offers <Icon name="tags"/>
        </MenuItem>
        <MenuItem to="/marketplace">
          Marketplace <Icon name="shopping cart"/>
        </MenuItem>
        <MenuItem to="/investment-data">
          Investment data <Icon name="chart area"/>
        </MenuItem>
      </div>
    )
  }
}

const DesktopSidebar = styled(RawSidebar)`
  background-color: #522984;
  position: fixed;
  top: 0;
  bottom: 0;
  z-index: 2500;
  transition: all 250ms ease;
  text-align: right;
  font-size: 14px;
  font-family: "poppins";
  font-weight: 700;
  ${media.mobile`
    width: 100%;
    ${props => props.isSidebarOpen ? 'left: 0;' : 'left: -100%;'})
  `}
  ${media.desktop`
    width: 240px;
    ${props => props.isSidebarOpen ? 'left: 0;' : 'left: -180px;'})
  `}

  //.logo-text {
  //  margin: 15px;
  //  img { width: 100%; }
  //}
  //.logo {
  //  text-align: right;
    //display: flex;
    //justify-content: flex-end;
    //align-items: center;
    //img {
      //max-width: 100%;
      //width: 60px;
      //height: 60px;
    //}
  //}
  //#tokenize-icon {
  //}
`

const MobileSidebarContainer = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  font-family: "poppins";
  font-weight: 700;
  overflow: hidden;
  transition: height 250ms ease;
  ${props => props.isSidebarOpen ? 'height: 300px;' : 'height: 60px;'}
  // visible area when sidebar closed
  .nav {
    display: flex;
    justify-content: space-between;
    align-items: center;
    height: 60px;
  }
  // remove default grid padding
  .ui.grid .row, .ui.grid .column {
    padding: 0;
  }
  background-color: #522984;
  z-index: 2500;
  span { width: 60px; } // placeholder for right
`

const MobileSidebar = props => (
  <MobileSidebarContainer {...props}>
    <div className="nav">
      <SidebarButton onClick={props.toggleSidebar} isSidebarOpen={props.isSidebarOpen}/>
      <LogoText/>
      <span/>{/* placeholder for right just in case*/}
    </div>
    <Grid padded columns={2}>
      <Grid.Row>
        <Grid.Column textAlign="center" verticalAlign="middle">
          <TokenizeButton/>
        </Grid.Column>
        <Grid.Column>
          <MenuItem to="/">
            <Icon name="tachometer alternate"/> <div>Dashboard</div>
          </MenuItem>
        </Grid.Column>
      </Grid.Row>
      <Grid.Row>
        <Grid.Column>
          <MenuItem to="/portfolio">
            <Icon name="folder open"/> <div>My portfolio</div>
          </MenuItem>
        </Grid.Column>
        <Grid.Column>
          <MenuItem to="/offers">
            <Icon name="tags"/> <div>Offers</div>
          </MenuItem>
        </Grid.Column>
      </Grid.Row>
      <Grid.Row>
        <Grid.Column>
          <MenuItem to="/marketplace">
            <Icon name="shopping cart"/> <div>Marketplace</div>
          </MenuItem>
        </Grid.Column>
        <Grid.Column>
          <MenuItem to="/investment-data">
            <Icon name="chart area"/> <div>Investment data</div>
          </MenuItem>
        </Grid.Column>
      </Grid.Row>
    </Grid>
  </MobileSidebarContainer>
)

export default ({isSidebarOpen, toggleSidebar}) => (
  <Fragment>
    <DesktopSidebar className="desktop" {...{isSidebarOpen}}/>
    <MobileSidebar className="mobile" {...{isSidebarOpen, toggleSidebar}}/>
  </Fragment>
)
