import React from "react";
import { Link } from "react-router-dom";
import Container from "../components/Container";
import CustomInput from "../components/CustomInput";
import Meta from "../components/Meta";

const Login = () => {
  return (
    <div>
      <Meta title="Login title" />

      <Container className="home-wrapper-2 login py-5">
        <div className="row">
          <div className="col-md-4 offset-md-4">
            <form className="card p-4">
              <h3>Login</h3>
              <CustomInput
                type="email"
                name="email"
                id="email"
                placeholder="Email.."
              />

              <CustomInput
                type="password"
                name="password"
                id="passwordForm"
                placeholder="Password"
              />
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
      </Container>
    </div>
  );
};

export default Login;
