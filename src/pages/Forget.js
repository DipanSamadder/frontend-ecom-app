import React from "react";
import { Link } from "react-router-dom";
import Container from "../components/Container";
import CustomInput from "../components/CustomInput";
import Meta from "../components/Meta";

const Forget = () => {
  return (
    <div>
      <Meta title="Forget title" />

      <Container className="home-wrapper-2 login py-5">
        <div className="row">
          <div className="col-md-4 offset-md-4">
            <form className="card p-4">
              <h3>Reset your password</h3>
              <small className="text-body-tertiary">
                We will send you an email to reset your password
              </small>
              <CustomInput
                type="email"
                id="email"
                name="email"
                placeholder="Email"
              />

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
      </Container>
    </div>
  );
};

export default Forget;
