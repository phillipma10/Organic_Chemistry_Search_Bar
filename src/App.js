import React, { useState } from 'react';
import './App.css';
import { Routes, Route } from 'react-router-dom';
import HomePage from './pages/HomePage';
import Reactions from './pages/Reactions';

function App() {

  return (
    <div>
      <Routes>
        <Route path='/' element={<HomePage/>}/>
        <Route path='/reactions' element={<Reactions authed={true}/>}/>
      </Routes>
    </div>
  );
}

export default App;
