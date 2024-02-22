import React from 'react'
import ReactDOM from 'react-dom/client'
import Logging from './Logging.jsx'
import Landing from './Landing.jsx'
import "../styles/LandingPage.css"


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
     <Landing/> 
    {/* <Logging/>  */}
  </React.StrictMode>,
)
