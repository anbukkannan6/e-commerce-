import React, { useState } from 'react'
import { Link } from 'react-router-dom'

export default function NavBarComp() {


  const [isLogin, setIsLogoin] = useState(true)

  const handleLogin = () => {
    if (!isLogin) {
      setIsLogoin(true)

    }
    else {
      setIsLogoin(false)
    }

  }
  return (
    <>
      <div className='Nav_Main_cont p-3'>
        <div>CartMart</div>
        <ul className='nav_list '>
          <li>Home</li>
          <li>Products</li>
          <li>Services</li>
          <Link to="cart"> <li>Cart</li></Link>
         
          <button className='btn btn-danger mx-2' onClick={handleLogin}>{isLogin ? "LogIn" : "LogOut"}</button>

        </ul>
      </div>
    </>
  )
}
