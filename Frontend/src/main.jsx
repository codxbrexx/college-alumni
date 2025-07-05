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

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<Layout/>}>
      <Route path='/' element={<Home />}/> 
      <Route path='/register' element={<Register />}/>
      <Route path='/login' element={<Login />}/>
      <Route path='/forgot' element={<Forgot />}/>
      <Route path='/createpassword' element='Createpassword'/>
      <Route path='/profile' element='Profile'/>
      <Route path='/alumni' element='Alumni'/>
      <Route path='/intern' element='Intern'/>
      <Route path='/news' element='News'/>
      <Route path='/placement' element='Placement'/>
      <Route path='/aboutus' element='AboutUs'/>
      <Route path='/contactus' element='ContactUs'/>
      <Route path='/logout' element='Logout'/>
    </Route>
  )
)

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router}/>
    <App />
  </StrictMode>,
)
