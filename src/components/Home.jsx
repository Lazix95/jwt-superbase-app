import reactLogo from './../assets/react.svg'
import viteLogo from '/vite.svg'
import {useApi} from "../hooks/useApi.js";

export function Home() {
  const {refreshToken, logout, isLoggedIn, tokenSavedAt, tokenExpiresAt} = useApi();

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
    <h3>Is Logged In: {isLoggedIn ? 'true' : 'false'} at {tokenSavedAt}</h3>
    <h3>Expires: {tokenExpiresAt}</h3>
    <div className="card">
      <button onClick={refreshToken}>
        Refresh
      </button>

      <button onClick={logout}>
        Logout
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