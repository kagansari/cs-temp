import React, {Component} from 'react'
import styled from 'styled-components'
import {Button, Icon} from 'semantic-ui-react'
import logo from './logo.png'
import {Link} from 'react-router-dom'

const MenuItem = styled(Link)`
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 65px;
  padding: 0 20px;
  color: #DDE5ED;
  transition: all 250ms ease;
  &:hover {
    color: #DDE5ED;
    background-color: #6935AA;
  }
  &:active {
    background-color: #462371;
  }
`

class RawSidebar extends Component {
  render() {
    return (
      <div {...this.props}>
        <div className="logo">
          <img src={logo} alt="creosafe"/>
        </div>
        <Button id="tokenize-button" icon labelPosition="right">
          <Icon name="chain"/>
          Tokenize Contract
        </Button>
        <div className="menu">
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
      </div>
    )
  }
}

const Sidebar = styled(RawSidebar)`
  font-family: 'Poppins Medium';
  font-size: 14px;
  background-color: #522984;
  .logo {
    margin: 20px;
    img {
      width: 100%;
    }
  }
  #tokenize-button {
    width: 210px;
    margin: 15px;
    padding: 20px;
    color: #28334A;
    font-weight: normal;
    .icon { width: 50px; }
  }
`

export default Sidebar
