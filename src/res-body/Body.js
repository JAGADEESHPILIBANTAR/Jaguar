import React from "react";
import "./Body.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { RiSteering2Fill } from "react-icons/ri";
import { FaXTwitter } from "react-icons/fa6";
import {
  FaLinkedinIn,
  FaInstagram,
  FaFacebookF,
  FaYoutube,
} from "react-icons/fa";
import { BsArrowRight } from "react-icons/bs";
import {
  MdOutlineKeyboardArrowRight,
  MdOutlineCarCrash,
  MdOutlineDirectionsCarFilled,
} from "react-icons/md";
import { PiBookOpen } from "react-icons/pi";
import "bootstrap/dist/js/bootstrap.bundle.min";
import Image from "../Images/Img10.png";
import Img2 from "../Images/Img7.jpg";
import Img3 from "../Images/Img8.jpg";
import Img4 from "../Images/Img6.jpg";
import Img5 from "../Images/Img9.jpg";
import Img6 from "../Images/Img7.jpg";
import Img7 from "../Images/Img8.jpg";
import Race1 from "../Images/Race1.jpg";
import Race2 from "../Images/Race2.jpg";

export default function Body() {
  return (
    <div className="mainbody">
      <div className="container">
        <div className="embed-responsive embed-responsive-16by9 video-container">
          <video
            loop
            preload="true"
            playsInline
            autoPlay
            muted
            className='"embed-responsive-item video"'
          >
            <source src="/videos/Vid2.mp4" />
          </video>
        </div>
      </div>
      <div className="mt-2">
        <p className="text-left">THE NEW ERA</p>
      </div>
      <div className="container-fluid">
        <div className="container">
          <div className="row">
            <div className="col-lg-3 col-md-6 col-sm-12 text-white line">
              <div className="logos">
                <RiSteering2Fill />
              </div>
              <a href="https://www.google.com/">
                <MdOutlineKeyboardArrowRight />
                BOOK A TEST DRIVE
              </a>
              <br />
              <dl>Arrange a test drive through your nearest Retailer</dl>
            </div>
            <div className="col-lg-3 col-md-6 col-sm-12 text-white line">
              <div className="logos">
                <MdOutlineCarCrash />
              </div>
              <a href="https://www.google.com/">
                <MdOutlineKeyboardArrowRight />
                DESIGN YOURS
              </a>
              <br />
              <dl>Bring your Jaguar to life</dl>
            </div>
            <div className="col-lg-3 col-md-6 col-sm-12 text-white line">
              <div className="logos">
                <PiBookOpen />
              </div>
              <a href="https://www.google.com/">
                <MdOutlineKeyboardArrowRight />
                VIEW PRICE
              </a>
              <br />
              <dl>View vehicle prices online</dl>
            </div>
            <div className="col-lg-3 col-md-6 col-sm-12 text-white">
              <div className="logos">
                <MdOutlineDirectionsCarFilled />
              </div>
              <a href="https://www.google.com/">
                <MdOutlineKeyboardArrowRight />
                RESERVE ONLINE
              </a>
              <br />
              <dl>Reserve your Jaguar online</dl>
            </div>
          </div>
        </div>
      </div>
      <div className="container">
        <div className="row">
          <img
            className="img-fluid"
            src={Image}
            alt="href='https://www.google.com/'"
          />
          <div>
            <p className="text2 mt-2 w-75 text-white">
              Jaguar's new era begins with an all-electric four-door GT to be
              introduced in selected markets in 2024, with client deliveries
              following in 2025.
            </p>
            <div className="text3">
              <MdOutlineKeyboardArrowRight />
              Keep me Informed
            </div>
          </div>
        </div>
      </div>
      <div className="secondbody">
        <div className="container">
          <div className="row-fluid">
            <p className="text4 mt-2 w-50 text-white">THE 2023 COLLECTION</p>
            <div
              id="carouselExampleIndicators"
              class="carousel slide"
              data-bs-ride="carousel"
            >
              <div
                class="carousel-indicators"
                style={{ left: 0, right: "auto" }}
              >
                <button
                  type="button"
                  data-bs-target="#carouselExampleIndicators1"
                  data-bs-slide-to="0"
                  class="active"
                  aria-current="true"
                  aria-label="Slide 1"
                ></button>
                <button
                  type="button"
                  data-bs-target="#carouselExampleIndicators1"
                  data-bs-slide-to="1"
                  aria-label="Slide 2"
                ></button>
                <button
                  type="button"
                  data-bs-target="#carouselExampleIndicators1"
                  data-bs-slide-to="2"
                  aria-label="Slide 3"
                ></button>
              </div>
              <div class="carousel-inner">
                <div class="carousel-item active">
                  <img src={Img2} class="w-100" alt="..." />
                </div>
                <div class="carousel-item">
                  <img src={Img3} class="w-100" alt="..." />
                </div>
                <div class="carousel-item">
                  <img src={Img4} class="w-100" alt="..." />
                </div>
              </div>
              <button
                class="carousel-control-prev"
                type="button"
                data-bs-target="#carouselExampleIndicators"
                data-bs-slide="prev"
              >
                <span
                  class="carousel-control-prev-icon"
                  aria-hidden="true"
                ></span>
                <span class="visually-hidden">Previous</span>
              </button>
              <button
                class="carousel-control-next"
                type="button"
                data-bs-target="#carouselExampleIndicators"
                data-bs-slide="next"
              >
                <span
                  class="carousel-control-next-icon"
                  aria-hidden="true"
                ></span>
                <span class="visually-hidden">Next</span>
              </button>
            </div>
            <p className="text4 mt-2 w-50 text-white">JAGUAR I-PACE</p>
            <div class="d-grid gap-2 d-md-block">
              <button class="arrow btn btn-secondary" type="button">
                <span>
                  <BsArrowRight />
                </span>
                <span>DESIGN YOURS</span>
              </button>
            </div>
            <div className="text5">
              <MdOutlineKeyboardArrowRight />
              EXPLORE
            </div>
          </div>
        </div>
        <div className="container">
          <div className="row-fluid">
            <div
              id="carouselExampleIndicators1"
              class="carousel slide"
              data-bs-ride="carousel"
            >
              <div
                class="carousel-indicators"
                style={{ left: 0, right: "auto" }}
              >
                <button
                  type="button"
                  data-bs-target="#carouselExampleIndicators"
                  data-bs-slide-to="0"
                  class="active"
                  aria-current="true"
                  aria-label="Slide 1"
                ></button>
                <button
                  type="button"
                  data-bs-target="#carouselExampleIndicators"
                  data-bs-slide-to="1"
                  aria-label="Slide 2"
                ></button>
                <button
                  type="button"
                  data-bs-target="#carouselExampleIndicators"
                  data-bs-slide-to="2"
                  aria-label="Slide 3"
                ></button>
              </div>
              <div class="carousel-inner">
                <div class="carousel-item active">
                  <img src={Img5} class="d-block w-100" alt="..." />
                </div>
                <div class="carousel-item">
                  <img src={Img6} class="d-block w-100" alt="..." />
                </div>
                <div class="carousel-item">
                  <img src={Img7} class="d-block w-100" alt="..." />
                </div>
              </div>
              <button
                class="carousel-control-prev"
                type="button"
                data-bs-target="#carouselExampleIndicators1"
                data-bs-slide="prev"
              >
                <span
                  class="carousel-control-prev-icon"
                  aria-hidden="true"
                ></span>
                <span class="visually-hidden">Previous</span>
              </button>
              <button
                class="carousel-control-next"
                type="button"
                data-bs-target="#carouselExampleIndicators1"
                data-bs-slide="next"
              >
                <span
                  class="carousel-control-next-icon"
                  aria-hidden="true"
                ></span>
                <span class="visually-hidden">Next</span>
              </button>
            </div>
            <p className="text4 mt-2 w-50 text-white">JAGUAR F-PACE</p>
            <div class="d-grid gap-2 d-md-block">
              <button class="arrow btn btn-secondary" type="button">
                <span>
                  <BsArrowRight />
                </span>
                <span>DESIGN YOURS</span>
              </button>
            </div>
            <div className="text5">
              <MdOutlineKeyboardArrowRight />
              EXPLORE
            </div>
          </div>
        </div>
        <div className="container">
          <div className="row-fluid">
            <div
              id="carouselExampleIndicators2"
              class="carousel slide"
              data-bs-ride="carousel"
            >
              <div
                class="carousel-indicators"
                style={{ left: 0, right: "auto" }}
              >
                <button
                  type="button"
                  data-bs-target="#carouselExampleIndicators"
                  data-bs-slide-to="0"
                  class="active"
                  aria-current="true"
                  aria-label="Slide 1"
                ></button>
                <button
                  type="button"
                  data-bs-target="#carouselExampleIndicators"
                  data-bs-slide-to="1"
                  aria-label="Slide 2"
                ></button>
                <button
                  type="button"
                  data-bs-target="#carouselExampleIndicators"
                  data-bs-slide-to="2"
                  aria-label="Slide 3"
                ></button>
              </div>
              <div class="carousel-inner">
                <div class="carousel-item active">
                  <img src={Img5} class="d-block w-100" alt="..." />
                </div>
                <div class="carousel-item">
                  <img src={Img6} class="d-block w-100" alt="..." />
                </div>
                <div class="carousel-item">
                  <img src={Img7} class="d-block w-100" alt="..." />
                </div>
              </div>
              <button
                class="carousel-control-prev"
                type="button"
                data-bs-target="#carouselExampleIndicators2"
                data-bs-slide="prev"
              >
                <span
                  class="carousel-control-prev-icon"
                  aria-hidden="true"
                ></span>
                <span class="visually-hidden">Previous</span>
              </button>
              <button
                class="carousel-control-next"
                type="button"
                data-bs-target="#carouselExampleIndicators2"
                data-bs-slide="next"
              >
                <span
                  class="carousel-control-next-icon"
                  aria-hidden="true"
                ></span>
                <span class="visually-hidden">Next</span>
              </button>
            </div>
            <p className="text4 mt-2 w-50 text-white">JAGUAR F-TYPE</p>
            <div class="d-grid gap-2 d-md-block">
              <button class="arrow btn btn-secondary" type="button">
                <span>
                  <BsArrowRight />
                </span>
                <span>DESIGN YOURS</span>
              </button>
            </div>
            <div className="text5">
              <MdOutlineKeyboardArrowRight />
              EXPLORE
            </div>
          </div>
        </div>
      </div>
      <div className="thirdbody">
        <div className="container">
          <div className="row-fluid">
            <div
              id="carouselExampleIndicators3"
              class="carousel slide"
              data-bs-ride="carousel"
            >
              <div
                class="carousel-indicators"
                style={{ left: 0, right: "auto" }}
              >
                <button
                  type="button"
                  data-bs-target="#carouselExampleIndicators1"
                  data-bs-slide-to="0"
                  class="active"
                  aria-current="true"
                  aria-label="Slide 1"
                  style={{ left: 0 }}
                ></button>
                <button
                  type="button"
                  data-bs-target="#carouselExampleIndicators1"
                  data-bs-slide-to="1"
                  aria-label="Slide 2"
                  style={{ left: 0 }}
                ></button>
              </div>
              <div class="carousel-inner">
                <div class="carousel-item active">
                  <img src={Race1} class="w-100" alt="..." />
                </div>
                <div class="carousel-item">
                  <img src={Race2} class="w-100" alt="..." />
                </div>
              </div>
              <button
                class="carousel-control-prev"
                type="button"
                data-bs-target="#carouselExampleIndicators3"
                data-bs-slide="prev"
              >
                <span
                  class="carousel-control-prev-icon"
                  aria-hidden="true"
                ></span>
                <span class="visually-hidden">Previous</span>
              </button>
              <button
                class="carousel-control-next"
                type="button"
                data-bs-target="#carouselExampleIndicators3"
                data-bs-slide="next"
              >
                <span
                  class="carousel-control-next-icon"
                  aria-hidden="true"
                ></span>
                <span class="visually-hidden">Next</span>
              </button>
            </div>
            <div className="text6">
              <p className="text7 mt-2 w-100 text-white">JAGUAR TCS RACING</p>
              <div>
                <p
                  className="text8 mt-2 w-50 text-white single-line-text"
                  style={{ whiteSpace: "nowrap" }}
                >
                  The Ultimate balance of power and efficiency
                </p>
                <div class="d-grid gap-2 d-md-block">
                  <button class="arrow1 btn btn-secondary" type="button">
                    <span>
                      <BsArrowRight />
                    </span>
                    <span>LEARN MORE</span>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="fourthbody">
        <div className="container-fluid1">
          <div className="row">
            <div className="footer col-lg-3 col-md-6 col-sm-12 text-white ">
              <div className="footer-column">
                <div id="first">
                  <span>
                    <th>OUR JAGUAR VEHICLES</th>
                    <br />
                    <td>JAGUAR F-PACE</td>
                    <br />
                    <td>JAGUAR I-PACE</td>
                    <br />
                    <td>JAGUAR F-TYPE</td>
                    <br />
                    <td>SPECIAL VEHICLE OPERATIONS</td>
                    <br />
                    <td>COMPARE</td>
                    <br />
                  </span>
                  <span>
                    <th>PRICE AND OFFERS</th>
                    <br />
                    <td>JAGUAR FINANCIAL SERVICE</td>
                    <br />
                    <td>BUILD YOUR OWN</td>
                    <br />
                    <td>VIEW PRICES</td>
                    <br />
                  </span>
                  <span>
                    <th>RESEARCH</th>
                    <br />
                    <td>DOWNLOAD A BROCHURE</td>
                    <br />
                    <td>EXPLORE OUR RANGE</td>
                    <br />
                    <td>REVIEW</td>
                    <br />
                    <td>GLOSSARY</td>
                    <br />
                  </span>
                  <span>
                    <th>FLEET & BUSINESS</th>
                    <br />
                    <td>OVERVIEW</td>
                    <br />
                    <td>OUR VEHICLES</td>
                    <br />
                    <td>CONTACT US</td>
                    <br />
                  </span>
                </div>
              </div>
            </div>
            <div className="footer col-lg-3 col-md-6 col-sm-12 text-white ">
              <div className="footer-column">
                <div id="second">
                  <span>
                    <th>OWNERSHIP</th>
                    <br />
                    <td>OVERVIEW</td>
                    <br />
                    <td>INCONTROL</td>
                    <br />
                    <td>MOBILITY SERVICE</td>
                    <br />
                    <td>FIND ME A CAR</td>
                    <br />
                    <td>ACCESSORIES</td>
                    <br />
                    <td>VEHICLE RECALL SERVICE</td>
                    <br />
                  </span>
                  <span>
                    <th>SERVICE AND MAINTENANCE</th>
                    <br />
                    <td>OVERVIEW</td>
                    <br />
                    <td>GUIDES AND MANUAL</td>
                    <br />
                    <td>DIESEL PARTICULAR FILTER</td>
                    <br />
                  </span>
                  <span>
                    <th>ASSISTANCE</th>
                    <br />
                    <td>ROADSITE ASSISTANCE</td>
                    <br />
                    <td>CONTACT JAGUAR</td>
                    <br />
                    <td>FIND A RETAILER</td>
                    <br />
                    <td>INCONTROL ASSISTANCE</td>
                    <br />
                  </span>
                </div>
              </div>
            </div>
            <div className="footer col-lg-3 col-md-6 col-sm-12 text-white ">
              <div className="footer-column">
                <div id="third">
                  <span>
                    <th>ABOUT JAGUAR</th>
                    <br />
                    <td>OVERVIEW</td>
                    <br />
                    <td>JAGUAR NEWS</td>
                    <br />
                    <td>JAGUAR CLASSIC</td>
                    <br />
                    <td>JAGUAR TCS RACING</td>
                    <br />
                    <td>JAGUAR LANDROVER CSR POLICY</td>
                    <br />
                    <td>CSR PROJECTS</td>
                    <br />
                    <td>CSR COMMITTEE</td>
                    <br />
                    <td>JLR ANNUAL RETURN</td>
                    <br />
                  </span>
                  <span>
                    <th>JAGUAR EXPERIENCE</th>
                    <br />
                    <td>OVERVIEW</td>
                    <br />
                    <td>JAGUAR EXPERIENCES TOUR</td>
                    <br />
                  </span>
                  <span>
                    <th>INNOVATION AND TECHNOLOGY</th>
                    <br />
                    <td>INCONTROL</td>
                    <br />
                    <td>SPECIAL VEHICLE OPERATIONS</td>
                    <br />
                  </span>
                </div>
              </div>
            </div>
            <div className="footer col-lg-3 col-md-6 col-sm-12 text-white">
              <div className="footer-column">
                <div id="fourth">
                  <th>JOIN THE CONVERSATION</th>
                  <br />
                  <span>
                    <div id="f-logos">
                      <FaFacebookF />
                      <br />
                      <FaXTwitter />
                      <br />
                      <FaYoutube />
                      <br />
                      <FaInstagram />
                      <br />
                      <FaLinkedinIn />
                      <br />
                    </div>
                    <div>
                      <td>FACEBOOK</td>
                      <br />
                      <td>X</td>
                      <br />
                      <td>YOUTUBE</td>
                      <br />
                      <td>INSTAGRAM</td>
                      <br />
                      <td>LINKEDIN</td>
                    </div>
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
