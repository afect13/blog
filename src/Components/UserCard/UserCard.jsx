import { Card, Container, Row, Col, Image } from "react-bootstrap";
import { rootPath } from "../../Config/config";

const UserCard = ({ user }) => {
  return (
    <Container>
      <Card className="shadow p-4">
        <Card.Body>
          <Row>
            <Col>
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
              <Image className="img-thumbnail" src={`${rootPath}/image/UsersAvatar.png`} roundedCircle />
            </Col>
          </Row>
        </Card.Body>
      </Card>
    </Container>
  );
};

export default UserCard;
