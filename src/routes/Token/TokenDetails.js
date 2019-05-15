import React, {Component, Fragment} from 'react'
import {
  Button,
  Card, Container,
  Dropdown,
  Form,
  Grid,
  Header,
  Icon,
  Image,
  Popup,
  Segment,
  Tab,
  Table,
  TextArea
} from 'semantic-ui-react'
import util from '../../util'
import mockCompanyImg from './mock-company.png'

const Contract = () => {
  const contractInfo = [
    { key: 'Type', value: 'Safe' },
    { key: 'Issue Date', value: '12.12.2012' },
    { key: 'Purchase Amount', value: <Fragment><Icon name="dollar"/>{util.formatNumber(150000)}</Fragment> },
    { key: 'Convert to', value: 'Common' },
    { key: 'Qualified Financing Amount', value: <Fragment><Icon name="dollar"/>{util.formatNumberFloat(2500000)}</Fragment> },
    { key: 'Early Exit Multiple', value: '2.3' },
    { key: 'Valuation Cap', value: <Fragment><Icon name="dollar"/>{util.formatNumberFloat(2500000)}</Fragment> },
    { key: 'Discount Rate', value: '12%' },
    { key: 'Face Value', value: <Fragment><Icon name="dollar"/>{util.formatNumberFloat(0.04656)}</Fragment> },
    { key: 'Document #', value: <b>asdqefwdf13r1fqsqed1d23e1d231</b> },
    { key: 'Description', value: 'Lorem ipsum dolor sit amet' }
  ]
  return (
    <Tab.Pane>
      <Table striped celled>
        <Table.Body>
          {
            contractInfo.map(({key, value}) => (
              <Table.Row key={key}>
                <Table.Cell><b>{key}</b></Table.Cell>
                <Table.Cell>{value}</Table.Cell>
              </Table.Row>
            ))
          }
        </Table.Body>
      </Table>
    </Tab.Pane>
  )
}

const SmartContract = () => {
  const smartContractInfo = [
    { key: 'Contract Address', value: <b>x04a3c71dcecc5da65d1f1c4871eb4d14ecc5da65d</b> },
    { key: 'Creation Date', value: '12.10.2014' },
    { key: 'Transferable Token Amount', value: <Fragment><Icon name="ethereum"/>{util.formatNumber(500000)}</Fragment> },
    { key: 'Total Token Amount', value: <Fragment><Icon name="ethereum"/>{util.formatNumber(750000)}</Fragment> },
    { key: 'Number of Token Holders', value: 23 }
  ]
  return (
    <Tab.Pane>
      <Table striped celled>
        <Table.Body>
          {
            smartContractInfo.map(({key, value}) => (
              <Table.Row key={key}>
                <Table.Cell><b>{key}</b></Table.Cell>
                <Table.Cell>{value}</Table.Cell>
              </Table.Row>
            ))
          }
        </Table.Body>
      </Table>
    </Tab.Pane>
  )
}

