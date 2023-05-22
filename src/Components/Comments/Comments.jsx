import React from "react";

import ListGroup from "react-bootstrap/ListGroup";
const Comments = () => {
  return (
    <div>
      <ListGroup as="ol" numbered>
        <ListGroup.Item as="li" className="d-flex justify-content-between align-items-start">
          <div className="ms-2 me-auto">
            <div className="fw-bold">Subheading</div>
            Cras justo odio
          </div>
        </ListGroup.Item>
        <ListGroup.Item as="li" className="d-flex justify-content-between align-items-start">
          <div className="ms-2 me-auto">
            <div className="fw-bold">Subheading</div>
            Cras justo odio
          </div>
        </ListGroup.Item>
        <ListGroup.Item as="li" className="d-flex justify-content-between align-items-start">
          <div className="ms-2 me-auto">
            <div className="fw-bold">Subheading</div>
            Cras justo odio
          </div>
        </ListGroup.Item>
      </ListGroup>
    </div>
  );
};

export default Comments;