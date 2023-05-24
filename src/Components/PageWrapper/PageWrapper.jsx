const PageWrapper = ({ title, children }) => {
  return (
    <div className="row justify-content-center mt-5">
      <div className="col-10">
        <h1 className="text-center  fw-bold mb-5">{title}</h1>
        {children}
      </div>
    </div>
  );
};

export default PageWrapper;
