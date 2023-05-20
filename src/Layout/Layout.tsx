import { Outlet } from "react-router";
import NavBar from "../Components/NavBar/NavBar";
import Container from "react-bootstrap/Container";

const Layout = () => {
  return (
    <div>
      <Container>
        <NavBar />
        <Outlet />
      </Container>
    </div>
  );
};

export default Layout;
