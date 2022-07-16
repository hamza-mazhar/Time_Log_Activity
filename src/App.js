import React from "react";
import TimeLog from './containers/TimeLog'
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Navbar from './containers/Navbar'
import './App.css';

function App() {
  return (
    <div className="App">
      <React.Fragment>
        <BrowserRouter>
          <Navbar />
          <Routes>
            <Route exact path="/home" element={<TimeLog />} />
            <Route path="*" element={<Navigate to="/home" replace />} />
          </Routes>
        </BrowserRouter>
      </React.Fragment>
    </div >
  );
}

export default App;
