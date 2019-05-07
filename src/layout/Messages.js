import styled from 'styled-components'
import {Divider, Header} from 'semantic-ui-react'
import React from 'react'

const Messages = styled(props => (
  <div {...props}>
    <Header as="h4">Messages</Header>
    <Divider/>
  </div>
))`
  height: 100%;
  background-color: white;
  padding: 15px;
  h4.ui.header {
    margin: 10px 0;
  }
`

export default Messages
