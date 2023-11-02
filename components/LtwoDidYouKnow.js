import {useEffect, React, useState} from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Col, Container, Row } from 'react-bootstrap';
import SwirlDivider from '../image/SwirlDivider.png';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faChevronLeft } from '@fortawesome/free-solid-svg-icons'
import { faChevronRight } from '@fortawesome/free-solid-svg-icons'

import Moc1 from '../image/Rectangle 33.png';
import Moc2 from '../image/Rectangle 34.png';
import Moc3 from '../image/Rectangle 35.png';
import Moc4 from '../image/Rectangle 36.png';
// import SwrilDivider from './SwrilDivider';
import { ArrowLeft } from 'react-feather';

// Glider.js npm i glider-js
import "glider-js/glider.min.css";
import Glider from "glider-js";
const Ltwodidyouknow = () => { 
    const [data, setData] = useState([]);
  const [systemDate, setSystemDate] = useState('');

  useEffect(() => {
    fetchData();
   setSystemDate(getFormattedDate(new Date())); // Set system date on component mount
  }, []);

  const fetchData = async () => {
    try {
      const response = await fetch('https://indianculture.nvli.in/rest/dykreact');
      const apiData = await response.json();
    //  const sameDateData = apiData;
    const sameDateData = apiData.filter(item => item.field_date_uploaded === systemDate);
      setData(sameDateData);
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };

  const getFormattedDate = (date) => {
    const day = String(date.getDate()).padStart(2, '0');
    const month = String(date.getMonth() + 1).padStart(2, '0');
    const year = date.getFullYear();    
    return `${day}-${month}-${year}`;
  };

    useEffect(() => {
        new Glider(document.querySelector('.glider'), {
            slidesToShow: 1.1,
            slidesToScroll: 1,
            draggable: true,
            dots: '.dots',
            responsive: [
                {
                    breakpoint: 768,
                    settings: {
                        slidesToShow: 2.1,
                        slidesToScroll: 1,
                        duration: 0.8,
                        arrows: {
                            prev: '.glider-prev',
                            next: '.glider-next',
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
                            prev: '.glider-prev',
                            next: '.glider-next',
                        },
                    },
                },
            ],
        });
    }, []);
    // BacktoPrevious page
    const backtopre = () => {
        window.open('/', '_parent');
    }

    return (
        <>
        {data.map((item) => (
           <><div className='did-parent-container' key={item.nid}>
                <img src={`https://indianculture.nvli.in${item.field_dyk_thumbnail}`} className='didknowbanner' alt={item.nid} />
            </div><Container fluid>
                    <Row>
                        <Col sm={1}>
                            <ArrowLeft className='backtoprevious' onClick={backtopre} size={45} />

                        </Col>
                    </Row>
                </Container><Container className='didknow-header'>
                    <Row>
                        <Col>
                            <h1>{item.title}</h1>
                            <img src={SwirlDivider} className='swrildivider' alt='divider' />
                        </Col>
                    </Row>
                </Container><Container className='didknowcover'>
                    <Row>
                        <Col><p dangerouslySetInnerHTML={{ __html: item.body }} /> </Col>
                    </Row>

                </Container></>
            ))}
            <Container className='didknow-header'>
                <Row>
                    <Col>
                        <h1>Previous Did you knows?</h1>
                        <img src={SwirlDivider} className='swrildivider' alt='divider' />
                    </Col>
                </Row>
            </Container>

            <main className="main">
                <div className="container">
                    <div className="glider-contain">
                        <div className="glider hide-scrollbar">
                            <div className="card-image ">
                                {/* <img src="https://source.unsplash.com/1280x720/?animal" alt="Slider " /> */}
                                <img src={Moc1} alt="Slider " />
                                {/* <div className='didknowtext' style={{ left: '30px', top: '180px' }}><p>Lorem Ipsum</p></div> */}


                            </div>
                            <div className="card-image">
                                <img src={Moc2} alt="Slider Imag" />
                            </div>

                            <div className="card-image">
                                <img src={Moc3} alt="Slider Ima" />
                            </div>

                            <div className="card-image">
                                <img src={Moc4} alt="Slider I" />
                            </div>

                            <div className="card-image">
                                <img src={Moc1} alt="Slider " />
                             </div>

                            <div className="card-image">
                                <img src={Moc2} alt="Slide" />
                             </div>

                            <div className="card-image">
                                <img src={Moc3} alt="Slid" />
                             </div>
                             
                            <div className="card-image">
                                <img src={Moc4} alt="Sli" />

                            </div>
                        </div>
                        <span role="button" aria-label="Previous" className="glider-prev">
                            <FontAwesomeIcon icon={faChevronLeft} style={{ marginLeft: '14px' }} />
                            </span>
                        <span role="button" aria-label="Next" className="glider-next">
                            <FontAwesomeIcon icon={faChevronRight} style={{ marginLeft: '14px' }} />
                            </span>
                        {/*<span role="tablist" className="dots"></span>*/}
                    </div>
                </div>
            </main>

            <Container className='didknow-header'>
                <Row>
                    <Col>
                        {/* <h1>Previous Did you knows?</h1> */}
                        <img src={SwirlDivider} className='swrildivider' alt='divider' />
                    </Col>
                </Row>
            </Container>

        </>
  );
};

export default Ltwodidyouknow; 
