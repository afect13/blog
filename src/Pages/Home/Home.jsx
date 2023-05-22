import { useDispatch, useSelector } from "react-redux";
import Post from "../../Components/Post/Post";
import Spinner from "react-bootstrap/Spinner";
import { useState } from "react";
const Home = () => {
  const [showComment, setShowComent] = useState([]);
  const dispatch = useDispatch();
  const data = useSelector((store) => store);
  const handleToggleCommentButton = (postId) => {
    if (showComment.includes(postId)) {
      setShowComent((prev) => prev.filter((p) => p !== postId));
    } else {
      setShowComent((prev) => [...prev, postId]);
      dispatch({
        type: "LOAD_COMMENT",
        postId: postId,
      });
    }
  };

  return (
    <div className="row justify-content-center">
      <div className="col-10">
        <h1 className="text-center  fw-bold mb-5">Posts</h1>
        {data.users.length > 0 && data.posts.length > 0 ? (
          data.posts.map((post) => (
            <Post
              key={post.id}
              postId={post.id}
              userId={post.userId}
              title={post.title}
              body={post.body}
              users={data.users}
              comments={data.comments}
              toggleButton={handleToggleCommentButton}
              showComment={showComment}
            />
          ))
        ) : (
          <div className="d-flex align-items-center justify-content-center" style={{ height: "60vh" }}>
            <Spinner animation="border" variant="primary" style={{ width: "100px", height: "100px" }} />
          </div>
        )}
      </div>
    </div>
  );
};

export default Home;
