import reactLogo from './../assets/react.svg'
import viteLogo from '/vite.svg'
import {useApi} from "../hooks/useApi.js";

export function HomeGuest() {
  const {login, refreshToken, logout, isLoggedIn, tokenSavedAt, tokenExpiresAt, email, password, setEmail, setPassword} = useApi();

  return <>
    <div>
      <a href="https://vite.dev" target="_blank">
        <img src={viteLogo} className="logo" alt="Vite logo" />
      </a>
      <a href="https://react.dev" target="_blank">
        <img src={reactLogo} className="logo react" alt="React logo" />
      </a>
    </div>
    <h1>Vite + React</h1>
    <div className="card">


      <label>
        email
        <input 
        type='text'
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        />
      </label>

      <label>
        password
        <input 
        type="text"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        />
      </label>


      <button onClick={login}>
        Login
      </button>
      <p>
        Edit <code>src/App.jsx</code> and save to test HMR
      </p>
    </div>
    <p className="read-the-docs">
      Click on the Vite and React logos to learn more
    </p>
  </>
}