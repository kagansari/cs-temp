import React, {Component} from 'react'
import CSBreadcrumb from '../../components/CSBreadcrumb'
import styled from 'styled-components'
import Filter from './Filter'
import MarketplaceTable from './MarketplaceTable'

const Card = styled.div`
  margin: 15px;
  padding: 15px;
  background-color: white;
  box-shadow: 0 1px 2px #ccc;
  overflow-x: scroll;
`
class Marketplace extends Component {
  state = {
    showFilter: true,
    filter: {
      investors: {
        individuals: true,
        institutional: true,
        employees: true,
      },
      contract: {
        safe: true,
        stock: true,
        convertibleNode: true,
        vcPortfolio: true
      },
      tokens: {
        min: 0,
        max: Number.MAX_SAFE_INTEGER
      },
      price: {
        min: 0,
        max: Number.MAX_SAFE_INTEGER
      },
      transferable: {
        yes: true,
        no: true
      }
    }
  }
  render() {
    return (
      <div>
        <CSBreadcrumb title="Marketplace"/>
        <Card>
          <Filter {...this.state}/>
          <MarketplaceTable {...this.state}/>
        </Card>
      </div>
    )
  }
}

export default Marketplace
