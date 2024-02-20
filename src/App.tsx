import {  RouterProvider, createBrowserRouter } from "react-router-dom"


import Signup from './components/Signup';
import Login from "./components/Signin";




const App = () => {



  const router=createBrowserRouter([
    {
      path:"/",
      element: <Login></Login>,
    },
    {
      path:"/signup",
      element: <Signup></Signup>
    },
  ]);
  return (
    <RouterProvider router={router}> 
       
    </RouterProvider>
  )
}

export default App
