import { useSelector } from "react-redux";
import { useParams } from "react-router";
import PageWrapper from "../../Components/PageWrapper/PageWrapper";
import UserCard from "../../Components/UserCard/UserCard";

const UserProfile = () => {
  const users = useSelector((state) => state.users);
  const params = useParams();
  const { userId } = params;
  const user = users.filter((u) => u.id === Number(userId));
  console.log(user);

  return (
    <>
      {user.length > 0 && (
        <PageWrapper title={user[0].name}>
          <UserCard user={user[0]} />
        </PageWrapper>
      )}
    </>
  );
};

export default UserProfile;
