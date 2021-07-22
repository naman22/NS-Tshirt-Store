import React from "react";
import Menu from "./Menu";

const Base = ({
  title = "My Title",
  description = "My desription",
  className = "bg-dark text-white p-4 ",
  children
}) => (
  <div>
    <Menu />
    <div className="container-fluid">
      <div className="jumbotron lead bg-success font-weight-normal text-center">
        <h1 className="display-4">{title}</h1>
        <h3 className="lead">{description}</h3>
      </div>
      <div className={className}>{children}</div>
    </div>
    <footer className="footer bg-dark mt-auto py-3">
      <div className="container-fluid bg-success text-white text-center py-3">
        <h4>If you got any questions, feel free to reach out!</h4>
        <button className="btn btn-warning btn-lg">Contact Us</button>
      </div>
      <div className="container">
        <span className="text-muted">
          An Amazing <span className="text-white">Tshirt-Store</span>
        </span>
      </div>
    </footer>
  </div>
);

export default Base;
