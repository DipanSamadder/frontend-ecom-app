import React from "react";

import Rating from "react-rating";
import Bradecrumb from "../components/Bradecrumb";
import Container from "../components/Container";
import Meta from "../components/Meta";
const Checkout = () => {
  return (
    <>
      <Meta title="Checkout title" />
      <Bradecrumb title="Checkout" />

      <Container className="home-wrapper-2 checkout  py-5">
        <div className="row">
          <div className="col-md-7">
            <form className="card p-3 rounded">
              <h6 className="mb-2">Contact</h6>
              <div className="mb-3">
                <input
                  type="email"
                  className="form-control"
                  id="exampleInputEmail1"
                  placeholder="Email address"
                />
              </div>
              <hr />
              <h6 className="mb-2">Delivery</h6>

              <div className="mb-3">
                <select name="country" id="country" className="form-control">
                  <option>Select Country</option>
                  <option>Select Country</option>
                  <option>Select Country</option>
                  <option>Select Country</option>
                </select>
              </div>

              <div class="row">
                <div className="col-md-6 mb-3">
                  <input
                    type="text"
                    className="form-control"
                    id="firstname"
                    placeholder="First Name"
                  />
                </div>
                <div className="col-md-6 mb-3">
                  <input
                    type="text"
                    className="form-control"
                    id="lastname"
                    placeholder="Last Name"
                  />
                </div>
              </div>
              <div className="mb-3">
                <input
                  type="text"
                  className="form-control"
                  id="address"
                  name="address"
                  placeholder="Address"
                />
              </div>
              <div className="mb-3">
                <input
                  type="text"
                  className="form-control"
                  id="apartment"
                  name="apartment"
                  placeholder="Apartment"
                />
              </div>

              <div class="row">
                <div className="col-md-4 mb-3">
                  <input
                    type="text"
                    className="form-control"
                    id="city"
                    name="city"
                    placeholder="City"
                  />
                </div>
                <div className="col-md-4 mb-3">
                  <input
                    type="text"
                    className="form-control"
                    id="State"
                    name="state"
                    placeholder="State"
                  />
                </div>
                <div className="col-md-4 mb-3">
                  <input
                    type="text"
                    className="form-control"
                    id="securitycode"
                    name="postcode"
                    placeholder="Post Code"
                  />
                </div>
              </div>
              <hr />
              <h6 className="mb-2">Shipping method</h6>
              <div className="mb-3">
                <input
                  type="text"
                  className="form-control"
                  id="shipping"
                  name="shipping"
                  placeholder="Shipping Details"
                />
              </div>

              <hr />

              <h6 className="mb-2">Payment</h6>
              <div class="card p-4 rounded mb-3">
                <h6 className="mb-2">Credit card</h6>
                <div className="mb-3">
                  <input
                    type="text"
                    className="form-control"
                    id="card_number"
                    name="card_number"
                    placeholder="Card Number"
                  />
                </div>

                <div class="row">
                  <div className="col-md-4 mb-3">
                    <input
                      type="text"
                      className="form-control"
                      id="city"
                      name="city"
                      placeholder="City"
                    />
                  </div>
                  <div className="col-md-4 mb-3">
                    <input
                      type="text"
                      className="form-control"
                      id="expairy"
                      name="expairy"
                      placeholder="expairy"
                    />
                  </div>
                  <div className="col-md-4 mb-3">
                    <input
                      type="text"
                      className="form-control"
                      id="securitycode"
                      name="securitycode"
                      placeholder="Security Code"
                    />
                  </div>
                </div>
                <div className="mb-3">
                  <input
                    type="text"
                    className="form-control"
                    id="card_name"
                    name="card_name"
                    placeholder="Name of Card"
                  />
                </div>
              </div>
              <button type="submit" className="btn btn-primary">
                Submit
              </button>
            </form>
          </div>
          <div className="col-md-5">
            <table className="table bg-transparent cart-table">
              <tbody>
                <tr>
                  <td>
                    <div class="checkout-product-details">
                      <div className="row">
                        <div className="col-md-4">
                          <img
                            src="/images/tab1.jpg"
                            className="img-fluid"
                            alt=""
                          />
                        </div>
                        <div className="col-md-8">
                          <h6 className="mb-1">
                            Oppo A16 64 GB, 4 GB RAM, Pearl Blue, Mobile Phone
                          </h6>
                          {/* Rating */}
                          <p className="mb-1 ratting d-flex align-items-center gap-10">
                            <Rating
                              initialRating="3"
                              quiet="false"
                              readonly="false"
                              emptySymbol={
                                <img
                                  src="/images/star-grey.png"
                                  className="icon"
                                  alt=""
                                />
                              }
                              fullSymbol={
                                <img
                                  src="/images/star-yellow.png"
                                  className="icon"
                                  alt=""
                                />
                              }
                            />
                            <span className="text-body-tertiary">(2)</span>
                          </p>
                          {/* Price */}
                          <p className="mb-2 price">
                            <s className="price-gray">$32.00</s> $32.00 X 2
                          </p>
                        </div>
                      </div>
                    </div>
                  </td>
                  <td>$55.00 </td>
                </tr>
                <tr>
                  <td>
                    <div class="checkout-product-details">
                      <div className="row">
                        <div className="col-md-4">
                          <img
                            src="/images/tab1.jpg"
                            className="img-fluid"
                            alt=""
                          />
                        </div>
                        <div className="col-md-8">
                          <h6 className="mb-1">
                            Oppo A16 64 GB, 4 GB RAM, Pearl Blue, Mobile Phone
                          </h6>
                          {/* Rating */}
                          <p className="mb-1 ratting d-flex align-items-center gap-10">
                            <Rating
                              initialRating="3"
                              quiet="false"
                              readonly="false"
                              emptySymbol={
                                <img
                                  src="/images/star-grey.png"
                                  className="icon"
                                  alt=""
                                />
                              }
                              fullSymbol={
                                <img
                                  src="/images/star-yellow.png"
                                  className="icon"
                                  alt=""
                                />
                              }
                            />
                            <span className="text-body-tertiary">(2)</span>
                          </p>
                          {/* Price */}
                          <p className="mb-2 price">
                            <s className="price-gray">$32.00</s> $32.00 X 2
                          </p>
                        </div>
                      </div>
                    </div>
                  </td>
                  <td>$55.00 </td>
                </tr>
              </tbody>
            </table>

            <div className="checkout-details">
              <div class="d-flex justify-content-between align-items-center">
                <p>Subtotal (1 item)</p>
                <p>$2000.00</p>
              </div>
              <div class="d-flex justify-content-between align-items-center">
                <p>Shipping</p>
                <p>Enter shipping address</p>
              </div>
              <hr />
              <div class="d-flex justify-content-between align-items-center">
                <strong>Total</strong>
                <strong>$2000.00</strong>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </>
  );
};

export default Checkout;
