import React from "react";
import Rating from "react-rating";
import { Link } from "react-router-dom";
const ProductCard = () => {
  return (
    <div className="col-md-2">
      <div className="product-card position-relative">
        <Link className="product-image">
          <img src="images/tab1.jpg" className="img-fluid" alt="tab" />
          <img src="images/tab2.jpg" className="img-fluid" alt="tab" />
        </Link>

        <div className="product-content">
          <Link>
            <p className="mb-2 category">Momax</p>
            <h6 className="mb-2 title">
              Vybrix Magnetic Power Bank Wireless Charging
            </h6>
          </Link>
          <p className="mb-2 ratting">
            <Rating
              initialRating="3"
              quiet="false"
              readonly="false"
              emptySymbol={<img src="images/star-grey.png" className="icon" />}
              fullSymbol={<img src="images/star-yellow.png" className="icon" />}
            />
          </p>

          <p className="mb-2 price">$32.00</p>
        </div>

        <div className="product-hover-icons position-absolute">
          <div className="d-flex flex-column align-items-center">
            <div className="icons">
              <img className="img-fluid" src="images/wish.svg" alt="" />
            </div>
            <div className="icons">
              <img className="img-fluid" src="images/prodcompare.svg" alt="" />
            </div>
            <div className="icons">
              <img className="img-fluid" src="images/view.svg" alt="" />
            </div>
            <div className="icons">
              <img className="img-fluid" src="images/add-cart.svg" alt="" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
