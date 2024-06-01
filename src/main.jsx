import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import {

  RouterProvider,
} from "react-router-dom";
import { router } from './Compnentes/Route/Routes';
import AuthProvider from './Provider/AuthProvider/AuthProvider';
import { Toaster } from 'react-hot-toast';
import {
  QueryClient,
  QueryClientProvider,

} from '@tanstack/react-query'
const queryClient = new QueryClient()
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
 <div className='fromDivNavM'>
 <QueryClientProvider client={queryClient}>
 <AuthProvider>
    <Toaster></Toaster>
   <RouterProvider router={router} />
   </AuthProvider>
    </QueryClientProvider>
 </div>
  </React.StrictMode>,
)