const Company = () => {
  const company = {
    logo: mockCompanyImg,
    name: 'APPLE COMPUTER INC/ FA',
    address: 'ONE APPLE PARK WAY CA 95014 CUPERTINO',
    tel: '+1 408 996 - 1010',
    info: [
      {key1: 'Founded On', value1: '12.10.2014', key2: 'SIC Description', value2: 'Electronic Computers'},
      {key1: 'Period End Date', value1: '12.10.2014', key2: 'Fiscal Year', value2: '2018'},
      {key1: 'Fiscal Quarter', value1: util.formatNumber(40201000000), key2: 'Currency Code', value2: util.formatNumber(40201000000)},
      {key1: 'Fiscal Quarter', value1: util.formatNumber(40201000000), key2: 'Currency Code', value2: util.formatNumber(40201000000)},
      {key1: 'Fiscal Quarter', value1: util.formatNumber(40201000000), key2: 'Currency Code', value2: util.formatNumber(40201000000)},
      {key1: 'Fiscal Quarter', value1: util.formatNumber(40201000000), key2: 'Currency Code', value2: util.formatNumber(40201000000)},
      {key1: 'Fiscal Quarter', value1: util.formatNumber(40201000000), key2: 'Currency Code', value2: util.formatNumber(40201000000)},
      {key1: 'Fiscal Quarter', value1: util.formatNumber(40201000000), key2: 'Currency Code', value2: util.formatNumber(40201000000)},
      {key1: 'Fiscal Quarter', value1: util.formatNumber(40201000000), key2: 'Currency Code', value2: util.formatNumber(40201000000)},
      {key1: 'Fiscal Quarter', value1: util.formatNumber(40201000000), key2: 'Currency Code', value2: util.formatNumber(40201000000)},
      {key1: 'Fiscal Quarter', value1: util.formatNumber(40201000000), key2: 'Currency Code', value2: util.formatNumber(40201000000)},
      {key1: 'Fiscal Quarter', value1: util.formatNumber(40201000000), key2: 'Currency Code', value2: util.formatNumber(40201000000)},
      {key1: 'Fiscal Quarter', value1: util.formatNumber(40201000000), key2: 'Currency Code', value2: util.formatNumber(40201000000)},
      {key1: 'Fiscal Quarter', value1: util.formatNumber(40201000000), key2: 'Currency Code', value2: util.formatNumber(40201000000)},
      {key1: 'Fiscal Quarter', value1: util.formatNumber(40201000000), key2: 'Currency Code', value2: util.formatNumber(40201000000)},
      {key1: 'Fiscal Quarter', value1: util.formatNumber(40201000000), key2: 'Currency Code', value2: util.formatNumber(40201000000)},
      {key1: 'Fiscal Quarter', value1: util.formatNumber(40201000000), key2: 'Currency Code', value2: util.formatNumber(40201000000)},
      {key1: 'Fiscal Quarter', value1: util.formatNumber(40201000000), key2: 'Currency Code', value2: util.formatNumber(40201000000)},
      {key1: 'Fiscal Quarter', value1: util.formatNumber(40201000000), key2: 'Currency Code', value2: util.formatNumber(40201000000)},
      {key1: 'Fiscal Quarter', value1: util.formatNumber(40201000000), key2: 'Currency Code', value2: util.formatNumber(40201000000)},
      {key1: 'Fiscal Quarter', value1: util.formatNumber(40201000000), key2: 'Currency Code', value2: util.formatNumber(40201000000)},
      {key1: 'Fiscal Quarter', value1: util.formatNumber(40201000000), key2: 'Currency Code', value2: util.formatNumber(40201000000)},
    ]
  }
  return (
    <Tab.Pane>
      <Segment basic textAlign="center">
        <Image size="tiny" src={company.logo}/>
        <div><b>{company.name}</b></div>
        <div>{company.address}</div>
        <div>{company.tel}</div>
      </Segment>
      <Table striped celled>
        <Table.Body>
          {
            company.info.map(({key1, value1, key2, value2}, i) => (
              <Fragment key={i}>
                <Table.Row>
                  <Table.Cell><b>{key1}</b></Table.Cell>
                  <Table.Cell>{value1}</Table.Cell>
                  <Table.Cell><b>{key2}</b></Table.Cell>
                  <Table.Cell>{value2}</Table.Cell>
                </Table.Row>
              </Fragment>
            ))
          }
        </Table.Body>
      </Table>
    </Tab.Pane>
  )
}

const Owner = () => {
  const owner = {
    pp: mockCompanyImg,
    name: 'John Smith',
    type: 'Individual Customer',
    account: 'a5ed500d81417f862cfd90136ee07e9e00896e28',
    personalInfo: {
      kycDate: '12.10.2010',
      accreditationDate: '12.10.2010',
      medellion: true,
      brokerDealer: 'Avengers Capital'
    },
    tradeInfo: {
      totalTx: '12 / 8',
      totalTokens: 40201000000,
      soldTokens: 40201000000,
      purchasedTokens: 40201000000
    }
  }
  return (
    <Tab.Pane>
      <Segment basic textAlign="center">
        <Image size="tiny" src={owner.pp}/>
        <div><b>{owner.name}</b></div>
        <div>{owner.type}</div>
        <div><Icon name="ethereum"/> {owner.account}</div>
      </Segment>
      <Header as="h3">Personal Info</Header>
      <Table striped celled singleLine>
        <Table.Body>
          <Table.Row>
            <Table.Cell><b>KYC / AML Validation Date</b></Table.Cell>
            <Table.Cell>{owner.personalInfo.kycDate}</Table.Cell>
          <Table.Cell><b>Accreditation Validation Date</b></Table.Cell>
            <Table.Cell>{owner.personalInfo.accreditationDate}</Table.Cell>
          </Table.Row>
          <Table.Row>
            <Table.Cell><b>Medallion Signature Guarantee</b></Table.Cell>
            <Table.Cell>{owner.personalInfo.medellion ? 'Yes' : 'No'}</Table.Cell>
            <Table.Cell><b>Broker Dealer</b></Table.Cell>
            <Table.Cell><b>{owner.personalInfo.brokerDealer}</b></Table.Cell>
          </Table.Row>
        </Table.Body>
      </Table>
      <Header as="h3">Trade Info</Header>
      <Table striped celled singleLine>
        <Table.Body>
          <Table.Row>
            <Table.Cell>
              <Popup
                trigger={<Icon name="info circle"/>}
                content="Info" size="tiny" inverted
              />
              <b>info-circle Total Transactions</b>
            </Table.Cell>
            <Table.Cell>{owner.tradeInfo.totalTx}</Table.Cell>
            <Table.Cell><b>Total Tokens Amount</b></Table.Cell>
            <Table.Cell>{util.formatNumber(owner.tradeInfo.totalTokens)}</Table.Cell>
          </Table.Row>
          <Table.Row>
            <Table.Cell><b>Sold Token Amount</b></Table.Cell>
            <Table.Cell>{util.formatNumber(owner.tradeInfo.soldTokens)}</Table.Cell>
            <Table.Cell><b>Purchased Token Amount</b></Table.Cell>
            <Table.Cell>{util.formatNumber(owner.tradeInfo.purchasedTokens)}</Table.Cell>
          </Table.Row>
        </Table.Body>
      </Table>
    </Tab.Pane>
  )
}

