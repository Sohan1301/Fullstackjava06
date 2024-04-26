import React from 'react'
import { validationss } from '../schema/validationss'
import { useFormik } from 'formik'
import { useNavigate } from 'react-router-dom'
import axios from 'axios'
const Login = () => {
    const nav = useNavigate(); 
    const formValues = {
        id: "",
        password:"",
    }
    const formik = useFormik({
        initialValues: formValues,
        validationSchema: validationss,
        onSubmit: async (values) => {
            try {
                const response = await axios.post("http://localhost:5454/login", values);
                const id = response.data.id;

                if (response.status === 200) {
                    // Successful login for regular user
                    nav(`/user/${id}`);
                } else if (values.id === '183' && values.password === 'Vish@l1998') {
                    // Successful login for admin
                    nav(`/admin/${id}`);
                } else {
                    console.log("fucked up check code");
                }
            } catch (error) {
                console.error("An error occurred:", error);
            }
        }
    });
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
      </ul>
    </div>
  </div>
</nav>
    </div>
</div>
<div className="row">
    <div className="col">
    <form onSubmit={formik.handleSubmit}>
  <div className="mb-3">
    <label htmlFor="exampleInputEmail1" className="form-label">User Id</label>
                    <input type="text"
                              className="form-control"
                              id="exampleInputEmail1"
                              name='id'
                              value={formik.values.id}
                              onChange={formik.handleChange}
                              onBlur={formik.handleBlur} />
                          {formik.errors.id && formik.touched.id && (
                              <p className='text-danger'>{formik.errors.id}</p>   
      )}                    
  </div>
  <div className="mb-3">
    <label htmlFor="exampleInputPassword1" className="form-label">Password</label>
                          <input type="password"
                              className="form-control"
                              id="exampleInputPassword1" 
                              name='password'
                              value={formik.values.password}
                              onChange={formik.handleChange}
                              onBlur={formik.handleBlur} />
                          {formik.errors.password && formik.touched.password && (
                              <p className='text-danger'>{formik.errors.password}</p>   
      )}                      
  </div>
  <button type="submit" className="btn btn-primary">Submit</button>
</form>
    </div>
  </div>          
</div>
  )
}

export default Login