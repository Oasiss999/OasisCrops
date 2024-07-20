import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import LoginPage from '../LoginScreen/Login.js';
import Dash from '../DashBoard/Dash.js';
import PIAdd from '../PIAdd/PIAdd.js';
import { PiProvider } from '../Contexts/PIArray.js';
import { PiNodeProvider } from '../Contexts/PiNode';
import { MessagesProvider } from '../Contexts/Messages.js';

function RoutesComponent() {
  return (
    
    <MessagesProvider>
    <PiNodeProvider>
    <PiProvider>
      <Router>
        <Routes>
          <Route path="/" element={<LoginPage />} />
          <Route path="/dashboard" element={<Dash />} />
          <Route path="/addpi" element={<PIAdd />} />
        </Routes>
      </Router>
    </PiProvider>
    </PiNodeProvider>
    </MessagesProvider>
   
  );
}

export default RoutesComponent;