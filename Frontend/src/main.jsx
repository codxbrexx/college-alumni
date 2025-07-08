import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { BrowserRouter, createBrowserRouter, createRoutesFromElements, Route } from 'react-router-dom'
import { RouterProvider } from 'react-router-dom'
import Layout from './Layout.jsx'
import Register from './Pages/log/Register.jsx'
import Login from './Pages/log/Login.jsx'
import Forgot from './Pages/log/Forgot.jsx'
import Home from './Pages/Home/Home.jsx'
import Profile from './Components/Profile/Profile.jsx'
import Alumni from './pages/Alumni/Alumni.jsx'
import Job from './Pages/Job/Job.jsx'
import News from './Pages/News/News.jsx'
import AboutUs from './Pages/AboutUs/AboutUs.jsx'
import ContactUs from './Pages/ContactUs/ContactUs.jsx'
import Createpassword from './Pages/log/Createpassword.jsx'
import Placements from './pages/Placements/Placements.jsx'

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<Layout/>}>
      <Route path='home' element={<Home />}/> 
      <Route path='register' element={<Register />}/>
      <Route path='login' element={<Login />}/>
      <Route path='forgot' element={<Forgot />}/>
      <Route path='createpassword' element={<Createpassword />}/>
      <Route path='profile' element={<Profile />}/>
      <Route path='alumni' element={<Alumni />}/>
      <Route path='job' element={<Job />}/>
      <Route path='news' element={<News />}/>
      <Route path='placement' element= {<Placements />} />
      <Route path='about' element={<AboutUs />}/>
      <Route path='contact' element={<ContactUs />}/>
    </Route>
  )
)

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router}/>
  </StrictMode>,
)
