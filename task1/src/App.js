import React , { useState} from 'react';
import logo from './logo.svg';
import './App.css';
import Buttonview from './Buttonview.js';
import Inputview from './Inputview.js';
import Form from './Form';

function App() {
  const [value, setValue] = useState('');
    const root = document.getElementById("root");
  return (
    <div>
    <h1>Form Application</h1>
    <Form />
    
    </div>
  );
}

export default App;
