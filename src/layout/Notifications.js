import styled from 'styled-components'
import {Divider, Header, Icon} from 'semantic-ui-react'
import React from 'react'

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
  height: 100%;
  background-color: white;
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

export default Notifications
