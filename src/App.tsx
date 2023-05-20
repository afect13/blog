import { Routes, Route } from "react-router-dom";
import Home from "./Pages/Home/Home";
import About from "./Pages/About/About";
import Users from "./Pages/Users/Users";
import Layout from "./Layout/Layout";
import "bootstrap/dist/css/bootstrap.min.css";
const App = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="about" element={<About />} />
          <Route path="users" element={<Users />} />
        </Route>
      </Routes>
    </div>
  );
};

export default App;
