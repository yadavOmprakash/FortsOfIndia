// import { React, useEffect, useState } from "react";
// import { Col, Container, Row } from "react-bootstrap";

// import "bootstrap/dist/css/bootstrap.min.css";

// import { Player, BigPlayButton, LoadingSpinner, ControlBar } from "video-react";
// import "../../node_modules/video-react/dist/video-react.css";
// import Vidicon from "../image/amer-8 1.png";
// import FortIndiaBanner from "../image/hampi 1.png";
// import FortIndia1 from "../image/Bidar-1.jpg";
// import FortIndia2 from "../image/gul7.jpg";
// import FortIndia3 from "../image/agra1.jpg";
// import FortIndia5 from "../image/Janjira2.jpg";
// import FortIndia4 from "../image/agra3.jpg";
// import FortIndia6 from "../image/red17.jpg";
// import FortIndia7 from "../image/rarebook2.jpg";
// // import FortIndia1 from '../images/Bidar-1.jpg';
// // import FortIndia1 from '../images/Bidar-1.jpg';
// // import FortIndi from '../images/Component 43.png';
// // import FortIndione from '../images/Component 44.png';
// // import FortInditwo from '../images/Component 45.png';
// // import FortIndithree from '../images/Component 46.png';
// // import FortIndifour from '../images/Component 47.png';

// import "../components/FortsOfIndia.css";

// function FortsOfIndia() {
//   const fortsofindia = () => {
//     window.open("/fortsofindilistpage", "_parent");
//   };

//   const understandingforts = () => {
//     window.open("/understandingforts", "_parent");
//   };

//   const forthistory = () => {
//     window.open("/forthistory", "_parent");
//   };

//   const fortsfreedom = () => {
//     window.open("/fortsfreedom", "_parent");
//   };
//   const [data, setData] = useState([]);

//   useEffect(() => {
//     const fetchData = async () => {
//       try {
//         const response = await fetch(`https://indianculture.gov.in/rest-v1/forts-of-india-slider`);
//         const data = await response.json();
//         setData(data);
//       } catch (error) {
//         console.error("Error fetching data:", error);
//       }
//     };

//     fetchData();
//   }, []);
//   console.log(data.rows?.search_results[0].field_forts_of_india_slider);
//   return (
//     <>
//       <div className="parent-container">
//         {/* <img src={FortIndiaBanner} className="fortindibanner" alt="Free Banner" /> */}

//         <div id="carouselExampleIndicators" className="carousel slide" data-ride="carousel">
//           <ol className="carousel-indicators">
//             {data.rows?.search_results.map((item, index) => (
//               <li key={index} data-target="#carouselExampleIndicators" data-slide-to={index} className={index === 0 ? "active" : ""}></li>
//             ))}
//           </ol>
//           <div className="carousel-inner">
//             {data.rows?.search_results.map((item, index) => (
//               <div key={index} className={`carousel-item ${index === 0 ? "active" : ""}`}>
//                 <img className="d-block w-100 fortindibanner" src={item.field_forts_of_india_slider} alt={`${index} slide`} />
//               </div>
//             ))}
//           </div>
//           <a className="carousel-control-prev" href="#carouselExampleIndicators" role="button" data-slide="prev">
//             <span className="carousel-control-prev-icon" aria-hidden="true"></span>
//             <span className="sr-only">Previous</span>
//           </a>
//           <a className="carousel-control-next" href="#carouselExampleIndicators" role="button" data-slide="next">
//             <span className="carousel-control-next-icon" aria-hidden="true"></span>
//             <span className="sr-only">Next</span>
//           </a>
//         </div>
//       </div>
//       <Container className="fortindi-header">
//         <Row>
//           <Col>
//             <h1>Forts of India</h1>

//             {/* <SwrilDivider /> */}
//           </Col>
//         </Row>
//       </Container>
//       <Container className="fortindicover">
//         <Row className="justify-content-md-center">
//           <Col>
//             <p>The Forts of India are some of the most awe-inspiring monuments found in the country. From the Himalayas to the peninsular tip, from the deserts to the lush valleys of North-East, forts adorn each and every corner of the landscape of the Indian subcontinent. This section aims to provide a comprehensive overview of these magnificent monuments that bear the stories of the political vicissitudes of our country.</p>
//           </Col>
//         </Row>
//       </Container>
//       <Container>
//         <Player playsInline poster={Vidicon} src="http://peach.themazzone.com/durian/movies/sintel-1024-surround.mp4">
//           <BigPlayButton position="center" />
//           <LoadingSpinner />
//           <ControlBar autoHide={false} className="my-class" />
//         </Player>
//       </Container>

