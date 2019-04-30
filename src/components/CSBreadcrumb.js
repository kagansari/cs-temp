import styled from 'styled-components'
import {Breadcrumb} from 'semantic-ui-react'
import {Link} from 'react-router-dom'
import React from 'react'

const CSBreadcrumb = styled(({title, ...props}) => (
  <Breadcrumb {...props}>
    <Breadcrumb.Section as={Link} to="/">Dashboard</Breadcrumb.Section>
    <Breadcrumb.Divider icon='right chevron' />
    <Breadcrumb.Section active>{title}</Breadcrumb.Section>
  </Breadcrumb>
))`
  &.ui.breadcrumb {
    padding: 15px;
    font-family: 'Poppins Medium';
    font-size: 12px;
    .active.section {
      font-weight: normal;
      color: #181F2C;
    }
    a.section {
      color: #A6AFB8;
      &:hover { color: #81888F; }
    }
    .icon { margin: 0 15px; }
  }
`

export default CSBreadcrumb
