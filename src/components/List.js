import React, { Component } from "react";
import {
  ListGroup,
  ListGroupItem,
  ListGroupItemHeading,
  ListGroupItemText
} from "reactstrap";

class List extends Component {
  state = {};
  render() {
    let { discoveriesDisplayed } = this.props;
    return (
      <div className="list-div">
        <ListGroup className="list">
          {discoveriesDisplayed.map((discovery, i) => (
            <ListGroupItem className="list-item" key={i}>
              <ListGroupItemHeading>{discovery.title}</ListGroupItemHeading>
              <ListGroupItemText>{discovery.description}</ListGroupItemText>
            </ListGroupItem>
          ))}
        </ListGroup>
      </div>
    );
  }
}

export default List;
