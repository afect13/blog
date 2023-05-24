import { useSelector } from "react-redux";
import Posts from "../../Components/Posts/Posts";

const Home = () => {
  const posts = useSelector((store) => store.posts);
  return <Posts posts={posts} />;
};

export default Home;
