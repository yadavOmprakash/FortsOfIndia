import React, { useState, useEffect } from "react";
import ReactPaginate from "react-paginate";

const Pagination = ({ pageNumber, updatePageNumber, totalPages }) => {
  let pageChange = (data) => {
    updatePageNumber(data.selected);
  };

  const [width, setWidth] = useState(window.innerWidth);
  const updateDimensions = () => {
    setWidth(window.innerWidth);
  };
  useEffect(() => {
    window.addEventListener("resize", updateDimensions);
    return () => window.removeEventListener("resize", updateDimensions);
  }, []);

  return (
    <>
      <style jsx="true">
        {`
          .btn {
            --bs-btn-padding-x: 0.65rem !important;
            --bs-btn-padding-y: 0.25rem !important;
            border-radius: 0px !important;
          }
          .btn a {
            color: #fff !important;
          }
        `}
      </style>
      <ReactPaginate
        className="pagination justify-content-center my-4"
        nextLabel="Next"
        // forcePage={pageNumber <= totalPages ? pageNumber-1  : 0}
        // forcePage={pageNumber - 1} 
        previousLabel="Prev"
        previousClassName="btn btn-primary prev"
        nextClassName="btn btn-primary next"
        activeClassName="active"
        marginPagesDisplayed={width < 576 ? 0 : 2}
        pageRangeDisplayed={width < 576 ? 0 : 2}
        // pageCount={info?.pages}
        pageCount={totalPages}
        onPageChange={pageChange}
        pageClassName="page-item"
        pageLinkClassName="page-link"
      />
    </>
  );
};

export default Pagination;
