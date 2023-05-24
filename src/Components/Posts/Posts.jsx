import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import Post from "../../Components/Post/Post";
import PageWrapper from "../../Components/PageWrapper/PageWrapper";
import PageSpinner from "../PageSpinner/PageSpinner";
const Posts = ({ posts }) => {
  const [showComment, setShowComent] = useState([]);
  const dispatch = useDispatch();
  const comments = useSelector((store) => store.comments);
  const handleToggleCommentButton = (postId) => {
    if (showComment.includes(postId)) {
      setShowComent((prev) => prev.filter((p) => p !== postId));
      dispatch({
        type: "REMOVE_COMMENT",
        postId: postId,
      });
    } else {
      setShowComent((prev) => [...prev, postId]);
      dispatch({
        type: "LOAD_COMMENT",
        postId: postId,
      });
    }
  };
  return (
    <PageWrapper title={"Posts"}>
      {posts.length > 0 ? (
        posts.map((post) => (
          <Post
            key={post.id}
            postId={post.id}
            userId={post.userId}
            title={post.title}
            body={post.body}
            comments={comments}
            toggleButton={handleToggleCommentButton}
            showComment={showComment}
          />
        ))
      ) : (
        <PageSpinner />
      )}
    </PageWrapper>
  );
};

export default Posts;
