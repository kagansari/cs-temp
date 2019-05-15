import React from 'react'
import {Button, Checkbox, Dropdown, Form, Grid, Header, Icon, Input, Label, Transition} from 'semantic-ui-react'
import MaskedInput from 'react-text-mask'
import createNumberMask from 'text-mask-addons/dist/createNumberMask'

// override default rc-slider
// const CSRange = styled(Slider.createSliderWithTooltip(Slider.Range))`
//   & .rc-slider-handle {
//     width: 20px;
//     height: 20px;
//     margin-top: -8px;
//     margin-left: -10px;
//     background-color: #753BBD;
//     border: none;
//     transition: border-color 100ms ease-in-out, box-shadow 100ms ease-in-out;
//     &:focus, &:hover {
//       border: none;
//       box-shadow: 0 0 0 1px #C7CED5;
//     }
//   }
//   & .rc-slider-rail {
//     height: 5px;
//     background-color: #C7CED5;
//   }
//   & .rc-slider-track {
//     background-color: #462371;
//   }
// `

const contractTypes = [
  { key: 'id', text: 'Contracts', value: 'contract' },
  { key: 'owner', text: 'Owners', value: 'owner' },
  { key: 'company', text: 'Companies', value: 'company' },
]

const FilterHeader = ({filterHandler, toggleFilter, labels, search}) => (
  <Grid columns={2} className="fluid">
    <Grid.Row>
      <Grid.Column tablet={16} computer={6}>
        <Button icon="sliders horizontal" content="Filter" labelPosition="left" onClick={toggleFilter}/>
        <Button icon="sync alternate" content="Update" color="blue" labelPosition="right" onClick={search}/>
      </Grid.Column>
      <Grid.Column tablet={16} computer={10} textAlign="right">
        <Form>
          <Form.Group style={{justifyContent: 'flex-end'}}>
            <Form.Field>
              <Input
                label={<Dropdown defaultValue='contract' options={contractTypes}/>}
                labelPosition='right'
                placeholder="ID"
              />
            </Form.Field>
            <Form.Field>
              <Button icon="trash" content="Clear" labelPosition="left" onClick={filterHandler.resetAll}/>
            </Form.Field>
            <Form.Field>
              <Button icon="check" content="Apply" labelPosition="left" onClick={search}/>
            </Form.Field>
          </Form.Group>
        </Form>
      </Grid.Column>
    </Grid.Row>
  </Grid>
)

const FilterOptions = ({filter, filterHandler, ...props}) => {
  const {
    investors: {individuals, institutionals, employees},
    contract: {safe, stock, convertibleNote, vcPortfolio},
    price, favorite, transferable
  } = filter
  const {toggle, setMinPrice, setMaxPrice/*, setTokens*/} = filterHandler

  return (
    <Grid columns={4} {...props}>
      <Grid.Row>
        {/* INVESTORS */}
        <Grid.Column>
          <Header as="h4">Investors</Header>
          <div className="flex space-between mb5">
            <span>Individuals</span>
            <Checkbox toggle checked={individuals} onChange={toggle('investors.individuals')}/>
          </div>
          <div className="flex space-between mb5">
            <span>Institutionals</span>
            <Checkbox toggle checked={institutionals} onChange={toggle('investors.institutionals')}/>
          </div>
          <div className="flex space-between mb5">
            <span>Employees</span>
            <Checkbox toggle checked={employees} onChange={toggle('investors.employees')}/>
          </div>
        </Grid.Column>
        {/* CONTRACT TYPE */}
        <Grid.Column>
          <Header as="h4">Contract</Header>
          <div className="flex space-between mb5">
            <span>Safe</span>
            <Checkbox toggle checked={safe} onChange={toggle('contract.safe')}/>
          </div>
          <div className="flex space-between mb5">
            <span>Stock</span>
            <Checkbox toggle checked={stock} onChange={toggle('contract.stock')}/>
          </div>
          <div className="flex space-between mb5">
            <span>Convertible Note</span>
            <Checkbox toggle checked={convertibleNote} onChange={toggle('contract.convertibleNote')}/>
          </div>
          <div className="flex space-between mb5">
            <span>VC Portfolio</span>
            <Checkbox toggle checked={vcPortfolio} onChange={toggle('contract.vcPortfolio')}/>
          </div>
        </Grid.Column>
        {/* PRICE */}
        <Grid.Column>
          <Header as="h4">Price</Header>
          <Input
            input={<MaskedInput mask={createNumberMask({prefix: ''})}/>}
            label={{content: '$'}} placeholder="Min. Price" fluid
            value={price.min} onChange={setMinPrice}
          />
          <br/>
          <Input
            input={<MaskedInput mask={createNumberMask({prefix: ''})}/>}
            label={{content: '$'}} placeholder="Max. Price" fluid
            value={price.max} onChange={setMaxPrice}
          />
        </Grid.Column>
        {/* FAVORITE AND TRANSFERABLE */}
        <Grid.Column>
          <Header as="h4">My Favorites</Header>
          <Checkbox toggle checked={favorite} onChange={toggle('favorite')}/>
          <Header as="h4">Transferable</Header>
          <Checkbox toggle checked={transferable} onChange={toggle('transferable')}/>
        </Grid.Column>
      </Grid.Row>
    </Grid>
  )
}

const Labels = ({labels}) => (
  <Grid columns={1}>
    <Grid.Row>
      <Grid.Column>
        <span>Show only:</span>
        {
          labels.map(({text, func}) => (
            <Label key={text} as="a" onClick={func}>
              <Icon name="times"/> {text}
            </Label>
          ))
        }
      </Grid.Column>
    </Grid.Row>
  </Grid>
)

class Filter extends React.Component {
  state = {
    show: false
  }

  toggleFilter = () => this.setState({ show: !this.state.show })

  render() {
    const {filter, filterHandler, labels, search, ...props} = this.props
    return (
      <div {...props}>
        <FilterHeader
          filterHandler={filterHandler}
          labels={labels}
          toggleFilter={this.toggleFilter}
          search={search}
        />
        <Transition visible={this.state.show} animation='fade' duration={250}>
          <FilterOptions
            filter={filter}
            filterHandler={filterHandler}
          />
        </Transition>
        { labels.length > 0 && <Labels labels={labels}/> }
      </div>
    )
  }
}

export default Filter
