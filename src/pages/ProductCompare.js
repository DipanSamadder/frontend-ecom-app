import React from "react";

import Bradecrumb from "../components/Bradecrumb";
import Meta from "../components/Meta";
import ProductCompareCard from "../components/ProductCompareCard";
const ProductCompare = () => {
  const color = ["#888888", "red", "gray"];
  const color2 = ["green", "red", "gray"];
  return (
    <>
      <Meta title="Compare title" />
      <Bradecrumb title="Compare" />
      <div className="home-wrapper-2 ourstore py-5">
        <div className="container-xxl">
          <div className="row">
            <div className="col-md-3">
              <ProductCompareCard color={color} />
            </div>
            <div className="col-md-3">
              <ProductCompareCard color={color2} />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ProductCompare;
