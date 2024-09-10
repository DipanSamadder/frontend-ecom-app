import React from "react";
import { IoMdClose } from "react-icons/io";
import Rating from "react-rating";
import { Link } from "react-router-dom";
import Colors from "./Colors";
const ProductCompareCard = ({ color }) => {
  return (
    <div className="compare-card">
      <div className="product-card position-relative">
        <div className="close position-absolute end-0 top-0 p-2">
          <IoMdClose />
        </div>
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

          <div className="d-flex justify-content-between items align-items-center">
            <b className="text-light-emphasis">Rating: </b>
            <p className="ratting">
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
          </div>
          <div className="d-flex justify-content-between items align-items-center">
            <b className="text-light-emphasis">Price: </b>
            <p className="price">$32.00</p>
          </div>
          <div className="d-flex justify-content-between items align-items-center">
            <b className="text-light-emphasis">Vendor: </b>
            <p className="">Redmi</p>
          </div>
          <div className="d-flex justify-content-between items align-items-center">
            <b className="text-light-emphasis">Type: </b>
            <p className="">Mobile Phones</p>
          </div>
          <div className="d-flex justify-content-between items align-items-center">
            <b className="text-light-emphasis">Availability: </b>
            <p className="">In Stock</p>
          </div>
          <div className="d-flex justify-content-between items align-items-center">
            <b className="text-light-emphasis">Color: </b>
            <Colors color={color} />
          </div>
          <div className="d-flex justify-content-between items align-items-center">
            <b className="text-light-emphasis">Size: </b>
            <p className="">Redmi</p>
          </div>
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

export default ProductCompareCard;
