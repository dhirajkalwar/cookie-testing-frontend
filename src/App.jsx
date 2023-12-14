import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import axios from './axiosConfig';
import Cookies from 'js-cookie';

function App() {
  const [count, setCount] = useState(0)
  const [jwt, setJwt] = useState(null);


  // const http = axios.create({
  //   baseURL:'http://localhost:3000',
  //   headers:{
  //     'jwtoken':"welcome"
  //   }
  // });


  const genrateCookie = async () => {
    console.log(`hello there`);
    const res = await axios.post('http://localhost:3000/setCookie',{token:"welcome"},{
      withCredentials:true,
      headers: {
        "Content-Type":'application/json',
      }
    });
     console.log(res.headers);
     Cookies.set('jwtoken',res.headers['jwtoken'],{ expires: 7, path: '/' });

    // const cookie = res.headers['set-cookie'];
    // const [, , token] = cookie.split(';');
    // setJwt(token);
    if(res) {
      console.log(`Success`);
    }

  }
  const sendCookie = async () => {
    // axios.defaults.headers.common['MyCustomHeader'] = 'header value';
    const res = await axios.get('/sendCookie',{
      withCredentials:true,
      headers: {
        "jwt":"ejdugfiheurg",
      }
    })
    if(res) {
      console.log(`ok`);
    }
  }
  const deleteCookie = (name) => {
    document.cookie = `${name}=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;`;
  };

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
      <button onClick={() => deleteCookie('jwtoken')}>Delete Cookie</button>
    </>
  )
}

export default App
