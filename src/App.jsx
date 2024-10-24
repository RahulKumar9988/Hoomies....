import React, { useState, useEffect } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Dashboard from './components/Dashboard';
import './App.css';
import Loder from './components/Loder';
import Signin from './components/pages/Signin';
import Signup from './components/pages/Signup';


function App() {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [loading, setLoading] = useState(true); // Initial loading state is true

  useEffect(() => {
    const handleMouseMove = (e) => {
      setPosition({
        x: e.clientX,
        y: e.clientY,
      });
    };
    // Add the event listener for mouse movement
    document.addEventListener('mousemove', handleMouseMove);

    // Clean up the event listener when the component is unmounted
    return () => {
      document.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  useEffect(() => {
    // Decreased delay to 1 second before changing loading state to false
    const timer = setTimeout(() => {
      setLoading(false);
    }, 1000); // 1-second delay

    // Clean up the timer when component is unmounted
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={loading ? <Loder/> : <Dashboard />} />
          <Route path="/signin" element= {<Signin />} />
          <Route path="/signup" element= {<Signup />} />


        </Routes>
      </BrowserRouter>

      {/* Custom Pointer */}
      <div
        className="custom-pointer"
        style={{
          left: `${position.x}px`,
          top: `${position.y}px`,
        }}
      />
    </div>
  );
}

export default App;
