import React from 'react'
import {
  Route,
  RouterProvider,
  createBrowserRouter,
  createRoutesFromElements,
} from "react-router-dom";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import RegisterForm from './components/RegisterForm.jsx';
import LoginForm from './components/LoginForm.jsx';
import Navbar from './components/Homepage.jsx';


const router = createBrowserRouter(
  createRoutesFromElements(
    <>
  <Route path="/" element={<App />}  />
  <Route path="/register" element={<RegisterForm/>}  />
  <Route path="/login" element={<LoginForm/>}  />
  <Route path="/homepage" element={<Navbar/>}  >
  {/* <Route path="/homepage" element={<Navbars/>}  /> */}

    
    </Route>
    
    </>
  ))
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
    <ToastContainer
      position="top-right"
      autoClose={2000}
      limit={9}
      hideProgressBar={false}
      newestOnTop
      closeOnClick
      rtl={false}
      pauseOnFocusLoss={false}
      draggable
      pauseOnHover
      theme="colored"
    />
  </React.StrictMode>,
)
