import React from 'react'
import Navbar from './Components/Navbar';
import Banner from './Components/Banner';
import './App.css';
import 'animate.css';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Banner />
    </div>
  );
}

export default App;