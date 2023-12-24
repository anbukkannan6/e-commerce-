import React from 'react'
import { useDispatch } from 'react-redux'
import { addToCart,addItems } from '../../redux/CartSlice'

export default function CardComp({products}) {
const dispatch = useDispatch();
  const handleAdd = (i)=>{
    dispatch(addToCart())
    dispatch(addItems(products[i]))
  }


  return (
    <>
    
    {products.map((e,i) => (
                <div className='card_container m-3 ' key={e.id}>
                    <img className='h' src={e.thumbnail} />
                    <h5>{e.title}</h5>
                    {/* <p>{e.description
                    }</p> */}
                    <div className='cartButton_cont'>
                        <button className='m-2 btn btn-primary' onClick={()=>handleAdd(i)}>Add To Cart</button>
                        <span className='m-4  '>Rs  ₹ {e.price}</span>
                    </div>

                </div>

            ))}
      
    
         
    </>
  )
}
