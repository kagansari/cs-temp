import React, {Component} from 'react'
import _ from 'lodash'
import CSBreadcrumb from '../../components/CSBreadcrumb'
import Filter from './Filter'
import MarketplaceTable from './MarketplaceTable'
import util from '../../util'
import {marketplace as mockData} from '../../util/mock'
import {Button, Card, Container, Dimmer, Grid, Icon, Loader, Popup, Segment} from 'semantic-ui-react'

const MockCard = () => (
  <Card fluid color="violet">
    <Card.Content>
      <Card.Header>
        <Popup trigger={<Icon color="grey" name="info circle"/>} content="Info" inverted/>
        Title
      </Card.Header>
      <Card.Meta>Subtitle</Card.Meta>
      <br/><br/>
    </Card.Content>
    <Card.Content>
      <Icon name="clock outline" color="grey"/> <small>Last updated: 12 Min.</small>
    </Card.Content>
  </Card>
)

class Marketplace extends Component {
  defaultFilter = {
    investors: {
      individuals: false,
      institutionals: false,
      employees: false,
    },
    contract: {
      safe: false,
      stock: false,
      convertibleNote: false,
      vcPortfolio: false
    },
    // tokens: [0, 100],
    price: {
      min: '',
      max: ''
    },
    favorite: false,
    transferable: false
  }

  state = {
    isLoading: false,
    data: [],
    showFilter: true,
    filter: this.defaultFilter
  }

  filterHandler = {
    toggle: key => () => {
      this.setState(prevState => {
        const oldValue = _.get(prevState.filter, key)
        const newState = _.cloneDeep(prevState)
        _.set(newState.filter, key, !oldValue)
        return newState
      })
    },
    // setTokens: value => {
    //   this.setState(prevState => _.merge({}, prevState, {
    //     filter: { tokens: value }
    //   }))
    // },
    // resetTokens: () => {
    //   this.setState(prevState => _.merge({}, prevState, {
    //     filter: { tokens: [0, 100] }
    //   }))
    // },
    setMinPrice: e => {
      // $12.345 -> 12345
      const value = util.getNumberFromStr(e.target.value)
      this.setState(prevState => _.merge({}, prevState, {
        filter: { price: { min: value }}
      }))
    },
    setMaxPrice: e => {
      const value = util.getNumberFromStr(e.target.value)
      this.setState(prevState => _.merge({}, prevState, {
        filter: { price: { max: value }}
      }))
    },
    resetPrice: () => {
      this.setState(prevState => _.merge({}, prevState, {
        filter: { price: { min: '', max: '' }}
      }))
    },
    resetAll: () => this.setState({
      filter: this.defaultFilter
    })
  }

  getLabels = () => {
    const labels = []
    const {filter: {investors, contract, /*tokens,*/ price, favorite, transferable}} = this.state
    const {toggle, /*resetTokens,*/ resetPrice} = this.filterHandler

    if (investors.individuals) labels.push({text: 'Investors', func: toggle('investors.individuals')})
    if (investors.institutionals) labels.push({text: 'Institutionals', func: toggle('investors.institutionals')})
    if (investors.employees) labels.push({text: 'Employees', func: toggle('investors.employees')})
    if (contract.safe) labels.push({text: 'Safe', func: toggle('contract.safe')})
    if (contract.stock) labels.push({text: 'Stock', func: toggle('contract.stock')})
    if (contract.convertibleNote) labels.push({text: 'Convertible Note', func: toggle('contract.convertibleNote')})
    if (contract.vcPortfolio) labels.push({text: 'VC Portfolio', func: toggle('contract.vcPortfolio')})

    // if (tokens[0] !== 0 || tokens[1] !== 100) {
    //   labels.push({
    //     text: `Share Percentage ${tokens[0]}% - ${tokens[1]}%`,
    //     func: resetTokens
    //   })
    // }

    if (price.min !== '' || price.max !== '') {
      const minPrice = price.min === '' ? '$0' : `$${util.formatNumber(price.min)}`
      const maxPrice = price.max === '' ? '∞' : `$${util.formatNumber(price.max)}`
      labels.push({
        text: `${minPrice} - ${maxPrice}`,
        func: resetPrice
      })
    }

    if (favorite) labels.push({ text: 'My Favorites', func: toggle('favorite') })
    if (transferable) labels.push({ text: 'Transferable', func: toggle('transferable') })

    return labels
  }

  search = () => {
    this.setState({ isLoading: true })
    setTimeout(() => {
      this.setState({ data: mockData, isLoading: false })
    }, 1000)
  }

  componentDidMount() {
    this.search()
  }

  render() {
    return (
      <Container fluid>
        <CSBreadcrumb title="Marketplace"/>
        <Grid padded>
          <Grid.Row>
            {
              [0, 1, 2].map(i => <Grid.Column key={i} width={4}><MockCard/></Grid.Column>)
            }
          </Grid.Row>
          <Grid.Row>
            <Grid.Column>
            <Card fluid raised color="violet">
              <Card.Content>
                <Dimmer inverted active={this.state.isLoading}>
                  <Loader content='Loading' />
                </Dimmer>
                <Filter
                  filter={this.state.filter}
                  filterHandler={this.filterHandler}
                  labels={this.getLabels()}
                  search={this.search}
                />
                <br/>
                <div className="scroll-x">
                  <MarketplaceTable data={this.state.data} search={this.search}/>
                </div>
                <Segment basic textAlign="center">
                  <Button
                    color="grey" size="tiny" labelPosition="left"
                    icon="ellipsis horizontal" content="Load More"
                    onClick={this.search}
                  />
                </Segment>
              </Card.Content>
              <Card.Content>
                <Icon name="clock outline" color="grey"/> <small>Last updated: 12 Min.</small>
              </Card.Content>
            </Card>
            </Grid.Column>
          </Grid.Row>
        </Grid>
      </Container>
    )
  }
}

export default Marketplace
