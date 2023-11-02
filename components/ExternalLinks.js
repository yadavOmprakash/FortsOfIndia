import { Container, Row, Col } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import React, { useState, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronLeft } from "@fortawesome/free-solid-svg-icons";
import { faChevronRight } from "@fortawesome/free-solid-svg-icons";
import SwrilDivider from "./SwrilDivider";
import { Link } from "react-router-dom";

// Glider.js
import "glider-js/glider.min.css";
import Glider from "glider-js";
const ExternalLinks = () => {
  const [ICExternalLinks, setICExternalLinks] = useState([]);
  let api = `https://indianculture.nvli.in/rest/externalLinks`;

  const fetchData = async () => {
    try {
      const response = await fetch(api);
      const ICExternalLinks = await response.json();
      const sortedData = ICExternalLinks.sort((a, b) => a.title.localeCompare(b.title)); // Sorting in alphabetical order based on 'name'
      setICExternalLinks(sortedData);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  useEffect(() => {
    new Glider(document.querySelector(".glider"), {
      slidesToShow: 1.1,
      slidesToScroll: 1,
      draggable: true,
      dots: ".dots",
      responsive: [
        {
          breakpoint: 768,
          settings: {
            slidesToShow: 2.1,
            slidesToScroll: 1,
            duration: 0.8,
            arrows: {
              prev: ".glider-prev",
              next: ".glider-next",
            },
          },
        },
        {
          breakpoint: 1024,
          settings: {
            slidesToShow: 4.1,
            slidesToScroll: 1,
            duration: 0.8,
            arrows: {
              prev: ".glider-prev",
              next: ".glider-next",
            },
          },
        },
      ],
    });
    fetchData();
  }, []);

  return (
    <>
      <Container className="external-header">
        <Row>
          <Col>
            <h1>External Links</h1>
            <SwrilDivider />
          </Col>
        </Row>
      </Container>
      <main className="main">
        <div className="container">
          <div className="glider-contain">
            <div className="glider hide-scrollbar">
              {ICExternalLinks.map((item, index) => (
                <div className="card-image" key={index}>
                  {/* <a href={item.field_extenal_link}>
                    <img src={`https://indianculture.nvli.in${item.field_external_website_image}`} alt={item.title} />
                  </a> */}
                  <Link to={`${item.field_extenal_link}`}>
                  <img src={`https://indianculture.nvli.in${item.field_external_website_image}`} alt={item.title} />

                  </Link>
                </div>
              ))}
            </div>
            <span role="button" aria-label="Previous" className="glider-prev">
              <FontAwesomeIcon icon={faChevronLeft} style={{ marginLeft: "14px" }} />
            </span>
            <span role="button" aria-label="Next" className="glider-next">
              <FontAwesomeIcon icon={faChevronRight} style={{ marginLeft: "14px" }} />
            </span>
            {/*<span role="tablist" className="dots"></span>*/}
          </div>
        </div>
      </main>
    </>
  );
};

export default ExternalLinks;
