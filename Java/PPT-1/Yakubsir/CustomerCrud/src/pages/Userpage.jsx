import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'

const Userpage = () => {
    const { id } = useParams();
    const [user, setUser] = useState([]);

    const loadUser = async () => {
        const response = await axios.get('http://localhost:5454/get/${id}') 
        setUser(response.data);
    }
    useEffect(() => { loadUser(); },[])
  return (
    <div className="container text-center">
  <div className="row">
    <div className="col">
    <nav className="navbar navbar-expand-lg bg-primary fixed-top">
  <div className="container-fluid">
    <a className="navbar-brand text-white" href="#">{user.fname}</a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarNav">
      <ul className="navbar-nav">
        <li className="nav-item">
          <a className="nav-link active text-white" aria-current="page" href="/">Logout</a>
        </li>
      </ul>
    </div>
  </div>
</nav>
    </div>
  </div>
  <div className="row">
    <div className="col">
                  <h1 className='text-primary'>Welcome {user.fname} {user.lname }</h1>
    </div>
  </div>        
</div>
  )
}

export default Userpage