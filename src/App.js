import { useState } from 'react';
import './App.css';

const App = () => {
  const [counter, setCounter] = useState(0);

  return (
    <div className="App">
      <button>-</button>
      <h1>{0}</h1>
      <button>+</button>
    </div>
  );
}

export default App;
