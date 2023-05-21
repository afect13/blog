import Post from "../../Components/Post/Post";

const Home = () => {
  return (
    <div className="row justify-content-center">
      <div className="col-10">
        <h1 className="text-center  fw-bold mb-5">Posts</h1>
        <Post />
      </div>
    </div>
  );
};

export default Home;
