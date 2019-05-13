import React, {Component} from 'react'
import {Grid} from 'semantic-ui-react'
import {token} from '../../util/mock'
import TokenInfo from './TokenInfo'
import TokenDetails from './TokenDetails'
import Offer from './Offer'

class Token extends Component {
  render() {
    return (
      <Grid stackable columns={3} container className="fluid padded">
        <Grid.Column width={7}>
          <TokenInfo token={token}/>
          <Offer token={token}/>
        </Grid.Column>
        <Grid.Column width={9}>
          <TokenDetails token={token}/>
        </Grid.Column>
      </Grid>
    )
  }
}

export default Token
