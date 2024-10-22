import { useFormik } from "formik";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import * as Yup from "yup";
import Container from "../components/Container";
import CustomInput from "../components/CustomInput";
import Meta from "../components/Meta";
import { login } from "../features/auth/authSlice";

const Login = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  let validation = Yup.object({
    email: Yup.string().email("Invalid email address").required("Required"),
    password: Yup.string().required("Required"),
  });

  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
    },
    validationSchema: validation,
    onSubmit: (values) => {
      dispatch(login(values));
    },
  });

  const { loginData, isLoading, isError, isSuccess, message } = useSelector(
    (state) => state.auth
  );

  useEffect(() => {
    if (!loginData == null || isSuccess) {
      localStorage.setItem("token", loginData.token);
      navigate("/");
    }
  }, [loginData, isSuccess]);

  return (
    <div>
      <Meta title="Login title" />

      <Container className="home-wrapper-2 login py-5">
        <div className="row">
          <div className="col-md-4 offset-md-4">
            <form className="card p-4" onSubmit={formik.handleSubmit}>
              <h3>Login</h3>
              <div className="text-danger">
                {isError === true && message !== null ? message : ""}
              </div>
              <CustomInput
                type="email"
                id="email"
                name="email"
                label="Email"
                labelShow={false}
                onChange={formik.handleChange}
                value={formik.values.email}
                errorShow={true}
                formikTouched={formik.touched.email}
                formikErrors={formik.errors.email}
              />
              <CustomInput
                type="password"
                id="password"
                label="Password"
                name="password"
                labelShow={false}
                onChange={formik.handleChange}
                value={formik.values.password}
                errorShow={true}
                formikTouched={formik.touched.password}
                formikErrors={formik.errors.password}
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
