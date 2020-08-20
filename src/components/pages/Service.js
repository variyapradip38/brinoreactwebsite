import React from 'react';
import Sdata from '../pages/Sdata';
import Card from '../pages/Card';
const Service = () => {


return(

	<>
<div className="container-fluid mb-5 py-5">
    <div className="row">
        <div className="col-10 mx-auto">
            <div className="row">
                
                	{
                		Sdata.map((val, ind)=> {
                			return <Card 
                			key={ind}
                			
                			titel={val.titel}
                			contant={val.contant}
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
export default Service;