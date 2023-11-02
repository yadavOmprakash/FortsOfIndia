import { Container, Row, Col } from "react-bootstrap";
import React, { useState, useEffect } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import SwrilDivider from "../image/SwirlDivider 12.png";
import { Link } from "react-router-dom";

const Storypage = () => {
  const [ICstorieslist, setICstorieslist] = useState([]);
  let api = `https://indianculture.nvli.in/rest/stories`;
  useEffect(() => {
    fetchData();
  }, []);
  const fetchData = async () => {
    try {
      const response = await fetch(api);
      const ICstorieslist = await response.json();
      const sortedData = ICstorieslist.rows.search_results.sort((a, b) => a.title.localeCompare(b.title)); // Sorting in alphabetical order based on 'name'
      setICstorieslist(sortedData);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  const allcategories = () => {
    window.open("/underconstructor", "_parent");
  };

  // const backtopre = () => {
  //   window.open("/", "_parent");
  // };
  const formatText = (text) => {
    return text.replace(/\s+/g, "_");
  };
  return (
    <>
      <div>
        <section>
          <div className="section " id="section-2">
            <Container className="story-header">
              <Row>
                <Col>
                  <h1>Stories</h1>
                  <img src={SwrilDivider} alt="" style={{ width: "90px", height: "15px", backgroundColor: "transparent" }} />
                </Col>
              </Row>
            </Container>
            <Container className="page-contain ">
              <Row className="storiesbox">
                {ICstorieslist.map((item) => (
                  <div className="storiescard">
                    {/* <Link to={`/${formatText(item.title)}`} className="storiescard__card-link"></Link> */}
                    <a href={formatText(item.title)} className="storiescard__card-link" onClick={allcategories}>
                      <img src={`https://indianculture.nvli.in${item.field_story_image}`} alt={item.title} className="storiescard__image" />
                      <div className="storiescard__text-wrapper">
                        <h2 className="storiescard__title" dangerouslySetInnerHTML={{ __html: item.title }} />
                        <div className="storiescard__post-date">{item.field_type_of_story}</div>
                        <div className="storiescard__details-wrapper">
                          <p className="storiescard__excerpt">{item.field_story_short_descp}</p>
                          <a href="#" className="storiescard__read-more">
                            Read more <i className="fas fa-long-arrow-alt-right"></i>
                          </a>
                        </div>
                      </div>
                    </a>
                    // <Link/>
                  </div>
                ))}
              </Row>
            </Container>

            <Container className="storycenter">
              <Row>
                <Col>
                  <button className="storybtn" onClick="">
                    <span>View All </span>
                  </button>
                </Col>
              </Row>
            </Container>
          </div>
        </section>
      </div>
    </>
  );
};

export default Storypage;
