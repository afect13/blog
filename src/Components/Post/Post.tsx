import Image from "react-bootstrap/Image";
import Button from "react-bootstrap/Button";

const Post = () => {
  return (
    <div className="row bg-light rounded-4  shadow p-3 mb-5 bg-body-tertiary">
      <div className="row">
        <div className="col-3 mt-4">
          <Image className="img-thumbnail" src="image/UsersAvatar.png" roundedCircle></Image>
        </div>
        <div className="col mt-4 d-flex justify-content-between flex-column">
          <div>
            <h1>qui est esse</h1>
            <p>
              et iusto sed quo iure\nvoluptatem occaecati omnis eligendi aut ad\nvoluptatem doloribus vel accusantium
              quis pariatur\nmolestiae porro eius odio et labore et velit aut
            </p>
          </div>
        </div>
      </div>
      <div className="row ">
        <div className="d-flex justify-content-center mt-2 col-3 mb-4">
          <h4>USERS</h4>
        </div>
        <div className="col mb-4 d-flex justify-content-between flex-column">
          <div className="row">
            {/* Коменты */}
            <div className="col d-flex justify-content-end mt-4">
              <Button variant="primary">Show Comments</Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Post;
