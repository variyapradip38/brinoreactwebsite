
import React from 'react';
const Achieved = (props) => {


return(

   	<>
        <div className="col-md-6 ">
          <div className="sx-box our-story text-white">
             <div className="mt-media our-story-info d-flex justify-content-start">
                <div className="our-story-time"><span className="date">{props.date}</span><span className="month">{props.month}</span></div>
                     <h4 className="text-uppercase our-story-year">{props.year}</h4>
                 </div>
                <div className="our-story-detail">
                     <h4>{props.titel}</h4>
                     <p>{props.ditels}</p>
                </div>
             </div>
          </div>
      </>

	);
};
export default Achieved;