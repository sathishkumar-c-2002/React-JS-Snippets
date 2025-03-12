import React, { useState } from 'react'

export const Cart = () => {
    const [cartCount,setCartCount]=useState(0)
    const Clicking = ()=>{setCartCount(cartCount+1)}
    
  return (
    <div>
        <h1>{cartCount}</h1>
        <button onClick={Clicking}>Click</button>
    </div>
  )
}