import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { Routes, Route } from "react-router-dom";
import Biography from "./Biography";
import FamousPainting from "./FamousPainting";
import Collection from "./Collection";
import NotFound from "./NotFound";
import inf from "./inf";

function App() {
  return (
    <div className="app">
      <inf />
      <div className="content">
        <Routes>
          <Route path="/" element={<Biography />} />
          <Route path="/painting" element={<FamousPainting />} />
          <Route path="/collection" element={<Collection />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;

