import { Spinner } from "react-bootstrap";

const PageSpinner = () => {
  return (
    <div className="d-flex align-items-center justify-content-center" style={{ height: "60vh" }}>
      <Spinner animation="border" variant="primary" style={{ width: "100px", height: "100px" }} />
    </div>
  );
};

export default PageSpinner;
