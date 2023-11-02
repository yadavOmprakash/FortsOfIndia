// import { Component } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Container, Row, Col } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import SwrilDivider from "./SwrilDivider";
import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

const CategoriesOpt = () => {
  const [ICcategorylist, setICcategorylist] = useState([]);
  let api = `https://indianculture.nvli.in/rest/all-categories`;
  useEffect(() => {
    fetchData();
  }, []);
  const fetchData = async () => {
    try {
      const response = await fetch(api);
      const ICcategorylist = await response.json();
      const sortedData = ICcategorylist.sort((a, b) => a.title.localeCompare(b.title)); // Sorting in alphabetical order based on 'name'
      setICcategorylist(sortedData);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  // const allcategories = () => {
  //     window.open('/underconstructor', '_parent');
  //   };

  //   const backtopre = () => {
  //     window.open('/', '_parent');
  //   }
  const formatText = (text) => {
    return text.toLowerCase().replace(/\s+/g, "_");
  };

  var settings = {
    dots: false,
    infinite: true,
    speed: 500,
    cssEase: "linear",
    slidesToShow: 5,
    slidesToScroll: 4,
    // initialSlide: 1,
    // autoplay: true,
    // autoplaySpeed: 10000,
    pauseOnHover: true,
    arrows: true,
    draggable: true,

    responsive: [
      {
        breakpoint: 1200,
        settings: {
          slidesToShow: 4.1,
          slidesToScroll: 2,
          arrows: true,
          draggable: true,
        },
      },
      {
        breakpoint: 992,
        settings: {
          slidesToShow: 3.1,
          slidesToScroll: 2,
          // initialSlide: 2
          arrows: false,
          draggable: true,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          // initialSlide: 2

          arrows: false,
          draggable: true,

          focusOnSelect: true,
          centerMode: true,
          centerPadding: "40px",
          variableWidth: false,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          // initialSlide: 2

          arrows: false,
          draggable: true,

          focusOnSelect: true,
          centerMode: true,
          centerPadding: "40px",
          variableWidth: false,
        },
      },
    ],
  };

  const categoriesopt = () => {
    window.open("/allcategories", "_parent");
  };
  return (
    <>
      <Container id="Catagory" className="cata-header #skip">
        <Row>
          <Col>
            <h1>Categories</h1>
            <SwrilDivider />
          </Col>
        </Row>
      </Container>
      <Container style={{ width: "100%", maxWidth: "1440px", margin: "0 auto" }}>
        <Slider {...settings}>
          {ICcategorylist.map((item, index) => (
            <div className="cata-lst" key={index}>
              {/* <a href={formatText(item.title)}  className={`catacard ${formatText(item.title)} categoriescard`}>
                         <div className="overlay"></div>
                         <div className="circle">
                        <span>  <img src={`https://indianculture.nvli.in${item.field_item_image}`} alt={item.title} style={{ width: '78px', height: '78px' }} /></span>
                        </div>
                         <p dangerouslySetInnerHTML={{ __html: item.title }} />
                     </a> */}
              <Link to={`/${formatText(item.title)}`} className={`catacard ${formatText(item.title)} categoriescard`}>
                <div className="overlay"></div>
                <div className="circle">
                  <span>
                    <img src={`https://indianculture.nvli.in${item.field_item_image}`} alt={item.title} style={{ width: "78px", height: "78px" }} />
                  </span>
                </div>
                <p dangerouslySetInnerHTML={{ __html: item.title }} />
              </Link>
            </div>
          ))}
        </Slider>
      </Container>
      <Container className="catacenter">
        <Row>
          <Col>
            <button className="catabtn" onClick={categoriesopt}>
              <span>View All</span>
            </button>
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default CategoriesOpt;
