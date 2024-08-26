import React from 'react';
import './studentreport.css';
import { Link } from 'react-router-dom';
const StudentReports: React.FC = () => {
  const handleLogout = () => {
    alert('Logout clicked');
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
        <h2>Student Reports</h2>
        <table>
          <thead>
            <tr>
              <th>Sr. No.</th>
              <th>Image</th>
              <th>Name</th>
              <th>Mobile</th>
              <th>Email</th>
              <th>Date Of Birth</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>1</td>
              <td><img src="image1.jpg" alt="Student Image" className="student-image" /></td>
              <td>Anu Regmi</td>
              <td>987654321</td>
              <td>Regmianu12@gmail.com</td>
              <td>12 January, 2013</td>
              <td><a href="#">Edit</a> | <a href="#">Delete</a></td>
            </tr>
            <tr>
              <td>2</td>
              <td><img src="image2.jpg" alt="Student Image" className="student-image" /></td>
              <td>Anisha khatiwada</td>
              <td>987654321</td>
              <td>Anishakhatiwada@gmail.com</td>
              <td>12 January, 2013</td>
              <td><a href="#">Edit</a> | <a href="#">Delete</a></td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default StudentReports;