import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import axios from 'axios';

function App() {
  const [count, setCount] = useState(0)
  const genrateCookie = async () => {
    console.log(`hello there`);
    const res = await axios.post('http://localhost:3000/setCookie',{token:"welcome"},{
      withCredentials:true,
      headers: {
        "Content-Type":'application/json',
      }
    });
    if(res) {
      console.log(`Success`);
    }

  }
  const sendCookie = async () => {
    const res = await axios.get('http://localhost:3000/sendCookie',{
      withCredentials:true,
      headers: {
        "jwt":"ejdugfiheurg",
      }
    })
    if(res) {
      console.log(`ok`);
    }
  }

  return (
    <>
      <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
      <button onClick={genrateCookie}>Set Cookie</button>
      <button onClick={sendCookie}>Send Cookie</button>

    </>
  )
}

export default App
