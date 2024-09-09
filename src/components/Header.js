import React, { useState } from "react";
import { IoIosSearch } from "react-icons/io";
import { Link, NavLink } from "react-router-dom";

const Header = () => {
  const [dropdownOpen, setDropdownOpen] = useState(false);

  const toggleDropdown = () => {
    setDropdownOpen(!dropdownOpen);
  };

  return (
    <>
      <header className="header-top-strip py-3">
        <div className="container-xxl">
          <div className="row">
            <div className="col-6">
              <p className="text-white mb-0">
                Free Shipping Over $100 & Free Return.
              </p>
            </div>
            <div className="col-6">
              <p className="text-end text-white mb-0">
                Hotline:{" "}
                <a className="text-white" href="tel:+91 834554354">
                  +91 834554354
                </a>
              </p>
            </div>
          </div>
        </div>
      </header>
      <header className="header-upper py-3">
        <div className="container-xxl">
          <div className="row">
            <div className="col-2">
              <h2>
                <Link to="/" className="text-white">
                  Dipan.
                </Link>
              </h2>
            </div>
            <div className="col-6">
              <div className="input-group">
                <input
                  type="text"
                  className="form-control py-2"
                  placeholder="Search Product Search..."
                  aria-label="Search Product Search..."
                />
                <span className="input-group-text px-3 py-2" id="basic-addon2">
                  <IoIosSearch className="fs-5" />
                </span>
              </div>
            </div>
            <div className="col-4">
              <div className="header-upper-links d-flex align-items-center justify-content-between">
                <div>
                  <Link
                    to="/contact"
                    className="d-flex align-items-center gap-10 text-white"
                  >
                    <img src="images/compare.svg" alt="compare" />
                    <p>
                      Compare
                      <br />
                      Product
                    </p>
                  </Link>
                </div>
                <div>
                  <Link
                    to="/contact"
                    className="d-flex align-items-center gap-10 text-white"
                  >
                    <img src="images/wishlist.svg" alt="wishlist" />
                    <p>
                      Favourite
                      <br />
                      Wishlist
                    </p>
                  </Link>
                </div>
                <div>
                  <Link
                    to="/contact"
                    className="d-flex align-items-center gap-10 text-white"
                  >
                    <img src="images/user.svg" alt="user" />
                    <p>
                      Log in
                      <br />
                      My Account
                    </p>
                  </Link>
                </div>
                <div>
                  <Link
                    to="/contact"
                    className="d-flex align-items-center gap-10 text-white"
                  >
                    <img src="images/cart.svg" alt="compare" />
                    <div className="d-flex flex-column gap-10">
                      <span className="badge bg-white text-dark">0</span>
                      <p>$ 500</p>
                    </div>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>
      <header className="header-bottom py-3">
        <div className="container-xxl">
          <div className="row">
            <div className="col-12">
              <div className="menu-bottom d-flex align-items-center gap-10">
                <div className="menu-start">
                  <div className="dropdown me-5">
                    <button
                      className="btn btn-secondary dropdown-toggle d-flex justify-content-between align-items-center"
                      type="button"
                      aria-expanded={dropdownOpen}
                      onClick={toggleDropdown}
                    >
                      <img src="/images/menu.svg" alt="menu" />
                      <span>Dropdown button</span>
                    </button>
                    <ul
                      className={`dropdown-menu ${dropdownOpen ? "show" : ""}`}
                    >
                      <li>
                        <a className="dropdown-item" href="#">
                          Action
                        </a>
                      </li>
                      <li>
                        <a className="dropdown-item" href="#">
                          Another action
                        </a>
                      </li>
                      <li>
                        <a className="dropdown-item" href="#">
                          Something else here
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
                <div className="menu-links">
                  <div className="d-flex align-items-center gap-20">
                    <NavLink to="/">Home</NavLink>
                    <NavLink to="/store">Our Shop</NavLink>
                    <NavLink to="/">Blog</NavLink>
                    <NavLink to="/contact">Contact</NavLink>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>
    </>
  );
};

export default Header;
