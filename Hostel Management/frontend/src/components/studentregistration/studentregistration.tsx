import React, { useState } from 'react';
import axios from 'axios';
import './studentregistration.css';
import { Link } from 'react-router-dom';

const StudentRegistration: React.FC = () => {
  const [studentData, setStudentData] = useState({
    name: '',
    allotBed: '',
    mobile: '',
    email: '',
    dob: '',
    address1: '',
    address2: '',
    city: '',
    state: '',
    country: '',
    photo: 'default.jpg', // Default image value
  });

  const handleLogout = () => {
    alert('Logout clicked');
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setStudentData({
      ...studentData,
      [name]: value,
    });
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData();
    
    for (let key in studentData) {
      formData.append(key, studentData[key as keyof typeof studentData] as string | Blob);
    }

    axios.post('http://localhost:8080/api/students', formData, {
      headers: {
        'Content-Type': 'application/json',
      },
    })
      .then(response => {
        alert('Student registered successfully');
        console.log(response.data);
        // Optionally clear the form or redirect the user after success
        setStudentData({
          name: '',
          allotBed: '',
          mobile: '',
          email: '',
          dob: '',
          address1: '',
          address2: '',
          city: '',
          state: '',
          country: '',
          photo: 'default.jpg', // Reset to default image value
        });
      })
      .catch(error => {
        console.error('There was an error registering the student!', error);
        alert('Failed to register the student');
      });
  };

  return (
    <div>
      <div className="header">
        <h1>Hostel Management System</h1>
        <nav>
          <ul>
            <li><Link to="/dashboard">Dashboard</Link></li>
            <li className="dropdown">
              <Link to="#" className="dropbtn">Administration</Link>
              <div className="dropdown-content">
                <Link to="/dashboard/addroom">Add New Room</Link>
                <Link to="/dashboard/addstudent">Add New Student</Link>
              </div>
            </li>
            <li className="dropdown">
              <Link to="#">Report</Link>
              <div className="dropdown-content">
                <Link to="/dashboard/room-reports">Room Report</Link>
                <Link to="/dashboard/student-reports">Student Report</Link>
              </div>
            </li>
            <li><Link to="#" onClick={handleLogout}>Logout</Link></li>
          </ul>
        </nav>
      </div>
      <div className="main-content">
        <h2>Student Registration</h2>
        <form onSubmit={handleSubmit} encType="multipart/form-data">
          <label htmlFor="name">Name</label>
          <input type="text" id="name" name="name" value={studentData.name} onChange={handleChange} required />

          <label htmlFor="allotBed">Allot Bed</label>
          <select id="allotBed" name="allotBed" value={studentData.allotBed} onChange={handleChange} required>
            <option value="">Please Select</option>
            <option value="1A">1A</option>
            <option value="1B">1B</option>
            {/* Add more options as needed */}
          </select>

          <label htmlFor="mobile">Mobile</label>
          <input type="text" id="mobile" name="mobile" value={studentData.mobile} onChange={handleChange} required />

          <label htmlFor="email">Email</label>
          <input type="email" id="email" name="email" value={studentData.email} onChange={handleChange} required />

          <label htmlFor="dob">Date of Birth</label>
          <input type="date" id="dob" name="dob" value={studentData.dob} onChange={handleChange} required />

          <label htmlFor="address1">Address Line 1</label>
          <input type="text" id="address1" name="address1" value={studentData.address1} onChange={handleChange} required />

          <label htmlFor="address2">Address Line 2</label>
          <input type="text" id="address2" name="address2" value={studentData.address2} onChange={handleChange} />

          <label htmlFor="city">City</label>
          <select id="city" name="city" value={studentData.city} onChange={handleChange} required>
            <option value="">Please Select</option>
            <option value="Value 1">Value 1</option>
            {/* Add city options */}
          </select>

          <label htmlFor="state">State</label>
          <select id="state" name="state" value={studentData.state} onChange={handleChange} required>
            <option value="">Please Select</option>
            <option value="Value 1">Value 1</option>
            {/* Add state options */}
          </select>

          <label htmlFor="country">Country</label>
          <select id="country" name="country" value={studentData.country} onChange={handleChange} required>
            <option value="">Please Select</option>
            <option value="Value 1">Value 1</option>
            {/* Add country options */}
          </select>

          <button type="submit">Submit</button>
          <button type="reset" onClick={() => setStudentData({
            name: '',
            allotBed: '',
            mobile: '',
            email: '',
            dob: '',
            address1: '',
            address2: '',
            city: '',
            state: '',
            country: '',
            photo: 'default.jpg', // Reset to default image value
          })}>
            Reset
          </button>
        </form>
      </div>
      <div className="image-gallery">
        <img src="./images/hostel.jpg" alt="Bunk beds" />
        <img src="./images/mint.jpg" alt="Hallway with beds" />
      </div>
    </div>
  );
};

export default StudentRegistration;
