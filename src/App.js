import './App.css';
import {useState} from 'react';

function App() {
  return (
    <div className="App">
      <Counter/>
    </div>
  );
}

function Counter(){
  const [count, setCounter] = useState(0)
  const handleIncrease = ()=>{
    const newCount = count * 2
    setCounter(newCount)
  }

  return (
    <div>
      <h2>Count : {count}</h2>
      <button onClick={handleIncrease}>increase</button>
      <button onClick={handleIncrease}>increase</button> 
    </div>
  )
}

export default App;
