import React from "react";
import { Link } from "react-router-dom";
import Container from "../components/Container";
import CustomInput from "../components/CustomInput";
import Meta from "../components/Meta";

const Signup = () => {
  return (
    <div>
      <Meta title="Signup title" />

      <Container className="home-wrapper-2 login py-5">
        <div className="row">
          <div className="col-md-4 offset-md-4">
            <form className="card p-4">
              <h3>Signup</h3>
              <CustomInput type="text" placeholder="Name.." name="name" />

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
                placeholder="Password.."
              />

              <CustomInput
                type="password"
                name="password"
                id="cpasswordForm"
                placeholder="Confirm Password.."
              />
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
      </Container>
    </div>
  );
};

export default Signup;
