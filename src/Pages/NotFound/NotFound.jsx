import PageWrapper from "../../Components/PageWrapper/PageWrapper";
import { Button, Container } from "react-bootstrap";
import { Link } from "react-router-dom";
import { rootPath } from "../../Config/config";

const NotFound = () => {
  return (
    <PageWrapper>
      <Container className="d-flex flex-column align-items-center justify-content-center">
        <h1>404 - Page Not Found</h1>
        <p>Sorry, the requested page does not exist.</p>
        <Button as={Link} to={`${rootPath}/`} variant="primary">
          Go to Homepage
        </Button>
      </Container>
    </PageWrapper>
  );
};

export default NotFound;
