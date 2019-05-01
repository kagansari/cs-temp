import styled from 'styled-components'
import Slider from 'rc-slider'
import {Button, Checkbox, Header, Icon, Input, Label} from 'semantic-ui-react'
import React from 'react'
import 'rc-slider/assets/index.css';

// override default rc-slider
const CSRange = styled(Slider.Range)`
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

const FilterHeader = styled(({filter, showFilter, ...props}) => (
  <div {...props}>
    <Button basic icon labelPosition="left">
      <Icon name="sliders horizontal"/>
      <b>Filter</b>
    </Button>
    <div>
      <b>Show only:</b>
    </div>
    <div id="filter-labels">
      <Label as="a"><Icon name="times"/> Individual</Label>
      <Label as="a"><Icon name="times"/> Employee</Label>
    </div>
    <Button size="small" icon labelPosition="left">
      Clear <Icon name="trash"/>
    </Button>
    <Button size="small" icon labelPosition="left" color="violet">
      Apply <Icon name="check"/>
    </Button>
  </div>
))`
  display: flex;
  align-items: center;
  font-size: 12px;
  > * {
    margin: 0 6px;
  }
  #filter-labels {
    flex-grow: 1;
  }
`

const FilterOptions = styled(({filter, showFilter, ...props}) => (
  <div {...props}>
    <div id="investor-filter" className="filter-option">
      <Header as="h4">Investors</Header>
      <div className="filter-toggles">
        <div className="filter-toggle"><span>Individuals</span> <CSCheckbox toggle defaultChecked/></div>
        <div className="filter-toggle"><span>Institutionals</span> <CSCheckbox toggle/></div>
        <div className="filter-toggle"><span>Employees</span> <CSCheckbox toggle/></div>
      </div>
    </div>
    <div id="contract-filter" className="filter-option">
      <Header as="h4">Contract</Header>
      <div className="filter-toggles">
        <div className="filter-toggle"><span>Safe</span> <CSCheckbox toggle/></div>
        <div className="filter-toggle"><span>Stock</span> <CSCheckbox toggle/></div>
        <div className="filter-toggle"><span>Convertible Note</span> <CSCheckbox toggle/></div>
        <div className="filter-toggle"><span>VC Portfolio</span> <CSCheckbox toggle/></div>
      </div>
    </div>
    <div id="share-filter" className="filter-option">
      <Header as="h4">Share Percentage</Header>
      <CSRange
        min={0}
        max={100}
        allowCross={false}
        // handle={RangeHandle}
        value={[20, 80]}
        tipFormatter={value => `${value}%`}
      />
    </div>
    <div id="price-filter" className="filter-option">
      <Header as="h4">Price</Header>
      <div className="filter-inputs">
        <Input label="Min." type="number" placeholder="Price" size="small"/>
        <Input label="Max." type="number" placeholder="Price" size="small"/>
      </div>
    </div>
    <div id="favorite-filter" className="filter-option">
      <Header as="h4">My Favorites</Header>
      <CSCheckbox toggle/>
    </div>
    <div id="transferable-filter" className="filter-option">
      <Header as="h4">Transferable</Header>
      <CSCheckbox toggle/>
    </div>
  </div>
))`
  display: flex;
  margin: 15px 0;
  padding: 15px 0;
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

const Filter = styled(({filter, showFilter, ...props}) => (
  <div {...props}>
    <FilterHeader filter={filter}/>
    <FilterOptions filter={filter}/>
  </div>
))`
  font-family: "Poppins Regular";
  color: #20293B;
`

export default Filter
