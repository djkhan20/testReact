import React,{useState,useEffect} from 'react';
import './App.css';
import {ColorNumber} from './DivCounter';

function App() {
  const [divNumber, setDivNumber] = useState(100)
  return (
    <div className="App">
      <ColorNumber/>

    </div>
  );
}

export default App;
