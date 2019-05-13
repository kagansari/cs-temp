import React from 'react'
import styled from 'styled-components'
import usdcIcon from '../images/usdc.png'

export const USDCIcon = styled(props => <img src={usdcIcon} alt="USDC" {...props}/>)`
  height: 1rem;
  margin-right: 5px;
  margin-top: -3px;
`
