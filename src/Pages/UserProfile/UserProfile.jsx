import { useSelector, useDispatch } from "react-redux";
import { useParams } from "react-router";
import PageWrapper from "../../Components/PageWrapper/PageWrapper";
import UserCard from "../../Components/UserCard/UserCard";
import { useEffect } from "react";
import { Spinner } from "react-bootstrap";

const UserProfile = () => {
  const dispatch = useDispatch();
  const user = useSelector((state) => state.user);
  const params = useParams();
  const { userId } = params;
  useEffect(() => {
    dispatch({
      type: "LOAD_USER",
      userId: userId,
    });
  }, []);

  console.log(user);
  return (
    <>
      {user !== null ? (
        <PageWrapper title={user.name}>
          <UserCard user={user} />
        </PageWrapper>
      ) : (
        <div className="d-flex align-items-center justify-content-center" style={{ height: "60vh" }}>
          <Spinner animation="border" variant="primary" style={{ width: "100px", height: "100px" }} />
        </div>
      )}
    </>
  );
};

export default UserProfile;
