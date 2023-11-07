import logo from './logo.svg';
import './App.css';
import jocks  from './JOCKS.js'


function App() {
   
  return (
    <div className="App">
      <jocks/>
      <button id="fetchQuote">Get Quote</button>
      <div id="quoteDisplay"></div>
    </div>
     
  );
}

export default App;

 