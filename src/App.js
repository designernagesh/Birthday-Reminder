import { useState } from "react";
import PersonsList from "./components/PersonsList";
import data from './data/data';
import './App.css';

function App() {
  const [ people, setPeople ] = useState(data);

  const clearList = () => {
    setPeople([]);
  }

  return (
    <div className="wrapper">
      <h1>Birthday Reminder</h1>
      <ul>
        <PersonsList people={ people } />
      </ul>
      <button onClick={ clearList }>Clear List</button>
    </div>
  );
}

export default App;
