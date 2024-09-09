import React from "react";
import { Link } from "react-router-dom";

const Bradecrumb = (props) => {
  const { title } = props;
  return (
    <div className="py-5">
      <div className="container-xxl">
        <div className="row">
          <div className="col-md-12">
            <p className="text-center">
              <Link to="/" className="text-dark text-blod">
                Home &nbsp;
              </Link>
              / {title}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Bradecrumb;
