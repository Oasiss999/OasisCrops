import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import LoginPage from '../LoginScreen/Login.js';
import Dash from '../DashBoard/Dash.js';
import PIAdd from '../PIAdd/PIAdd.js';
function RoutesComponent() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<LoginPage />} />
      </Routes>
        <Routes>
            <Route path="/dashboard" element={<Dash />} />
        </Routes>
        <Routes>
            <Route path="/addpi" element={<PIAdd />} />
        </Routes>
    </Router>
  );
}

export default RoutesComponent;