import React from "react";
import { Link } from "react-router-dom";
import Meta from "../components/Meta";

const Signup = () => {
  return (
    <div>
      <Meta title="Signup title" />

      <div className="home-wrapper-2 login py-5">
        <div className="container-xxl">
          <div className="row">
            <div className="col-md-4 offset-md-4">
              <form className="card p-4">
                <h3>Signup</h3>
                <div className="mb-3">
                  <input
                    type="text"
                    className="form-control"
                    aria-describedby="nameHelp"
                    placeholder="Name"
                    name="name"
                  />
                </div>
                <div className="mb-3">
                  <input
                    type="email"
                    className="form-control"
                    id="exampleInputEmail1"
                    aria-describedby="emailHelp"
                    placeholder="Email"
                  />
                </div>
                <div className="mb-3">
                  <input
                    type="password"
                    className="form-control"
                    id="passwordForm"
                    placeholder="Password"
                  />
                </div>
                <div className="mb-3">
                  <input
                    type="password"
                    className="form-control"
                    placeholder="Confirm Password"
                  />
                </div>
                <div className=" mb-2 d-flex align-items-center justify-content-between">
                  <p>
                    <small>
                      Have account? <Link to="/login">Login here</Link>
                    </small>
                  </p>
                </div>
                <button type="submit" className="btn btn-primary button">
                  Signup
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Signup;
