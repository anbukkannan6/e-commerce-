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
import ProductComp from './components/ProductComp'
import ServiceComp from "./components/ServiceComp"
import HomeComp from './components/HomeComp'


const router = createBrowserRouter([{
  path:"/",
  element:<LayoutComp/>,
  errorElement:<ErrorComp/>,
  children:[{
    path:"home",
    element:<HomeComp/>
  },{
    path:"cart",
    element:<CartComp/>
  },{
    path:"products",
    element:<ProductComp/>

  },{
    path:"services",
    element:<ServiceComp/>
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
