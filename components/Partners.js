import React from 'react'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Card from 'react-bootstrap/Card'
import Button from 'react-bootstrap/Button';
// bootstrap css
import 'bootstrap/dist/css/bootstrap.min.css';

 // slider start here
import Slider1 from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css"; 
// slider end here

// import images from local system
import MOC from '../image/MoC-removebg-preview.png';
import IIT from '../image/IIT.png';
import IGNOU from '../image/ignou.png';
import SwrilDivider from './SwrilDivider';

function Partners() {
    // slider start here
var settings1 = {
    dots: false,
    infinite: false,
    // speed: 500,
    slidesToShow: 3,
    slidesToScroll: 0,
    arrow:false,

    responsive: [

        {
            breakpoint: 1024,
            settings: {
                slidesToShow: 2.25,
                slidesToScroll: 1,
               
                arrows: false,
                draggable: true,

            }
        },
        {
            breakpoint: 600,
            settings: {
                slidesToShow: 2,
                slidesToScroll: 2,
               
                arrows: false,
                draggable: true,
            }
        },
        {
            breakpoint: 480,
            settings: {
                slidesToShow: 1.2,
                slidesToScroll: 1,
                // initialSlide: 1,
      
                arrows: false,
                draggable: true,

            }
        },



    ]
}; 
//slider end here 
   /*  const handleClick = () => {
        window.location.href = 'https://indiaculture.gov.in/';
      }; */
      const moc = () => {
        window.open('https://indiaculture.gov.in/', '_blank');
      };  
      const iitb = () => {
        window.open('https://www.iitb.ac.in/', '_blank');
      }; 
      const ignou = () => {
        window.open('http://www.ignou.ac.in/', '_blank');
      };  
    return (
        <div>
          
            <Container className='partners-header'>
                <Row >
                    <Col >
                        <h1>Partners</h1>

                        <SwrilDivider />
                    </Col>
                </Row>
            </Container>
            <Container  style={{width:'100%', maxWidth: '1440px', margin:'0 auto'}}>
            <Slider1 {...settings1} >
                
                    {/* 1st card */}
                  <div >
                        <Card className='partcard' style={{}}>
                            <Card.Img className='partimg' variant="top" src={MOC} />
                            <Card.Body>
                                <Card.Title className='partheading'>Ministry of Culture</Card.Title>
                                <Card.Text className='parttext'>
                                    Government of India
                                </Card.Text>
                                <Button className='partbtn' onClick={moc} variant="outline-dark">Explore</Button>
                            </Card.Body>
                        </Card>
                        </div>
                    {/* 2nd card */}
                  <div>
                        <Card className='partcard' style={{}}>
                            <Card.Img className='partimg' variant="top" src={IIT} />
                            <Card.Body>
                                <Card.Title className='partheading'>IIT Bombay</Card.Title>
                                <Card.Text className='parttext'>
                                    Indian Institute of Technology Bombay
                                </Card.Text>
                                <Button className='partbtn' onClick={iitb} variant="outline-dark">Explore</Button>
                            </Card.Body>
                        </Card>
                        </div>
                    {/* 3rd card */}
                  <div>
                        <Card className='partcard' style={{}}>
                            <Card.Img className='partimg' variant="top" src={IGNOU} />
                            <Card.Body>
                                <Card.Title className='partheading'>IGNOU</Card.Title>
                                <Card.Text className='parttext'>
                                    Indira Gandhi National Open University
                                </Card.Text>
                                <Button className='partbtn' onClick={ignou} variant="outline-dark">Explore</Button>
                            </Card.Body>
                        </Card>
                        </div>

               
                </Slider1>
            </Container>
            <Container style={{marginTop: '15px', textAlign: 'center'}}>
                <Row >
                    <Col >
                        <SwrilDivider />
                    </Col>
                </Row>
                <Row></Row>

            </Container>
        </div>
    )
}

export default Partners
