import { Container, Row, Col } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import SwrilDivider from "./SwrilDivider";
import { ArrowLeft } from "react-feather";
import { Link } from "react-router-dom";

import React, { useState, useEffect } from "react";
const AllCategories = () => {
  const [ICcategorylist, setICcategorylist] = useState([]);
  let api = `https://indianculture.gov.in/rest/all-categories`;

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
  useEffect(() => {
    fetchData();
  }, []);
  // const allcategories = () => {
  //   window.open("/underconstructor", "_parent");
  // };

  // const backtopre = () => {
  //   window.open("/", "_parent");
  //   alert("jii")
  // };
  const formatText = (text) => {
    return text.toLowerCase().trim().replace(/\s+/g, "_").replace(/amp;/g, "");
  };
  return (
    <>
      <Container fluid>
        <Row>
          <Col sm={1}>
            {/* <ArrowLeft className="backtoprevious" onClick={backtopre} size={45} /> */}
            <Link to="/">
              <ArrowLeft className="backtoprevious" size={45} />
            </Link>{" "}
          </Col>
        </Row>
      </Container>
      <Container className="all-cate-header">
        <Row>
          <Col>
            <h1>Categories</h1>
            <SwrilDivider />
          </Col>
        </Row>
      </Container>
      <Container className="page-contain ">
        <Row>
          {ICcategorylist.map((item, index) => (
            //  <Col  key ={index} xs={2} className="p-1">
            //    <a href={formatText(item.title)} className="all-cate-data-card" onClick={allcategories}>
            //    <img src={`https://indianculture.nvli.in${item.field_item_image}`} alt={item.title} className='data_card_img' />
            //  <span className="image-hover-text-title" dangerouslySetInnerHTML={{ __html: item.title }} />
            // </a>
            // </Col>
            <Col key={index} xs={2} className="p-1">
              <Link to={`/${formatText(item.title)}`} className="all-cate-data-card">
                <img src={`https://indianculture.nvli.in${item.field_item_image}`} alt={item.title} className="data_card_img" />
                <span className="image-hover-text-title" dangerouslySetInnerHTML={{ __html: item.title }} />
              </Link>
            </Col>
          ))}
        </Row>
      </Container>

      <Container className="all-cate-header">
        <Row>
          <Col>
            <SwrilDivider />
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default AllCategories;
