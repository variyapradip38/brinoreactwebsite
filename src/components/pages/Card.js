import React from 'react';
import {NavLink} from "react-router-dom";
const Card = (props) => {


return(

	       <>

                <div className="col-lg-4 col-md-6 col-sm-12 col-10 mx-auto pb-3">
                    <div className="card" style={{width: "18rm"}}>
                      <img src="https://picsum.photos/seed/picsum/200/200" className="card-img-top" alt={props.imgsrc} />
                        <div className="card-body">
                          <h5 className="card-title">{props.titel}</h5>
                           <p className="card-text">Some quick example text to build on the card
                           title and make up the {props.contant}</p>
                           <NavLink to="#" className="btn btn-primary">Go somewhere</NavLink>
                        </div>
                     </div>
                  </div>
     

	       </>

	);
};
export default Card;