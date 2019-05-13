import styled from 'styled-components'
import {Icon} from 'semantic-ui-react'
import React from 'react'
import mockPP from './mock-pp.png'
import {Link} from 'react-router-dom'

const user = {
  firstname: 'Dominic',
  lastname: 'O\'conner',
  type: 'Individual Customer',
  address: 'a5ed500d81417f862cfd90136ee07e9e00896e28',
  image: mockPP
}

const UserPanel = styled(props => (
  <div {...props}>
    <div id="user-panel-user">
      <img src={mockPP} alt={user.image}/>
      <div id="user-panel-info">
        <div id="user-panel-name">{user.firstname} {user.lastname}</div>
        <div id="user-panel-type">{user.type}</div>
        <div id="user-panel-address">
          <Icon name="ethereum"/>
          <span>{user.address}</span>
        </div>
      </div>
      <Icon name="check" size="large"/>
    </div>
    <Link to="/" className="menu-item">
      <Icon name="user"/>
      <span>Profile</span>
    </Link>
    <Link to="/" className="menu-item">
      <Icon name="cog"/>
      <span>Settings</span>
    </Link>
    <Link to="/" className="menu-item">
      <Icon name="sign out alternate"/>
      <span>Logout</span>
    </Link>
  </div>
))`
  background-color: white;
  h4.ui.header {
    margin: 10px 0;
  }
  #user-panel-user {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 15px;
    img {
      width: 80px; height: 80px;
    }
    #user-panel-info {
      padding: 15px; 
      color: #28334A;
      #user-panel-name {
        font-size: 18px;
        font-weight: bold;
        font-family: 'Eurostile';
      }
      #user-panel-type {
        font-size: 12px;
        font-family: 'Eurostile';
      }
      #user-panel-address {
        font-size: 12px;
        font-family: 'Poppins Regular';
        color: #7E8592;
      }
    }
    .icon.check {
      color: #97D700;
    }
  }
  .menu-item {
    display: flex;
    align-items: center;
    font-family: 'Eurostile';
    font-weight: bold;
    color: #28334A;
    border-top: 1px solid #B8C2CC;
    .icon { display: inline-block; margin: 20px; }
    &:hover { background-color: #ECEDED; }
    &:active { background-color: #E0E1E2; }
  }
`

export default UserPanel
