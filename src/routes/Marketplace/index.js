import React, {Component} from 'react'
import styled from 'styled-components'
import _ from 'lodash'
import CSBreadcrumb from '../../components/CSBreadcrumb'
import Filter from './Filter'
import MarketplaceTable from './MarketplaceTable'
import util from '../../util'
import {marketplace as mockData} from '../../util/mock'
import {Dimmer, Loader, Segment} from 'semantic-ui-react'

const Card = styled(Segment)`
  margin: 15px !important;
  padding: 15px;
  background-color: white;
  box-shadow: 0 1px 2px #ccc;
`

const TableContainer = styled.div`
  overflow-x: scroll;
  margin-top: 20px;
`

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
    tokens: [0, 100],
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
    setTokens: value => {
      this.setState(prevState => _.merge({}, prevState, {
        filter: { tokens: value }
      }))
    },
    resetTokens: () => {
      this.setState(prevState => _.merge({}, prevState, {
        filter: { tokens: [0, 100] }
      }))
    },
    setMinPrice: (e, ...args) => {
      // $12.345 -> 12345
      const value = e.target.value.split(/[^\d]/).join('')
      this.setState(prevState => _.merge({}, prevState, {
        filter: { price: { min: value }}
      }))
    },
    setMaxPrice: e => {
      const value = e.target.value.split(/[^\d]/).join('')
      this.setState(prevState => _.merge({}, prevState, {
        filter: { price: { max: value }}
      }))
    },
    resetPrice: e => {
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
    const {filter: {investors, contract, tokens, price, favorite, transferable}} = this.state
    const {toggle, resetTokens, resetPrice} = this.filterHandler

    if (investors.individuals) labels.push({text: 'Investors', func: toggle('investors.individuals')})
    if (investors.institutionals) labels.push({text: 'Institutionals', func: toggle('investors.institutionals')})
    if (investors.employees) labels.push({text: 'Employees', func: toggle('investors.employees')})
    if (contract.safe) labels.push({text: 'Safe', func: toggle('contract.safe')})
    if (contract.stock) labels.push({text: 'Stock', func: toggle('contract.stock')})
    if (contract.convertibleNote) labels.push({text: 'Convertible Note', func: toggle('contract.convertibleNote')})
    if (contract.vcPortfolio) labels.push({text: 'VC Portfolio', func: toggle('contract.vcPortfolio')})

    if (tokens[0] !== 0 || tokens[1] !== 100) {
      labels.push({
        text: `Share Percentage ${tokens[0]}% - ${tokens[1]}%`,
        func: resetTokens
      })
    }

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
      <div>
        <CSBreadcrumb title="Marketplace"/>
        <Card>
          <Dimmer active={this.state.isLoading}>
            <Loader content='Loading' />
          </Dimmer>
          <Filter
            filter={this.state.filter}
            filterHandler={this.filterHandler}
            labels={this.getLabels()}
            search={this.search}
          />
          <TableContainer>
            <MarketplaceTable data={this.state.data} search={this.search}/>
          </TableContainer>
        </Card>
      </div>
    )
  }
}

export default Marketplace