const HolderList = () => {
  const holders = [
    { id: 1, name: 'Dominic O’conner', amount: 40201, purchasedDate: '12.10.2010' }
  ]
  return (
    <Tab.Pane>
      <Table striped celled>
        <Table.Header>
          <Table.Row>
            <Table.HeaderCell>Holder Name</Table.HeaderCell>
            <Table.HeaderCell>Token Amount</Table.HeaderCell>
            <Table.HeaderCell>Purchased Date</Table.HeaderCell>
          </Table.Row>
        </Table.Header>
        <Table.Body>
          {
            holders.map(holder => (
              <Table.Row key={holder.id}>
                <Table.Cell><b>{holder.name}</b></Table.Cell>
                <Table.Cell><Icon name="ethereum"/>{util.formatNumber(holder.amount)}</Table.Cell>
                <Table.Cell>{holder.purchasedDate}</Table.Cell>
              </Table.Row>
            ))
          }
        </Table.Body>
      </Table>
    </Tab.Pane>
  )
}

class QuestionCard extends React.Component {
  state = {
    sending: false,
    sent: false
  }

  reset = () => {
    this.setState({ sending: false, sent: false })
    if (this.props.onCancel) {
      this.props.onCancel()
    }
  }

  handleSubmit = async () => {
    this.setState({ sending: true, sent: false })
    await util.sleep(500)
    this.setState({ sending: false, sent: true })
  }

  render() {
    const {sending, sent} = this.state
    const {name, options, onCancel} = this.props
    return (
      <Card fluid>
        <Card.Content>
          <Card.Header>Ask Questions to {name}</Card.Header>
          <Card.Meta>Subtitle</Card.Meta>
          {
            !sent && (
              <Form onSubmit={this.handleSubmit} loading={sending}>
                <Form.Field>
                  <Dropdown selection options={options} placeholder="Select"/>
                </Form.Field>
                <Form.Field>
                  <label>Message</label>
                  <TextArea rows={8}/>
                </Form.Field>
                <br/>
                <Button
                  type="submit" content="Send"
                  color="blue" icon="envelope" labelPosition="left" floated="right"
                />
                {
                  onCancel && (
                    <Button
                      type="button" content="Cancel" onClick={onCancel}
                      negative icon="times" labelPosition="left" floated="right"
                    />
                  )
                }
              </Form>
            )
          }
          {
            sent && (
              <Container textAlign="center">
                <Header as="h4" className="m0">Thank you</Header><br/>
                <p>Your message was sent successfully.</p>
                <p><Button negative content="Close" icon="times" labelPosition="left" onClick={this.reset}/></p>
              </Container>
            )
          }
        </Card.Content>
      </Card>
    )
  }
}

const ContactPane = ({name, infoList, options}) => {
  return (
    <Tab.Pane>
      <Grid columns={2}>
        <Grid.Column>
          <Table striped>
            <Table.Body>
              {
                infoList.map(({key, value}) => (
                  <Table.Row key={key}>
                    <Table.Cell><b>{key}</b></Table.Cell>
                    <Table.Cell>{value}</Table.Cell>
                  </Table.Row>
                ))
              }
            </Table.Body>
          </Table>
        </Grid.Column>
        <Grid.Column>
          <QuestionCard name={name} options={options}/>
        </Grid.Column>
      </Grid>
    </Tab.Pane>
  )
}

