import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import CardComp from './common/CardComp'

export default function CartComp() {

  const cartCount = useSelector(store=>store.cart.count)
  const cartItems = useSelector(store =>store.cart.items)
  // console.log(cartItems);

  const[products,setProducts]  = useState()

  useEffect(()=>{
    setProducts(cartItems)
  },[])
  console.log(products);
  return (
    <>
    {cartItems.map((e)=>(
      <div className='cart_card_main_container m-3'>
      <div>
        <img alt="product image" src={e.thumbnail}/>
      </div>
      <div>
        <h5>{e.title}</h5>
        <h6>{e.price}</h6>
      </div>

    </div>

    ))}
    

   
    </>

    )
}
