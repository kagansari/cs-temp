import React, {Component} from 'react'
import {Button, Checkbox, Icon, Popup, Table} from 'semantic-ui-react'
import util from '../../util'
import {Link} from 'react-router-dom'

const TableHeader = () => (
  <Table.Header>
    <Table.Row>
      <Table.HeaderCell/>
      <Table.HeaderCell>
        <div>
          <span>Token ID</span>
        </div>
      </Table.HeaderCell>
      <Table.HeaderCell>
        <div>
          <Popup
            trigger={<Icon name="info circle"/>}
            content="Info" size="tiny" inverted
          />
          <span>Token Owner</span>
        </div>
      </Table.HeaderCell>
      <Table.HeaderCell>
        <div>
          <Popup
            trigger={<Icon name="info circle"/>}
            content="Info" size="tiny" inverted
          />
          <span>Company</span>
        </div>
      </Table.HeaderCell>
      {/*<Table.HeaderCell>*/}
        {/*<div>*/}
          {/*<Popup*/}
            {/*trigger={<Icon name="info circle"/>}*/}
            {/*content="Info" size="tiny" inverted*/}
          {/*/>*/}
          {/*<span>Contract</span>*/}
        {/*</div>*/}
      {/*</Table.HeaderCell>*/}
      {/*<Table.HeaderCell>*/}
        {/*<div>*/}
          {/*<span>Age</span>*/}
        {/*</div>*/}
      {/*</Table.HeaderCell>*/}
      {/*<Table.HeaderCell>*/}
        {/*<div>*/}
          {/*<Popup*/}
            {/*trigger={<Icon name="info circle"/>}*/}
            {/*content="Info" size="tiny" inverted*/}
          {/*/>*/}
          {/*<span>Transferable</span>*/}
        {/*</div>*/}
      {/*</Table.HeaderCell>*/}
      <Table.HeaderCell>
        <div>
          <Popup
            trigger={<Icon name="info circle"/>}
            content="Info" size="tiny" inverted
          />
          <span>Amount</span>
        </div>
      </Table.HeaderCell>
      <Table.HeaderCell>
        <div>
          <Popup
            trigger={<Icon name="info circle"/>}
            content="Info" size="tiny" inverted
          />
          <span>Price</span>
        </div>
      </Table.HeaderCell>
      <Table.HeaderCell textAlign="center">
        <small><b>Live Data</b></small><br/>
        <span><Checkbox fitted toggle/></span>
      </Table.HeaderCell>
    </Table.Row>
  </Table.Header>
)

class MarketplaceTable extends Component {
  render() {
    const {data} = this.props
    return (
      <Table celled striped singleLine sortable definition>
        <TableHeader/>
        <Table.Body>
          {
            data && data.map(listing => {
              const {
                contract: {
                  owner: {firstname, lastname},
                  // contract_data: {rofr, restriction}
                }
              } = listing
              const fullName = `${firstname} ${lastname}`
              const formattedTokens = util.formatNumber(listing.tokens)
              const formattedPrice = util.formatNumber(listing.initialprice)
              // const isTransferable = rofr === 0 && restriction === 0
              return (
                <Table.Row key={listing.uuid}>
                  <Table.Cell textAlign="center"><Icon name="star outline"/></Table.Cell>
                  <Table.Cell className="uuid"><b>{listing.contract.uuid}</b></Table.Cell>
                  <Table.Cell><strong>{fullName}</strong></Table.Cell>
                  <Table.Cell>{listing.seller.profile.company_name}</Table.Cell>
                  {/*<Table.Cell>{listing.market_data.contract_type}</Table.Cell>*/}
                  {/*<Table.Cell>{listing.updated_at}</Table.Cell>*/}
                  {/*<Table.Cell textAlign="center">*/}
                    {/*{isTransferable ? <Icon name='check'/> : <span className="danger">Waiting Approval</span>}*/}
                  {/*</Table.Cell>*/}
                  <Table.Cell><Icon name="ethereum"/>{formattedTokens}</Table.Cell>
                  <Table.Cell><Icon name="dollar"/>{formattedPrice}</Table.Cell>
                  <Table.Cell textAlign="center">
                    <Button as={Link} to={`/marketplace/${listing.uuid}`} primary labelPosition="right" icon="chevron right" size="tiny" content="Details"/>
                  </Table.Cell>
                </Table.Row>
              )
            })
          }
        </Table.Body>
      </Table>
    )
  }
}


export default MarketplaceTable
