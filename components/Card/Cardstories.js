import React from "react";
// import * as Icon from 'react-feather'; 

const Cardstories = ({ page, search_results, setDetailData }) => {
  let display;
  if (search_results) {
    display = search_results.map((x) => {
      let {
        nid,
        title,
        field_story_image,
        
      } = x;

      return (
        
        <div
        
          onClick={() => setDetailData(x)}
          style={{ textDecoration: "none" }}
          to={`${page}${nid}`}
          key={nid}
          
          className="digitalData col-md-3 digitalDatacard mb-5">
            
          <div className="wrapper">          
            <img src={`https://indianculture.nvli.in${field_story_image}`}   alt={title}   className="storiescard__image" />
            
            <div className="header">
              <div className="date">
               
              </div>
              <ul className="menu-content">
                <li>
                  <a href="#" className="fa fa-bookmark-o"></a>
                </li>
                 
              </ul>
            </div>
            <div className="data">
              <div className="content">
               
                <h1 className="title">
                  <a href="#" dangerouslySetInnerHTML={{ __html: title }} />
                </h1>
                {/* Condition for Images */}
                 
              </div>
            </div>
          </div>
        </div>
      );
    });
  } else {
    display = "No Characters Found";
  }

  return <>{display}</>;
};

export default Cardstories;
