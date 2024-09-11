import React from "react";
import Rating from "react-rating";
import { Link, useLocation } from "react-router-dom";
const ProductCard = ({ grid }) => {
  const location = useLocation();
  console.log(grid);

  return (
    <>
      <div
        className={` ${
          location.pathname === "/store" ? "col-md-" + grid : "col-md-2"
        } mb-3 ${grid === 12 ? "row-view" : ""}`}
      >
        <div className="product-card position-relative">
          <Link to="/store/:id" className="product-image">
            <img src="/images/tab1.jpg" className="img-fluid" alt="tab" />
            <img src="/images/tab2.jpg" className="img-fluid" alt="tab" />
          </Link>

          <div className="product-content">
            <Link to="/store/:id">
              <p className="mb-2 category">Momax</p>
              <h6 className="mb-2 title">
                Vybrix Magnetic Power Bank Wireless Charging
              </h6>
              <div className={`product-des ${grid === 12 ? "" : "d-none"}`}>
                <p>
                  These cases are perfectly simple and easy to distinguish. In a
                  free hour, when our power of choice is untrammelled and when
                  nothing prevents our being able to do what we like best, every
                  pleasure is to be welcomed and every pain avoided. But in
                  certain circumstances and owing to the claims of duty or the
                  obligations of business it will frequently occur that
                  pleasures...
                </p>
              </div>
            </Link>
            <p className="mb-2 ratting">
              <Rating
                initialRating="3"
                quiet="false"
                readonly="false"
                emptySymbol={
                  <img src="/images/star-grey.png" className="icon" />
                }
                fullSymbol={
                  <img src="/images/star-yellow.png" className="icon" />
                }
              />
            </p>

            <p className="mb-2 price">$32.00</p>
          </div>

          <div className="product-hover-icons position-absolute">
            <div className="d-flex flex-column align-items-center">
              <div className="icons">
                <img className="img-fluid" src="/images/wish.svg" alt="" />
              </div>
              <div className="icons">
                <img
                  className="img-fluid"
                  src="/images/prodcompare.svg"
                  alt=""
                />
              </div>
              <div className="icons">
                <img className="img-fluid" src="/images/view.svg" alt="" />
              </div>
              <div className="icons">
                <img className="img-fluid" src="/images/add-cart.svg" alt="" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ProductCard;
