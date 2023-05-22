import { useSelector } from "react-redux";
import Post from "../../Components/Post/Post";
import Spinner from "react-bootstrap/Spinner";
const Home = () => {
  const data = useSelector((store) => store);
  return (
    <div className="row justify-content-center">
      <div className="col-10">
        <h1 className="text-center  fw-bold mb-5">Posts</h1>
        {data.users.length > 0 && data.posts.length > 0 ? (
          data.posts.map((post) => (
            <Post key={post.id} userId={post.userId} title={post.title} body={post.body} users={data.users} />
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
