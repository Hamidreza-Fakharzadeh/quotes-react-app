import React,{useState, useEffect} from 'react';
import './App.css';

function App() {
  const [quotes, setQuotes] = useState ("");
  useEffect(() => generateQuotes(), []);
  function generateQuotes () {
    fetch('https://hamidreza-quoet-server.glitch.me/quotes/random')
      .then (response => response.text())
      .then (data => setQuotes(data));
    console.log(quotes);
  }
  return(
     <div className="App">
       <p>{quotes}</p>
     </div>
      
     
  )
}

export default App;
