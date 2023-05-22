import Image from "react-bootstrap/Image";
import Button from "react-bootstrap/Button";
import Comments from "../Comments/Comments";
import Spinner from "react-bootstrap/Spinner";
const Post = ({ userId, title, body, users, toggleButton, postId, showComment, comments }) => {
  return (
    <div className="row bg-light rounded-4  shadow p-3 mb-5 bg-body-tertiary">
      <div className="row">
        <div className="col-3 mt-4">
          <Image className="img-thumbnail" src="image/UsersAvatar.png" roundedCircle></Image>
        </div>
        <div className="col mt-4 d-flex justify-content-between flex-column">
          <div>
            <h1>{title}</h1>
            <p>{body}</p>
          </div>
        </div>
      </div>
      <div className="row ">
        <div className="d-flex justify-content-center mt-2 col-3 mb-4">
          <h4>{users.filter((user) => user.id == userId)[0].username}</h4>
        </div>
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
