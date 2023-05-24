import { useSelector, useDispatch } from "react-redux";
import { Navigate, useParams } from "react-router";
import UserCard from "../../Components/UserCard/UserCard";
import { useEffect } from "react";
import PageSpinner from "../../Components/PageSpinner/PageSpinner";
import Posts from "../../Components/Posts/Posts";
import { rootPath } from "../../Config/config";

const UserProfile = () => {
  const dispatch = useDispatch();
  const data = useSelector((state) => state);
  const params = useParams();
  const { userId } = params;
  useEffect(() => {
    dispatch({
      type: "LOAD_USER",
      userId: userId,
    });
  }, []);
  const userPosts = data.posts.filter((p) => p.userId === Number(userId));

  return (
    <>
      {data.error ? (
        <Navigate to={`${rootPath}/404`} />
      ) : (
        <>
          {data.user ? (
            <>
              <UserCard user={data.user} />
              <Posts posts={userPosts} />
            </>
          ) : (
            <PageSpinner />
          )}
        </>
      )}
    </>
  );
};

export default UserProfile;
