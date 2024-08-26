import React, { useState } from 'react';
import axios from 'axios';
import './addnewroom.css';
import { Link } from 'react-router-dom';

const AddNewRoom: React.FC = () => {
  const [roomData, setRoomData] = useState({
    roomName: '',
    roomType: '',
    floor: '',
    description: '',
  });

  const handleLogout = () => {
    alert('Logout clicked');
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setRoomData({
      ...roomData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    axios.post('http://localhost:8080/api/rooms', roomData, {
      headers: {
        'Content-Type': 'application/json',
      },
      withCredentials: true, // Ensure credentials are sent if needed
    })
      .then(response => {
        alert('Room added successfully');
        console.log(response.data);
        // Reset the form fields
        setRoomData({
          roomName: '',
          roomType: '',
          floor: '',
          description: '',
        });
      })
      .catch(error => {
        console.error('There was an error adding the room!', error);
        alert('Failed to add the room');
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
        <h2>Add New Room</h2>
        <form onSubmit={handleSubmit}>
          <label htmlFor="roomName">Room Name</label>
          <input
            type="text"
            id="roomName"
            name="roomName"
            value={roomData.roomName}
            onChange={handleChange}
            placeholder="Room 101"
          />

          <label htmlFor="roomType">Select Type</label>
          <select
            id="roomType"
            name="roomType"
            value={roomData.roomType}
            onChange={handleChange}
          >
            <option value="cooler">Cooler Room</option>
            <option value="normal">Normal Room</option>
            <option value="ac">AC Room</option>
          </select>

          <label htmlFor="floor">Floor</label>
          <input
            type="text"
            id="floor"
            name="floor"
            value={roomData.floor}
            onChange={handleChange}
            placeholder="First Floor"
          />

          <label htmlFor="description">Description</label>
          <textarea
            id="description"
            name="description"
            value={roomData.description}
            onChange={handleChange}
            placeholder="First Floor Room"
            rows={4}
          ></textarea>

          <button type="submit">Save Room</button>
          <button type="reset" onClick={() => setRoomData({ roomName: '', roomType: '', floor: '', description: '' })}>
            Reset
          </button>
        </form>
      </div>
    </div>
  );
};

export default AddNewRoom;
