import React from "react";
import { Link } from "react-router-dom";
import Meta from "../components/Meta";

const Forget = () => {
  return (
    <div>
      <Meta title="Forget title" />

      <div className="home-wrapper-2 login py-5">
        <div className="container-xxl">
          <div className="row">
            <div className="col-md-4 offset-md-4">
              <form className="card p-4">
                <h3>Reset your password</h3>
                <small className="text-body-tertiary">
                  We will send you an email to reset your password
                </small>
                <div className="mb-3">
                  <input
                    type="email"
                    className="form-control"
                    id="exampleInputEmail1"
                    aria-describedby="emailHelp"
                    placeholder="Email"
                  />
                </div>
                <div className="d-flex align-items-center justify-content-between mb-2">
                  <Link to="/reset" className="btn btn-primary button">
                    Reset
                  </Link>
                  <p>
                    <small>
                      <Link to="/login">Cancel</Link>
                    </small>
                  </p>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Forget;
