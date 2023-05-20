import Container from "react-bootstrap/Container";
import Navbar from "react-bootstrap/Navbar";
import Offcanvas from "react-bootstrap/Offcanvas";
import { Link } from "react-router-dom";

const NavBar = () => {
  return (
    <>
      <Navbar bg="ligth" expand={false} className="mb-3 rounded-bottom">
        <Container fluid>
          <Navbar.Brand href="/">BloG</Navbar.Brand>
          <Navbar.Toggle aria-controls={`offcanvasNavbar-expand-${"false"}`} />
          <Navbar.Offcanvas
            id={`offcanvasNavbar-expand-${false}`}
            aria-labelledby={`offcanvasNavbarLabel-expand-${false}`}
            placement="start"
          >
            <Offcanvas.Header closeButton>
              <Offcanvas.Title>BloG</Offcanvas.Title>
            </Offcanvas.Header>
            <Offcanvas.Body>
              <nav className="d-flex flex-column align-items-center gap-3">
                <Link className="text-decoration-none fs-5 text-uppercase text-reset" to="/">
                  Список постов
                </Link>
                <Link className="text-decoration-none fs-5 text-uppercase text-reset" to="/about">
                  Обо мне
                </Link>
              </nav>
            </Offcanvas.Body>
          </Navbar.Offcanvas>
        </Container>
      </Navbar>
    </>
  );
};

export default NavBar;
