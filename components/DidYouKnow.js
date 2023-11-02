import React from 'react'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import 'bootstrap/dist/css/bootstrap.min.css';
 
import Flag from '../image/Ellipse 12.png';
import SwrilDivider from './SwrilDivider';

/* import useTextSize from '../textSizeContext'; */


function DidYouKnow() {
    const didyouknow = () => {
        window.open('/ltwodidyouknow', '_parent');
      };  

    /*   const { textSize, increaseTextSize, resetTextSize, decreaseTextSize } = useTextSize(18); */


    return (
        <>
            <Container className='didyouknowheader' style={{ width: '100%', maxWidth: '1440px', margin: '0 auto' }}>

                <Row>
                    <Col>
                    <h1 >Did You Know?</h1>
                        <SwrilDivider />
                    </Col>
                </Row>

                <Row className="justify-content-md-center">
                    {/* <Col xs lg="6"> */}
                    <Col id='did' >
                        
                        <h2 >Varanasi</h2>
                        {/* style={{ fontSize: `${textSize}px` }} */}
                        <p >Varanasi is one of the world's oldest continually inhabited cities.
                            Kashi, its ancient name, was associated with a kingdom of the same name of 2,500 years ago.
                            The Buddha is recorded in the Pali canon to have given his first sermon,
                            "The Setting in Motion of the Wheel of Dharma", at nearby Sarnath in 528 BCE.</p>
                            <button className=" didyouknowbtn" onClick={didyouknow}><span>Read More </span></button>

                    </Col>
                    <Col xs lg="4"  className='justify-content-center'>
                        <div className="didyouimg">
                            <img src={Flag} alt="Did you know" className='' />
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
            <Container fluid style={{ marginTop: '60px' }}>
                <hr />
            </Container>
        </>
    )
}

export default DidYouKnow
