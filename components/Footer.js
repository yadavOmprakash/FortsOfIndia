import React from "react";
import { Col, Container, Row } from "react-bootstrap";
// bootstrap css
import "bootstrap/dist/css/bootstrap.min.css";
// external css
import { Link } from "react-router-dom";
// import images from local system
import QRCode from "../image/QRCode.PNG";
import IncredibleIndia from "../image/150 years.png";
import DigiIndia from "../image/Digital-India.png";
import Logo1 from "../image/Incredible-India.png";
import Gandhi from "../image/Ministry of culture.png";
import Swachhbharat from "../image/Mygov.png";
import Mygov from "../image/Swacch-Bharat.png";
import { Facebook, Instagram, Twitter } from "react-feather";

// import Underline from './Underline';

function FooterSection() {
  return (
    <>
      <footer className="footer-section">
        <div className="container">
          <div className="footer-content pt-5 pb-5">
            <div className="row">
              <div className="col-xl-5 col-lg-4  mb-50">
                <div className="footer-widget">
                  <div className="footer-widget-heading">
                    <h3>INDIAN CULTURE 2.0</h3>
                  </div>
                  {/* <div className="footer-logo">
                    <a href="index.html"><img src="https://i.ibb.co/QDy827D/ak-logo.png" className="img-fluid" alt="logo"/></a>
                  </div> */}
                  <div className="footer-text">
                    <p>The Indian Culture Portal is a part of the National Virtual Library of India project, funded by the Ministry of Culture, Government of India. The portal has been created and developed by the Indian Institute of Technology, Bombay. Data has been provided by organisations of the Ministry of Culture and curated by Indira Gandhi National Open University.</p>
                  </div>
                </div>
              </div>
              {/* <div className="col-xl-4 col-lg-4 col-md-6 mb-30"> */}

              <div className="col-xl-5 col-lg-4 col-md-6 mb-30">
                <div className="footer-widget">
                  <div className="footer-widget-heading">
                    <h3>QUICK LINKS</h3>
                  </div>
                  <ul>
                    <li>
                      <a href="/#">Indian Culture Portal</a>
                    </li>
                    <li>
                      <a href="/#">Copyright</a>
                    </li>
                    <li>
                      <a href="/#">NVLI</a>
                    </li>
                    <li>
                      <a href="/#">Copyright Policy</a>
                    </li>
                    <li>
                      <a href="/#">Disclaimer</a>
                    </li>
                    <li>
                      <a href="/#">Terms & Conditions</a>
                    </li>
                    <li>
                      <a href="/#">Privacy Policy</a>
                    </li>
                    <li>
                      <a href="/#">Accessibility Statement</a>
                    </li>
                    <li>
                      <a href="/#">Site Map</a>
                    </li>
                    <li>
                      <a href="/#">Hyperlinking Policy</a>
                    </li>
                  </ul>
                </div>
              </div>
              {/* <div className="col-xl-4 col-lg-4 col-md-6 mb-50"> */}

              <div className="col-xl-2 col-lg-4 col-md-6 mb-50">
                <div className="footer-widget">
                  <div className="footer-widget-heading">
                    <h3>FOLLOW US</h3>
                  </div>
                  <div className="footer-text mb-25 footer-social-icon">
                    <Link to="https://www.facebook.com/INDCulturePortal" target="_blank" rel="noreferrer">
                      {" "}
                      <Facebook size={32} color="white" />
                    </Link>
                    <Link to="https://www.instagram.com/indiancultureportal/" target="_blank" rel="noreferrer">
                      {" "}
                      <Instagram size={32} color="white" />
                    </Link>
                    <Link to="https://twitter.com/_IndianCulture" target="_blank" rel="noreferrer">
                      {" "}
                      <Twitter size={32} color="white" />
                    </Link>

                    {/* <a href="https://www.facebook.com/INDCulturePortal" target='_blank' rel="noreferrer"> <Facebook size={32} color="white" /></a> */}
                    {/* <a href="https://www.instagram.com/indiancultureportal/" target='_blank' rel="noreferrer"> <Instagram size={32} color="white"/></a> */}
                    {/* <a href="https://twitter.com/_IndianCulture" target='_blank' rel="noreferrer"> <Twitter size={32} color="white"/></a> */}
                    {/* <a href="https://www.indiaculture.nic.in/index.php" target='_blank' rel="noreferrer"> <Linkedin size={32} color="white"/></a> */}
                    {/* <p>kindly follow us on <i>Facebook, Instagram,</i> and <i>Twitter</i>.</p> */}
                  </div>
                </div>
                <div className="footer-widget qrspace">
                  <div className="footer-widget-heading">
                    <h3>SCAN HERE</h3>
                  </div>
                  <div className="footer-text mb-25">
                    <img src={QRCode} style={{ width: "100px" }} alt="QRCode" />
                    {/* <img src={QRCode} style={{ marginTop:'-28px',marginLeft:'60px', width: '100px' }} /> */}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="copyright-area">
          <Container>
            <Row>
              <Col className="boxes ">
                <li>
                  <a href="https://gandhi.gov.in/" target="_blank" rel="noreferrer">
                    <img src={IncredibleIndia} alt="IncredibleIndia" className="footericon1" />
                  </a>
                </li>

                <li>
                  <a href="https://digitalindia.gov.in/" target="_blank" rel="noreferrer">
                    <img src={DigiIndia} alt="DigiIndia" className="footericon2" />
                  </a>
                </li>

                <li>
                  <a href="https://www.mygov.in/" target="_blank" rel="noreferrer">
                    <img src={Swachhbharat} alt="Swachhbharat" className="footericon3" />
                  </a>
                </li>

                <li>
                  <a href="https://swachhbharatmission.gov.in/SBMCMS/index.htm" target="_blank" rel="noreferrer">
                    <img src={Mygov} alt="Swachhbharat" className="footericon4" />
                  </a>
                </li>

                <li>
                  <a href="https://www.incredibleindia.org/content/incredible-india-v2/en.html" target="_blank" rel="noreferrer">
                    <img src={Logo1} alt="Logo1" className="footericon5" />
                  </a>
                </li>

                <li>
                  <a href="https://www.indiaculture.nic.in/index.php" target="_blank" rel="noreferrer">
                    <img src={Gandhi} alt="Gandhi" className="footericon6" />
                  </a>
                </li>
              </Col>
            </Row>
          </Container>
        </div>
      </footer>
    </>
  );
}

export default FooterSection;
