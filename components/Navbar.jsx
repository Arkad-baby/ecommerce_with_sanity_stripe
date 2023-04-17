import Link from 'next/link'
import React from 'react'
import {AiOutlineShopping} from "react-icons/ai"
import { useContext } from 'react'
import Context from '../context/StateContext'
import Cart from './Cart'


const Navbar = () => {

  const {totalQuantities,showCart,setshowCart}=useContext(Context);

  return (
    <div className="navbar-container">
    <p className="logo">
      <Link href="/">     
      Nepal Sasto Bazzar
      </Link>
    </p>

    <button type='button' className="cart-icon" onClick={()=>{setshowCart(true)}}  >
      <AiOutlineShopping />
      <span className="cart-item-qty">{totalQuantities}</span>
    </button>

    {showCart && <Cart /> } 

    </div>
  )
}

export default Navbar