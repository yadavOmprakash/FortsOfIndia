
// import React from "react";
// import * as Icon from 'react-feather'; 


// function LazyLoader() {
//   let noOfDivs = [1, 2, 3, 4, 5, 6, 7, 8];

//   return (
//     <div style={{ height: "720px", display: "flex", flexWrap: "wrap", alignItems: "center" , marginLeft:"5rem"}}>
//       {noOfDivs.map((e, index) => (
//         <div
//           key={index}
//           style={{
//             display:"flex",
//             flexDirection:"row-reverse",
//             height: "20.325rem",
//             width: "19.1rem",
//             backgroundColor: "whitesmoke",
//             borderRadius: "8px",
//             marginBottom: "3.4rem",
//              boxShadow: "2px 2px 2px 2px lightgrey ",
//             marginRight: e === 4 || e === 8 ? "0rem" : "1.5rem",
//             boxSizing: "border-box",
//             padding:"20px"
//           }}
//         >
//              <Icon.Eye size={15} style={{marginRight:"10px"}} />
//              <Icon.ThumbsUp size={15} style={{marginRight:"12px"}}/>
//              <img src="" alt="title" className="storiescard__image" />
//         </div>
//       ))}
//     </div>
//   );
// }

// export default LazyLoader;


import React from "react";
import Loader from '../image/loader.gif';

function LazyLoader() {

  return (
    <div style={{ height: "40vh", display: "flex", alignItems: "center" ,justifyContent:"center"}}>
 <img src={Loader} alt="Loading..." />    </div>
  );
}

export default LazyLoader;
