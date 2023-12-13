import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './Layout.jsx'
import './index.css'
import { Route,Router, RouterProvider, createBrowserRouter, createRoutesFromElements } from 'react-router-dom'
import { Outlet } from 'react-router-dom'
import Footer from './Components/Footer/Footer.jsx'
import Home from './Components/Home/Home.jsx'
import Features from './Components/Features/Features.jsx'
import Team from './Components/Team/Team.jsx'
import Company from './Components/Company/Company.jsx'


const router=createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<App/>}>
      <Route path='' element={<Home/>}/>
      <Route path='features' element={<Features/>}/>
      <Route path='team' element={<Team/>}/>
      <Route path='company' element={<Company/>}/>
    </Route>

  )
)

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router}/>
  </React.StrictMode>,
)
