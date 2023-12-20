import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import LayoutComp from './components/LayoutComp'
import 'bootstrap/dist/css/bootstrap.min.css';
import {createBrowserRouter,RouterProvider} from "react-router-dom"
import NavBarComp from './components/NavBarComp'
import ErrorComp from './components/ErrorComp'
import CartComp from "./components/CartComp"
const router = createBrowserRouter([{
  path:"/",
  element:<LayoutComp/>,
  errorElement:<ErrorComp/>,
  children:[{
    path:"cart",
    element:<CartComp/>

  }]
}])


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
     
     <RouterProvider router={router}/>
    </>
  )
}

export default App
