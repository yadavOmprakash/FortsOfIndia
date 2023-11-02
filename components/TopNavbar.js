import { React } from 'react'
import { Container, Row, Col } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
// -A, A, and +A functions start here
// import { increaseTextSize, resetTextSize, decreaseTextSize } from './textSizeContext';
import useTextSize from '../textSizeContext';
// import { Link } from "react-router-dom";

// -A, A, and +A functions end here

import Flag from '../image/Flag_of_India.png';



function Navbar() {
    // dark and light theme start here
    /*   const [theme, setTheme] = useState('light');
  
      const toggleTheme = () => {
          setTheme(theme === 'light' ? 'dark' : 'light');
      }; */
    // dark and light theme end here


    // -A, A, and +A functions start here
    const { textSize, increaseTextSize, resetTextSize, decreaseTextSize } = useTextSize(18);

    /* const defaultSize = 16;
    const limit = 20;
    const limit1 = 12

    const [textSize, setTextSize] = useState(defaultSize); */
    // -A, A, and +A functions end here

    return (
        <div>
            {/* dark and light class call here */}
            {/* <div className={`theme-${theme}`}> */}
                <div className='NavbarBgColor '>
                    <div className='top-bar topbar'>
                        <Container id="container" fluid className=" ">
                            <Row className="row ">
                                <Col className="col-12">
                                    <span className="mx-md-2 d-inline-block"></span>
                                    <a href="https://www.india.gov.in/" className="" target='_blank' rel="noreferrer" style={{ fontSize: `${textSize}px` }}><span className="mr-2"><img src={Flag} className='tiranga tirangaflg' alt="Indian Flag" /></span> <span className="d-none d-md-inline-block">Government of India</span></a>
                                    <span className="mx-md-2 d-inline-block"></span>


                                    <div className="float-right" >

                                        <a href="#Catagory" className="" style={{ marginRight: '0px', fontSize: `${textSize}px` }}><span className="mr-2" ></span> <span className="d-none d-md-inline-block" >Skip to main content</span></a>




                                        <a href="#/" onClick={increaseTextSize}><span className="mr-2 " ></span> <span className="d-none d-md-inline-block btnborder">+A</span></a>
                                        <a href="#/" onClick={resetTextSize}><span className="mr-2  "  ></span> <span className="d-none d-md-inline-block btnborder">A</span></a>
                                        <a href="#/" onClick={decreaseTextSize} ><span className="mr-2 " ></span> <span className="d-none d-md-inline-block btnborder">-A</span></a>
                                        <span className="mx-md-2 d-inline-block"></span>




                                        <a href="#/" ><span className="mr-2 "></span> <span className="d-none d-md-inline-block langborder">En</span></a>
                                        <span className="topdivider" />
                                        <a href="#/" ><span className="d-none d-md-inline-block langborder">हिं</span></a>
                                        <span className="mx-md-2 d-inline-block"></span>

                                        {/*<label className="switch toggle">
                                        <input type="checkbox" />
                                        <span className="slider round" onClick={toggleTheme}></span>
                                    </label> */}
                                    </div>

                                </Col>


                            </Row>

                        </Container>
                    </div>
                </div>
            {/* </div> */}
        </div>

    )
}

export default Navbar
