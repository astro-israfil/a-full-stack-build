import { useEffect, useState } from 'react'
import axios from "axios";
import './App.css'

function App() {
  const [jokes, setJokes] = useState([]);

  useEffect(() => {
    axios.get('/api/jokes')
      .then(response => {
        setJokes(response.data);
      }).catch(error => console.error(error));
  }, [])
  return (
    <>
      <h1>JOKES</h1>
      <ul style={{listStyle: 'none'}}>
        {
          jokes.map((joke) => (
            <li key={joke.joke}>{joke.joke}</li>
          ))
        }
      </ul>
    </>
  )
}

export default App
