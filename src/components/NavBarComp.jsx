import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { useSelector } from 'react-redux'



export default function NavBarComp() {
  const cartItemCount = useSelector(store=>store.cart.count)
  const cartItems = useSelector(store=>store.cart.items)
  console.log(cartItems);
 console.log(cartItemCount)

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
        <div className='font-weight-bolder m-3'>🛄CartMart</div>
        <div>
        <input type="text" placeholder='Search'/>
          <button>🔎</button>
        </div>
        
        <ul className='nav_list '>
         

          <Link to="home"><li>Home</li></Link>

          <Link to="products"><li>Products</li></Link>
         


          <Link to="cart"> <li>Cart {cartItemCount}</li></Link>

          <button className='btn btn-danger mx-2' onClick={handleLogin}>{isLogin ? "LogIn" : "LogOut"}</button>

        </ul>
      </div>
    </>
  )
}
