import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap";
import {  Col, Container, Row } from 'react-bootstrap';
import Offcanvas from 'react-bootstrap/Offcanvas';
// import Form from 'react-bootstrap/Form';
import React, { useState, useEffect } from "react"; 
import Card from "../components/Card/Card";
import Pagination from "../components/Pagination/Pagination";  
import CardDetails from "../components/Card/CardDetails";     
import FilterIcon from '../image/filter-13.png';
import Divider from '../image/SwirlDivider.png';
import SearchIcon from '../image/search.svg'; 

const Videos = () => {
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const [pageNumber, updatePageNumber] = useState([0]); 
  const [fetchedData, updateFetchedData] = useState([]); 
  const [totalPages, setTotalPages] = useState(0); 
  const [total_items, setTotalRecord] = useState(0);
  const [detailData, setDetailData] = useState(null);
  const [searchQuery, setSearchQuery] = useState('');
  const [dcTypevalue, setDctypevalue] = useState([]); 
  
  const [fiSearchData, searchdData] = useState([]); 
  const [fullSearchData, setFullsearchdData] = useState([]);    
  let { info, search_results } = fetchedData;
  let api = `https://indianculture.nvli.in/rest/videos?search_api_fulltext=${searchQuery}&page=${pageNumber}&field_dc_type=${dcTypevalue}`;
 
  useEffect(() => {
    const fetchData = async () => {
      try { 
       const response = await fetch(api); 
        //const response = await axios.get('https://indianculture.nvli.in/rest/archive1');
        const jsonData = await response.json(); 
        setTotalPages(jsonData.pager.total_pages); 
        setTotalRecord(jsonData.pager.total_items); 
        searchdData(jsonData.rows.facets[0]);  
        updateFetchedData(jsonData.rows); 
        if(jsonData.rows.search_results !== null) 
        {      
        setFullsearchdData(jsonData.rows.search_results); 
        console.log(jsonData.rows.search_results); 
        } 
             
        else
        {<p>No results found.</p>}
         
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  },[pageNumber, searchQuery, dcTypevalue] );

  const handleInputChange = (event) => {
    setSearchQuery(event.target.value);
  };  
  const handleDctypevalue = (value) => {
    if (dcTypevalue.includes(value)) {
      setDctypevalue(dcTypevalue.filter(values => values !== value || dcTypevalue.value === 0));
    } else {
      setDctypevalue([...dcTypevalue, value]);
    }
  };
   
  return (
    <div className="App">
   {detailData !== null ? ' ' :   <><Container className='archive-header'>
        <Row>
          <Col>
            <h1>Videos</h1>
            <img src={Divider} alt="Caption Divider" style={{ marginTop: '-17px', width: '90px', height: '15px', backgroundColor: 'transparent' }} />

          </Col>
        </Row>
      </Container><Container style={{ marginTop: '20px' }}>
          <Row>
            <Col className='equal'>

              {/* Filter icon */}

              <div onClick={handleShow}><img src={FilterIcon} alt='' className='filtericon' /></div> 
              {/* Search bar start */}
              <div className="search-box">
      <button className="btn-search"><img src={SearchIcon} alt='Search icon'></img></button>
      <input  
        type="text" className="input-search"
        value={searchQuery}
        onChange={handleInputChange}
        placeholder="Type to Search..."
      />
    </div>
              {/* Search bar end */}
            </Col>


            <Col className='leftplace'>
              <p className='showing-result'>Showing 1 -16 results of {total_items}</p>
            </Col>
          </Row>
          <Row>
            <Col className='centerplace'>
              {/* Filter Catagory btns  */}
              <p className='centerplace'>
                <a href="/#" className="underline">All</a>
              </p>
              <p className='centerplace'>
                <a href="/#" className="underline">A - Z</a>
              </p>
              <p className='centerplace'>
                <a href="/#" className="underline">Time</a>
              </p>
            </Col>
          </Row>

          {/* Filter Side panel start */}
          <Offcanvas show={show} onHide={handleClose} backdrop="static" className='sidepanel'>
            <Offcanvas.Header closeButton>
              <Offcanvas.Title style={{ textAlign: 'center' }}>Archives Filter</Offcanvas.Title>
            </Offcanvas.Header>
            <Offcanvas.Body>
              <div>
                {fiSearchData.length > 0 && (
                  <div>
                    {fiSearchData.map((facet, index) => (
                      <ul key={index}>
                        {facet?.field_dc_type?.map((option, optionIndex) => (
                          <> <label key={option.values.value}>
                            <input
                              type="checkbox"
                              id={option.values.value}
                              value={option.values.value}
                              checked={dcTypevalue.includes(option.values.value)}
                              onChange={() => handleDctypevalue(option.values.value)} />
                            {option.values.value}<b>({option.values.count})</b>
                          </label></>
                        ))}
                      </ul>
                    ))}
                  </div>
                )}
              </div>
            </Offcanvas.Body>

          </Offcanvas>
          {/* FIlter Side panel end */}

        </Container></>}
         
                         
              {detailData !== null ? <CardDetails detailData={detailData}  setDetailData={setDetailData} />
              : <Container><div className="row"><Card page="/" search_results={search_results} setDetailData={setDetailData}   /></div></Container>}                
              
           
        
 
     {detailData == null ? <Pagination
        info={info}
        pageNumber={pageNumber}
        totalPages = {totalPages}
        updatePageNumber={updatePageNumber}
      />: null}
    </div>
  );
};
export default Videos