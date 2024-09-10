import React from "react";
import { Link } from "react-router-dom";
import Meta from "../components/Meta";

const Reset = () => {
  return (
    <div>
      <Meta title="Reset title" />

      <div className="home-wrapper-2 login py-5">
        <div className="container-xxl">
          <div className="row">
            <div className="col-md-4 offset-md-4">
              <form className="card p-4">
                <h3>Create new password</h3>
                <div className="mb-3">
                  <input
                    type="password"
                    className="form-control"
                    aria-describedby="password"
                    placeholder="New Password"
                  />
                </div>
                <div className="d-flex align-items-center justify-content-between mb-2">
                  <Link className="btn btn-primary button">Submit</Link>
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

export default Reset;
