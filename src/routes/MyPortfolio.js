import React, {Component} from 'react'
import {Card, Grid, Table, Tab, Icon, Input, Button, Popup, Container} from 'semantic-ui-react'
import CSBreadcrumb from '../components/CSBreadcrumb'
import util from '../util'
import {USDCIcon} from '../components'

/***************************************************
 *               ADD NEW CONTRACT                  *
 ***************************************************/

const NewContractItem = ({text}) => (
  <Container textAlign="center">
    <p>{text}</p>
    <Button primary content="Create Contract" icon="file pdf" labelPosition="left"/>
  </Container>
)
const AddNewContract = () => (
  <Card fluid color="violet">
    <Card.Content>
      <Card.Header>
        <Popup trigger={<Icon color="grey" name="info circle"/>} content="Info" inverted/>
        Add New Contract
      </Card.Header>
      <Card.Meta>Subtitle</Card.Meta>
      <Tab
        menu={{ fluid: true, vertical: true, tabular: true }}
        grid={{ paneWidth: 8, tabWidth: 8 }}
        panes={[
          {
            menuItem: 'Safe Contract',
            render: () => <NewContractItem text={"If you hold a SAFE (Simple Agreement for Future Equity) that you want to tokenize and sell, please select this option and then upload a copy of your SAFE."}/>
          },
          {
            menuItem: 'Convertible Note Contract',
            render: () => <NewContractItem text={"Convertible Note Contract text"}/>
          },
          {
            menuItem: 'Equity Contract',
            render: () => <NewContractItem text={"Equity Contract text"}/>
          },
          {
            menuItem: 'Fund Portfolio',
            render: () => <NewContractItem text={"Fund Portfolio text"}/>
          },
          {
            menuItem: 'Umbrella Portfolio',
            render: () => <NewContractItem text={"Umbrella Portfolio text"}/>
          }
        ]}
      />
    </Card.Content>
  </Card>
)

/***************************************************
 *                   BALANCES                      *
 ***************************************************/

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

class Balances extends React.Component {
  inputRef = React.createRef() // address input

  state = {
    activeWallet: wallets[0]
  }

  // copy the active wallet address and select input
  handleCopy = () => {
    this.inputRef.current.select()
    document.execCommand('copy');
    this.inputRef.current.focus()
  }

  handleChange = (e, data) => {
    console.log(data)
    this.setState({ activeWallet: wallets[data.activeIndex] })
  }

  render() {
    const activeWallet = this.state.activeWallet
    return (
      <Card fluid color="violet">
        <Card.Content>
          <Card.Header>
            <Popup trigger={<Icon color="grey" name="info circle"/>} content="Info" inverted/>
            Balances
          </Card.Header>
          <Card.Meta>Subtitle</Card.Meta>
          <Tab
            menu={{ secondary: true, pointing: true }}
            defaultActiveIndex={0}
            onTabChange={this.handleChange}
            panes={wallets.map(wallet => ({
              menuItem: wallet.name,
              render: () => (
                <Tab.Pane>
                  <Input action value={activeWallet.address} fluid ref={this.inputRef}>
                    <input/>
                    <Button primary content="Copy" icon="copy" labelPosition="right" onClick={this.handleCopy}/>
                  </Input>
                  <Table celled>
                    <Table.Header>
                      <Table.Row>
                        <Table.HeaderCell>Wallet</Table.HeaderCell>
                        <Table.HeaderCell><Icon name="ethereum"/>ETH</Table.HeaderCell>
                        <Table.HeaderCell><USDCIcon/>USDC</Table.HeaderCell>
                      </Table.Row>
                    </Table.Header>
                    <Table.Body>
                      <Table.Row>
                        <Table.Cell textAlign="center">
                          <Button primary basic content="Set Primary Wallet"/>
                        </Table.Cell>
                        <Table.Cell>{activeWallet.balance.eth}</Table.Cell>
                        <Table.Cell>{activeWallet.balance.usdc}</Table.Cell>
                      </Table.Row>
                    </Table.Body>
                  </Table>
                  <Table celled>
                    <Table.Header>
                      <Table.Row>
                        <Table.HeaderCell>
                          <Popup trigger={<Icon name="info circle"/>} content="Info" size="tiny" inverted/>
                          Service Fee
                        </Table.HeaderCell>
                        <Table.HeaderCell><Icon name="ethereum"/>ETH</Table.HeaderCell>
                        <Table.HeaderCell><USDCIcon/>USDC</Table.HeaderCell>
                      </Table.Row>
                    </Table.Header>
                    <Table.Body>
                      <Table.Row>
                        <Table.Cell textAlign="center">
                          <Button color="blue" basic content="Add Balance"/>
                        </Table.Cell>
                        <Table.Cell>{activeWallet.fee.eth}</Table.Cell>
                        <Table.Cell>{activeWallet.fee.usdc}</Table.Cell>
                      </Table.Row>
                    </Table.Body>
                  </Table>
                </Tab.Pane>
              )
            }))}
          />
        </Card.Content>
      </Card>
    )
  }
}

