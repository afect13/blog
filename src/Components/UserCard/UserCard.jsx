import { Card, Row, Col, Image, Button } from "react-bootstrap";
import { rootPath } from "../../Config/config";
import { useNavigate } from "react-router-dom";
import PageWrapper from "../PageWrapper/PageWrapper";
const UserCard = ({ user }) => {
  const navigate = useNavigate();
  const handleGoBack = () => {
    navigate(-1);
  };
  return (
    <PageWrapper title={user.name}>
      <Button className="mb-4" onClick={handleGoBack} variant="primary">
        <span>&lt; Go Back</span>
      </Button>
      <Card className="shadow p-4">
        <Card.Body>
          <Row>
            <Col className="d-flex flex-column align-items-left justify-content-around">
              <Card.Text className="fs-5">
                <strong>Username:</strong> {user.username}
              </Card.Text>
              <Card.Text className="fs-5">
                <strong>Email:</strong> {user.email}
              </Card.Text>
              <Card.Text className="fs-5">
                <strong>Address:</strong>
                <br />
                {user.address.street}, {user.address.suite}
                <br />
                {user.address.city}, {user.address.zipcode}
              </Card.Text>
              <Card.Text className="fs-5">
                <strong>Phone:</strong> {user.phone}
              </Card.Text>
              <Card.Text className="fs-5">
                <strong>Website:</strong> {user.website}
              </Card.Text>
              <Card.Text className="fs-5">
                <strong>Company:</strong> {user.company.name}
              </Card.Text>
              <Card.Text className="fs-5">
                <strong>Catch Phrase:</strong> {user.company.catchPhrase}
              </Card.Text>
              <Card.Text className="fs-5">
                <strong>Business:</strong> {user.company.bs}
              </Card.Text>
            </Col>
            <Col className="d-flex align-items-center justify-content-center">
              <Image className="img-thumbnail" src={`${rootPath}/image/UsersAvatar.png`} />
            </Col>
          </Row>
        </Card.Body>
      </Card>
    </PageWrapper>
  );
};

export default UserCard;
