import {Button, Container, Header, Icon} from 'semantic-ui-react'
import util from '../../util'
import React from 'react'

export const OfferConfirm = ({amount, price, cancel, approve, ...props}) => (
  <Container textAlign="center" {...props}>
    <Header as="h4" className="m0">Are you sure?</Header><br/>
    <p>
      You are offering <Icon name="dollar"/> <b>{util.formatNumberFloat(price)}</b>
    </p>
    <p>
      for the <Icon name="ethereum"/> <b>{util.formatNumberFloat(amount)}</b> token
    </p>
    <p>
      <Button negative content="Cancel" icon="times" labelPosition="left" onClick={cancel}/>
      <Button positive content="Apply" icon="check" labelPosition="left" onClick={approve}/>
    </p>
  </Container>
)

export const OfferSentNotif = () => (
  <Container textAlign="center">
    <Header as="h4" className="m0">Thank you</Header><br/>
    <p>
      Your offer has been sent.
    </p>
  </Container>
)
