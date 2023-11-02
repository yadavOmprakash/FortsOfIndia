// import React from "react";
// import * as Icon from "react-feather";



// const Card = ({ page, search_results, setDetailData }) => {
//   let display;
//   if (search_results) {
//     display = search_results.map((x) => {
//       let { nid, title, field_dc_type, field_dc_date_issued, field_digital_image_file, field_pdf_digital_file_1, nid_2, nid_1, field_dc_contributor_author, field_parent_library_name, field_dc_source, field_video_streaming_url } = x;

//       return (
//         <div onClick={() => setDetailData(x)} style={{ textDecoration: "none" }} to={`${page}${nid}`} key={nid} className="digitalData col-md-3 digitalDatacard mb-5">
//           <div className="wrapper">
//             <img src={`https://indianculture.nvli.in${field_digital_image_file}`} alt={title} className="storiescard__image" />
//             <div dangerouslySetInnerHTML={{ __html: field_pdf_digital_file_1 }} />
//             <div className="header">
//               <div className="date">
//                 <span className="day">{field_dc_date_issued}</span>
//               </div>
//               <ul className="menu-content">
//                 <li>
//                   <a href="#" className="fa fa-bookmark-o">{""}</a>
//                 </li>
//                 <li>
//                   <a>
//                     <Icon.Eye size={15} />
//                     <span dangerouslySetInnerHTML={{ __html: nid_2 }} />
//                   </a>
//                 </li>
//                 <li>
//                   <a>
//                     <Icon.ThumbsUp size={15} />
//                     <span dangerouslySetInnerHTML={{ __html: nid_1 }} />
//                   </a>
//                 </li>
//               </ul>
//             </div>
//             <div className="data">
//               <div className="content">
//                 <span className="author">{field_dc_type}</span>
//                 <h1 className="title">
//                   <a href="#" dangerouslySetInnerHTML={{ __html: title }} />
//                 </h1>
//                 {/* Condition for Images */}
//                 {field_dc_type === "Images" ? (
//                   <>
//                     {field_dc_contributor_author && (
//                       <p className="text">
//                         <b>Author</b>: {field_dc_contributor_author}
//                       </p>
//                     )}

//                     {field_parent_library_name && (
//                       <p className="text">
//                         <b>Publisher</b>: {field_parent_library_name}
//                       </p>
//                     )}
//                   </>
//                 ) : (
//                   // Condition for other types
//                   <>
//                     {field_dc_type === "Audio" ? (
//                       <>
//                         <p className="text">
//                           <b>Source</b>: {field_dc_source}
//                         </p>
//                         {field_dc_contributor_author && (
//                           <p className="text">
//                             <b>Author</b>: {field_dc_contributor_author}
//                           </p>
//                         )}
//                         <p className="text">
//                           <b>Streaming URL</b>: {field_video_streaming_url}
//                         </p>
//                       </>
//                     ) : (
//                       <>
//                         {field_dc_contributor_author && (
//                           <p className="text">
//                             <b>Author</b>: {field_dc_contributor_author}
//                           </p>
//                         )}

//                         {field_parent_library_name && (
//                           <p className="text">
//                             <b>Publisher</b>: {field_parent_library_name}
//                           </p>
//                         )}
//                       </>
//                     )}
//                   </>
//                 )}
//                 <a href="#" className="cardbtn">
//                   Read more
//                 </a>
//               </div>
//             </div>
//           </div>
//         </div>
//       );
//     });
//   } else {
//     display = "No Characters Found";
//   }

//   return <>{display}</>;
// };

// export default Card;





import React from "react";
import * as Icon from "react-feather";

const Card = ({ page, search_results, setDetailData }) => {
  if (search_results === null) {
    return <div>Loading...</div>; // You can replace this with a loading spinner or message.
  }

  if (search_results?.length === 0) {
    return <div>No Characters Found</div>;
  }

  return (
    <>
      {search_results?.map((x) => {
        const {
          nid,
          title,
          field_dc_type,
          field_dc_date_issued,
          field_digital_image_file,
          field_pdf_digital_file_1,
          nid_2,
          nid_1,
          field_dc_contributor_author,
          field_parent_library_name,
          field_dc_source,
          field_video_streaming_url,
        } = x;

        return (
          <div
            onClick={() => setDetailData(x)}
            style={{ textDecoration: "none" }}
            to={`${page}${nid}`}
            key={nid}
            className="digitalData col-md-3 digitalDatacard mb-5"
          >
            <div className="wrapper">
              <img
                src={`https://indianculture.nvli.in${field_digital_image_file}`}
                alt={title}
                className="storiescard__image"
              />
              <div dangerouslySetInnerHTML={{ __html: field_pdf_digital_file_1 }} />
              <div className="header">
                <div className="date">
                  <span className="day">{field_dc_date_issued}</span>
                </div>
                <ul className="menu-content">
                  <li>
                    <a href="#" className="fa fa-bookmark-o">
                      {""}
                    </a>
                  </li>
                  <li>
                    <a>
                      <Icon.Eye size={15} />
                      <span dangerouslySetInnerHTML={{ __html: nid_2 }} />
                    </a>
                  </li>
                  <li>
                    <a>
                      <Icon.ThumbsUp size={15} />
                      <span dangerouslySetInnerHTML={{ __html: nid_1 }} />
                    </a>
                  </li>
                </ul>
              </div>
              <div className="data">
                <div className="content">
                  <span className="author">{field_dc_type}</span>
                  <h1 className="title">
                    <a href="#" dangerouslySetInnerHTML={{ __html: title }} />
                  </h1>
                  {field_dc_type === "Images" ? (
                    <>
                      {field_dc_contributor_author && (
                        <p className="text">
                          <b>Author</b>: {field_dc_contributor_author}
                        </p>
                      )}

                      {field_parent_library_name && (
                        <p className="text">
                          <b>Publisher</b>: {field_parent_library_name}
                        </p>
                      )}
                    </>
                  ) : (
                    <>
                      {field_dc_type === "Audio" ? (
                        <>
                          <p className="text">
                            <b>Source</b>: {field_dc_source}
                          </p>
                          {field_dc_contributor_author && (
                            <p className="text">
                              <b>Author</b>: {field_dc_contributor_author}
                            </p>
                          )}
                          <p className="text">
                            <b>Streaming URL</b>: {field_video_streaming_url}
                          </p>
                        </>
                      ) : (
                        <>
                          {field_dc_contributor_author && (
                            <p className="text">
                              <b>Author</b>: {field_dc_contributor_author}
                            </p>
                          )}

                          {field_parent_library_name && (
                            <p className="text">
                              <b>Publisher</b>: {field_parent_library_name}
                            </p>
                          )}
                        </>
                      )}
                    </>
                  )}
                  <a href="#" className="cardbtn">
                    Read more
                  </a>
                </div>
              </div>
            </div>
          </div>
        );
      })}
    </>
  );
};

export default Card;
