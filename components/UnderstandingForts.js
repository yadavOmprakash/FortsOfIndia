import React, { useEffect, useState } from "react";
import { Col, Container, Row } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import UnderstandingFortsBanner from "../image/Jaisalmer_0 1.png";
import "../css/UnderstandingForts.css";

function UnderstandingForts() {
  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("https://indianculture.gov.in/rest-v1/forts-of-india/understanding-forts");
        const data = await response.json();
        setData(data);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);
  console.log(data?.rows?.search_results);

  return (
    <>
      <div className="parent-container">
        <img src={UnderstandingFortsBanner} className="fortindibanner" alt="Free Banner" />
      </div>

      <Container className="fortindi-header">
        <Row>
          <Col>
            <h1>Understanding Forts</h1>

            {/* <SwrilDivider /> */}
          </Col>
        </Row>
      </Container>

      {data.rows?.search_results.map((e, i) => {
        if (e.field_foi_andriod_redirect_url === "True") {
          return (
            <Container className="unfwhatheader" style={{ width: "100%", maxWidth: "1440px", margin: "0 auto" }}>
              <Row className="justify-content-md-center">
                <Col xs lg="4" className="justify-content-center">
                  <div className="unfwhatimg">
                    <img src={e.field_forts_writup_images} alt="Today in History" className="" />
                  </div>
                </Col>
                <Col>
                  <h2>{e.title}</h2>
                  <p>{e.field_understanding_fort_short_d}</p>
                  <button
                    class="unfwhatbtn"
                    onClick={() => {
                      window.open(e.field_foi_andriod_redirect_url, "_parent");
                    }}
                  >
                    <span>Read More </span>
                  </button>
                </Col>
              </Row>
            </Container>
          );
        } else {
          return (
            <Container className="unfwhatheader" style={{ width: "100%", maxWidth: "1440px", margin: "0 auto" }}>
              <Row className="justify-content-md-center">
                <Col id="did">
                  <h2>{e.title}</h2>
                  <p>{e.field_understanding_fort_short_d}</p>
                  <button
                    class=" unfwhatbtn"
                    onClick={() => {
                      window.open(e.field_foi_andriod_redirect_url, "_parent");
                    }}
                  >
                    <span>Read More </span>
                  </button>
                </Col>
                <Col xs lg="4" className="justify-content-center">
                  <div className="unfwhatimg">
                    <img src={e.field_forts_writup_images} alt="Did you know" className="" />
                  </div>
                </Col>
              </Row>
            </Container>
          );
        }
      })}
    </>
  );
}

export default UnderstandingForts;