/***************************************************
 *                  MY CONTRACTS                   *
 ***************************************************/

const allContracts = [
  { id: '51VY-VPY-W9K', name: 'Contract 1', type: 'Safe', company: 'John Smith', age: '3 Hours 12 Minutes', amount: 200000 },
  { id: '51VY-VPY-W9S', name: 'Contract 2', type: 'Stock', company: 'XCode Capital Inc.', age: '3 Hours 12 Minutes', amount: 200000 },
  { id: '51VY-VPY-W9V', name: 'Contract 3', type: 'Convertible Note', company: 'Sarah Parker', age: '3 Hours 12 Minutes', amount: 200000 },
  { id: '51VY-VPY-W9A', name: 'Contract 4', type: 'Safe', company: 'Avengers Capital', age: '3 Hours 12 Minutes', amount: 200000 }
]

const ContractTable = ({contracts}) => (
  <Table celled striped singleLine sortable>
    <Table.Header>
      <Table.Row>
        <Table.HeaderCell>Contract ID</Table.HeaderCell>
        <Table.HeaderCell>Company Name</Table.HeaderCell>
        <Table.HeaderCell>Type</Table.HeaderCell>
        <Table.HeaderCell>
          <Popup trigger={<Icon name="info circle"/>} content="Info" inverted/>
          Age
        </Table.HeaderCell>
        <Table.HeaderCell>
          <Popup trigger={<Icon name="info circle"/>} content="Info" inverted/>
          Purchase Amount
        </Table.HeaderCell>
        <Table.HeaderCell/>
      </Table.Row>
    </Table.Header>
    <Table.Body>
      {
        contracts.map(contract => (
          <Table.Row key={contract.id}>
            <Table.Cell><b>{contract.id}</b></Table.Cell>
            <Table.Cell>{contract.name}</Table.Cell>
            <Table.Cell>{contract.type}</Table.Cell>
            <Table.Cell>{contract.age}</Table.Cell>
            <Table.Cell><Icon name="dollar"/>{util.formatNumberFloat(contract.amount)}</Table.Cell>
            <Table.Cell>
              <Button primary content="Complete" icon="chevron right" labelPosition="right"/>
            </Table.Cell>
          </Table.Row>
        ))
      }
    </Table.Body>
  </Table>
)


const MyContracts = () => (
  <Card fluid color="violet" className="scroll-x">
    <Card.Content>
      <Card.Header>My Contracts</Card.Header>
      <Card.Description>But I must explain to you how all this mistaken</Card.Description>
      <Tab menu={{ secondary: true, pointing: true }} panes={[
        {
          menuItem: 'Draft',
          render: () => <Tab.Pane><ContractTable contracts={allContracts}/></Tab.Pane>
        },
        {
          menuItem: 'Waiting for Payment',
          render: () => <Tab.Pane><ContractTable contracts={allContracts.slice(0, 2)}/></Tab.Pane>
        },
        {
          menuItem: 'Smart Contracts',
          render: () => <Tab.Pane><ContractTable contracts={allContracts.slice(2, 4)}/></Tab.Pane>
        },
        {
          menuItem: 'On Marketplace',
          render: () => <Tab.Pane><ContractTable contracts={allContracts.slice(2, 4)}/></Tab.Pane>
        },
      ]}/>
    </Card.Content>
  </Card>
)

