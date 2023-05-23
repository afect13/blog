import { useParams } from "react-router";
import UserProfile from "../UserProfile/UserProfile";

const Users = () => {
  const params = useParams();
  const { userId } = params;
  return <>{userId ? <UserProfile /> : <div>Users</div>} </>;
};

export default Users;
