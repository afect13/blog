import Image from "react-bootstrap/Image";
import Button from "react-bootstrap/Button";
import Comments from "../Comments/Comments";
import Spinner from "react-bootstrap/Spinner";
import { Link } from "react-router-dom";
import { rootPath } from "../../Config/config";
import { Col, Row } from "react-bootstrap";
const Post = ({ userId, title, body, toggleButton, postId, showComment, comments }) => {
  return (
    <Row className="bg-light rounded-4 shadow p-3 mb-5 bg-body-tertiary">
      <Row>
        <Col className="d-flex justify-content-start align-items-center flex-column col-3 mt-4">
          <Link to={`${rootPath}/user/${userId}`}>
            <Image className="img-thumbnail" src={`${rootPath}/image/UsersAvatar.png`} roundedCircle />
          </Link>
        </Col>
        <Col className="mt-4 d-flex justify-content-between flex-column">
          <div>
            <h1>{title}</h1>
            <p>{body}</p>
          </div>
        </Col>
      </Row>
      <Row>
        <Col className="d-flex justify-content-center mt-2 col-3 mb-4"></Col>
        <Col className="mb-4 d-flex justify-content-between flex-column">
          <Row>
            {showComment.includes(postId) && <Comments postId={postId} comments={comments} />}
            <Col className="d-flex justify-content-end mt-4">
              {comments[postId]?.length === 0 ? (
                <Button variant="primary" disabled>
                  <Spinner as="span" animation="border" size="sm" role="status" aria-hidden="true" /> Loading...
                </Button>
              ) : (
                <Button
                  onClick={() => toggleButton(postId)}
                  variant={showComment.includes(postId) ? "danger" : "primary"}
                >
                  {showComment.includes(postId) ? "Hide Comments" : "Show Comments"}
                </Button>
              )}
            </Col>
          </Row>
        </Col>
      </Row>
    </Row>
  );
};

export default Post;
