import React from "react";
import { MdDelete } from "react-icons/md";
import Rating from "react-rating";
import Bradecrumb from "../components/Bradecrumb";
import Meta from "../components/Meta";

import { Link } from "react-router-dom";
const Cart = () => {
  return (
    <>
      <Meta title="Cart title" />
      <Bradecrumb title="Cart" />
      <div className="home-wrapper-2 cartpage  py-5">
        <div className="container-xxl">
          <div className="row">
            <div className="col-md-12">
              <table className="table bg-transparent cart-table">
                <thead>
                  <tr>
                    <th scope="col" width="60%">
                      Product
                    </th>
                    <th scope="col" width="30%">
                      Quantity
                    </th>
                    <th scope="col" width="10%">
                      Total
                    </th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>
                      <div class="product-details">
                        <div className="row">
                          <div className="col-md-2">
                            <img src="/images/tab1.jpg" className="img-fluid" />
                          </div>
                          <div className="col-md-10">
                            <h5 className="mb-3">
                              Oppo A16 64 GB, 4 GB RAM, Pearl Blue, Mobile Phone
                            </h5>
                            {/* Rating */}
                            <p className="mb-3 ratting d-flex align-items-center gap-10">
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
                              <s className="price-gray">$32.00</s> $32.00{" "}
                            </p>
                          </div>
                        </div>
                      </div>
                    </td>
                    <td>
                      {/* Quantity */}
                      <div className="quantity-des mb-3">
                        <div className="quantity">
                          <input
                            className="quantity__input"
                            type="number"
                            name="quantity"
                            min="1"
                            placeholder="1"
                          />
                        </div>
                        <MdDelete />
                      </div>
                    </td>
                    <td>$55.00 </td>
                  </tr>
                  <tr>
                    <td>
                      <div class="product-details">
                        <div className="row">
                          <div className="col-md-2">
                            <img src="/images/tab1.jpg" className="img-fluid" />
                          </div>
                          <div className="col-md-10">
                            <h5 className="mb-3">
                              Oppo A16 64 GB, 4 GB RAM, Pearl Blue, Mobile Phone
                            </h5>
                            {/* Rating */}
                            <p className="mb-3 ratting d-flex align-items-center gap-10">
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
                              <s className="price-gray">$32.00</s> $32.00{" "}
                            </p>
                          </div>
                        </div>
                      </div>
                    </td>
                    <td>
                      {/* Quantity */}
                      <div className="quantity-des mb-3">
                        <div className="quantity">
                          <input
                            className="quantity__input"
                            type="number"
                            name="quantity"
                            min="1"
                            placeholder="1"
                          />
                        </div>
                        <MdDelete />
                      </div>
                    </td>
                    <td>$55.00 </td>
                  </tr>
                  <tr>
                    <td>
                      <div class="product-details">
                        <div className="row">
                          <div className="col-md-2">
                            <img src="/images/tab1.jpg" className="img-fluid" />
                          </div>
                          <div className="col-md-10">
                            <h5 className="mb-3">
                              Oppo A16 64 GB, 4 GB RAM, Pearl Blue, Mobile Phone
                            </h5>
                            {/* Rating */}
                            <p className="mb-3 ratting d-flex align-items-center gap-10">
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
                              <s className="price-gray">$32.00</s> $32.00{" "}
                            </p>
                          </div>
                        </div>
                      </div>
                    </td>
                    <td>
                      {/* Quantity */}
                      <div className="quantity-des mb-3">
                        <div className="quantity">
                          <input
                            className="quantity__input"
                            type="number"
                            name="quantity"
                            min="1"
                            placeholder="1"
                          />
                        </div>
                        <MdDelete />
                      </div>
                    </td>
                    <td>$55.00 </td>
                  </tr>
                </tbody>
              </table>
            </div>
            <div className="col-md-2">
              {/* Other button */}
              <div className="continue-button mb-3">
                <Link to="">Continue shopping</Link>
              </div>
            </div>
            <div className="col-md-10"></div>
            <div className="col-md-3 offset-md-9">
              {/* Other button */}
              <div className="checkout-button mb-3 w-100">
                <div class="d-flex justify-content-between align-items-center">
                  <h6>Subtotal : </h6>
                  <small>$55.00 USD</small>
                </div>
                <hr />
                <small className="mb-2">
                  <p>Taxes and shipping calculated at checkout</p>
                </small>
                <br />
                <Link to="">Check Out</Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Cart;
