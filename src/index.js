import React from 'react';
import ReactDOM from 'react-dom';
import './App.css';
import Youtube from './components/Youtube.js';

function Main(){
  return (
    <div>
      <Youtube />
    </div>
  ) 
}

ReactDOM.render(<Main />,document.getElementById('root'));