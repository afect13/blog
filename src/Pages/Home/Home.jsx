import { useSelector } from "react-redux";
import Post from "../../Components/Post/Post";

const Home = () => {
  const posts = useSelector((store) => store.posts);
  console.log(posts);
  return (
    <div className="row justify-content-center">
      <div className="col-10">
        <h1 className="text-center  fw-bold mb-5">Posts</h1>
        {posts.map((post) => (
          <Post key={post.id} user={post.userId} title={post.title} body={post.body} />
        ))}
        <Post />
      </div>
    </div>
  );
};

export default Home;
