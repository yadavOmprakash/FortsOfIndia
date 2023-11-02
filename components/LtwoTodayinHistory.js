import React from 'react'

import 'bootstrap/dist/css/bootstrap.min.css';
import { Col, Container, Row } from 'react-bootstrap';

import TodayHistory from '../image/Sarat-Chandra-Bose-1280x720-1 1.png';
import SwrilDivider from '../image/SwirlDivider 1.png';
import { ArrowLeft } from 'react-feather';


function TodayInHistory() {
    // BacktoPrevious page
    const backtopre = () => {
        window.open('/', '_parent');
    }
    return (
        <>
            <div className='todayparent-container'>
                <img src={TodayHistory} className='todaybanner' alt='Moc Banner' />
            </div>
            <Container fluid>
            <Row>
                <Col sm={1}>
                <ArrowLeft className='backtoprevious' onClick={backtopre} size={45} />

                </Col>
            </Row>
           </Container>
            <Container className='todaycover'>
                <Row>
                    <Col>
                        {/* <h1>06 September 1889</h1> */}
                        <h1>Sarat Chandra Bose (1889 to 1950)</h1>
                        <p>The Archaeological Survey of India (ASI) under the Ministry of Culture is the premier organization for archaeological researches and protection of the cultural heritage of the nation. Maintenance of ancient monuments and archaeological sites and remains of national importance is the prime concern of the ASI. Besides, it regulates all archaeological activities in the country as per the provisions of the Ancient Monuments and Archaeological Sites and Remains Act, 1958.</p>
                        <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum</p>
                        <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum</p>
                        <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum</p>
                    </Col>
                </Row>

            </Container>
            <Container className='fredom-arch-header'>
                <Row>
                    <Col>
                        <img src={SwrilDivider} style={{ width: '90px', height: '20px', marginTop: '30px' }} alt='divider' />
                    </Col>
                </Row>
            </Container>
        </>
    )
}

export default TodayInHistory
