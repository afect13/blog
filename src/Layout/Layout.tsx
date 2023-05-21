import { Outlet } from "react-router";
import NavBar from "../Components/NavBar/NavBar";
import Container from "react-bootstrap/Container";

const Layout = () => {
  return (
    <Container>
      <NavBar />
      <Outlet />
    </Container>
  );
};

export default Layout;
