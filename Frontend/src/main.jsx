import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { BrowserRouter, createBrowserRouter, createRoutesFromElements, Route } from 'react-router-dom'
import { RouterProvider } from 'react-router-dom'
import Layout from './Layout.jsx'
import Login from './pages/log/Login.jsx'
import Forgot from './pages/log/Forgot.jsx'
import Home from './pages/Home/Home.jsx'
import Postprofile from './pages/Profile/Postprofile.jsx'
import Alumni from './pages/Alumni/Alumni.jsx'
import Job from './pages/Job/Job.jsx'
import PostJob from './pages/Job/Postjob.jsx'
import Postnews from './pages/News/Postnews.jsx'
import News from './pages/News/News.jsx'
import AboutUs from './pages/AboutUs/AboutUs.jsx'
import ContactUs from './pages/ContactUs/ContactUs.jsx'
import Createpassword from './pages/log/Createpassword.jsx'
import Placements from './pages/Placements/Placements.jsx'
import { ThemeProvider } from './context/ThemeContext.jsx'

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<Layout/>}>
      <Route path='home' element={<Home />}/> 
      <Route path='register' element={<Login />}/>
      <Route path='login' element={<Login />}/>
      <Route path='forgot' element={<Forgot />}/>
      <Route path='createpassword' element={<Createpassword />}/>
      <Route path='profile' element={<Postprofile />}/>
      <Route path='alumni' element={<Alumni />}/>
      <Route path='job' element={<Job />}/>
      <Route path='post-job' element={<PostJob />}/>
      <Route path='post-news' element={<Postnews />}/>
      <Route path='news' element={<News />}/>
      <Route path='placement' element={<Placements />} />
      <Route path='about' element={<AboutUs />}/>
      <Route path='contact' element={<ContactUs />}/>
    </Route>
  )
)

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <ThemeProvider>
      <RouterProvider router={router}/>
    </ThemeProvider>
  </StrictMode>,
)
