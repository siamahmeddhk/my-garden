import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'

import {
  RouterProvider,
} from "react-router";
import { router } from './route/Router.jsx';
import Authprovider from './Auth/Authprovider.jsx';


createRoot(document.getElementById('root')).render(
  <StrictMode>
 <Authprovider >

 <RouterProvider router={router} />

 </Authprovider>
 

  
  </StrictMode>,
)
