import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

const CardDetails = () => {
  let { nid } = useParams();

  const [fetchedData, updateFetchedData] = useState([]);
  let { title, location, origin, image, status, species } = fetchedData;

  let api = `https://indianculture.nvli.in/rest/archive1?nid=${nid}`;

  useEffect(() => {
    (async function () {
      let data = await fetch(api).then((res) => res.json());
      updateFetchedData(data);
    })();
  }, [api]);

  return (
    <div className="container d-flex justify-content-center mb-5">
      <div className="d-flex flex-column gap-3">
        <h1 className="text-center">{title}</h1>

        <img className="img-flunid" src={image} alt="" />
       
        <div className="content">
          <div className="">
            <span className="fw-bold">Gender : </span>
            {title}
          </div>
          <div className="">
            <span className="fw-bold">Location: </span>
            {location?.name}
          </div>
          <div className="">
            <span className="fw-bold">Origin: </span>
            {origin?.name}
          </div>
          <div className="">
            <span className="fw-bold">Species: </span>
            {species}
          </div>
        </div>
      </div>
    </div>
  );
};

export default CardDetails;
