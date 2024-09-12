import React from "react";

import Bradecrumb from "../components/Bradecrumb";
import Container from "../components/Container";
import Meta from "../components/Meta";
import ProductCompareCard from "../components/ProductCompareCard";
const ProductCompare = () => {
  const color = ["#888888", "red", "gray"];
  const color2 = ["green", "red", "gray"];
  return (
    <>
      <Meta title="Compare title" />
      <Bradecrumb title="Compare" />

      <Container className="home-wrapper-2 ourstore py-5">
        <div className="row">
          <div className="col-md-3">
            <ProductCompareCard color={color} />
          </div>
          <div className="col-md-3">
            <ProductCompareCard color={color2} />
          </div>
        </div>
      </Container>
    </>
  );
};

export default ProductCompare;