const BrokerDealer = () => {
  const brokerDealer = [
    { key: 'Name', value: <b>Avengers Capital</b> },
    { key: 'Phone', value: <b>+1 121 545 5444</b> },
    { key: 'Phone 2', value: <b>+1 121 545 5444</b> },
    { key: 'Mail', value: <b>info@avengers-capital.com</b> },
    { key: 'Web', value: <b>http://avengers-capital.com</b> },
    { key: 'Country', value: 'United States' },
    { key: 'State', value: 'NY' },
    { key: 'City', value: 'New York' },
    { key: 'Zip code', value: '40201' },
    { key: 'Address', value: 'Lorem ipsum dolor sit amet.....' }
  ]
  return <ContactPane name="Avengers Capital" infoList={brokerDealer}/>
}

const TransferAgent = () => {
  const transferAgent = [
    { key: 'Name', value: <b>Securitize Transfer Corporations</b> },
    { key: 'Phone', value: <b>+1 121 545 5444</b> },
    { key: 'Phone 2', value: <b>+1 121 545 5444</b> },
    { key: 'Mail', value: <b>info@stctransfer.com</b> },
    { key: 'Web', value: <b>https://www.stctransfer.com</b> },
    { key: 'Country', value: 'United States' },
    { key: 'State', value: 'Texas' },
    { key: 'City', value: 'Dallas' },
    { key: 'Zip code', value: '40201' },
    { key: 'Address', value: '2901 N Dallas Parkway Suite 380 Plano' }
  ]
  return (
    <ContactPane name="Securitize Transfer Corporations" infoList={transferAgent}/>
  )
}

const FinancialAdvisor = () => {
  const advisor = [
    { key: 'Name', value: <b>Eric Bana</b> },
    { key: 'Phone', value: <b>+1 469 633 0101</b> },
    { key: 'Phone 2', value: <b>+1 469 633 0101</b> },
    { key: 'Mail', value: <b>info@stctransfer.com</b> },
    { key: 'Web', value: <b>ericbana@gmail.com</b> },
    { key: 'Country', value: 'United States' },
    { key: 'State', value: 'Texas' },
    { key: 'City', value: 'Dallas' },
    { key: 'Zip code', value: '40201' },
    { key: 'Address', value: '2901 N Dallas Parkway Suite 380 Plano' }
  ]
  return (
    <ContactPane name="Eric Bana" infoList={advisor}/>
  )
}

const TokenDetailsContent = ({openQuestion}) => (
  <Card.Content>
    <Button
      content="Ask Question" onClick={openQuestion}
      color="blue" labelPosition="left" icon="question" floated="right"
    />
    <Card.Header>Token Details</Card.Header>
    <Card.Meta>Subtitle</Card.Meta>
    <Tab menu={{ secondary: true, pointing: true }} panes={[
      {
        menuItem: 'Contract',
        render: Contract
      },
      {
        menuItem: 'Smart Contracts',
        render: SmartContract
      },
      {
        menuItem: 'Company',
        render: Company
      },
      {
        menuItem: 'Owner',
        render: Owner
      },
      {
        menuItem: 'Holder List',
        render: HolderList
      },
      {
        menuItem: 'Broker Dealer',
        render: BrokerDealer
      },
      {
        menuItem: 'Transfer Agent',
        render: TransferAgent
      },
      {
        menuItem: 'Financial Advisor',
        render: FinancialAdvisor
      }
    ]}/>
  </Card.Content>
)

const AskQuestionsContent = ({options, onCancel}) => (
  <Card.Content>
    <Tab menu={{ fluid: true, vertical: true, tabular: true }} panes={[
      {
        menuItem: 'Broker Dealer',
        render: () => <QuestionCard name="Avengers Capital" options={options} onCancel={onCancel}/>
      },
      {
        menuItem: 'Transfer Agent',
        render: () => <QuestionCard name="Securitize Transfer Corporations" options={options} onCancel={onCancel}/>
      },
      {
        menuItem: 'Financial Advisor',
        render: () => <QuestionCard name="Eric Bana" options={options} onCancel={onCancel}/>
      }
    ]}/>
  </Card.Content>
)

const questionOptions = [
  { key: '1', text: 'Option 1', value: '1' },
  { key: '2', text: 'Option 2', value: '2' },
]


class TokenDetails extends Component {
  state = {
    showQuestion: false
  }

  openQuestion = () => this.setState({ showQuestion: true })
  closeQuestion = () => this.setState({ showQuestion: false })

  render() {
    return (
      <Card fluid className="scroll-x">
        { this.state.showQuestion && <AskQuestionsContent options={questionOptions} onCancel={this.closeQuestion}/> }
        { !this.state.showQuestion && <TokenDetailsContent openQuestion={this.openQuestion}/> }
      </Card>
    )
  }
}

export default TokenDetails
