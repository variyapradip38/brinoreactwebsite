import React from 'react';



const Comman = (props) => {



	return(
	<>
		 <div className="section-full bg-light">
                <div className="container">
                        <div className="section-content">
                            <div className="row">
                                <div className="col-xl-5 col-lg-5 col-md-12 ">
                                    <div className="home-2-about bg-bottom-left bg-no-repeat bg-cover">
                                     <img src="https://picsum.photos/id/1/450/350" className="img-fluid" alt="img" />
                                    </div>
                                </div>
                                
                                <div className="col-xl-7 col-lg-7 col-md-12">
                                    <div className="about-home-2">
                                        <h3 className="m-t0 sx-tilte">{props.titel}</h3>
                                        <p>Since 1999, we have been providing great {props.for} service for homeowners and commercial clients.
                                              among flooring materials, none is more elegant and luxurious than natural stone.</p>
                                               <div className="text-left">
                                            <a href="javascript:;" className="site-button-link">Read More</a>
                                        </div>  
                                                                                         
                                    </div>
                                </div>
                                
                            </div>
                       </div>
                 </div>
               
             </div> 
	</>
	);
};
export default Comman;