
import React from 'react'
import dog from "./../assets/dog.jpeg"

export default function ErrorComp() {
  return (
    <>
    <div className='error_main_container'>

      <h1>Oops!</h1>
      <h3>Something went wrong</h3>
      <img src={dog}/>

    </div>
    
    </>
  )
}