//       <div className="container">
//         <div id="layout" className="layout layout--collage">
//           <div className="image image--3-of-5">
//             <img src={FortIndia2} alt="as" />
//             <div className="fortofindia-ttitle">FORTS OF INDIA</div>
//             {/*  <div className="description">
//                                 <h1>FORTS OF INDIA</h1>
//                             </div> */}
//           </div>
//           <div className="image image--2-of-5" onClick={understandingforts}>
//             <img src={FortIndia5} alt="ass" />
//             <div className="fortofindia-ttitle">UNDERSTANDING FORTS</div>

//             {/* <div className="description">
//                                 <h1>UNDERSTANDING FORTS</h1>
//                             </div> */}
//           </div>
//           <div className="image image--3" onClick={forthistory}>
//             <img src={FortIndia6} alt="ads" />
//             <div className="fortofindia-ttitle">HISTORY</div>

//             {/* <div className="description">
//                                 <h1>HISTORY</h1>
//                             </div> */}
//           </div>
//           <div className="image image--3">
//             <img src={FortIndia7} alt="asas" />
//             <div className="fortofindia-ttitle">RARE BOOKS</div>

//             {/*  <div className="description">
//                                 <h1>RARE BOOKS</h1>
//                             </div> */}
//           </div>
//           <div className="image image--3" onClick={fortsofindia}>
//             <img src={FortIndia1} alt="aaas" />
//             <div className="fortofindia-ttitle">DISCOVERING FORTS</div>

//             {/*   <div className="description">
//                                 <h1>DISCOVERING FORTS</h1>
//                             </div> */}
//           </div>
//         </div>
//       </div>

//       <Container className="fortindiheader" style={{ width: "100%", maxWidth: "1440px", margin: "0 auto" }}>
//         <Row>
//           <Col>
//             <h1>Forts and the Freedom Struggle</h1>
//             {/* <SwrilDivider /> */}
//           </Col>
//         </Row>

//         <Row className="justify-content-md-center">
//           {/* <Col xs lg="6"> */}
//           <Col id="did">
//             {/* style={{ fontSize: `${textSize}px` }} */}
//             <p>The forts of India have stood witness to significant political events of the country. This section is dedicated to forts that have played a significant role in the freedom struggle of our country. It showcases stories and rare archival records linked to forts that acted as sites of resistance and struggle against the British.</p>
//             <button className=" fortindibtn" onClick={fortsfreedom}>
//               <span>Read More </span>
//             </button>
//           </Col>
//           <Col xs lg="4" className="justify-content-center">
//             <div className="fortindiimg">
//               <img src={FortIndiaBanner} alt="Did you know" className="" />
//             </div>
//           </Col>
//         </Row>
//         {/*  <Row style={{ marginTop: '20px' }}>
//                     <Col sm={8}>

//                         <button className=" didyouknowbtn" ><span>Read More </span></button>
//                     </Col>
//                     <Col sm={4}></Col>
//                 </Row> */}
//       </Container>
//     </>
//   );
// }

// export default FortsOfIndia;

import { React, useEffect, useState } from "react";
import { Col, Container, Row } from "react-bootstrap";
import { Link } from "react-router-dom"; // Import Link from React Router
import "bootstrap/dist/css/bootstrap.min.css";
import { Player, BigPlayButton, LoadingSpinner, ControlBar } from "video-react";
import "../../node_modules/video-react/dist/video-react.css";
import Vidicon from "../image/amer-8 1.png";
import FortIndiaBanner from "../image/hampi 1.png";
import FortIndia1 from "../image/Bidar-1.jpg";
import FortIndia2 from "../image/gul7.jpg";
import FortIndia3 from "../image/agra1.jpg";
import FortIndia5 from "../image/Janjira2.jpg";
import FortIndia4 from "../image/agra3.jpg";
import FortIndia6 from "../image/red17.jpg";
import FortIndia7 from "../image/rarebook2.jpg";
// import FortIndia1 from '../images/Bidar-1.jpg';
// import FortIndia1 from '../images/Bidar-1.jpg';
// import FortIndi from '../images/Component 43.png';
// import FortIndione from '../images/Component 44.png';
// import FortInditwo from '../images/Component 45.png';
// import FortIndithree from '../images/Component 46.png';
// import FortIndifour from '../images/Component 47.png';

import "../components/FortsOfIndia.css";

