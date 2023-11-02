import React, { useState } from "react";
// import { useParams } from "react-router-dom";
import Accordion from "react-bootstrap/Accordion";
// import { PDFViewer } from 'pdf-viewer-reactjs';
import Table from "react-bootstrap/Table";
import { Container, Row, Col, Modal } from "react-bootstrap";
import QRCode from "react-qr-code";
import ReactPlayer from "react-player/lazy";
import ArcQR from "../../image/QR 1.png";
import ArcShare from "../../image/share-2.png";
import { Document, Page } from "react-pdf";

const CardDetails = ({ detailData, setDetailData }) => {
  const [numPages, setNumPages] = useState(null);
  // const [pageNumber, setPageNumber] = useState(1);

  const onDocumentLoadSuccess = ({ numPages }) => {
    setNumPages(numPages);
  };

  // const onDocumentLoadError = (error) => {
  //   console.error('Error loading PDF:', error);
  // };

  const [show, setShow] = useState(false);
  const [Shareshow, setShareShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShareClose = () => setShareShow(false);
  const handleShow = () => setShow(true);
  const ArcShareShow = () => setShareShow(true);
  // let { nid } = useParams();
  let { field_video_streaming_url, title, field_dc_contributor_author, field_dc_date_issued, field_dc_description_abstract, field_dc_language_iso, field_pdf_digital_file, field_dc_type, field_dc_format_extent, field_parent_library_name, field_dc_description, field_dc_description_sponsorship, field_dc_format_mimetype, field_dc_date_available, field_dc_date_accessioned, field_type_of_content } = detailData;
console.log(detailData);
  return (
    <>
      <Container fluid>
        {field_pdf_digital_file && (
          <>
            <div style={{ backgroundColor: "#000" }}>
              <div style={{ width: "80%", height: "60vh", overflow: "auto", backgroundColor: "#000", color: "#fff", margin: "0 auto" }}>
                <Document file={`https://indianculture.nvli.in${field_pdf_digital_file}`} onLoadSuccess={onDocumentLoadSuccess} options={{ workerSrc: "/pdf.worker.js" }}>
                  {Array.from(new Array(numPages), (el, index) => (
                    <Page key={`page_${index + 1}`} pageNumber={index + 1} width={window.innerWidth} />
                  ))}
                </Document>
              </div>
            </div>
          </>
        )}
      </Container>
      <Container fluid>
        <Row style={{ marginTop: "20px", backgroundColor: "#000" }}>
          <Col xs={12} className="arcicon">
            {field_video_streaming_url && <ReactPlayer style={{ margin: "0 auto", backgroundColor: "#000" }} url={field_video_streaming_url} controls={true} />}
          </Col>
        </Row>
        <Row style={{ marginTop: "20px" }}>
          <Col xs={1} className="arcicon">
            {/* <img src={`../../images/icon/${field_type_of_content}.png`} alt={field_type_of_content} title={field_type_of_content}   /> */}
            <img src={`https://indianculture.nvli.in/sites/default/files/ItemTypeImg/${field_type_of_content}.png`} alt={field_type_of_content} title={field_type_of_content} className="img-responsive" />
          </Col>
          <Col xs={8} className="arctitle">
            <h1 dangerouslySetInnerHTML={{ __html: title }} />
          </Col>
          <Col xs={1} className="arcqrcode">
            <a variant="primary" onClick={handleShow}>
              <img src={ArcQR} alt="Archive Icon" className="qricon" />
            </a>
            <Modal show={show} onHide={handleClose}>
              <Modal.Header closeButton>
                <Modal.Title>QR Code</Modal.Title>
              </Modal.Header>
              <Modal.Body>
                <QRCode value={detailData} />
              </Modal.Body>
            </Modal>
          </Col>
          <Col xs={1} className="arcqrcode">
            <a variant="secondary" onClick={ArcShareShow}>
              <img src={ArcShare} alt="Archive Icon" className="qricon" />
            </a>
            <Modal show={Shareshow} onHide={handleShareClose}>
              <Modal.Header closeButton>
                <Modal.Title>Share</Modal.Title>
              </Modal.Header>
              <Modal.Body>sdfs</Modal.Body>
            </Modal>
          </Col>

          <Col xs={1}>
            <div onClick={() => setDetailData(null)} className="btn btn-info">
              back
            </div>
          </Col>
        </Row>
      </Container>
      <Container>
        <Row>
          <Col xs={1}></Col>
          <Col xs={8}>
            {field_dc_contributor_author && (
              <p className="dctext">
                <span className="bold"> Author:</span> {field_dc_contributor_author}
              </p>
            )}
            {field_dc_date_issued && (
              <p className="dctext">
                <span className="bold"> Issue Date:</span> {field_dc_date_issued}
              </p>
            )}
            <p className="dctext">
              <span className="bold"> {field_dc_type === "Audio" ? "url" : "Publisher"}:</span> {field_dc_type === "Audio" ? field_video_streaming_url : field_parent_library_name}
            </p>
            {field_dc_description && (
              <p className="dctext">
                <span className="bold"> Description:</span> {field_dc_description}
              </p>
            )}
            {field_dc_type && (
              <p className="dctext">
                <span className="bold"> Type:</span> {field_dc_type}
              </p>
            )}
            {field_parent_library_name && (
              <p className="dctext">
                <span className="bold"> Received From:</span> {field_parent_library_name}
              </p>
            )}
          </Col>
          <Col xs={2}></Col>
          <Col></Col>
        </Row>
      </Container>

      <Accordion defaultActiveKey="0" className="accord-component">
        <Accordion.Item eventKey="0" className="accord-item">
          <Accordion.Header className="accord-item-header">Dublin Core View</Accordion.Header>
          <Accordion.Body>
            <Table striped>
              <thead>
                <tr>
                  <th>DC Field</th>
                  <th>Value</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>dc.contributor.author</td>
                  <td>{field_dc_contributor_author}</td>
                </tr>
                <tr>
                  <td>dc.date.accessioned</td>
                  <td>{field_dc_date_accessioned}</td>
                </tr>
                <tr>
                  <td>dc.date.available</td>
                  <td>{field_dc_date_available}</td>
                </tr>
                <tr>
                  <td>dc.date.issued</td>
                  <td>{field_dc_date_issued}</td>
                </tr>
                <tr>
                  <td>dc.description.abstract</td>
                  <td>{field_dc_description_abstract}</td>
                </tr>
                <tr>
                  <td>dc.description.sponsorship</td>
                  <td>{field_dc_description_sponsorship}</td>
                </tr>
                <tr>
                  <td>dc.format.extent</td>
                  <td>{field_dc_format_extent}</td>
                </tr>
                <tr>
                  <td>dc.format.mimetype</td>
                  <td>{field_dc_format_mimetype}</td>
                </tr>
                <tr>
                  <td>dc.language.iso</td>
                  <td>{field_dc_language_iso}</td>
                </tr>
              </tbody>
            </Table>
          </Accordion.Body>
        </Accordion.Item>
      </Accordion>
    </>
  );
};

export default CardDetails;
