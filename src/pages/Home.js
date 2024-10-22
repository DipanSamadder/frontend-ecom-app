import React from "react";
import Marquee from "react-fast-marquee";
import { Link } from "react-router-dom";
import BlogCard from "../components/BlogCard";
import Container from "../components/Container";
import ProductCard from "../components/ProductCard";
import SpecialCard from "../components/SpecialCard";
import { services } from "../utils/Data";

const Home = () => {
  return (
    <>
      <Container className="home-wrapper-1 py-5">
        <div className="row">
          <div className="col-6">
            <div className="main-banner position-relative rounded-3">
              <img
                src="/images/main-banner-1.jpg"
                className="img-fluid rounded-3"
                alt=""
              />
              <div className="main-banner-content position-absolute">
                <h4>Supercharged for pros.</h4>
                <h2>iPad S13+ Pro.</h2>
                <p>
                  From $999.00 or $41.62/mo.
                  <br />
                  for 24 mo. Footnote*
                </p>
                <Link to="/">BUY NOW</Link>
              </div>
            </div>
          </div>
          <div className="col-6">
            <div className="d-flex flex-wrap gap-10 justify-content-between align-items-center">
              <div className="small-banner position-relative rounded-3">
                <img
                  src="/images/catbanner-01.jpg"
                  className="img-fluid rounded-3"
                  alt=""
                />
                <div className="small-banner-content position-absolute">
                  <h4>Supercharged for pros.</h4>
                  <h2>iPad S13+ Pro.</h2>
                  <p>
                    From $999.00 or $41.62/mo.
                    <br />
                    for 24 mo. Footnote*
                  </p>
                </div>
              </div>
              <div className="small-banner position-relative rounded-3">
                <img
                  src="/images/catbanner-02.jpg"
                  className="img-fluid rounded-3"
                  alt=""
                />
                <div className="small-banner-content position-absolute">
                  <h4>Supercharged for pros.</h4>
                  <h2>iPad S13+ Pro.</h2>
                  <p>
                    From $999.00 or $41.62/mo.
                    <br />
                    for 24 mo. Footnote*
                  </p>
                </div>
              </div>
              <div className="small-banner position-relative rounded-3">
                <img
                  src="/images/catbanner-03.jpg"
                  className="img-fluid rounded-3"
                  alt=""
                />
                <div className="small-banner-content position-absolute">
                  <h4>Supercharged for pros.</h4>
                  <h2>iPad S13+ Pro.</h2>
                  <p>
                    From $999.00 or $41.62/mo.
                    <br />
                    for 24 mo. Footnote*
                  </p>
                </div>
              </div>
              <div className="small-banner position-relative rounded-3">
                <img
                  src="/images/catbanner-04.jpg"
                  className="img-fluid rounded-3"
                  alt=""
                />
                <div className="small-banner-content position-absolute">
                  <h4>Supercharged for pros.</h4>
                  <h2>iPad S13+ Pro.</h2>
                  <p>
                    From $999.00 or $41.62/mo.
                    <br />
                    for 24 mo. Footnote*
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Container>

      <Container className="home-wrapper-2 py-5">
        <div className="row">
          <div className="col-12">
            <div className="d-flex align-items-center justify-content-between">
              {services?.map((data, index) => {
                return (
                  <div
                    className="service-box d-flex align-items-center justify-content-between gap-15"
                    key={index}
                  >
                    <img src={data.image} alt={data.title} />
                    <div>
                      <h6>{data.title}</h6>
                      <p>{data.tagline}</p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </Container>

      <Container className="home-wrapper-3 py-5 ">
        <div className="row">
          <div className="col-12">
            <div className="categorie d-flex gap-30 align-items-center justify-content-center">
              <div className="d-flex gap-30 align-items-center pe-4">
                <div>
                  <h6>Camera</h6>
                  <p>10 Items</p>
                </div>
                <img src="/images/camera.jpg" alt="camera" />
              </div>

              <div className="d-flex gap-30 align-items-center pe-4">
                <div>
                  <h6>Camera</h6>
                  <p>10 Items</p>
                </div>
                <img src="/images/camera.jpg" alt="camera" />
              </div>

              <div className="d-flex gap-30 align-items-center pe-4">
                <div>
                  <h6>Camera</h6>
                  <p>10 Items</p>
                </div>
                <img src="/images/camera.jpg" alt="camera" />
              </div>

              <div className="d-flex gap-30 align-items-center pe-4">
                <div>
                  <h6>Camera</h6>
                  <p>10 Items</p>
                </div>
                <img src="/images/camera.jpg" alt="camera" />
              </div>

              <div className="d-flex gap-30 align-items-center pe-4">
                <div>
                  <h6>Camera</h6>
                  <p>10 Items</p>
                </div>
                <img src="/images/camera.jpg" alt="camera" />
              </div>
            </div>
          </div>
        </div>
      </Container>

      <Container className="featured-wrapper py-5 ">
        <div className="row">
          <div className="col-12">
            <h4 className="mb-3">Featured Collection</h4>
          </div>
          <ProductCard />
          <ProductCard />
          <ProductCard />
          <ProductCard />
        </div>
      </Container>

      <Container className="famous-wrapper py-5 ">
        <div className="row">
          <div className="col-3">
            <div className="card rounded bg-black p-3">
              <img
                src="/images/cms-banner-01.webp"
                className="img-fluid position-relative"
                alt=""
              />
              <div className="position-absolute">
                <h5 className="mb-1 text-white">Big Screen</h5>
                <h4 className="mb-2 text-white">Smart Watch Series 7</h4>
                <p className="mb-2 text-white">
                  From $399or $16.62/mo. for 24 mo.*
                </p>
              </div>
            </div>
          </div>
          <div className="col-3">
            <div className="card rounded p-3 shadow border-0">
              <img
                src="/images/cms-banner-02.webp"
                className="img-fluid position-relative"
                alt=""
              />
              <div className="position-absolute">
                <h5 className="mb-1">Big Screen</h5>
                <h4 className="mb-2">Smart Watch Series 7</h4>
                <p className="mb-2">From $399or $16.62/mo. for 24 mo.*</p>
              </div>
            </div>
          </div>
          <div className="col-3">
            <div className="card rounded p-3 shadow border-0">
              <img
                src="/images/cms-banner-02.webp"
                className="img-fluid position-relative"
                alt=""
              />
              <div className="position-absolute">
                <h5 className="mb-1">Big Screen</h5>
                <h4 className="mb-2">Smart Watch Series 7</h4>
                <p className="mb-2">From $399or $16.62/mo. for 24 mo.*</p>
              </div>
            </div>
          </div>
          <div className="col-3">
            <div className="card rounded p-3 shadow border-0">
              <img
                src="/images/cms-banner-02.webp"
                className="img-fluid position-relative"
                alt=""
              />
              <div className="position-absolute">
                <h5 className="mb-1">Big Screen</h5>
                <h4 className="mb-2">Smart Watch Series 7</h4>
                <p className="mb-2">From $399or $16.62/mo. for 24 mo.*</p>
              </div>
            </div>
          </div>
        </div>
      </Container>
      <Container className="special-wrapper py-5 ">
        <div className="row">
          <div className="col-12">
            <h4 className="mb-3">Special Products</h4>
          </div>
          <SpecialCard />
          <SpecialCard />
          <SpecialCard />
          <SpecialCard />
        </div>
      </Container>

      <Container className="popuper-wrapper py-5 ">
        <div className="row">
          <div className="col-12">
            <h4 className="mb-3">Our Popular Products</h4>
          </div>
          <ProductCard />
          <ProductCard />
          <ProductCard />
          <ProductCard />
        </div>
      </Container>

      <Container className="marque-wrapper-5 py-5 ">
        <div className="row">
          <div className="col-12">
            <div className="marquee bg-white px-5">
              <Marquee className="w-100 d-flex">
                <div className="mx-4">
                  <img src="/images/brand-01.png" alt="camera" />
                </div>
                <div className="mx-4">
                  <img src="/images/brand-02.png" alt="camera" />
                </div>
                <div className="mx-4">
                  <img src="/images/brand-03.png" alt="camera" />
                </div>
                <div className="mx-4">
                  <img src="/images/brand-04.png" alt="camera" />
                </div>
                <div className="mx-4">
                  <img src="/images/brand-05.png" alt="camera" />
                </div>
                <div className="mx-4">
                  <img src="/images/brand-06.png" alt="camera" />
                </div>
                <div className="mx-4">
                  <img src="/images/brand-07.png" alt="camera" />
                </div>
                <div className="mx-4">
                  <img src="/images/brand-08.png" alt="camera" />
                </div>
              </Marquee>
            </div>
          </div>
        </div>
      </Container>

      <Container className="blog-wrapper-6 py-5 ">
        <div className="row">
          <div className="col-12">
            <h4 className="mb-3">Our Latest News</h4>
          </div>
          <div className="col-3">
            <BlogCard />
          </div>
          <div className="col-3">
            <BlogCard />
          </div>
          <div className="col-3">
            <BlogCard />
          </div>
          <div className="col-3">
            <BlogCard />
          </div>
        </div>
      </Container>
    </>
  );
};

export default Home;
