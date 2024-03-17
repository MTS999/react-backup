
import './App.css'
import Login from './Components/Login/Login'
import Signup from "./Components/Signup/Signup"
import Sidenav from "./Components/Sidenav/Sidenav"
import Routess from './Routess'

import { BrowserRouter } from 'react-router-dom'
function App() {

  return (
    <>
    <BrowserRouter>
      <Routess/>
    
    </BrowserRouter>
        {/* <Login/> */}
        {/* <Sidenav/> */}
        {/* <Signup/> */}


    </>
  )
}

export default App
