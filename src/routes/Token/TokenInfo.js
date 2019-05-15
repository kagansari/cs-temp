import React, {Fragment} from 'react'
import {Button, Icon, Card, Table, Dimmer, Loader} from 'semantic-ui-react'
import util from '../../util'
import {OfferConfirm, OfferSentNotif} from './common'

const TokenInfoTable = ({tokenInfo}) => (
  <Table striped celled singleLine>
    <Table.Body>
      {
        tokenInfo.map(({key, value}) => (
          <Table.Row key={key}>
            <Table.Cell><b>{key}</b></Table.Cell>
            <Table.Cell>{value}</Table.Cell>
          </Table.Row>
        ))
      }
    </Table.Body>
  </Table>
)

const tokenInfo = [
  { key: 'ID', value: <b>ASDA-SFA-GDA</b> },
  { key: 'Owner', value: <b>John Smith</b> },
  { key: 'Company', value: <b>Avenger Capital</b> },
  { key: 'Contract', value: 'Safe' },
  { key: 'Age', value: '12.09.2019' },
  { key: 'Transferable', value: 'Available' },
  { key: 'Amount', value: <Fragment><Icon name="ethereum"/>{util.formatNumberFloat(120000)}</Fragment> },
  { key: 'Price', value: <Fragment><Icon name="dollar"/>{util.formatNumberFloat(250000)}</Fragment> },
  { key: 'Price Per Token', value: <Fragment><Icon name="dollar"/>{util.formatNumberFloat(.48)}</Fragment> },
  { key: 'Description', value: 'Lorem ipsum dolor sit amet' }
]

class TokenInfo extends React.Component {
  state = {
    offer: {
      started: false,
      sending: false,
      sent: false
    }
  }

  startOffer = () => this.setState({ offer: { started: true } })
  cancelOffer = () => this.setState({ offer: {} })
  completeOffer = async () => {
    this.setState({ offer: { sending: true }})
    await util.sleep(1000)
    this.setState({ offer: { sent: true }})
  }

  render() {
    const { offer: { started, sending, sent } } = this.state
    return (
      <Card fluid>
        <Card.Content>
          <Dimmer active={sending} inverted><Loader/></Dimmer>
          {
            !started && !sent && !sending && (
              <Button negative content="Buy Tokens" floated="right" onClick={this.startOffer}/>
            )
          }
          <Card.Header><Icon name="star outline"/> Tokens</Card.Header>
          <Card.Meta>Subtitle</Card.Meta>
          {
            !started && !sent && !sending && (
              <TokenInfoTable tokenInfo={tokenInfo}/>
            )
          }
          {
            (started || sending) && (
              <OfferConfirm
                amount={120000} price={250000}
                cancel={this.cancelOffer}
                approve={this.completeOffer}
              />
            )
          }
          {
            sent && <OfferSentNotif/>
          }
        </Card.Content>
      </Card>
    )
  }
}

export default TokenInfo
