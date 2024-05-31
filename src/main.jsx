import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import {

  RouterProvider,
} from "react-router-dom";
import { router } from './Compnentes/Route/Routes';
import AuthProvider from './Provider/AuthProvider/AuthProvider';
import { Toaster } from 'react-hot-toast';
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
 <div className='fromDivNavM'>
 <AuthProvider>
    <Toaster></Toaster>
   <RouterProvider router={router} />
   </AuthProvider>
 </div>
  </React.StrictMode>,
)
