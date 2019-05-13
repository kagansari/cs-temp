import React, {Component} from 'react'
import styled from 'styled-components'
import {Header, Icon, Search, Transition} from 'semantic-ui-react'
import {withRouter} from 'react-router'
import PropTypes from 'prop-types'
import Notifications from './Notifications'
import Messages from './Messages'
import UserPanel from './UserPanel'
import {media} from '../../style'
import {SidebarButton} from '../Sidebar'

const CSSearch = styled(Search)`
  flex-grow: 1;
  max-width: 600px;
  margin: 0 15px;
  ${media.desktop` max-width: 600px; `}
  ${media.mobile` max-width: 200px; `}
  .ui.input {
    width: 100%;
    input {
      height: 35px;
      width: 100%;
      border: 1px solid #B8C2CC;
      border-radius: 4px;
      transition: all 300ms ease;
    }
  }
  input::placeholder, .icon {
    color: #DDE5ED;
    transition: all 250ms ease;
  }
  &.focus {
    .ui.input {
      input {
        border-color: #6E747A; 
      }
      input, .icon {
        color: #28334A;
      }
    }
  }
`

const NavSide = styled.div`
  display: flex;
  align-items: center;
  height: 100%;
`

const Avatar = styled(({children, ...props}) => (
  <button {...props}>
    <span>{children}</span>
  </button>
))`
  display: flex;
  align-items: center;
  &.active {
    color: #753BBD;
    border-bottom: 2px solid #753BBD;
    span { border-color: #753BBD; }
  }

  span {
    width: 35px;
    height: 35px;
    margin: auto;
    border: 1px solid #DDE5ED;
    border-radius: 50%;
    .icon {
      margin: 8px;
      font-size: 14px;
      line-height: 16px;
    }
  }
`

const RightPanel = styled.div`
  position: fixed;
  right: 0;
  bottom: 0;
  min-width: 350px;
  z-index: 1500;
  ${media.desktop`
    top: 60px;
  `}
  ${media.mobile`
    top: 120px;
    width: 100vw;
    left: 0;
  `}
`

const RightPanelButton = styled.button`
  //button {
    min-width: 50px;
    align-self: stretch;
    padding: 0;
    color: #DDE5ED;
    background-color: transparent;
    border: none;
    font-size: 20px;
    transition: all 250ms ease;
    &:hover, &:focus {
      cursor: pointer;
      outline: none;
      color: #4E6180;
      span { border-color: #4E6180; }
    }
    &.active {
      color: #753BBD;
      border-bottom: 2px solid #753BBD;
    }
  //}
`

const titles = {
  '/': 'Dashboard',
  '/portfolio': 'My Portfolio',
  '/offers': 'Offers',
  '/marketplace': 'Marketplace',
  '/investment-data': 'Investment Data',
}

class RawNavigationBar extends Component {
  static propTypes = {
    isSidebarOpen: PropTypes.bool,
    toggleSidebar: PropTypes.func
  }

  state = {
    isSearchLoading: false,
    rightPanel: null // notifications|messages|user-panel
  }

  // right panel utility functions
  isOpen = key => this.state.rightPanel === key
  toggle = key => () => this.setState(prevState => ({
    rightPanel: prevState.rightPanel === key ? null : key
  }))
  getClassName = key => this.isOpen(key) ? 'active':''

  render() {
    const { isSidebarOpen, toggleSidebar, location, history, staticContext, ...props } = this.props
    return (
      <div {...props}>
        <NavSide className="desktop">
          <SidebarButton onClick={toggleSidebar} isSidebarOpen={isSidebarOpen}/>
          <Header as="h3" className="desktop">{titles[location.pathname]}</Header>
          <button onClick={toggleSidebar} className="mobile">
            <Icon link name="bars"/>
          </button>
        </NavSide>
        <CSSearch id="search-input" placeholder="Search..." input={{ iconPosition: "left" }}/>
        <NavSide>
          <RightPanelButton className={this.getClassName('notifications')} onClick={this.toggle('notifications')}>
            <Icon name="bell"/>
          </RightPanelButton>
          <RightPanelButton className={this.getClassName('messages')} onClick={this.toggle('messages')}>
            <Icon name="comment"/>
          </RightPanelButton>
          <RightPanelButton as={Avatar} className={this.getClassName('user-panel')} onClick={this.toggle('user-panel')}>
            <Icon name="user"/>
          </RightPanelButton>
        </NavSide>
        <Transition visible={this.isOpen('notifications')} animation="slide left" duration={250}>
          <RightPanel><Notifications/></RightPanel>
        </Transition>
        <Transition visible={this.isOpen('messages')} animation="slide left" duration={250}>
          <RightPanel><Messages/></RightPanel>
        </Transition>
        <Transition visible={this.isOpen('user-panel')} animation="slide left" duration={250}>
          <RightPanel><UserPanel/></RightPanel>
        </Transition>
      </div>
    )
  }
}

const NavigationBar = withRouter(styled(RawNavigationBar)`
  display: flex;
  justify-content: space-between;
  align-items: center;
  position: fixed;
  right: 0;
  left: 0;
  height: 60px;
  z-index: 2000;
  //padding: 0 15px;
  background-color: white;
  border-bottom: 1px solid rgb(0, 0, 0, .25);
  box-shadow: 0 0 10px rgb(0, 0, 0, .25);
  transition: margin 250ms ease;
  ${media.desktop`
    top: 0;
    margin-left: ${props => props.isSidebarOpen ? 240 : 60}px;
  `}
  ${media.mobile`
    top: 60px;
  `}
  .ui.header {
    min-width: 180px;
    margin: 0 10px;
    color: #021D49;
    white-space: nowrap;
  }
`)

export default NavigationBar
