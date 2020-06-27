import React,{useState, useEffect} from 'react';
import './App.css';

function App() {
  const [quotes, setQuotes] = useState ("");
  useEffect(() => generateQuotes(), []);
  function generateQuotes () {
    fetch('https://arcane-brushlands-06771.herokuapp.com')
      .then (response => response.text())
      .then (data => setQuotes(data));
    console.log(quotes);
  }
  return(
     <div className="App">
       <p>hi</p>
     </div>
      
     
  )
}

export default App;
