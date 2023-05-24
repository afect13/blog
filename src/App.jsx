import { Routes, Route } from "react-router-dom";
import UserProfile from "./Pages/UserProfile/UserProfile";
import NotFound from "./Pages/NotFound/NotFound";
import Home from "./Pages/Home/Home";
import About from "./Pages/About/About";
import Layout from "./Layout/Layout";
import { rootPath } from "./Config/config";

const App = () => {
  return (
    <Routes>
      <Route path={`${rootPath}/`} element={<Layout />} exact>
        <Route index element={<Home />} />
        <Route path={`${rootPath}/about`} element={<About />} />
        <Route path={`${rootPath}/user/:userId`} element={<UserProfile />} />
        <Route path="*" element={<NotFound />} />
      </Route>
    </Routes>
  );
};

export default App;
