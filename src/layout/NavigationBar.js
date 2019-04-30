import React, {Component} from 'react'
import styled from 'styled-components'
import {Divider, Header, Icon, Search, Transition} from 'semantic-ui-react'
import {withRouter} from 'react-router'

const Notifications = styled(props => (
  <div {...props}>
    <Header as="h4">Notifications</Header>
    <Divider/>
    <div id="notifications">
      <button>
        <div>Refresh</div>
        <Icon name="refresh"/>
      </button>
    </div>
  </div>
))`
  padding: 15px;
  h4.ui.header {
    margin: 10px 0;
  }
  #notifications {
    text-align: center;
    button {
      margin-top: 35vh;
      background: transparent;
      border: none;
      font-size: 12px;
      color: #677792;
      transition: all 250ms ease;
      .icon { margin-top: 8px; }
      &:hover {
        color: #021D49;
        cursor: pointer;
      }
    }
  }
`

const Messages = styled(props => (
  <div {...props}>
    <Header as="h4">Messages</Header>
    <Divider/>
  </div>
))`
  padding: 15px;
  h4.ui.header {
    margin: 10px 0;
  }
`

const CSSearch = styled(Search)`
  flex-grow: 1;
  max-width: 600px;
  margin: 0 30px;
  .ui.input {
    width: 100%;
    input {
      height: 50px;
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

const NavRight = styled.div`
  display: flex;
  align-items: stretch;
  height: 100%;
  button {
    min-width: 60px;
    padding: 0;
    color: #DDE5ED;
    background-color: transparent;
    border: none;
    font-size: 22px;
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
  }
`

const Avatar = styled(({children, ...props}) => (
  <button {...props}>
    <span>{children}</span>
  </button>
))`
  display: flex;
  align-items: center;
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
  top: 80px;
  right: 0;
  bottom: 0;
  width: 350px;
  background-color: white;
`

const titles = {
  '/': 'Dashboard',
  '/portfolio': 'My Portfolio',
  '/offers': 'Offers',
  '/marketplace': 'Marketplace',
  '/investment-data': 'Investment Data',
}

class RawNavigationBar extends Component {
  state = {
    isSearchLoading: false,
    rightPanel: null // notifications|messages
  }

  showNotifications = () => this.state.rightPanel === 'notifications'
  showMessages = () => this.state.rightPanel === 'messages'

  toggleNotifications = () => this.setState({
    rightPanel: this.showNotifications() ? null : 'notifications'
  })
  toggleMessages = () => this.setState({
    rightPanel: this.showMessages() ? null : 'messages'
  })

  render() {
    const {history, staticContext, location, ...props} = this.props
    console.log(location.pathname)
    return (
      <div {...props}>
        <Header as="h2">{titles[location.pathname]}</Header>
        <CSSearch id="search-input" placeholder="Search..."/>
        <NavRight>
          <button className={this.showNotifications() ? 'active':''} onClick={this.toggleNotifications}>
            <Icon name="bell"/>
          </button>
          <button className={this.showMessages() ? 'active':''} onClick={this.toggleMessages}>
            <Icon name="comment"/>
          </button>
          <Avatar>
            <Icon name="user"/>
          </Avatar>
        </NavRight>
        <Transition visible={Boolean(this.state.rightPanel)} animation="slide down" duration={500}>
          <RightPanel>
            {this.showNotifications() && <Notifications/>}
            {this.showMessages() && <Messages/>}
          </RightPanel>
        </Transition>
      </div>
    )
  }
}

const NavigationBar = withRouter(styled(RawNavigationBar)`
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 80px;
  padding: 0 15px;
  background-color: white;
  border-bottom: 1px solid rgb(0, 0, 0, .25);
  box-shadow: 0 0 10px rgb(0, 0, 0, .25);
  .ui.header {
    min-width: 180px;
    margin: 0;
    color: #021D49;
    white-space: nowrap;
  }
`)

export default NavigationBar
