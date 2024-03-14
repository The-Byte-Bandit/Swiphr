import React from 'react';
import './App.css';
import Navbar from './Components/Navbar';
import Dashboard from './Pages/Dashboard';


function App() {
  return (
    <div className="App">
      <Navbar />
      <Dashboard/>
    </div>
  );
}

export default App;
