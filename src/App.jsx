import { useState } from 'react';
import './App.css';
import Header from './components/header';

function App() {
  return (
    <>
      <Header />
      <div className="page1">
        <div className="page1tag"></div>
        <div className="headingpage1">
          Simplify Your Billing, <br />
          Optimize Your Inventory.
        </div>
        <div className="descpage1">
          Designed for modern businesses, we simplify your billing and inventory
          processes for better productivity and smarter decisions.
        </div>
      </div>
    </>
  );
}

export default App;
