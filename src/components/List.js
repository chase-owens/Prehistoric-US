import React from "react";
import {
  ListGroup,
  ListGroupItem,
  ListGroupItemHeading,
  ListGroupItemText
} from "reactstrap";

const List = ({ discoveriesDisplayed }) => {
  return (
    <div className="list-div">
      <ListGroup className="list">
        {discoveriesDisplayed.map((discovery, i) => (
          <ListGroupItem className="list-item" key={i} title={discovery.title}>
            <ListGroupItemHeading className="list-words">
              {discovery.title}
            </ListGroupItemHeading>
            <ListGroupItemText className="list-words">
              {discovery.description}
            </ListGroupItemText>
          </ListGroupItem>
        ))}
      </ListGroup>
    </div>
  );
};

export default List;