/***************************************************
 *                     MY TOKENS                   *
 ***************************************************/

const allTokens = [
  { id: 1, name: 'STC-Token 1', type: 'Safe', company: 'John Smith', amount: 20000, age: '3 Hours 12 Minutes', isTransferable: true, address: 'x04a3c71dcecc5da65d1f1c4871eb4d14ecc5da65d' },
  { id: 2, name: 'STC-Token 2', type: 'Stock', company: 'XCode Capital Inc.', amount: 10000, age: '3 Hours 12 Minutes', isTransferable: false, address: 'x04a3c71dcecc5da65d1f1c4871eb4d14ecc5da65d' },
  { id: 3, name: 'STC-Token 3', type: 'Convertible Note', company: 'Sarah Parker', amount: 80000, age: '3 Hours 12 Minutes', isTransferable: true, address: 'x04a3c71dcecc5da65d1f1c4871eb4d14ecc5da65d' },
  { id: 4, name: 'STC-Token 4', type: 'Safe', company: 'Avengers Capital', amount: 1000000, age: '3 Hours 12 Minutes', isTransferable: false, address: 'x04a3c71dcecc5da65d1f1c4871eb4d14ecc5da65d' }
]

const TokenTable = ({tokens}) => (
  <Table celled striped singleLine sortable>
    <Table.Header>
      <Table.Row>
        <Table.HeaderCell>Token ID</Table.HeaderCell>
        <Table.HeaderCell>Contract</Table.HeaderCell>
        <Table.HeaderCell>Smart Contract</Table.HeaderCell>
        <Table.HeaderCell>
          <Popup trigger={<Icon name="info circle"/>} content="Info" inverted/>
          Amount
        </Table.HeaderCell>
        <Table.HeaderCell/>
      </Table.Row>
    </Table.Header>
    <Table.Body>
      {
        tokens.map(token => (
          <Table.Row key={token.id}>
            <Table.Cell><b>{token.id}</b></Table.Cell>
            <Table.Cell>{token.type}</Table.Cell>
            <Table.Cell><b>{token.address}</b></Table.Cell>
            <Table.Cell><Icon name="ethereum"/>{util.formatNumber(token.amount)}</Table.Cell>
            <Table.Cell>
              <Button negative content="Sell" icon="chevron right" labelPosition="right"/>
            </Table.Cell>
          </Table.Row>
        ))
      }
    </Table.Body>
  </Table>
)

const MyTokens = () => (
  <Card fluid color="violet" className="scroll-x">
    <Card.Content>
      <Card.Header>My Tokens</Card.Header>
      <Card.Description>But I must explain to you how all this mistaken</Card.Description>
      <Tab menu={{ secondary: true, pointing: true }} panes={[
        {
          menuItem: 'Transferable',
          render: () => <Tab.Pane><TokenTable tokens={allTokens}/></Tab.Pane>
        },
        {
          menuItem: 'Waiting for Payment',
          render: () => <Tab.Pane><TokenTable tokens={allTokens.slice(0, 2)}/></Tab.Pane>
        },
        {
          menuItem: 'Smart Contracts',
          render: () => <Tab.Pane><TokenTable tokens={allTokens.slice(0, 2)}/></Tab.Pane>
        },
        {
          menuItem: 'On Marketplace',
          render: () => <Tab.Pane><TokenTable tokens={allTokens.slice(0, 2)}/></Tab.Pane>
        }
      ]}/>
    </Card.Content>
  </Card>
)

class MyPortfolio extends Component {
  render() {
    return (
      <div>
        <CSBreadcrumb title="My Portfolio"/>
        <Grid stackable padded columns={2}>
          <Grid.Column>
            <AddNewContract/>
            <Balances/>
          </Grid.Column>
          <Grid.Column>
            <MyContracts/>
            <MyTokens/>
          </Grid.Column>
        </Grid>
      </div>
    )
  }
}

export default MyPortfolio
