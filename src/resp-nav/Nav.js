import React from "react";
import { Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "./Nav.css";
// import Image from '../Images/Img1.png'

export default function Nav() {
  return (
    <>
      <nav class="navbar navbar-expand-lg navbar-light bg-black ">
        <div class="container-fluid">
          <a
            class="navbar-brand"
            href="https://static.vecteezy.com/system/resources/thumbnails/013/672/298/small/cheetah-fast-run-illustration-vector.jpg"
          >
            <img
              src="https://static.vecteezy.com/system/resources/thumbnails/013/672/298/small/cheetah-fast-run-illustration-vector.jpg"
              alt="logo"
              height={70}
              width={120}
            />
          </a>
          <button
            class="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse" id="navbarNav">
            <ul class="navbar-nav">
              <li class="nav-item">
                <Link
                  to="/vehicles"
                  class="nav-link active"
                  aria-current="page"
                  type="button"
                  data-bs-toggle="offcanvas"
                  data-bs-target="#offcanvasTop"
                  aria-controls="offcanvasTop"
                >
                  VEHICLES
                </Link>
                {/* <a class="nav-link active" aria-current="page">VEHICLES</a> */}
              </li>
              <li class="nav-item">
                <Link
                  to="/purchase"
                  class="nav-link active"
                  aria-current="page"
                >
                  PURCHASE
                </Link>
                {/* <a class="nav-link active" aria-current="page">PURCHASE</a> */}
              </li>
              <li class="nav-item">
                <Link to="/owners" class="nav-link active" aria-current="page">
                  OWNERS
                </Link>
                {/* <a class="nav-link active" aria-current="page">OWNERS</a> */}
              </li>
              <li class="nav-item">
                <Link to="/explore" class="nav-link active" aria-current="page">
                  EXPLORE
                </Link>
                {/* <a class="nav-link active" aria-current="page">EXPLORE</a> */}
              </li>
            </ul>
          </div>
          <div>
            <nav class="navbar navbar-black bg-black">
              <div class="container-fluid">
                <form class="d-flex">
                  <input
                    class="form-control me-2 bg-light"
                    type="search"
                    placeholder="Search"
                    aria-label="Search"
                  />
                  <button class="btn btn-outline-info" type="submit">
                    Search
                  </button>
                </form>
              </div>
            </nav>
          </div>
        </div>
      </nav>
    </>
  );
}
