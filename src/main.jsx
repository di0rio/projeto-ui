import './index.css'
import React from 'react'

import App from './pages/App.jsx'

import ReactDOM from 'react-dom/client'
import { RouterProvider, createBrowserRouter } from 'react-router-dom';

import Signup from './routes/SignUp/SignUp.jsx';
import Home from './routes/Home/Home.jsx';
import Signin from './routes/Signin/Signin.jsx';
import Password from './routes/Password/Password.jsx'

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    // errorElement: <Error />,
    children: [
      { path: "/", element: <Home /> },
      { path: "signup", element: <Signup /> },
      { path: "signin", element: <Signin /> },
      { path: "password", element: <Password /> },
      // { path: "signin", element: <SignIn /> },


      // { path: "contact", element: <Contact /> },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    {/* <App /> */}
    <RouterProvider router={router}/>
  </React.StrictMode>,
)
