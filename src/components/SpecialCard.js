import React from "react";
import Rating from "react-rating";
import { Link } from "react-router-dom";
const SpecialCard = () => {
  return (
    <div className="col-md-4">
      <div className="specail-card mb-3">
        <div className="row">
          <div className="col-md-6 pe-md-0">
            <div className="position-relative specail-image-content">
              <span>Sale</span>
              <Link className="specail-image">
                <img
                  src="images/specail-card-imate.webp"
                  className="img-fluid"
                  alt="tab"
                />
                <img
                  src="images/specail-card-imate-2.webp"
                  className="img-fluid"
                  alt="tab"
                />
              </Link>
              <div className="specail-hover-icons position-absolute">
                <div className="d-flex flex-column align-items-center">
                  <div className="icons">
                    <img className="img-fluid" src="images/wish.svg" alt="" />
                  </div>
                  <div className="icons">
                    <img
                      className="img-fluid"
                      src="images/prodcompare.svg"
                      alt=""
                    />
                  </div>
                  <div className="icons">
                    <img className="img-fluid" src="images/view.svg" alt="" />
                  </div>
                  <div className="icons">
                    <img
                      className="img-fluid"
                      src="images/add-cart.svg"
                      alt=""
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-md-6 ps-md-0">
            <div className="specail-content">
              <Link>
                <p className="mb-2 category">Momax</p>
                <h6 className="mb-1 title">
                  Vybrix Magnetic Power Bank Wireless Charging
                </h6>
              </Link>
              <p className="mb-1 ratting">
                <Rating
                  initialRating="3"
                  quiet="false"
                  readonly="false"
                  emptySymbol={
                    <img src="images/star-grey.png" className="icon" />
                  }
                  fullSymbol={
                    <img src="images/star-yellow.png" className="icon" />
                  }
                />
              </p>

              <p className="mb-2 price">
                <s className="price-gray">$32.00</s> $32.00
              </p>
              <p className="mb-2 offer d-flex gap-10">
                <strong>5 Days</strong>
                <div className="d-flex gap-10 day-pending">
                  <span className="badge rounded-circle bg-danger">3</span>
                  <span className="badge rounded-circle bg-danger">3</span>
                  <span className="badge rounded-circle bg-danger">3</span>
                </div>
              </p>
              <div className="mb-2 progress-box">
                <p>Porduct:5</p>
                <div
                  className="progress"
                  role="progressbar"
                  aria-label="Basic example"
                  aria-valuenow={25}
                  aria-valuemin={0}
                  aria-valuemax={100}
                >
                  <div className="progress-bar" style={{ width: "25%" }}></div>
                </div>
              </div>
              <Link to="/" className="buynow">
                BUY NOW
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SpecialCard;
