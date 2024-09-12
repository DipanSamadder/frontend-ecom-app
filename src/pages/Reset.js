import React from "react";
import { Link } from "react-router-dom";
import Container from "../components/Container";
import CustomInput from "../components/CustomInput";
import Meta from "../components/Meta";

const Reset = () => {
  return (
    <div>
      <Meta title="Reset title" />

      <Container className="home-wrapper-2 login py-5">
        <div className="row">
          <div className="col-md-4 offset-md-4">
            <form className="card p-4">
              <h3>Create new password</h3>
              <CustomInput
                type="password"
                name="password"
                id="password"
                placeholder="New Password"
              />
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
      </Container>
    </div>
  );
};

export default Reset;
