import React, {Component} from 'react'
import {Icon, Popup, Rating, Table} from 'semantic-ui-react'
import styled from 'styled-components'
import util from '../../util'

class RawMarketplaceTable extends Component {
  render() {
    const {data, search, ...props} = this.props
    return (
      <Table celled striped {...props}>
        <Table.Header>
          <Table.Row>
            <Table.HeaderCell/>
            <Table.HeaderCell>
              <div>
                <span>Token ID</span>
                <Icon link fitted name="sort"/>
              </div>
            </Table.HeaderCell>
            <Table.HeaderCell>
              <div>
                <Popup
                  trigger={<Icon name="info circle"/>}
                  content="Info" size="tiny" inverted
                />
                <span>Token Owner</span>
                <Icon link fitted name="sort"/>
              </div>
            </Table.HeaderCell>
            <Table.HeaderCell>
              <div>
                <Popup
                  trigger={<Icon name="info circle"/>}
                  content="Info" size="tiny" inverted
                />
                <span>Company</span>
                <Icon link fitted name="sort"/>
              </div>
            </Table.HeaderCell>
            <Table.HeaderCell>
              <div>
                <Popup
                  trigger={<Icon name="info circle"/>}
                  content="Info" size="tiny" inverted
                />
                <span>Contract</span>
                <Icon link fitted name="sort"/>
              </div>
            </Table.HeaderCell>
            <Table.HeaderCell>
              <div>
                <span>Age</span>
                <Icon link fitted name="sort"/>
              </div>
            </Table.HeaderCell>
            <Table.HeaderCell>
              <div>
                <Popup
                  trigger={<Icon name="info circle"/>}
                  content="Info" size="tiny" inverted
                />
                <span>Transferable</span>
                <Icon link fitted name="sort"/>
              </div>
            </Table.HeaderCell>
            <Table.HeaderCell>
              <div>
                <Popup
                  trigger={<Icon name="info circle"/>}
                  content="Info" size="tiny" inverted
                />
                <span>Amount</span>
                <Icon link fitted name="sort"/>
              </div>
            </Table.HeaderCell>
            <Table.HeaderCell>
              <div>
                <Popup
                  trigger={<Icon name="info circle"/>}
                  content="Info" size="tiny" inverted
                />
                <span>Price</span>
                <Icon link fitted name="sort"/>
              </div>
            </Table.HeaderCell>
            <Table.HeaderCell>
              <Icon id="refresh-marketplace" link name="redo" onClick={search}/>
            </Table.HeaderCell>
          </Table.Row>
        </Table.Header>
        <Table.Body>
          {
            data && data.map(listing => {
              const {
                seller: {firstname, lastname},
                contract: {contract_data: {rofr, restriction}}
              } = listing
              const fullName = `${firstname} ${lastname}`
              const formattedTokens = util.formatNumber(listing.tokens)
              const formattedPrice = `$ ${util.formatNumber(listing.initialprice)}`
              const isTransferable = rofr === 0 && restriction === 0
              return (
                <Table.Row key={listing.uuid}>
                  <Table.Cell><Rating/></Table.Cell>
                  <Table.Cell className="uuid"><b>{listing.uuid}</b></Table.Cell>
                  <Table.Cell><b>{fullName}</b></Table.Cell>
                  <Table.Cell>{listing.seller.profile.company_name}</Table.Cell>
                  <Table.Cell>{listing.market_data.contract_type}</Table.Cell>
                  <Table.Cell>{listing.updated_at}</Table.Cell>
                  <Table.Cell textAlign="center"><Icon name={isTransferable ? 'check' : 'times'}/></Table.Cell>
                  <Table.Cell><b>{formattedTokens}</b></Table.Cell>
                  <Table.Cell><b>{formattedPrice}</b></Table.Cell>
                  <Table.Cell textAlign="center"><Icon link name="ellipsis horizontal"/></Table.Cell>
                </Table.Row>
              )
            })
          }
        </Table.Body>
      </Table>
    )
  }
}

const MarketplaceTable = styled(RawMarketplaceTable)`
  &.ui.table {
    color: #181F2C;
    th {
      font-family: "Eurostile";
      white-space: nowrap;
      padding: 25px 10px;
      > div {
        display: flex;
        span { 
          flex-grow: 1;
          margin-right: 10px; 
        }
      }
    }
    td {
      font-family: "Poppins Medium";
      font-size: 12px;
      white-space: nowrap;
      &.uuid {
        max-width: 100px;
        overflow-x: hidden;
        text-overflow: ellipsis;
      }
      .icon.times {
        color: #BFC8D1;
      }
    }
    #refresh-marketplace {
      margin: 0 20px;
    }
  }
`

export default MarketplaceTable
