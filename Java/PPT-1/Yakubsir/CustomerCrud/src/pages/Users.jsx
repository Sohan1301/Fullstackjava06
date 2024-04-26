import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

const Users = () => {
  const [users, setUsers] = useState([]);

  const loadUsers = async () => {
    try {
      const response = await axios.get("http://localhost:5454/getall");
      setUsers(response.data);
    } catch (error) {
      console.error("Error loading users:", error);
    }
  };

    const handleDelete =async (id) => {
        await axios.delete(`http://localhost:5454/delete/${id}`);
        loadUsers();
  }  
  useEffect(() => {
    loadUsers();
  }, []);

  return (
    <div className="container text-center">
      <div className="row">
        <div className="col">
          <nav className="navbar navbar-expand-lg bg-primary fixed-top">
            <div className="container-fluid">
              <a className="navbar-brand text-white" href="#">CRUD</a>
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
                </ul>
              </div>
            </div>
          </nav>
        </div>
      </div>
      <div className="row">
        <div className="col">
          <table className="table">
            <thead>
              <tr>
                <th scope="col">Sno</th>
                <th scope="col">First</th>
                <th scope="col">Last</th>
                <th scope="col">Address</th>
                <th scope="col">City</th>
                <th scope="col">State</th>
                <th scope="col">Email</th>
                <th scope="col">Mobile</th>
                <th scope="col">Actions</th>
              </tr>
            </thead>
            <tbody>
              {users.map((element, index) => (
                <tr key={index}>
                  <td>{element.id}</td>
                  <td>{element.fname}</td>
                  <td>{element.lname}</td>
                  <td>{element.address}</td>
                  <td>{element.city}</td>
                  <td>{element.state}</td>
                  <td>{element.email}</td>
                  <td>{element.mobile}</td>
                  <td>
                    <Link className="btn btn-primary" to={`/edit/${element.id}`}>
                       Edit
                    </Link>
                  </td>
                  <td>
                    <button className="btn btn-danger" onClick={() => handleDelete(element.id)}>
                      <i className="bi bi-x"></i> Delete
                    </button>
                  </td>    
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default Users;
