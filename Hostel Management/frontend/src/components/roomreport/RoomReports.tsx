import React from 'react';
import './RoomReports.css';
import { Link } from 'react-router-dom'
const RoomReports: React.FC = () => {
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
        <h2>Room Reports</h2>
        <div className="search-bar">
          <label htmlFor="search">Search :</label>
          <input type="text" id="search" />
          <button>Search</button>
        </div>
        <table>
          <thead>
            <tr>
              <th>ID</th>
              <th>Name</th>
              <th>Type</th>
              <th>Floor</th>
              <th>Total Beds</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>1</td>
              <td>Room 101</td>
              <td>Cooler Room</td>
              <td>First Floor</td>
              <td>4 Beds</td>
              <td>Edit | Delete | View Beds | Add Beds</td>
            </tr>
            <tr>
              <td>2</td>
              <td>Room 102</td>
              <td>Normal Room</td>
              <td>First Floor</td>
              <td>4 Beds</td>
              <td>Edit | Delete | View Beds | Add Beds</td>
            </tr>
            <tr>
              <td>3</td>
              <td>Room 103</td>
              <td>AC Room</td>
              <td>First Floor</td>
              <td>2 Beds</td>
              <td>Edit | Delete | View Beds | Add Beds</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default RoomReports;