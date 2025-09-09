/* eslint-disable @next/next/no-img-element */
import React from "react";
import { Formik, Form, Field } from "formik";
import Link from "next/link";
import appData from "../../data/app.json";
import {
  handleDropdown,
  handleMobileDropdown,
  handleSearch,
} from "../../common/navbar";

const Navbar = ({ lr, nr, theme }) => {
  React.useEffect(() => {
    handleSearch();
  }, []);
  return (
    <nav
      ref={nr}
      className={`navbar navbar-expand-lg change hide-lg ${
        theme === "themeL" ? "light" : ""
      }`}
    >
      <div className="container">
        <div className="logo-wrapper">
          <Link href="/">
            <a className="logo">
              {theme ? (
                theme === "themeL" ? (
                  <img ref={lr} src={`${appData.darkLogo}`} alt="logo" />
                ) : (
                  <img ref={lr} src={`${appData.lightLogo}`} alt="logo" />
                )
              ) : (
                <img ref={lr} src={`${appData.lightLogo}`} alt="logo" />
              )}
            </a>
          </Link>
        </div>

        <button
          className="navbar-toggler"
          type="button"
          onClick={handleMobileDropdown}
          data-toggle="collapse"
          data-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="icon-bar">
            <i className="fas fa-bars"></i>
          </span>
        </button>

        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav ml-auto">
            <li className="nav-item">
              <Link href="/">
                <a className="nav-link">Home</a>
              </Link>
            </li>
            <li className="nav-item">
              <Link href="#gallery">
                <a className="nav-link">Gallery</a>
              </Link>
            </li>
            <li className="nav-item">
              <Link href="#events">
                <a className="nav-link">Events</a>
              </Link>
            </li>
            <li className="nav-item">
              <Link href="#services">
                <a className="nav-link">Services</a>
              </Link>
            </li>
            <li className="nav-item">
              <Link href="#testimonials">
                <a className="nav-link">Testimonials</a>
              </Link>
            </li>
            <li className="nav-item">
              <Link href="#products">
                <a className="nav-link">Products</a>
              </Link>
            </li>
            <li className="nav-item">
              <Link href="#contact">
                <a className="nav-link">Contact</a>
              </Link>
            </li>
          </ul>
          <div className="search">
            <span className="icon pe-7s-search cursor-pointer"></span>
            <div className="search-form text-center custom-font">
              <Formik
                initialValues={{
                  search: "",
                }}
                onSubmit={async (values) => {
                  alert(JSON.stringify(values, null, 2));
                  // Reset the values
                  values.search = "";
                }}
              >
                {({ errors, touched }) => (
                  <Form>
                    <Field type="text" name="search" placeholder="Search" />
                  </Form>
                )}
              </Formik>
              <span className="close pe-7s-close cursor-pointer"></span>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
