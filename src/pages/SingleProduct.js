import React, { useState } from "react";
import { CiHeart } from "react-icons/ci";
import { FaHeart } from "react-icons/fa6";
import { GrCompare } from "react-icons/gr";
import { MdOutlineCompareArrows } from "react-icons/md";
import Rating from "react-rating";
import { Link } from "react-router-dom";
import Bradecrumb from "../components/Bradecrumb";
import Colors from "../components/Colors";
import Container from "../components/Container";
import Meta from "../components/Meta";
import ProductCard from "../components/ProductCard";
import SingleProductSlider from "../components/SingleProductSlider";
const SingleProduct = () => {
  const [hasPurchase, setHasPurchase] = useState(false);
  const [wishlistButton, setWishlistButton] = useState(false);
  const [comparButton, setComparButton] = useState(false);

  return (
    <div className="single-product home-wrapper-2">
      <Meta title="Product title" />
      <Bradecrumb title="Product" />

      <Container className="py-5">
        <div className="row">
          <div className="col-md-6">
            <div className="card p-3 rounded">
              <SingleProductSlider />
            </div>
          </div>
          <div className="col-md-6">
            <div className="card p-3 rounded product-info">
              <h4 className="mb-3">
                Oppo A16 64 GB, 4 GB RAM, Pearl Blue, Mobile Phone
              </h4>
              {/* Rating */}
              <p className="mb-3 ratting d-flex align-items-center gap-10">
                <Rating
                  initialRating="3"
                  quiet="false"
                  readonly="false"
                  emptySymbol={
                    <img src="/images/star-grey.png" className="icon" alt="" />
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

                <a href="#write_review" className="">
                  Write a Review
                </a>
              </p>
              {/* Price */}
              <p className="mb-2 price">
                <s className="price-gray">$32.00</s> $32.00 <span>Sale</span>
              </p>

              <p className="short-desc">Shipping calculated at checkout.</p>
              <hr />

              {/* information */}
              <div className="information">
                <p>
                  <strong className="mr-2">Type: </strong>Mobile Phones
                </p>
                <p>
                  <strong className="mr-2">Tags: </strong>Smart Phone,
                </p>
                <p>
                  <strong className="mr-2">Collections: </strong>Android Phones,
                  Headphones, Our Store, Phones, Sale Collection, Smart Phones,
                </p>
                <p>
                  <strong className="mr-2">Availability: </strong>In Stock
                </p>
              </div>
              <hr />

              {/* color */}
              <div className="colors-info mb-3">
                <h6 className="mb-2">Colours</h6>
                <Colors />
              </div>

              {/**Storage */}
              <div className="Storage mb-3">
                <h6 className="mb-2">Storage</h6>
                <div className="form-check-inline">
                  <input
                    className="form-check-input d-none"
                    type="radio"
                    name="inlineRadioOptions"
                    id="storage1"
                    value="option1"
                  />
                  <label className="form-check-label" for="storage1">
                    512GB
                  </label>
                </div>
                <div className="form-check-inline">
                  <input
                    className="form-check-input d-none"
                    type="radio"
                    name="inlineRadioOptions"
                    id="storage2"
                    value="option2"
                  />
                  <label className="form-check-label" for="storage2">
                    264GB
                  </label>
                </div>
              </div>

              {/* Quantity */}
              <div className="quantity-des mb-3">
                <h6 className="mb-2">Quantity</h6>
                <div className="quantity">
                  <input
                    className="quantity__input"
                    type="number"
                    name="quantity"
                    min="1"
                    placeholder="1"
                  />
                </div>
              </div>

              {/* Add To Card */}
              <div className="buy-button mb-3">
                <Link to="/" className="add-to-card">
                  ADD TO CARD
                </Link>
                <Link to="/" className="buy-it-now">
                  BUY IT NOW
                </Link>
              </div>
              {/* Other button */}
              <div className="other-button mb-3">
                <Link
                  to=""
                  onClick={() => setWishlistButton(!wishlistButton)}
                  className={`wishlist me-3 ${
                    wishlistButton === true ? "active" : ""
                  }`}
                >
                  {wishlistButton === true ? (
                    <FaHeart className="me-2" />
                  ) : (
                    <CiHeart className="me-2" />
                  )}
                  Add to wishlist
                </Link>

                <Link
                  to=""
                  onClick={() => setComparButton(!comparButton)}
                  className={`compare me-3 ${
                    comparButton === true ? "active" : ""
                  }`}
                >
                  {comparButton === false ? (
                    <MdOutlineCompareArrows className="me-2" />
                  ) : (
                    <GrCompare className="me-2" />
                  )}
                  Add to compare
                </Link>
              </div>
              <hr />
              {/* Shipping Inforamtion */}
              <div className="shipping-info mb-3">
                <h6>Shipping & Returns</h6>
                <p>
                  Free shipping and returns available on all orders! We ship all
                  US domestic orders within 5-10 business days!
                </p>
              </div>
            </div>
          </div>
        </div>
      </Container>

      <Container className="description-wrapper py-5 ">
        <div className="row">
          <div className="col-12">
            <h4 className="mb-3">Description</h4>
          </div>
          <div className="col-12">
            <div className="card border-0 p-4">
              <p className="text-body-tertiary">
                "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor
                in reprehenderit in voluptate velit esse cillum dolore eu fugiat
                nulla pariatur. Excepteur sint occaecat cupidatat non proident,
                sunt in culpa qui officia deserunt mollit anim id est laborum."
              </p>
            </div>
          </div>
        </div>
      </Container>

      <Container className="review-wrapper py-5 " id="write_review">
        <div className="row">
          <div className="col-12">
            <h4 className="mb-3">Review</h4>
          </div>
          <div className="col-12">
            <div className="card border-0 p-5">
              <div className="reveiw-heading">
                <h6 className="mb-2">Custormer Review</h6>
                <div className="heading-rating d-flex align-items-center justify-content-between">
                  <p className="mb-2 ratting">
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
                    <span className="text-body-tertiary ms-3">
                      Based on 2 Reviews
                    </span>
                  </p>
                  <div>
                    <button onClick={() => setHasPurchase(!hasPurchase)}>
                      Write a Review
                    </button>
                  </div>
                </div>
              </div>

              <div
                className={`review-form ${
                  hasPurchase === false ? "d-none" : ""
                }`}
              >
                <hr />
                <form>
                  <div className="row">
                    <div className="col-md-4 mb-3">
                      <label htmlFor="nameForm" className="form-label">
                        Name
                      </label>
                      <input
                        type="text"
                        className="form-control"
                        id="nameForm"
                      />
                    </div>
                    <div className="col-md-4 mb-3">
                      <label htmlFor="phoneForm" className="form-label">
                        Phone
                      </label>
                      <input
                        type="text"
                        className="form-control"
                        id="phoneForm"
                      />
                    </div>
                    <div className="col-md-4 mb-3">
                      <label
                        htmlFor="exampleInputEmail1"
                        className="form-label"
                      >
                        Email
                      </label>
                      <input
                        type="email"
                        className="form-control"
                        id="exampleInputEmail1"
                        aria-describedby="emailHelp"
                      />
                    </div>
                  </div>
                  <div className="mb-3">
                    <label htmlFor="rating" className="form-label">
                      Rating
                    </label>
                    <p className="mb-2 ratting">
                      <Rating
                        initialRating="3"
                        quiet="false"
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
                    </p>
                  </div>
                  <div className="mb-3">
                    <label for="message" className="form-label">
                      Reveiws
                    </label>
                    <textarea
                      className="form-control"
                      id="review"
                      rows="3"
                    ></textarea>
                  </div>
                  <button type="submit" className="btn btn-primary button">
                    Submit Review
                  </button>
                </form>
              </div>

              <div className="review-list mt-5">
                <h5 className="mb-2">Latest Review</h5>
                <hr />
                <div className="d-flex align-items-start justify-content-start">
                  <div className="review-profile">
                    <img
                      src="/images/star-empty.png"
                      className="img-fluid p-2"
                      alt=""
                    />
                  </div>
                  <div className="review-profile-details">
                    <h6>Daisy</h6>
                    <small>07/16/2024</small>
                    <br />
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

                    <p>It's really really good product and best quality.</p>
                  </div>
                </div>
                <hr />
                <div className="d-flex align-items-start justify-content-start">
                  <div className="review-profile">
                    <img
                      src="/images/star-empty.png"
                      className="img-fluid p-2"
                      alt=""
                    />
                  </div>
                  <div className="review-profile-details">
                    <h6>Daisy</h6>
                    <small>07/16/2024</small>
                    <br />
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

                    <p>It's really really good product and best quality.</p>
                  </div>
                </div>
                <hr />
                <div className="d-flex align-items-start justify-content-start">
                  <div className="review-profile">
                    <img
                      src="/images/star-empty.png"
                      className="img-fluid p-2"
                      alt=""
                    />
                  </div>
                  <div className="review-profile-details">
                    <h6>Daisy</h6>
                    <small>07/16/2024</small>
                    <br />
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

                    <p>It's really really good product and best quality.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Container>

      <Container className="py-5 ">
        <div className="row">
          <div className="col-12">
            <h4 className="mb-3">You may also like</h4>
          </div>
          <ProductCard />
          <ProductCard />
          <ProductCard />
          <ProductCard />
          <ProductCard />
          <ProductCard />
        </div>
      </Container>
    </div>
  );
};

export default SingleProduct;
