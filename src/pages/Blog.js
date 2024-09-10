import React from "react";
import BlogCard from "../components/BlogCard";
import Bradecrumb from "../components/Bradecrumb";
import Meta from "../components/Meta";
const Blog = () => {
  return (
    <>
      <Meta title="Blog title" />
      <Bradecrumb title="Blog" />
      <div className="home-wrapper-2 ourstore py-5">
        <div className="container-xxl">
          <div className="row">
            <div className="col-md-3">
              <div className="filter-card">
                <h2 className="filter-title">Filter By Category</h2>
                <ul>
                  <li>Phone</li>
                  <li>Tv</li>
                  <li>Laptop</li>
                  <li>Bag</li>
                </ul>
              </div>
            </div>

            <div className="col-md-9">
              <div className="row">
                <div className="col-md-4 mb-3">
                  <BlogCard />
                </div>
                <div className="col-md-4 mb-3">
                  <BlogCard />
                </div>
                <div className="col-md-4 mb-3">
                  <BlogCard />
                </div>
                <div className="col-md-4 mb-3">
                  <BlogCard />
                </div>
                <div className="col-md-4 mb-3">
                  <BlogCard />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Blog;
