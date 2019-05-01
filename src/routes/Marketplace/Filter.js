import styled from 'styled-components'
import Slider from 'rc-slider'
import {Button, Checkbox, Header, Icon, Input, Label, Transition} from 'semantic-ui-react'
import React from 'react'
import 'rc-slider/assets/index.css';

// override default rc-slider
const CSRange = styled(Slider.createSliderWithTooltip(Slider.Range))`
  & .rc-slider-handle {
    width: 20px;
    height: 20px;
    margin-top: -8px;
    margin-left: -10px;
    background-color: #753BBD;
    border: none;
    transition: border-color 100ms ease-in-out, box-shadow 100ms ease-in-out;
    &:focus, &:hover {
      border: none;  
      box-shadow: 0 0 0 1px #C7CED5;  
    }
  }
  & .rc-slider-rail {
    height: 5px;
    background-color: #C7CED5; 
  }
  & .rc-slider-track {
    background-color: #462371; 
  }
`

// override default semantic toggle
const CSCheckbox = styled(Checkbox)`
  &.ui.toggle.checkbox input:checked~.box:before, &.ui.toggle.checkbox input:checked~label:before {
    background-color: #753BBD !important;
  }
`

const FilterHeader = styled(({filterHandler, toggleFilter, labels, search, ...props}) => (
  <div {...props}>
    <Button basic icon labelPosition="left" onClick={toggleFilter}>
      <Icon name="sliders horizontal"/>
      <b>Filter</b>
    </Button>
    {
      labels.length > 0 && (
        <div>
          <b>Show only:</b>
        </div>
      )
    }
    <div id="filter-labels">
      {
        labels.map(({text, func}) => (
          <Label key={text} as="a" onClick={func}><Icon name="times"/> {text}</Label>
        ))
      }
    </div>
    <Button size="small" icon labelPosition="left" onClick={filterHandler.resetAll}>
      Clear <Icon name="trash"/>
    </Button>
    <Button size="small" icon labelPosition="left" color="violet" onClick={search}>
      Apply <Icon name="check"/>
    </Button>
  </div>
))`
  display: flex;
  align-items: center;
  font-family: "Poppins Regular";
  font-size: 12px;
  color: #20293B;
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
  const {toggle, setTokens, setMinPrice, setMaxPrice} = filterHandler

  return (
    <div {...props}>
      <div id="investor-filter" className="filter-option">
        <Header as="h4">Investors</Header>
        <div className="filter-toggles">
          <div className="filter-toggle">
            <span>Individuals</span>
            <CSCheckbox toggle checked={individuals} onChange={toggle('investors.individuals')}/>
          </div>
          <div className="filter-toggle">
            <span>Institutionals</span>
            <CSCheckbox toggle checked={institutionals} onChange={toggle('investors.institutionals')}/>
          </div>
          <div className="filter-toggle">
            <span>Employees</span>
            <CSCheckbox toggle checked={employees} onChange={toggle('investors.employees')}/>
          </div>
        </div>
      </div>
      <div id="contract-filter" className="filter-option">
        <Header as="h4">Contract</Header>
        <div className="filter-toggles">
          <div className="filter-toggle">
            <span>Safe</span>
            <CSCheckbox toggle checked={safe} onChange={toggle('contract.safe')}/>
          </div>
          <div className="filter-toggle">
            <span>Stock</span>
            <CSCheckbox toggle checked={stock} onChange={toggle('contract.stock')}/>
          </div>
          <div className="filter-toggle">
            <span>Convertible Note</span>
            <CSCheckbox toggle checked={convertibleNote} onChange={toggle('contract.convertibleNote')}/>
          </div>
          <div className="filter-toggle">
            <span>VC Portfolio</span>
            <CSCheckbox toggle checked={vcPortfolio} onChange={toggle('contract.vcPortfolio')}/>
          </div>
        </div>
      </div>
      <div id="share-filter" className="filter-option">
        <Header as="h4">Share Percentage</Header>
        <CSRange
          min={0}
          max={100}
          step={5}
          allowCross={false}
          value={filter.tokens}
          onChange={setTokens}
          tipFormatter={value => `${value}%`}
        />
      </div>
      <div id="price-filter" className="filter-option">
        <Header as="h4">Price</Header>
        <div className="filter-inputs">
          <Input label="Min." type="number" placeholder="Price" size="small" value={price.min} onChange={setMinPrice}/>
          <Input label="Max." type="number" placeholder="Price" size="small" value={price.max} onChange={setMaxPrice}/>
        </div>
      </div>
      <div id="favorite-filter" className="filter-option">
        <Header as="h4">My Favorites</Header>
        <CSCheckbox toggle checked={favorite} onChange={toggle('favorite')}/>
      </div>
      <div id="transferable-filter" className="filter-option">
        <Header as="h4">Transferable</Header>
        <CSCheckbox toggle checked={transferable} onChange={toggle('transferable')}/>
      </div>
    </div>
  )
})`
  display: flex;
  margin: 15px 0;
  padding: 15px 0;
  overflow-x: scroll;
  font-family: "Poppins Regular";
  color: #20293B;
  > * {
    margin-right: 15px;
  }
  #investor-filter, #contract-filter {
    min-width: 340px;
    .filter-toggles {
      display: flex;
      flex-wrap: wrap;
      font-size: 12px;
      white-space: nowrap;
      .filter-toggle {
        width: 50%;
        display: flex;
        justify-content: space-between;
        padding: 0 15px 5px 0;
      }
    }
  }
  #share-filter {
    min-width: 200px;
    .rc-slider {
      margin-top: 25px;
    }
  }
  #price-filter {
    min-width: 350px;
    .filter-inputs {
      display: flex;
      .ui.input {
        margin-right: 5px;
        input { width: 120px; }
      }
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
