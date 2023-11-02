import { React } from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Homegallery from '../image/Rectangle 224.png';
import Homegallery1 from '../image/Rectangle 225.png';
import Homegallery2 from '../image/Rectangle 226.png';
import Homegallery3 from '../image/Rectangle 227.png';
import Homegallery4 from '../image/Rectangle 228.png';
// import SwrilDivider from './SwrilDivider';

import SwrilDivider from '../image/SwirlDivider 12.png';

// import { Container } from 'react-bootstrap';
/* 
import Homegallery4 from '../image/Rectangle 228.png';
import Homegallery5 from '../image/Rectangle 229.png'; */

function HomeGallery() {

    const homegallery = () => {
        window.open('/galleryview', '_parent');
    };

    return (
        <>
            <div className='galle'>
                {/* <Container  > */}
                    <Container className='homegallery-header'>
                        <Row >
                            <Col >
                                <h1>Gallery</h1>
                                <img src={SwrilDivider} alt="" style={{ width: '90px', height: '15px', backgroundColor: 'transparent' }} />

                                {/* <SwrilDivider /> */}
                            </Col>
                        </Row>
                    </Container>
                    {/* Gallery thumbnails*/}
                    <div className="container">

                       <div className="gallery">

                            <div className="gallery-item gallitem1">
                                <img className="gallery-image" src={Homegallery4} alt="" />
                            </div>

                            <div className="gallery-item gallitem2">
                                <img className="gallery-image" src={Homegallery} alt="" />
                            </div>
                            <div className="gallery-item gallitem3">
                                <img className="gallery-image" src={Homegallery1} alt="" />
                            </div>

                            <div className="gallery-item gallitem4">
                                <img className="gallery-image" src={Homegallery2} alt="" />
                            </div>

                            <div className="gallery-item gallitem5">
                                <img className="gallery-image" src={Homegallery4} alt="" />
                            </div>

                            <div className="gallery-item gallitem6">
                                <img className="gallery-image" src={Homegallery3} alt="" />
                            </div>
                            {/*  */}
                            <div className="gallery-item gallitem7">
                                <img className="gallery-image" src={Homegallery} alt="" />
                            </div>

                            <div className="gallery-item gallitem8">
                                <img className="gallery-image" src={Homegallery4} alt="" />
                            </div>
                            <div className="gallery-item gallitem9">
                                <img className="gallery-image" src={Homegallery} alt="" />
                            </div>

                            <div className="gallery-item gallitem10">
                                <img className="gallery-image" src={Homegallery2} alt="" />
                            </div>
                            <div className="gallery-item gallitem11">
                                <img className="gallery-image" src={Homegallery3} alt="" />
                            </div>

                            <div className="gallery-item gallitem12">
                                <img className="gallery-image" src={Homegallery1} alt="" />
                            </div>
 
                        </div>

                    </div>

                {/* </Container> */}
                <Container className='storycenter'>
                    <Row >
                        <Col>
                            {/* after clicking on 'View All' btn, user will redirect to Gallery List page  */}
                            <button className="homegallerybtn" onClick={homegallery}><span>View All </span></button>



                        </Col>
                    </Row>
                </Container>
            </div>
        </>
    )
}

export default HomeGallery
