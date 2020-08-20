import React, {useState} from 'react';


const Contact= () => {

	const [data, setData] = useState({
		email:'',
		password:'',
		Address:'',
		Address2:'',
		text:'',
		zip:'',
		chech: '',


	});

	const InputEvent = (event) => {
		const {name, value} = event.target;

		setData((preVal) => {
			return{
				...preVal,
				[name]: value,
			};
		});
	};

const formSubmit = (e) => {
	e.preventDefault();
	alert(`my ${data.email}. my secret ${data.password}. my ${data.Address}. my ${data.Address2}. my ${data.text}. my area ${data.zip}. my ${data.chach}`);
};

	return(
	<>
	<div className="container py-5">
	<div className="row">
		<div className="col-md-8 col-10 mx-auto">
		<form onSubmit={formSubmit}>
  <div className="form-row">
    <div className="form-group col-md-6">
      <label for="inputEmail4">Email</label>
      <input type="email" className="form-control" id="inputEmail4" name="email" value={data.email} onChange={InputEvent} placeholder="email"/>
    </div>
    <div className="form-group col-md-6">
      <label for="inputPassword4">Password</label>
      <input type="password" className="form-control" id="inputPassword4" name="password" value={data.password} onChange={InputEvent} placeholder="password" />
    </div>
  </div>
  <div className="form-group">
    <label for="inputAddress">Address</label>
    <input type="text" className="form-control" id="inputAddress" placeholder="1234 Main St" name="Address" value={data.Address} onChange={InputEvent} placeholder="Address" />
  </div>
  <div className="form-group">
    <label for="inputAddress2">Address 2</label>
    <input type="text" className="form-control" id="inputAddress2" placeholder="Apartment, studio, or floor" name="Address2" value={data.Address2} onChange={InputEvent} placeholder="Address2" />
  </div>
  <div className="form-row">
    <div className="form-group col-md-6">
      <label for="inputCity">City</label>
      <input type="text" className="form-control" id="inputCity" name="text" value={data.text} onChange={InputEvent} placeholder="text" />
    </div>
    <div className="form-group col-md-4">
      <label for="inputState">State</label>
      <select id="inputState" className="form-control">
        <option selected>Choose...</option>
        <option>...</option>
      </select>
    </div>
    <div className="form-group col-md-2">
      <label for="inputZip">Zip</label>
      <input type="text" className="form-control" id="inputZip" name="zip" value={data.zip} onChange={InputEvent} placeholder="zip-enter" />
    </div>
  </div>
  <div className="form-group">
    <div className="form-check">
      <input className="form-check-input" type="checkbox" id="gridCheck" name="chech" value={data.chech} onChange={InputEvent} placeholder="cheach" />
      <label className="form-check-label" for="gridCheck">
        Check me out
      </label>
    </div>
  </div>
  <button type="submit" className="btn btn-primary site-button ">Submit</button>
</form>
 </div>
  </div>
   </div>
	</>
	);
};
export default Contact ;