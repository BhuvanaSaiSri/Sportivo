import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

// Import components
import Dashboard from './components/Dashboard';
// import LoginPage from './screens/LoginFolder';
import RegistrationPage from './screens/RegistrationPage/RegistrationPage';
import LoginPage from './screens/LoginFolder/LoginPage';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<LoginPage />} />
        <Route path="/register" element={<RegistrationPage />} />
        <Route path="/dashboard" element={<Dashboard />} />
      </Routes>
    </Router>
  ); 
}

export default App;
