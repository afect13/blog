import { useSelector } from "react-redux";
import { useParams } from "react-router";
import PageWrapper from "../../Components/PageWrapper/PageWrapper";

const UserProfile = () => {
  const users = useSelector((state) => state.users);
  const params = useParams();
  const { userId } = params;
  const user = users.filter((u) => u.id === Number(userId));

  return <>{user.length > 0 && <PageWrapper title={user[0].username}></PageWrapper>}</>;
};

export default UserProfile;
