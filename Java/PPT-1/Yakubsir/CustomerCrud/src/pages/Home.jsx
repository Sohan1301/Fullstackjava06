import React from "react"
import { useFormik } from "formik"
import { validations } from "../schema/validations";
import axios from "axios";
const Home = () => {
const formValues = {
fname:"",
lname:"",
password: "",
c_password:"",
email:"",
mobile:"",
street:"",
address:"",
state:"",
city:""
};
const formik = useFormik({
initialValues: formValues,
validationSchema: validations,
onSubmit: async (values) => {
await axios.post("http://localhost:5454/add",values)
}
})
return (
<div className="container text-center">
<div className="row">
    <div className="col">
        <nav className="navbar navbar-expand-lg bg-primary fixed-top">
        <div className="container-fluid">
        <a className="navbar-brand text-white" href=" ">CRUD</a>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
        <ul className="navbar-nav">
        <li className="nav-item">
        <a className="nav-link active text-white" aria-current="page" href="/">Add Users</a>
        </li>
        <li className="nav-item">
        <a className="nav-link text-white" href="/login">Login</a>
        </li>
        <li className="nav-item">
        <a className="nav-link text-white" href="/allusers">Users</a>
        </li>

        </ul>
        </div>
        </div>
        </nav>
    </div>
</div>
<form onSubmit={formik.handleSubmit}>         
<div class="row">
    <div class="col">
               
    <div className="mb-3">
        <label htmlFor="fname" className="form-label">
        First name
        </label>
        <input
        type="text"
        className="form-control"
        id="fname"
        name="fname"
        placeholder="Enter First name"
        value={formik.values.fname}
        onChange={formik.handleChange}
        onBlur={formik.handleBlur}
        />
        {formik.errors.fname && formik.touched.fname && (
        <p className="text-danger">{formik.errors.fname}</p>
        )}
        </div>
    </div>
    <div class="col">
    <div className="mb-3">
        <label htmlFor="lname" className="form-label">Last name</label>
        <input type="text"
        name="lname"
        className="form-control"
        id="lname"
        placeholder="Enter Last name"
        value={formik.values.lname}
        onChange={formik.handleChange}
        onBlur={formik.handleBlur}
        />
        {formik.errors.lname && formik.touched.lname && (
        <p className="text-danger">{formik.errors.lname }</p>
        )}
        </div>
    </div>
    <div class="col">
    <div className="mb-3">
        <label htmlFor="password" className="form-label">Password</label>
        <input type="password"
        name="password"
        className="form-control"
        id="password"
        placeholder="Enter Password"
        value={formik.values.password}
        onChange={formik.handleChange}
        onBlur={formik.handleBlur}
        />
        {formik.errors.password && formik.touched.password && (
        <p className="text-danger">{formik.errors.password }</p>
        )}
        </div>
    </div>
</div>
<div class="row">
    <div class="col">
    <div className="mb-3">
        <label htmlFor="c_password" className="form-label">Confirm Password</label>
        <input type="password"
        name="c_password"
        className="form-control"
        id="c_password"
        placeholder="Enter Confirm Password"
        value={formik.values.c_password}
        onChange={formik.handleChange}
        onBlur={formik.handleBlur}
        />
        {formik.errors.c_password && formik.touched.c_password && (
        <p className="text-danger">{formik.errors.c_password }</p>
        )}
        </div>
    </div>
    <div class="col">
    <div className="mb-3">
        <label htmlFor="email" className="form-label">Email</label>
        <input type="text"
        name="email"
        className="form-control"
        id="email"
        placeholder="Enter Email"
        value={formik.values.email}
        onChange={formik.handleChange}
        onBlur={formik.handleBlur}
        />
        {formik.errors.email && formik.touched.email && (
        <p className="text-danger">{formik.errors.email }</p>
        )}
        </div>
    </div>
    <div class="col">
    <div className="mb-3">
        <label htmlFor="mobile" className="form-label">Mobile</label>
        <input type="text"
        name="mobile"
        className="form-control"
        id="mobile"
        placeholder="Enter mobile"
        value={formik.values.mobile}
        onChange={formik.handleChange}
        onBlur={formik.handleBlur}
        />
        {formik.errors.mobile && formik.touched.mobile && (
        <p className="text-danger">{formik.errors.mobile }</p>
        )}
        </div>
    </div>
</div>
<div class="row">
    <div class="col">
    <div className="mb-3">
        <label htmlFor="street" className="form-label">Street</label>
        <input type="text"
        name="street"
        className="form-control"
        id="street"
        placeholder="Enter Street"
        value={formik.values.street}
        onChange={formik.handleChange}
        onBlur={formik.handleBlur}
        />
        {formik.errors.street && formik.touched.street && (
        <p className="text-danger">{formik.errors.street }</p>
        )}
        </div>
    </div>
    <div class="col">
    <div className="mb-3">
        <label htmlFor="address" className="form-label">Address</label>
        <input type="text"
        name="address"
        className="form-control"
        id="address"
        placeholder="Enter Address"
        value={formik.values.address}
        onChange={formik.handleChange}
        onBlur={formik.handleBlur}
        />
        {formik.errors.address && formik.touched.address && (
        <p className="text-danger">{formik.errors.address }</p>
        )}</div>
    </div>
    <div class="col">
    <div className="mb-3">
        <label htmlFor="state" className="form-label">State</label>
        <input type="text"
        name="state"
        className="form-control"
        id="state"
        placeholder="Enter State"
        value={formik.values.state}
        onChange={formik.handleChange}
        onBlur={formik.handleBlur}
        />
        {formik.errors.state && formik.touched.state && (
        <p className="text-danger">{formik.errors.state }</p>
        )}</div>
    </div>
</div>                
<div className="row">
    <div className="col"> 
        <div className="mb-3">
        <label htmlFor="city" className="form-label">City</label>
        <input type="text"
        name="city"
        className="form-control"
        id="city"
        placeholder="Enter City"
        value={formik.values.city}
        onChange={formik.handleChange}
        onBlur={formik.handleBlur}
        />
        {formik.errors.city && formik.touched.city && (
        <p className="text-danger">{formik.errors.city }</p>
        )}</div>
        <button type="submit" className="btn btn-primary" >Submit</button>
    </div>
</div>
</form>            
</div>


)
}

export default Home
