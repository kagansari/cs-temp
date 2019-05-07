import React, {Component} from 'react'
import styled from 'styled-components'
import {Button, Icon} from 'semantic-ui-react'
import logo from './logo.png'
import {Link} from 'react-router-dom'
import {media} from '../style'

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
  state = {
    isOpen: true
  }

  closeSidebar = () => {
    document.getElementById('container').classList.remove('sidebar-active')
  }

  openSidebar = () => {
    document.getElementById('container').classList.add('sidebar-active')
  }

  componentDidMount() {
    if (document.body.offsetWidth > 600) {
      this.openSidebar()
    }
  }

  render() {
    return (
      <div {...this.props}>
        <div className="logo">
          <img src={logo} alt="creosafe"/>
          <Icon
            name="caret left" className="desktop"
            inverted fitted link size="large"
            onClick={this.closeSidebar}
          />
          <Icon
            name="caret right" className="desktop"
            inverted fitted link size="large"
            onClick={this.openSidebar}
          />
          <Icon
            name="times" className="mobile"
            inverted fitted link size="large"
            onClick={this.closeSidebar}
          />
        </div>
        <Button id="tokenize-button" icon labelPosition="right">
          <Icon name="chain"/>
          Tokenize Contract
        </Button>
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

const Sidebar = styled(RawSidebar)`
  font-family: 'Poppins Medium';
  font-size: 14px;
  background-color: #522984;
  .icon.caret { padding: 0 10px; }
  .icon.caret.left { display: none; }
  .icon.caret.right { display: inline-block; }
  .sidebar-active & {
    .icon.caret.left { display: inline-block; }
    .icon.caret.right { display: none; }
  }
  .logo {
    margin: 20px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    img {
      width: 150px;
      //width: 100%;
    }
  }
  #tokenize-button {
    display: block;
    width: 210px;
    margin: 15px auto;
    padding: 20px 15px;
    color: #753BBD;
    ${media.mobile`padding: 15px;`}
    .icon { width: 50px; }
  }
`

export default Sidebar
