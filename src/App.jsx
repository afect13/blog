import { Routes, Route } from "react-router-dom";
import Home from "./Pages/Home/Home";
import About from "./Pages/About/About";
import Users from "./Pages/Users/Users";
import Layout from "./Layout/Layout";
import { rootPath } from "./Config/config";

const App = () => {
  return (
    <div>
      <Routes>
        <Route path={`${rootPath}/`} element={<Layout />}>
          <Route index element={<Home />} />
          <Route path={`${rootPath}/about`} element={<About />} />
          <Route path={`${rootPath}/users/:userId?`} element={<Users />} />
        </Route>
      </Routes>
    </div>
  );
};

export default App;
