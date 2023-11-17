import './index.css'
import React from 'react'

import App from './pages/App.jsx'

import ReactDOM from 'react-dom/client'
import { RouterProvider, createBrowserRouter } from 'react-router-dom';

import SignUp from './routes/SignUp/SignUp.jsx';
import Home from './routes/Home/Home.jsx';
import SignIn from './routes/Signin/Signin.jsx';
import Password from './routes/Password/Password.jsx'

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    // errorElement: <Error />,
    children: [
      { path: "/", element: <Home /> },
      { path: "signup", element: <SignUp /> },
      { path: "signin", element: <SignIn /> },
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
