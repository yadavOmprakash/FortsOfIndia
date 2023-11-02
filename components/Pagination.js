import React, { useState } from "react";
import ReactPaginate from "react-paginate";
import { Link } from "react-router-dom";

const NewsCard = (props) => {
  return (
    <div style={{ padding: "20" }}>
      {/* <a href={props.url}>
        {props.title} by {props.author}
      </a> */}
      <Link to={`${props.url}`}>
        {props.title} by {props.author}
      </Link>
    </div>
  );
};

function Pagination() {
  const [hits, setData] = useState([]);
  const [pageCount, setPageCount] = useState(1);
  const [isLoaded, setisLoaded] = useState(false);
  const [currentPage, setcurrentPage] = useState(0);
  const [query, setQuery] = useState("startups");

  const URL = `https://hn.algolia.com/api/v1/search?query=${query}&page=${currentPage}`;

  const handleFetch = () => {
    fetch(URL)
      .then((response) => response.json())
      .then((body) => {
        setData([...body.hits]);
        setPageCount(body.nbPages);
        setisLoaded(true);
      })
      .catch((error) => console.error("Error", error));
  };

  const handlePageChange = (selectedObject) => {
    setcurrentPage(selectedObject.selected);
    handleFetch();
  };

  return (
    <div>
      <label>Search</label>
      <input type="text" onChange={(event) => setQuery(event.target.value)} />
      <button onClick={handleFetch}>Get Data</button>
      {isLoaded ? (
        hits.map((item) => {
          return <NewsCard url={item.url} title={item.title} author={item.author} key={item.objectID} />;
        })
      ) : (
        <div></div>
      )}
      #New
      {isLoaded ? <ReactPaginate pageCount={pageCount} pageRange={2} marginPagesDisplayed={2} onPageChange={handlePageChange} containerClassName={"container"} previousLinkClassName={"page"} breakClassName={"page"} nextLinkClassName={"page"} pageClassName={"page"} disabledClassNae={"disabled"} activeClassName={"active"} /> : <div>Nothing to display</div>}
    </div>
  );
}

export default Pagination;
