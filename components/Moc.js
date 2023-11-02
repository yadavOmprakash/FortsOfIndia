import { React, useEffect } from 'react'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faChevronLeft } from '@fortawesome/free-solid-svg-icons'
import { faChevronRight } from '@fortawesome/free-solid-svg-icons'

// import SwrilDivider from '../image/SwrilDivider.png';

// import Morg1 from '../image/m1.jpg';
import Morg2 from '../image/m2.jpg';
import Morg3 from '../image/m3.png';
import Morg4 from '../image/m4.jpg';
import SwrilDivider from './SwrilDivider';


// Glider.js
import "glider-js/glider.min.css";
import Glider1 from "glider-js"; 

function Moc() {
    useEffect(() => {
        // querySelector
        new Glider1(document.querySelector('.glider1'), {
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
  return (
    <>
    <Container className='moc-header'>
        <Row >
            <Col >
                <h1>MoC Organisations
</h1>
                <SwrilDivider/>
            </Col>
        </Row>
    </Container>
    <main className="main">
        <div className="container">
            <div className="glider-contain">
                <div className="glider1 hide-scrollbar">
                    <div className="card-image ">
                        {/* <img src="https://source.unsplash.com/1280x720/?animal" alt="Slider " /> */}
                        <img src={Morg2} alt="Slider " />

                    </div>
                    <div className="card-image ">
                    <img src={Morg3} alt="Slider Imag" />
                    </div>
                    <div className="card-image">
                        <img src={Morg4} alt="Slider Ima" />
                    </div>
                    <div className="card-image">
                        <img src={Morg2} alt="Slider I" />
                    </div>
                    <div className="card-image">
                        <img src={Morg3} alt="Slider" />
                    </div>
                    <div className="card-image">
                        <img src={Morg4} alt="Slide" />
                    </div>
                    <div className="card-image">
                        <img src={Morg3} alt="Slid" />
                    </div>
                    <div className="card-image">
                        <img src={Morg2} alt="Sli" />
                    </div>
                </div>
                <span role="button" aria-label="Previous" className="glider-prev"><FontAwesomeIcon icon={faChevronLeft} style={{ marginLeft: '14px' }} /></span>

                <span role="button" aria-label="Next" className="glider-next"><FontAwesomeIcon icon={faChevronRight} style={{ marginLeft: '14px' }} /></span>
{/*                 <span role="tablist" className="dots"></span>
 */}            </div>
        </div>
    </main>
</>
  )
}

export default Moc
