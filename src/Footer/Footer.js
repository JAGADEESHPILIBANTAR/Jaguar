import React from 'react'
import { FaLinkedinIn,FaInstagram,FaFacebookF,FaYoutube} from 'react-icons/fa';
import {FaXTwitter} from 'react-icons/fa6'
import './footer.css'

export default function Footer() {
  return (
    <div id='footer'>
        <section id='footer1'>
            <div id='first'>
                <span>
                <th>OUR JAGUAR VEHICLES</th><br/>
                <td>JAGUAR F-PACE</td><br/>
                <td>JAGUAR I-PACE</td><br/>
                <td>JAGUAR F-TYPE</td><br/>
                <td>SPECIAL VEHICLE OPERATIONS</td><br/>
                <td>COMPARE</td><br/>
                </span>
                <span>
                    <th>PRICE AND OFFERS</th><br/>
                    <td>JAGUAR FINANCIAL SERVICE</td><br/>
                    <td>BUILD YOUR OWN</td><br/>
                    <td>VIEW PRICES</td><br/>
                </span>
                <span>
                    <th>RESEARCH</th><br/>
                    <td>DOWNLOAD A BROCHURE</td><br/>
                    <td>EXPLORE OUR RANGE</td><br/>
                    <td>REVIEW</td><br/>
                    <td>GLOSSARY</td><br/>
                </span>
                <span>
                    <th>FLEET & BUSINESS</th><br/>
                    <td>OVERVIEW</td><br/>
                    <td>OUR VEHICLES</td><br/>
                    <td>CONTACT US</td><br/>
                </span>
            </div>
            <div id='second'>
                <span>
                    <th>OWNERSHIP</th><br/>
                    <td>OVERVIEW</td><br/>
                    <td>INCONTROL</td><br/>
                    <td>MOBILITY SERVICE</td><br/>
                    <td>FIND ME A CAR</td><br/>
                    <td>ACCESSORIES</td><br/>
                    <td>VEHICLE RECALL SERVICE</td><br/>
                </span>
                <span>
                    <th>SERVICE AND MAINTENANCE</th><br/>
                    <td>OVERVIEW</td><br/>
                    <td>GUIDES AND MANUAL</td><br/>
                    <td>DIESEL PARTICULAR FILTER</td><br/>
                </span>
                <span>
                    <th>ASSISTANCE</th><br/>
                    <td>ROADSITE ASSISTANCE</td><br/>
                    <td>CONTACT JAGUAR</td><br/>
                    <td>FIND A RETAILER</td><br/>
                    <td>INCONTROL ASSISTANCE</td><br/>
                </span>
            </div>
            <div id='third'>
                <span>
                    <th>ABOUT JAGUAR</th><br/>
                    <td>OVERVIEW</td><br/>
                    <td>JAGUAR NEWS</td><br/>
                    <td>JAGUAR CLASSIC</td><br/>
                    <td>JAGUAR TCS RACING</td><br/>
                    <td>JAGUAR LANDROVER CSR POLICY</td><br/>
                    <td>CSR PROJECTS</td><br/>
                    <td>CSR COMMITTEE</td><br/>
                    <td>JLR ANNUAL RETURN</td><br/>
                </span>
                <span>
                    <th>JAGUAR EXPERIENCE</th><br/>
                    <td>OVERVIEW</td><br/>
                    <td>JAGUAR EXPERIENCES TOUR</td><br/>
                </span>
                <span>
                    <th>INNOVATION AND TECHNOLOGY</th><br/>
                    <td>INCONTROL</td><br/>
                    <td>SPECIAL VEHICLE OPERATIONS</td><br/>
                </span>
            </div>
            <div id='fourth'>
            <th>JOIN THE CONVERSATION</th><br/>
                <span>
                    <div id='f-logos'>
                        {/* <footer>Hello</footer> */}
                        <FaFacebookF/><br/>
                        <FaXTwitter/><br/>
                        <FaYoutube/><br/>
                        <FaInstagram/><br/>
                        <FaLinkedinIn/><br/>
                    </div>
                    <div>
                        <td>FACEBOOK</td><br/>
                        <td>X</td><br/>
                        <td>YOUTUBE</td><br/>
                        <td>INSTAGRAM</td><br/>
                        <td>LINKEDIN</td>
                    </div>
                </span>
            </div>
        </section>
    </div>
  )
}
