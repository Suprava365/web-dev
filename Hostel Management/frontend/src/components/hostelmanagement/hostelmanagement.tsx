import React from 'react';
import { Link } from 'react-router-dom';
import './dashboard.css'; // Make sure to adjust the path if needed

const HostelManagementSystem: React.FC = () => {
  const handleLogout = () => {
    alert('Logout clicked');
    // Handle logout logic here
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
        <h2>Welcome to Hostel Management System</h2>
        <div className="menu">
          <Link to="/dashboard/addroom" id="a">Add New Room</Link>
          <Link to="/dashboard/addstudent" id="a">Add New Student</Link>
          <Link to="/dashboard/room-reports" id="a">Room Reports</Link>
          <Link to="/dashboard/student-reports" id="a">Student Report</Link>
          <a id="a" onClick={handleLogout}>Logout</a>
        </div>
      </div>
    </div>
  );
};

export default HostelManagementSystem;
