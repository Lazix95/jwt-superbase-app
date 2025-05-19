import './App.css'
import {IconSpinner} from "./components/icons/IconSpinner.jsx";
import {Home} from "./components/Home.jsx";
import {useApi} from "./hooks/useApi.js";
import {HomeGuest} from "./components/HomeGuest.jsx";
import { LoginPage } from './pages/LoginPage.jsx';

function App() {
  const {isLoading, isLoggedIn} = useApi({shouldLoadUser: true});
  return (
    <>

      {isLoading ? <IconSpinner /> : null}
      {!isLoading && !isLoggedIn ? <LoginPage/> : <Home/>}

    </>
  )
}

export default App