function FortsOfIndia() {
  const [data, setData] = useState([]);
  const [data1, setData1] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(`https://indianculture.gov.in/rest-v1/forts-of-india-slider`);
        const response1 = await fetch(`https://indianculture.nvli.in/rest/categoryhomepagedata`);

        const data = await response.json();
        const data1 = await response1.json();

        setData(data);
        setData1(data1);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);
  const filteredData = data1.slice(0, data1.length - 2);
  // console.log(filteredData[filteredData.length - 2]);
  return (
    <>
      <div className="parent-container">
        {/* <img src={FortIndiaBanner} className="fortindibanner" alt="Free Banner" /> */}

        <div id="carouselExampleIndicators" className="carousel slide" data-ride="carousel">
          <ol className="carousel-indicators">
            {data.rows?.search_results.map((item, index) => (
              <li key={index} data-target="#carouselExampleIndicators" data-slide-to={index} className={index === 0 ? "active" : ""}></li>
            ))}
          </ol>
          <div className="carousel-inner">
            {data.rows?.search_results.map((item, index) => (
              <div key={index} className={`carousel-item ${index === 0 ? "active" : ""}`}>
                <img className="d-block w-100 fortindibanner" src={item.field_forts_of_india_slider} alt={`${index} slide`} />
              </div>
            ))}
          </div>
          <a className="carousel-control-prev" href="#carouselExampleIndicators" role="button" data-slide="prev">
            <span className="carousel-control-prev-icon" aria-hidden="true"></span>
            <span className="sr-only">Previous</span>
          </a>
          <a className="carousel-control-next" href="#carouselExampleIndicators" role="button" data-slide="next">
            <span className="carousel-control-next-icon" aria-hidden="true"></span>
            <span className="sr-only">Next</span>
          </a>
        </div>
      </div>
      <Container className="fortindi-header">
        <Row>
          <Col>
            <h1>{data1[data1.length - 1]?.title}</h1>

            {/* <SwrilDivider /> */}
          </Col>
        </Row>
      </Container>
      <Container className="fortindicover">
        <Row className="justify-content-md-center">
          <Col>
              <p style={{ color: "black" }}>
                {" "}
                <p>{data1[data1.length - 1]?.body}</p>
              </p>
          </Col>
        </Row>
      </Container>
      <Container>
        <Player playsInline poster={Vidicon} src="http://peach.themazzone.com/durian/movies/sintel-1024-surround.mp4">
          <BigPlayButton position="center" />
          <LoadingSpinner />
          <ControlBar autoHide={false} className="my-class" />
        </Player>
      </Container>

      <div className="container">
        <div id="layout" className="layout layout--collage">
          {filteredData.map((item, index) => (
            <div key={index} className="image image--3">
              <Link to={`/${item.title.toLowerCase().replace(/\s+/g, "")}listpage`}>
                {/* <img src={item.field_forts_writup_images} alt={item.title} /> */}

                <img src={FortIndia5} alt={item.title} />
                <div className="fortofindia-ttitle">{item.title}</div>
              </Link>
            </div>
          ))}

          {/* <div className="image image--3-of-5">
          <Link to="/fortsofindialistpage">
            <img src={FortIndia2} alt="as" />
            <div className="fortofindia-ttitle">FORTS OF INDIA</div>
            </Link>

          </div> 

             <div className="image image--2-of-5">
            <Link to="/understandingfortslistpage">
              <img src={FortIndia5} alt="ass" />
              <div className="fortofindia-ttitle">UNDERSTANDING FORTS</div>
            </Link>
          </div> 

         <div className="image image--3">
            <Link to="/forthistorylistpage">
              <img src={FortIndia6} alt="ads" />
              <div className="fortofindia-ttitle">HISTORY</div>
            </Link>
          </div> 

         <div className="image image--3">
          <Link to="/rarebookslistpage">
            <img src={FortIndia7} alt="asas" />
            <div className="fortofindia-ttitle">RARE BOOKS</div>
            </Link>

          </div> 

         <div className="image image--3">
            <Link to="/discoveringfortslistpage">
              <img src={FortIndia1} alt="aaas" />
              <div className="fortofindia-ttitle">DISCOVERING FORTS</div>
            </Link>
          </div> */}
        </div>
      </div>

      <Container className="fortindiheader" style={{ width: "100%", maxWidth: "1440px", margin: "0 auto" }}>
        <Row>
          <Col>
            <h1>{data1[data1.length - 2]?.title}</h1>
            {/* <SwrilDivider /> */}
          </Col>
        </Row>

        <Row className="justify-content-md-center">
          {/* <Col xs lg="6"> */}
          <Col id="did">
            {/* style={{ fontSize: `${textSize}px` }} */}
            <p>{data1[data1.length - 2]?.body}</p>
            <Link to="/fortsfreedom">
              <button className=" fortindibtn">
                <span>Read More </span>
              </button>
            </Link>
          </Col>
          <Col xs lg="4" className="justify-content-center">
            <div className="fortindiimg">
              {/* <img src={"FortIndiaBanner"} alt="Did you know" className="" /> */}
              <img src={data1[data1.length - 2]?.field_forts_writup_images} alt="Did you know" className="" />
            </div>
          </Col>
        </Row>
        {/*  <Row style={{ marginTop: '20px' }}>
                    <Col sm={8}>

                        <button className=" didyouknowbtn" ><span>Read More </span></button>
                    </Col>
                    <Col sm={4}></Col>
                </Row> */}
      </Container>
    </>
  );
}

export default FortsOfIndia;
