import { useSelector, useDispatch } from "react-redux";
import { useParams } from "react-router";
import UserCard from "../../Components/UserCard/UserCard";
import { useEffect } from "react";
import PageSpinner from "../../Components/PageSpinner/PageSpinner";
import Posts from "../../Components/Posts/Posts";

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
  console.log(data.user);
  return (
    <>
      {data.user !== null ? (
        <>
          <UserCard user={data.user} />
          <Posts posts={userPosts} />
        </>
      ) : (
        <PageSpinner />
      )}
    </>
  );
};

export default UserProfile;
