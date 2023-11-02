import React from 'react'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import 'bootstrap/dist/css/bootstrap.min.css';

import Erroricon from '../image/opt1_small.png';
// import { Button } from 'react-bootstrap';
// import Breadcrumb from 'react-bootstrap/Breadcrumb';

import { ArrowLeft } from 'react-feather';


function UnderConst() {
  const backtopre = () => {
    const previousPageUrl = document.referrer;

    if (previousPageUrl){
    window.open(previousPageUrl, '_parent');
  }
};
  return (
    <>


      <Container fluid>
        <Row>
          <Col sm={1}>
            {/* <Button className='backtoprevious' onClick={backtopre}>Back</Button> */}
            <ArrowLeft className='backtoprevious' onClick={backtopre} size={45} />
          </Col>
          {/* <Col>
            <Breadcrumb className='breadcrumnavbar'>
              <Breadcrumb.Item href="/">
                Home
              </Breadcrumb.Item>
              <Breadcrumb.Item active>Node</Breadcrumb.Item>
            </Breadcrumb>
          </Col> */}
        </Row>
      </Container>
      <Container className="wrapper">

        <Row>
          <Col >
            <img src={Erroricon} alt='' style={{ width: '300px' }} />
            <div className='underhead' >Coming soon<span className="dot">.</span><span className="dot">.</span><span className="dot">.</span></div>

          </Col>
        </Row>

        <Row>
          <Col>
            <div className='undertext'>404 : This webpage is currently under construction or maintenance.<br /> {'< Development />'} not finished yet.</div>

          </Col>
        </Row>

      </Container>
    </>
  )
}

export default UnderConst
