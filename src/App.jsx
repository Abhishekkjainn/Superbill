import { useState } from 'react';
import './App.css';
import Header from './components/header';
import Page1 from './pages/page1';
import Page2 from './pages/page2';

function App() {
  return (
    <>
      <Header />
      <Page1 />
      <Page2 />
    </>
  );
}

export default App;
