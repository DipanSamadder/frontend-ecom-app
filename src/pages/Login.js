import React from "react";
import { Link } from "react-router-dom";
import Meta from "../components/Meta";

const Login = () => {
  return (
    <div>
      <Meta title="Login title" />

      <div className="home-wrapper-2 login py-5">
        <div className="container-xxl">
          <div className="row">
            <div className="col-md-4 offset-md-4">
              <form className="card p-4">
                <h3>Login</h3>
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
                <div className="d-flex align-items-center justify-content-between mb-2">
                  <p>
                    <Link to="/forget">
                      <small>Forget Password?</small>
                    </Link>
                  </p>
                  <p>
                    <small>
                      No account? <Link to="/signup">Create one here</Link>
                    </small>
                  </p>
                </div>
                <button type="submit" className="btn btn-primary button">
                  Login
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
