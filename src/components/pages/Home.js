import React, { Component } from "react";
import Comman from './Comman';
import Achieved from './Achieved';
import Sdata2 from './Sdata2';

const Home = () => {
	return(
		<>
			<Comman titel='Our floors are designed to last a lifetime' for='flooring solutions and customer' />
             <div className="section-full p-t80 p-b50 sx-bg-secondry bg-no-repeat bg-bottom-center mobile-page-padding" >
                <div className="container"> 
                    <div className="section-head">
                        <div className="sx-separator-outer separator-center">
                            <div className="sx-separator bg-white bg-moving bg-repeat-x">
                                <h3 className="sep-line-one">We Achieved</h3>
                            </div>
                        </div>
                    </div>                   
                    <div className="section-content ">
                        <div className="row justify-content-center">
                            
                                {
                                 Sdata2.map((val, ind)=> {
                                 return <Achieved 
                                 key={ind}
                                 date={val.date}
                                 month={val.month}
                                 year={val.year}
                                 titel={val.titel}
                                 ditels={val.ditels}
                                 />
                                 })
                                 }
                        </div>
                    </div>
                </div> 
            </div>    
			</>
		);
};

export default Home;