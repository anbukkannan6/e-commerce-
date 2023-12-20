import React from 'react'

export default function CardComp({products}) {


  return (
    <>
          {products.map((e) => (
                <div className='card_container'>
                    <img src={e.thumbnail} />
                    <h5>{e.title}</h5>
                    {/* <p>{e.description
                    }</p> */}
                    <div className='cartButton_cont'>
                        <button className='m-2 btn btn-primary'>Add To Cart</button>
                        <span className='m-4  '>Rs  ₹ {e.price}</span>
                    </div>

                </div>

            ))}
    </>
  )
}
