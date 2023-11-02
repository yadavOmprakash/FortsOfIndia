import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import Offcanvas from "react-bootstrap/Offcanvas";
import ICLogo from "../image/IClogoblack.png";
import "bootstrap/dist/css/bootstrap.min.css";
import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

const Menubar = () => {
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

  const formatText = (text) => {
    return text.toLowerCase().trim().replace(/\s+/g, "_").replace(/amp;/g, "");
  };

  return (
    <>
      {[false].map((expand, index) => (
        <Navbar id="navbar" key={index} bg="light" sticky="top" expand={expand} className="mb-3" style={{ boxShadow: "1px 1px 5px 0px rgba(0,0,0,0.2)" }}>
          <Container fluid>
            {/*  <Navbar.Brand href="#" style={{ fontSize: '25px', fontWeight: '700' }}>
                            <img src={ICLogo} width="60" height="60" style={{ backgroundColor: 'transparent' }} alt="IC Logo" />
                            INDIAN CULTURE</Navbar.Brand> */}
            <Navbar>
              {/* <Link  to="/" style={{ fontSize: "25px", fontWeight: "700" }}> */}
              <Link  to="/" >

              <img src={ICLogo} style={{ width: "260px", backgroundColor: "transparent" }} alt="IC Logo" />
              </Link>
            </Navbar>
            <Navbar.Toggle aria-controls={`offcanvasNavbar-expand-${expand}`} />
            <Navbar.Offcanvas className="sidepanel" id={`offcanvasNavbar-expand-${expand}`} aria-labelledby={`offcanvasNavbarLabel-expand-${expand}`} placement="end">
              <Offcanvas.Header closeButton>
                <Offcanvas.Title id={`offcanvasNavbarLabel-expand-${expand}`}>INDIAN CULTURE 2.0</Offcanvas.Title>
              </Offcanvas.Header>
              <Offcanvas.Body>
                <Nav className="justify-content-end flex-grow-1 pe-3">
                  {/* {ICcategorylist.map((item) => (
                    <Nav.Link key={item.title} href={formatText(item.title)}>
                      <b dangerouslySetInnerHTML={{ __html: item.title }} />
                    </Nav.Link>
                  ))} */}
                  {ICcategorylist.map((item) => (
                    <Link key={item.title} to={formatText(item.title)}>
                      <div className="all-links-category">
                      <b dangerouslySetInnerHTML={{ __html: item.title }}  />
                      </div>
                    </Link>
                  ))}
                </Nav>
              </Offcanvas.Body>
            </Navbar.Offcanvas>
          </Container>
        </Navbar>
      ))}
      {/* <Underline /> */}
    </>
  );
};

export default Menubar;
