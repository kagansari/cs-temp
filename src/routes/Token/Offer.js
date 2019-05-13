import React from 'react'
import {Button, Icon, Input, Card, Grid, Form, Loader, Dimmer} from 'semantic-ui-react'
import MaskedInput from 'react-text-mask'
import {createNumberMask} from 'text-mask-addons/dist/textMaskAddons'
import util from '../../util'
import {OfferConfirm, OfferSentNotif} from './common'

const OfferForm = ({minToken, minPrice, amount, price, onChange, pricePerToken, startOffer}) => (
  <Grid stackable columns={2} divided>
    <Grid.Column>
      <Grid columns={2}>
        <Grid.Row>
          <Grid.Column>Min. Token</Grid.Column>
          <Grid.Column><Icon name="ethereum"/> {util.formatNumberFloat(minToken)}</Grid.Column>
        </Grid.Row>
        <Grid.Row>
          <Grid.Column>Min. Price</Grid.Column>
          <Grid.Column><Icon name="dollar"/> {util.formatNumberFloat(minPrice)}</Grid.Column>
        </Grid.Row>
      </Grid>
    </Grid.Column>
    <Grid.Column>
      <Form onSubmit={startOffer}>
        <Form.Field>
          <label>Token Amount</label>
          <Input
            label={{icon: 'ethereum', color: 'grey'}} placeholder="Amount" fluid
            input={<MaskedInput mask={createNumberMask({prefix: '', allowDecimal: true})}/>}
            value={amount} onChange={onChange('amount')}
          />
        </Form.Field>
        <Form.Field>
          <label>Price</label>
          <Input
            label={{icon: 'dollar', color: 'grey'}} placeholder="Price" fluid
            input={<MaskedInput mask={createNumberMask({prefix: '', allowDecimal: true})}/>}
            value={price} onChange={onChange('price')}
          />
        </Form.Field>
        {
          pricePerToken && (
            <div>
              <span>Price Per Token: </span>
              <Icon name="dollar"/><strong>{util.formatNumberFloat(pricePerToken)}</strong>
            </div>
          )
        }
        <br/>
        <Button type="submit" color="yellow" floated="right" content="Make an Offer" disabled={!pricePerToken}/>
      </Form>
    </Grid.Column>
  </Grid>
)

const offerInfo = {
  minToken: 20000,
  minPrice: 20000
}

class Offer extends React.Component {
  state = {
    amount: '',
    price: '',
    offer: {
      started: false,
      sending: false,
      sent: false
    },
  }

  startOffer = () => this.setState({ offer: { started: true } })
  cancelOffer = () => this.setState({ offer: {} })
  completeOffer = async () => {
    this.setState({ offer: { sending: true }})
    await util.sleep(1000)
    this.setState({ offer: { sent: true }})
  }

  // handle formatted input price|amount change
  handleChange = key => e => this.setState({
    [key]: util.getNumberFromStr(e.target.value)
  })

  getPricePerToken = () => {
    const amount = Number(this.state.amount)
    const price = Number(this.state.price)
    if (!amount || !price) return null

    return price / amount
  }

  render() {
    const { amount, price, offer: { started, sending, sent } } = this.state

    return (
      <Card fluid color="violet">
        <Card.Content>
          <Dimmer active={sending} inverted><Loader/></Dimmer>
          <Card.Header>Make an Offer</Card.Header>
          <Card.Meta>Subtitle</Card.Meta>
          {
            !started && !sent && !sending && (
              <OfferForm
                {...this.state}
                {...offerInfo}
                onChange={this.handleChange}
                pricePerToken={this.getPricePerToken()}
                startOffer={this.startOffer}
              />
            )
          }
          {
            (started || sending) && (
              <OfferConfirm
                amount={amount} price={price}
                cancel={this.cancelOffer} approve={this.completeOffer}
              />
            )
          }
          {
            sent && (
              <OfferSentNotif/>
            )
          }
        </Card.Content>
      </Card>
    )
  }
}

export default Offer
