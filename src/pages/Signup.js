import { useFormik } from "formik";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import * as Yup from "yup";
import Container from "../components/Container";
import CustomInput from "../components/CustomInput";
import Meta from "../components/Meta";
import { register } from "../features/auth/authSlice";

const Signup = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  let validation = Yup.object({
    firstname: Yup.string().required("Required"),
    lastname: Yup.string().required("Required"),
    mobile: Yup.string().required("Required"),
    email: Yup.string().email("Invalid email address").required("Required"),
    password: Yup.string().required("Required"),
    cpassword: Yup.string().required("Required"),
  });

  const formik = useFormik({
    initialValues: {
      firstname: "",
      lastname: "",
      mobile: "",
      email: "",
      password: "",
      cpassword: "",
    },
    validationSchema: validation,
    onSubmit: (values) => {
      dispatch(register(values));
    },
  });

  const { auth, isLoading, isError, isSuccess, message } = useSelector(
    (state) => state.auth
  );

  useEffect(() => {
    if (!auth == null || isSuccess) {
      navigate("/");
    }
  }, [auth, isSuccess]);
  return (
    <div>
      <Meta title="Signup title" />

      <Container className="home-wrapper-2 login py-5">
        <div className="row">
          <div className="col-md-4 offset-md-4">
            <form className="card p-4" onSubmit={formik.handleSubmit}>
              <h3>Signup</h3>
              <div className="text-danger">
                {isError === true && message !== null ? message : ""}
              </div>

              <CustomInput
                type="text"
                id="firstname"
                name="firstname"
                label="First Name"
                labelShow={false}
                onChange={formik.handleChange}
                value={formik.values.firstname}
                errorShow={true}
                formikTouched={formik.touched.firstname}
                formikErrors={formik.errors.firstname}
              />
              <CustomInput
                type="text"
                id="lastname"
                name="lastname"
                label="Last Name"
                labelShow={false}
                onChange={formik.handleChange}
                value={formik.values.lastname}
                errorShow={true}
                formikTouched={formik.touched.lastname}
                formikErrors={formik.errors.lastname}
              />
              <CustomInput
                type="text"
                id="mobile"
                name="mobile"
                label="Mobile"
                labelShow={false}
                onChange={formik.handleChange}
                value={formik.values.mobile}
                errorShow={true}
                formikTouched={formik.touched.mobile}
                formikErrors={formik.errors.mobile}
              />
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

              <CustomInput
                type="password"
                id="cpassword"
                label="Confirm Password"
                name="cpassword"
                labelShow={false}
                onChange={formik.handleChange}
                value={formik.values.cpassword}
                errorShow={true}
                formikTouched={formik.touched.cpassword}
                formikErrors={formik.errors.cpassword}
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
