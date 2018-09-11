import React, { Component } from "react";
import {
  Dropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem
} from "reactstrap";

class Filter extends Component {
  state = {
    dropdownOpen: false
  };

  render() {
    const { type, updateDiscoveriesDisplayed } = this.props;
    return (
      <div className="selector-container">
        <Dropdown isOpen={this.state.dropdownOpen} toggle={this.toggle}>
          <DropdownToggle id="dropdown" caret>
            {type}
          </DropdownToggle>
          <DropdownMenu
            id="selector"
            onClick={event => updateDiscoveriesDisplayed(event.target.value)}
            aria-labelledby="IDREF"
            name="prehistoric finds"
            role="listbox"
            aria-activedescendant="all"
          >
            <DropdownItem id="all" value="all">
              All Finds
            </DropdownItem>
            <DropdownItem id="dinosaur" value="dinosaur">
              Dinosaurs
            </DropdownItem>
            <DropdownItem id="mammoth" value="mammoth">
              Mammoths
            </DropdownItem>
            <DropdownItem id="track" value="track">
              Tracks
            </DropdownItem>
          </DropdownMenu>
        </Dropdown>
      </div>
    );
  }

  toggle = () => {
    this.setState(prevState => ({
      dropdownOpen: !prevState.dropdownOpen
    }));
  };
}

export default Filter;
