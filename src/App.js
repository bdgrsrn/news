import React from 'react';
import {Browser, Route} from 'react-router-dom';
import Nav from './Nav';
import Sidebar from './admin/components/Sidebar';
import Login from './admin/components/Login';
import Dashboard from './admin/pages/Dashboard';

function App() {
  return (
    <div className="App">
    
     Сайн уу? Энэ анхны react App шүү.
     sd fasd flskdhf ;asldfsdf sdf
      s<Nav />

      <Sidebar />
      <Login />

      <Dashboard />
    </div>
  );
}

export default App;
