import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Login from './Admin/login'
import BuisnessDetails from './DataStore/BuisnessDetails'
import BusinessDetailsDescription from './Admin/AboutBuisness'
import EditDetails from './Admin/EditDetails'
import {BrowserRouter, Route, Routes, Link, Outlet, useParams} from 'react-router-dom';
import Home from './User/Home'
import Services from './Admin/Services'
import Meeting from './Admin/Meeting'
import { useEffect } from 'react'
import ServicesData from './DataStore/ServicesData'
import MeetingData from './DataStore/MeetingData'

function App() {
  const [count, setCount] = useState(0)
  useEffect(()=>{
    ServicesData.initialServices();
   MeetingData.initialMeetings();
    BuisnessDetails.initialBuisness();

  },[])
  return (
    <>
    <div className='"App"'>
      
     <BrowserRouter>
     <Routes>
     <Route path={"/"} element={<Home />}> </Route>
     <Route path={"admin"} element={<Login></Login>}>
            <Route path={'Services'} element={<Services></Services>}></Route>
            <Route path={'meeting'} element={<Meeting></Meeting>}></Route>
          </Route>
    
        </Routes>
     </BrowserRouter>
     </div>
    </>
  )
}

export default App
