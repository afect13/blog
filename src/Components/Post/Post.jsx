import Image from "react-bootstrap/Image";
import Button from "react-bootstrap/Button";
import Comments from "../Comments/Comments";
import Spinner from "react-bootstrap/Spinner";
import { Link } from "react-router-dom";
import { rootPath } from "../../Config/config";
const Post = ({ userId, title, body, toggleButton, postId, showComment, comments }) => {
  return (
    <div className="row bg-light rounded-4  shadow p-3 mb-5 bg-body-tertiary">
      <div className="row">
        <div className="d-flex justify-content-statr align-items-center flex-column col-3 mt-4">
          <Link to={`${rootPath}/users/${userId}`}>
            <Image className="img-thumbnail" src={`${rootPath}/image/UsersAvatar.png`} roundedCircle />
          </Link>
        </div>
        <div className="col mt-4 d-flex justify-content-between flex-column">
          <div>
            <h1>{title}</h1>
            <p>{body}</p>
          </div>
        </div>
      </div>
      <div className="row ">
        <div className="d-flex justify-content-center mt-2 col-3 mb-4"></div>
        <div className="col mb-4 d-flex justify-content-between flex-column">
          <div className="row">
            {showComment.includes(postId) && <Comments postId={postId} comments={comments} />}
            <div className="col d-flex justify-content-end mt-4">
              {comments[postId]?.length === 0 ? (
                <Button variant="primary" disabled>
                  <Spinner as="span" animation="grow" size="sm" role="status" aria-hidden="true" />
                  Loading...
                </Button>
              ) : (
                <Button
                  onClick={() => toggleButton(postId)}
                  variant={showComment.includes(postId) ? "danger" : "primary"}
                >
                  {showComment.includes(postId) ? "Hide Comments" : "Show Comments"}
                </Button>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Post;
