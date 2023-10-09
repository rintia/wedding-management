import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";

import ErrorPage from './Components/ErrorPage';
import Home from './Components/Home';
import Root from './Components/Root';
import ServiceDetails from './Components/ServiceDetails';
import Login from './Components/Login';
import Register from './Components/Register';
import AuthProvider from './Components/AuthProvider';
import PrivateRoute from './Components/routes/PrivateRoute';
import Reviews from './Components/Reviews';
import ContactUs from './Components/ContactUs';



const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    errorElement: <ErrorPage></ErrorPage>,
    children: [
      {
        path: '/',
        element: <Home></Home>,
        
      },
      {
        path: '/card/:id',
        element: <PrivateRoute><ServiceDetails></ServiceDetails></PrivateRoute>,
        loader: () =>  fetch('/data.json')
      },
      {
        path: '/login',
        element: <Login></Login>
      },
      {
        path: '/register',
        element: <Register></Register>
      },
      {
        path: '/reviews',
        element: <PrivateRoute><Reviews></Reviews></PrivateRoute>,
        loader: () => fetch('/data.json')
      },
      {
        path: '/contactUs',
        element: <PrivateRoute><ContactUs></ContactUs></PrivateRoute>
      }
     
    ]
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
     <AuthProvider>
        <RouterProvider router={router} />
     </AuthProvider>
  </React.StrictMode>,
)
