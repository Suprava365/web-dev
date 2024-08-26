import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
import Home from './components/Auth/Home';
import Login from './components/Auth/Login';
import Dashboard from './Dashboard';
import { useAuth } from './components/Auth/AuthContext'; 
import RoomReports from './components/roomreport/RoomReports';
import StudentReports from './components/studentreports/studentreports';
import StudentRegistration from './components/studentregistration/studentregistration';
import AddNewRoom from './components/addnewroom/addnewroom';

function App() {
  // const { isAuthenticated } = useAuth();
  const [isAuthenticated, setIsAuthenticated] = useState(true)

  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Dashboard />} />
        <Route 
          path="/dashboard" 
          element={isAuthenticated ? <Dashboard /> : <Navigate to="/login" />} 
        />
        {/* Protected routes */}
        <Route 
          path="/dashboard" 
          element={isAuthenticated ? <Dashboard /> : <Navigate to="/login" />} 
        />
        <Route 
          path="/dashboard/addroom" 
          element={isAuthenticated ? <AddNewRoom /> : <Navigate to="/login" />} 
        />
        <Route 
          path="/dashboard/addstudent" 
          element={isAuthenticated ? <StudentRegistration /> : <Navigate to="/login" />} 
        />
        <Route 
          path="/dashboard/student-reports" 
          element={isAuthenticated ? <StudentReports /> : <Navigate to="/login" />} 
        />
        <Route 
          path="/dashboard/room-reports" 
          element={isAuthenticated ? <RoomReports /> : <Navigate to="/login" />} 
        />
      
       
      </Routes>
    </Router>
  );
}

export default App;
