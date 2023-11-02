import React from 'react'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import 'bootstrap/dist/css/bootstrap.min.css'; 

import Flag from '../image/Ellipse 13.png';
import SwrilDivider from './SwrilDivider';

function TodayinHistory() {
    const todayhistory = () => {
        window.open('/ltwotodayinhistory', '_parent');
      };  
    return (
        <>
        <Container className='todayhistoryheader' style={{width:'100%', maxWidth: '1440px', margin:'0 auto'}}>
            <Row>
                <Col>
                <h1 >Today in History</h1>
                    <SwrilDivider />
                </Col>
            </Row>
            
            <Row className="justify-content-md-center">
                <Col xs lg="4" className='justify-content-center'>
                    <div  className='todayhistoryimg' >
                    <img src={Flag} alt="Today in History" className='' />
                    </div>
                </Col>
                {/* <Col xs lg="6"> */}
                <Col >
                    
                    <h2 >06 September 1889</h2>
                    <h3 >Sarat Chandra Bose<br/>(1889 to 1950)</h3>

                    <p>Varanasi is one of the world's oldest continually inhabited cities.
                        Kashi, its ancient name, was associated with a kingdom of the same name of 2,500 years ago.
                        The Buddha is recorded in the Pali canon to have given his first sermon,
                        "The Setting in Motion of the Wheel of Dharma", at nearby Sarnath in 528 BCE.</p>
                        <button className=" todayhistorybtn" onClick={todayhistory}><span>Read More </span></button>

                </Col>

            </Row>
           {/*  <Row style={{ marginTop: '20px' }}>
                <Col sm={4}>

                </Col>
                <Col sm={8}>
                <button className=" todayhistorybtn" ><span>Read More </span></button>
                </Col>
            </Row> */}


        </Container>
        </>
    )
}

export default TodayinHistory
