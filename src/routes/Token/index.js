import React, {Component} from 'react'
import {Grid} from 'semantic-ui-react'
import {token} from '../../util/mock'
import TokenInfo from './TokenInfo'
import TokenDetails from './TokenDetails'
import Offer from './Offer'

class Token extends Component {
  render() {
    return (
      <Grid stackable container className="fluid padded">
        <Grid.Row>
          <Grid.Column largeScreen={16} widescreen={6}>
            <TokenInfo token={token}/>
            <br/>
            <Offer token={token}/>
            <br/>
          </Grid.Column>
          <Grid.Column largeScreen={16} widescreen={10}>
            <TokenDetails token={token}/>
          </Grid.Column>
        </Grid.Row>
      </Grid>
    )
  }
}

export default Token
