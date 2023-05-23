import Container from "react-bootstrap/Container";
import Navbar from "react-bootstrap/Navbar";
import Offcanvas from "react-bootstrap/Offcanvas";
import { Link } from "react-router-dom";
import Col from "react-bootstrap/Col";
import Image from "react-bootstrap/Image";
import Row from "react-bootstrap/Row";
import { rootPath } from "../../Config/config";

const NavBar = () => {
  return (
    <>
      <Navbar expand={false} className="mb-3 shadow bg-light p-3 mb-5 bg-body-tertiary rounded-bottom">
        <Container fluid>
          <Navbar.Brand href={`${rootPath}/`}>BloG</Navbar.Brand>
          <Navbar.Toggle aria-controls="offcanvasNavbar-expand-false" />
          <Navbar.Offcanvas
            id="offcanvasNavbar-expand-false"
            aria-labelledby="offcanvasNavbarLabel-expand-false"
            placement="start"
          >
            <Offcanvas.Header closeButton>
              <Offcanvas.Title>BloG</Offcanvas.Title>
            </Offcanvas.Header>
            <Offcanvas.Body>
              <Row className="justify-content-center">
                <Col className="col-8  ">
                  <Image className="img-thumbnail " src={`${rootPath}/image/avatar.png`} roundedCircle />
                </Col>
              </Row>
              <Row className="justify-content-center mt-2">
                <Col>
                  <p className="fs-5 text-center fw-light text-secondary">developcat13@gmail.com</p>
                </Col>
              </Row>
              <nav className="d-flex flex-column align-items-center mt-2 gap-3">
                <Link className="text-decoration-none fs-5 text-uppercase text-reset" to={`${rootPath}/`}>
                  Список постов
                </Link>
                <Link className="text-decoration-none fs-5 text-uppercase text-reset" to={`${rootPath}/about`}>
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
