import React from "react";

import { useState } from "react";
import Bradecrumb from "../components/Bradecrumb";
import Container from "../components/Container";
import Meta from "../components/Meta";
import ProductCard from "../components/ProductCard";

const OurStore = (props) => {
  const [gridView, setGridView] = useState("3");

  return (
    <>
      <Meta title="Our Store title" />
      <Bradecrumb title="Our Store" />

      <Container className="home-wrapper-2 ourstore py-5">
        <div className="row">
          <div className="col-md-12">
            <h4 className="mb-2">Filter</h4>
          </div>
          <div className="col-md-3">
            <div className="filter-card">
              <h2 className="filter-title">Category</h2>
              <ul>
                <li>Phone</li>
                <li>Tv</li>
                <li>Laptop</li>
                <li>Bag</li>
              </ul>
            </div>
            <div className="filter-card">
              <h2 className="filter-title">Availability</h2>
              <div className="form-check">
                <input
                  className="form-check-input"
                  type="checkbox"
                  value=""
                  id="flexCheckDefault"
                />
                <label className="form-check-label" htmlFor="flexCheckDefault">
                  In Stock (4)
                </label>
              </div>
              <div className="form-check">
                <input
                  className="form-check-input"
                  type="checkbox"
                  value=""
                  id="flexCheckChecked"
                />
                <label className="form-check-label" htmlFor="flexCheckChecked">
                  Out Of Stock (0)
                </label>
              </div>
              <h2 className="filter-title">Price</h2>
              <div className="input-group">
                <input
                  type="number"
                  aria-label="From"
                  className="form-control"
                  placeholder="From"
                />
                <input
                  type="number"
                  aria-label="To"
                  className="form-control"
                  placeholder="To"
                />
              </div>
            </div>
            <div className="filter-card">
              <h2 className="filter-title">Product type</h2>
              <div className="form-check">
                <input
                  className="form-check-input"
                  type="checkbox"
                  value=""
                  id="prodcut_type"
                />
                <label className="form-check-label" htmlFor="prodcut_type">
                  In Stock (4)
                </label>
              </div>
              <div className="form-check">
                <input
                  className="form-check-input"
                  type="checkbox"
                  value=""
                  id="prodcut_type-3"
                />
                <label className="form-check-label" htmlFor="prodcut_type-3">
                  In Stock (4)
                </label>
              </div>
            </div>
            <div className="filter-card">
              <h2 className="filter-title">Brand</h2>
              <div className="form-check">
                <input
                  className="form-check-input"
                  type="checkbox"
                  value=""
                  id="brand"
                />
                <label className="form-check-label" htmlFor="brand">
                  In Stock (4)
                </label>
              </div>
              <div className="form-check">
                <input
                  className="form-check-input"
                  type="checkbox"
                  value=""
                  id="brand-3"
                />
                <label className="form-check-label" htmlFor="brand-3">
                  In Stock (4)
                </label>
              </div>
            </div>
          </div>
          <div className="col-md-9">
            <div className="top-fiter">
              <div className="d-flex align-items-center justify-content-between">
                <div className="sortby d-flex align-items-center">
                  <p>Sort by:</p>
                  <select
                    className="form-select"
                    aria-label="Default select example"
                  >
                    <option value="manual">Featured</option>
                    <option value="best-selling">Best selling</option>
                    <option value="title-ascending">Alphabetically, A-Z</option>
                    <option value="title-descending">
                      Alphabetically, Z-A
                    </option>
                    <option value="price-ascending">Price, low to high</option>
                    <option value="price-descending">Price, high to low</option>
                    <option value="created-ascending">Date, old to new</option>
                    <option value="created-descending">Date, new to old</option>
                  </select>
                </div>
                <div className="view-items d-flex align-items-center gap-10">
                  <p>24 products</p>
                  <div className="grid-view d-flex align-items-center gap-10">
                    <img
                      onClick={() => setGridView(3)}
                      src="images/gr4.svg"
                      alt=""
                    />
                    <img
                      onClick={() => setGridView(4)}
                      src="images/gr3.svg"
                      alt=""
                    />
                    <img
                      onClick={() => setGridView(6)}
                      src="images/gr2.svg"
                      alt=""
                    />
                    <img
                      onClick={() => setGridView(12)}
                      src="images/gr.svg"
                      alt=""
                    />
                  </div>
                </div>
              </div>
            </div>
            <div className="product-list">
              <div className="row">
                <ProductCard grid={gridView} />
                <ProductCard grid={gridView} />
              </div>
            </div>
          </div>
        </div>
      </Container>
    </>
  );
};

export default OurStore;
