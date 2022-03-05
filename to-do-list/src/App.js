import logo from './logo.svg';
import './App.css';
import { useState } from 'react';

function App() {

  const [value, setValue] = useState();

  return (
    <div className="App">
      <input type="text" onChange={ (event) => setValue(event.target.value)}/>
      <div>{ value }</div>
    </div>
  );
}

export default App;
