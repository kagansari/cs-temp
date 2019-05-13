import React from 'react'
import styled from 'styled-components'
import {Button, Checkbox, Dropdown, Header, Icon, Input, Label, Transition} from 'semantic-ui-react'
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

const FilterHeader = styled(({filterHandler, toggleFilter, labels, search, ...props}) => (
  <div {...props}>
    <Button
      color="grey" size="tiny" labelPosition="left"
      icon="sliders horizontal" content="Filter"
      onClick={toggleFilter}
    />
    {
      labels.length > 0 && (
        <div>Show only:</div>
      )
    }
    <div id="filter-labels">
      {
        labels.map(({text, func}) => (
          <Label key={text} as="a" onClick={func} color="grey">
            <Icon name="times"/> {text}
          </Label>
        ))
      }
    </div>
    <Input
      label={<Dropdown size="small" defaultValue='contract' options={contractTypes}/>}
      labelPosition='right'
      placeholder="ID"
    />
    <Button size="tiny" color="grey" icon labelPosition="left" onClick={filterHandler.resetAll}>
      Clear <Icon name="trash"/>
    </Button>
    <Button primary size="tiny" icon labelPosition="left" onClick={search}>
      Apply <Icon name="check"/>
    </Button>
  </div>
))`
  display: flex;
  align-items: center;
  font-family: "poppins";
  .ui.button {
    font-family: "poppins" !important;
    font-weight: 700 !important;
  }
  .ui.label {
    padding: 9px;
  }
  font-size: 12px;
  > * {
    margin: 0 6px;
  }
  #filter-labels {
    flex-grow: 1;
  }
`

const FilterOptions = styled(({filter, filterHandler, ...props}) => {
  const {
    investors: {individuals, institutionals, employees},
    contract: {safe, stock, convertibleNote, vcPortfolio},
    price, favorite, transferable
  } = filter
  const {toggle, setMinPrice, setMaxPrice/*, setTokens*/} = filterHandler

  return (
    <div {...props}>
      <div id="investor-filter" className="filter-option">
        <Header as="h4">Investors</Header>
        <div className="filter-toggle">
          <span>Individuals</span>
          <Checkbox toggle checked={individuals} onChange={toggle('investors.individuals')}/>
        </div>
        <div className="filter-toggle">
          <span>Institutionals</span>
          <Checkbox toggle checked={institutionals} onChange={toggle('investors.institutionals')}/>
        </div>
        <div className="filter-toggle">
          <span>Employees</span>
          <Checkbox toggle checked={employees} onChange={toggle('investors.employees')}/>
        </div>
      </div>
      <div id="contract-filter" className="filter-option">
        <Header as="h4">Contract</Header>
        <div className="filter-toggle">
          <span>Safe</span>
          <Checkbox toggle checked={safe} onChange={toggle('contract.safe')}/>
        </div>
        <div className="filter-toggle">
          <span>Stock</span>
          <Checkbox toggle checked={stock} onChange={toggle('contract.stock')}/>
        </div>
        <div className="filter-toggle">
          <span>Convertible Note</span>
          <Checkbox toggle checked={convertibleNote} onChange={toggle('contract.convertibleNote')}/>
        </div>
        <div className="filter-toggle">
          <span>VC Portfolio</span>
          <Checkbox toggle checked={vcPortfolio} onChange={toggle('contract.vcPortfolio')}/>
        </div>
      </div>
      {/*<div id="share-filter" className="filter-option">*/}
        {/*<Header as="h4">Share Percentage</Header>*/}
        {/*<CSRange*/}
          {/*min={0}*/}
          {/*max={100}*/}
          {/*step={5}*/}
          {/*allowCross={false}*/}
          {/*value={filter.tokens}*/}
          {/*onChange={setTokens}*/}
          {/*tipFormatter={value => `${value}%`}*/}
        {/*/>*/}
      {/*</div>*/}
      <div id="price-filter" className="filter-option">
        <Header as="h4">Price</Header>
        {/*<div className="filter-inputs">*/}
        <Input
          input={<MaskedInput mask={createNumberMask({prefix: ''})}/>}
          label={{content: "$", color: 'grey' }} size="small"  placeholder="Min. Price" fluid
          value={price.min}
          onChange={setMinPrice}
        />
        <Input
          input={<MaskedInput mask={createNumberMask({prefix: ''})}/>}
          label={{content: "$", color: 'grey' }} size="small" placeholder="Max. Price" fluid
          value={price.max}
          onChange={setMaxPrice}
        />
        {/*</div>*/}
      </div>
      <div id="favorite-filter" className="filter-option">
        <Header as="h4">My Favorites</Header>
        <Checkbox toggle checked={favorite} onChange={toggle('favorite')}/>
      </div>
      <div id="transferable-filter" className="filter-option">
        <Header as="h4">Transferable</Header>
        <Checkbox toggle checked={transferable} onChange={toggle('transferable')}/>
      </div>
    </div>
  )
})`
  display: flex;
  margin: 15px 0;
  padding: 15px 0;
  overflow-x: scroll;
  font-family: "poppins";
  > * {
    margin-right: 15px;
  }
  #investor-filter, #contract-filter {
    min-width: 175px;
    .filter-toggle {
      display: flex;
      justify-content: space-between;
      margin-top: 5px;
    }
  }
  //#share-filter {
  //  min-width: 200px;
  //  .rc-slider {
  //    margin-top: 25px;
  //  }
  //}
  #price-filter {
    .ui.input {
      width: 150px;
      margin-bottom: 10px;
    }
  }
  #favorite-filter, #transferable-filter {
    min-width: 120px;
    .ui.toggle { margin-top: 8px; }
  }
`

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
          <div>
            <FilterOptions
              filter={filter}
              filterHandler={filterHandler}
            />
          </div>
        </Transition>
      </div>
    )
  }
}

export default Filter
