import React, {Component} from 'react'
import {Card, Grid, Table, Tab, Icon, Dropdown, Input, Button, Popup} from 'semantic-ui-react'
import styled from 'styled-components'
import CSBreadcrumb from '../components/CSBreadcrumb'
import util from '../util'

const allContracts = [
  { id: 1, name: 'Contract 1', type: 'Safe', company: 'John Smith', age: '3 Hours 12 Minutes' },
  { id: 2, name: 'Contract 2', type: 'Stock', company: 'XCode Capital Inc.', age: '3 Hours 12 Minutes' },
  { id: 3, name: 'Contract 3', type: 'Convertible Note', company: 'Sarah Parker', age: '3 Hours 12 Minutes' },
  { id: 4, name: 'Contract 4', type: 'Safe', company: 'Avengers Capital', age: '3 Hours 12 Minutes' }
]

const allTokens = [
  { id: 1, name: 'STC-Token 1', type: 'Safe', company: 'John Smith', amount: 20000, age: '3 Hours 12 Minutes', isTransferable: true },
  { id: 2, name: 'STC-Token 2', type: 'Stock', company: 'XCode Capital Inc.', amount: 10000, age: '3 Hours 12 Minutes', isTransferable: false },
  { id: 3, name: 'STC-Token 3', type: 'Convertible Note', company: 'Sarah Parker', amount: 80000, age: '3 Hours 12 Minutes', isTransferable: true },
  { id: 4, name: 'STC-Token 4', type: 'Safe', company: 'Avengers Capital', amount: 1000000, age: '3 Hours 12 Minutes', isTransferable: false }
]

const ContractTable = ({contracts, ...props}) => (
  <Table striped singleLine {...props}>
    <Table.Header>
      <Table.Row>
        <Table.HeaderCell>Contract Name</Table.HeaderCell>
        <Table.HeaderCell>Contract</Table.HeaderCell>
        <Table.HeaderCell>Company Name</Table.HeaderCell>
        <Table.HeaderCell>Age</Table.HeaderCell>
        <Table.HeaderCell/>
      </Table.Row>
    </Table.Header>
    <Table.Body>
      {
        contracts.map(contract => (
          <Table.Row key={contract.id}>
            <Table.Cell>{contract.name}</Table.Cell>
            <Table.Cell>{contract.type}</Table.Cell>
            <Table.Cell><b>{contract.company}</b></Table.Cell>
            <Table.Cell>{contract.age}</Table.Cell>
            <Table.Cell><Icon link name="ellipsis horizontal"/></Table.Cell>
          </Table.Row>
        ))
      }
    </Table.Body>
  </Table>
)

const TokenTable = ({tokens, ...props}) => (
  <Table striped singleLine {...props}>
    <Table.Header>
      <Table.Row>
        <Table.HeaderCell/>
        <Table.HeaderCell>Token Name</Table.HeaderCell>
        <Table.HeaderCell>Company Name</Table.HeaderCell>
        <Table.HeaderCell>Amount</Table.HeaderCell>
        <Table.HeaderCell>Age</Table.HeaderCell>
        <Table.HeaderCell/>
      </Table.Row>
    </Table.Header>
    <Table.Body>
      {
        tokens.map(token => (
          <Table.Row key={token.id}>
            <Table.Cell>
              { token.isTransferable && <Icon link name="shopping cart" color="red"/> }
            </Table.Cell>
            <Table.Cell>{token.name}</Table.Cell>
            <Table.Cell><b>{token.company}</b></Table.Cell>
            <Table.Cell><b>{util.formatNumber(token.amount)}</b></Table.Cell>
            <Table.Cell>{token.age}</Table.Cell>
            <Table.Cell><Icon link name="ellipsis horizontal"/></Table.Cell>
          </Table.Row>
        ))
      }
    </Table.Body>
  </Table>
)

const CSCard = styled(Card)`
  &.ui.card {
    width: 100%;
    a.item, .header, .description {
      font-family: 'Eurostile';
    }
    .tab-container {
      overflow-x: scroll;
      .ui.bottom.segment.tab {
        padding: 0;
        border: none;
        // remove semantic table borders
        .ui.table {
          border: none;
          tr th {
            border: 0px !important;
            font-family: "Eurostile";
          }
          tr td {
            border: 0px !important;
            font-family: "Poppins Regular";
          }
        }
      }
    }
  }
`

const MyContracts = props => (
  <CSCard color="violet" {...props}>
    <Card.Content>
      <Card.Header>My Contracts</Card.Header>
      <Card.Description>But I must explain to you how all this mistaken</Card.Description>
      <Tab className="tab-container" menu={{ color: 'violet', secondary: true, pointing: true }} panes={[
        {
          menuItem: 'Draft Contract',
          render: () => <Tab.Pane><ContractTable contracts={allContracts}/></Tab.Pane>
        },
        {
          menuItem: 'Waiting for payment',
          render: () => <Tab.Pane><ContractTable contracts={allContracts.slice(0, 2)}/></Tab.Pane>
        },
        {
          menuItem: 'Deployed',
          render: () => <Tab.Pane><ContractTable contracts={allContracts.slice(2, 4)}/></Tab.Pane>
        },
      ]}/>
    </Card.Content>
  </CSCard>
)

