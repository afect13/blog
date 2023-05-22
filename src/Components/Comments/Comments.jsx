import ListGroup from "react-bootstrap/ListGroup";

const Comments = ({ postId, comments }) => {
  return (
    <ListGroup as="ol" numbered>
      {comments[postId] &&
        comments[postId].map((commet) => (
          <ListGroup.Item key={commet.id} as="li" className="d-flex justify-content-between align-items-start">
            <div className="ms-2 me-auto">
              <div className="fw-bold">{commet.email}</div>
              {commet.body}
            </div>
          </ListGroup.Item>
        ))}
    </ListGroup>
  );
};

export default Comments;
