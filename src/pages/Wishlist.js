import React from "react";
import Bradecrumb from "../components/Bradecrumb";
import Meta from "../components/Meta";
import WishlistCard from "../components/WishlistCard";
const Wishlist = () => {
  return (
    <>
      <Meta title="Wishlist title" />
      <Bradecrumb title="Wishlist" />
      <div className="home-wrapper-2 ourstore py-5">
        <div className="container-xxl">
          <div className="row">
            <div className="col-md-3">
              <WishlistCard />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Wishlist;