const MyTokens = props => (
  <CSCard color="violet" {...props}>
    <Card.Content>
      <Card.Header>My Tokens</Card.Header>
      <Card.Description>But I must explain to you how all this mistaken</Card.Description>
      <Tab className="tab-container" menu={{ color: 'violet', secondary: true, pointing: true }} panes={[
        {
          menuItem: 'Transferable',
          render: () => <Tab.Pane><TokenTable tokens={allTokens}/></Tab.Pane>
        },
        {
          menuItem: 'Waiting for Payment',
          render: () => <Tab.Pane><TokenTable tokens={allTokens.slice(0, 2)}/></Tab.Pane>
        }
      ]}/>
    </Card.Content>
  </CSCard>
)

const wallets = [
  {
    id: 1, name: 'Ethereum Wallet 1', address: 'a0542kdosvsdfj230431ijf2efj2409pr2e21',
    balance: {eth: 0.123456, usdc: 0.789000}, fee: {eth: 0.421412, usdc: 0.564363}
  },
  {
    id: 2, name: 'Ethereum Wallet 2', address: 'asfsddg230ri2efegufe9v3849320422342re',
    balance: {eth: 2310.987654, usdc: 12210.321000}, fee: {eth: 210.53124, usdc: 300.321000}
  }
]
class RawBalances extends React.Component {
  inputRef = React.createRef()

  state = {
    activeWallet: wallets[0]
  }

  // copy the active wallet address and select input
  handleCopy = () => {
    this.inputRef.current.select()
    document.execCommand('copy');
    this.inputRef.current.focus()
  }

  selectWallet = wallet => () => {
    this.setState({ activeWallet: wallet })
  }

  render() {
    const activeWallet = this.state.activeWallet
    return (
      <CSCard color="violet" {...this.props}>
        <Card.Content>
          <Card.Header>Balances</Card.Header>
          <Card.Description>But I must explain to you how all this mistaken</Card.Description>
          <div>
            <Icon name="star" color="violet"/>
            <Dropdown text={activeWallet.name}>
              <Dropdown.Menu>
                {
                  wallets.map(wallet => (
                    <Dropdown.Item key={wallet.id} text={wallet.name} onClick={this.selectWallet(wallet)}/>
                  ))
                }
              </Dropdown.Menu>
            </Dropdown>
          </div>
          <Input action value={activeWallet.address} fluid ref={this.inputRef}>
            <input/>
            <Button color="violet" content="Copy" icon="copy" labelPosition="right" onClick={this.handleCopy}/>
          </Input>
          <div id="balance-info">
            <Table singleLine>
              <Table.Body>
                <Table.Row>
                  <Table.Cell>
                    <Popup trigger={<Icon name="info circle"/>} content="Info" size="tiny" inverted/> <b>Services Fee</b>
                  </Table.Cell>
                  <Table.Cell>
                    <Icon name="ethereum"/> {activeWallet.fee.eth} <Icon name="dollar"/> {activeWallet.fee.eth}
                  </Table.Cell>
                </Table.Row>
                <Table.Row>
                  <Table.Cell><b>ETH Balance</b></Table.Cell>
                  <Table.Cell><Icon name="ethereum"/> {activeWallet.balance.eth}</Table.Cell>
                </Table.Row>
                <Table.Row>
                  <Table.Cell><b>USDC Balance</b></Table.Cell>
                  <Table.Cell><Icon name="dollar"/> {activeWallet.balance.eth}</Table.Cell>
                </Table.Row>
              </Table.Body>
            </Table>
            <Button inverted color="blue" size="small">ADD BALANCE</Button>
          </div>
          <Icon id="balance-detail-button" link name="ellipsis horizontal"/>
        </Card.Content>
      </CSCard>
    )
  }
}

const Balances = styled(RawBalances)`
  .ui.dropdown {
    color: #6435c9;
    margin: 15px 0;
    font-family: "Eurostile";
    font-weight: bold;
  }
  .ui.input {
    font-family: "Poppins Black";
  }
  #balance-info {
    margin-top: 15px;
    display: flex;
    align-items: flex-start;
    white-space: nowrap;
    overflow-x: scroll;
    font-family: "Poppins Regular";
    // remove semantic table borders
    .ui.table {
      border: none;
      tr td, tr th { border: none !important; }
    }
    .ui.button {
      padding: 15px 10px;
      font-family: "Poppins Bold";
    }
  }
  #balance-detail-button {
    display: block;
    margin: 15px auto 5px auto;
  }
`

class MyPortfolio extends Component {
  render() {
    return (
      <div>
        <CSBreadcrumb title="My Portfolio"/>
        <Grid stackable padded columns={3}>
          <Grid.Column>
            <MyContracts/>
          </Grid.Column>
          <Grid.Column>
            <MyTokens/>
          </Grid.Column>
          <Grid.Column>
            <Balances/>
          </Grid.Column>
        </Grid>
      </div>
    )
  }
}

export default MyPortfolio
