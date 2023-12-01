import React from "react";
import Img1 from "../Images/Img6.jpg";
import Img2 from "../Images/Img7.jpg";
import Img3 from "../Images/Img8.jpg";
import Img4 from '../Images/Img9.jpg';
import Race1 from '../Images/Race1.jpg';
import Race2 from '../Images/Race2.jpg';
import f1 from "../Images/f1.jpg"
import f2 from "../Images/f2.jpg"
import f3 from "../Images/f3.jpg"
import f4 from "../Images/f4.jpg"
import Carousel from "react-bootstrap/Carousel";
import 'bootstrap/dist/css/bootstrap.min.css';
import { MdOutlineKeyboardArrowRight} from 'react-icons/md';

import './Carousel.css';
import { BsArrowRight} from 'react-icons/bs';

export default function Slider() {
  return (
    <>
    <div id="crl1">
      <Carousel>
        <Carousel.Item>
          <img
            src={Img1}
            alt="first"
            className="carousel1"
            height={800}
            width={1400}
          />
        </Carousel.Item>
        <Carousel.Item>
          <img
            src={Img2}
            alt="second"
            className="carousel1"
            height={800}
            width={1400}
          />
        </Carousel.Item>
        <Carousel.Item>
          <img
            src={Img3}
            alt="third"
            className="carousel1"
            height={800}
            width={1400}
          />
        </Carousel.Item>
        <Carousel.Item>
          <img
            src={Img4}
            alt="third"
            className="carousel1"
            height={800}
            width={1400}
          />
        </Carousel.Item>
      </Carousel>
      <div>
        <div>
          <p>JAGUAR I - PACE</p>
        </div>
        <button id="design">
          <span>
            <BsArrowRight />
          </span>
          <h6>DESIGN YOURS</h6>
        </button>
        <div id="exp">
          <span><MdOutlineKeyboardArrowRight/></span>
          <h4>EXPLORE</h4>
        </div>
      </div>
      <div>
      <Carousel>
        <Carousel.Item>
          <img
            src={Img1}
            alt="first"
            className="carousel1"
            height={800}
            width={1400}
          />
        </Carousel.Item>
        <Carousel.Item>
          <img
            src={Img2}
            alt="second"
            className="carousel1"
            height={800}
            width={1400}
          />
        </Carousel.Item>
        <Carousel.Item>
          <img
            src={Img3}
            alt="third"
            className="carousel1"
            height={800}
            width={1400}
          />
        </Carousel.Item>
        <Carousel.Item>
          <img
            src={Img4}
            alt="third"
            className="carousel1"
            height={800}
            width={1400}
          />
        </Carousel.Item>
      </Carousel>
      </div>
      <div>
        <div>
          <p>JAGUAR F - PACE</p>
        </div>
        <button id="design">
          <span>
            <BsArrowRight />
          </span>
          <h6>DESIGN YOURS</h6>
        </button>
        <div id="exp">
          <span><MdOutlineKeyboardArrowRight/></span>
          <h4>EXPLORE</h4>
        </div>
      </div>
      <div>
      <Carousel>
        <Carousel.Item>
          <img
            src={f1}
            alt="first"
            className="carousel1"
            height={800}
            width={1400}
          />
        </Carousel.Item>
        <Carousel.Item>
          <img
            src={f2}
            alt="second"
            className="carousel1"
            height={800}
            width={1400}
          />
        </Carousel.Item>
        <Carousel.Item>
          <img
            src={f3}
            alt="third"
            className="carousel1"
            height={800}
            width={1400}
          />
        </Carousel.Item>
        <Carousel.Item>
          <img
            src={f4}
            alt="third"
            className="carousel1"
            height={800}
            width={1400}
          />
        </Carousel.Item>
      </Carousel>
      </div>
      <div>
        <div>
          <p>JAGUAR F - TYPE</p>
        </div>
        <button id="design">
          <span>
            <BsArrowRight />
          </span>
          <h6>DESIGN YOURS</h6>
        </button>
        <div id="exp">
          <span><MdOutlineKeyboardArrowRight/></span>
          <h4>EXPLORE</h4>
        </div>
      </div>
    <div id="submain">
      <div>
        <Carousel>
          <Carousel.Item>
            <img
              src={Race1}
              alt="first"
              className="carousel1"
              height={800}
              width={1400}
            />
          </Carousel.Item>
          <Carousel.Item>
            <img
              src={Race2}
              alt="second"
              className="carousel1"
              height={800}
              width={1400}
            />
          </Carousel.Item>
        </Carousel>
      </div>
    </div>
    <div id="last">
      <div>
          <p>JAGUAR TCS RACING</p>
        </div>
        <div id="last1">
          <h6>The Ultimate Balance of Power and efficiency</h6>
          <button id="design">
            <span>
              <BsArrowRight />
            </span>
            <h6>LEARN MORE</h6>
          </button>
        </div>
      </div>
    </div>
    </>
  );
}
