import React from 'react';

import './App.css';
import ContentSection from './components/content-section/ContentSection';
import Navbar from './components/navbar/Navbar';
import Sidebar from './components/sidebar/Sidebar';

function App() {
  return (
    <div className="app-container">
      <Navbar />
      <Sidebar />
      <ContentSection />
    </div>
  );
}

export default App;
