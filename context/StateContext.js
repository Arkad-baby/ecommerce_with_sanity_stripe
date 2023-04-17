import React from 'react'
import { createContext, useContext,useState,useEffect } from 'react'
import { toast } from 'react-hot-toast'

const Context=createContext();


export const StateContext = ({children}) => {
  const [showCart,setshowCart]=useState(false);
  const [cartItems,setcartItems]=useState([]);
  const [totalPrice,settotalPrice]=useState(0);
  const [totalQuantities,settotalQuantities]=useState(0);
  const [qty,setQty]=useState(1);
  let foundProduct;
  let index;

const incQty=()=>{
  setQty((prevQty)=>(prevQty+1))
}
const decQty=()=>{
  setQty((prevQty)=>{
    if(prevQty==1) return 1;
   return prevQty-1
  })
}

const onAdd=(product, quantity)=>{
  console.log(product)
  let checkProductInCart=cartItems.find((item)=>(item._id===product._id))

  settotalPrice((prevTotalPrice)=>prevTotalPrice+product.price*quantity)
    settotalQuantities((prevTotalQuantities)=>prevTotalQuantities+quantity)

    if(checkProductInCart) {
      const updatedCartItems = cartItems.map((cartProduct) => {
        if(cartProduct._id === product._id) return {
          ...cartProduct,
          quantity: cartProduct.quantity + quantity
        }
      })

      setcartItems(updatedCartItems);
    }   
    else {
        product.quantity = quantity;  
        setcartItems([...cartItems, { ...product }]);
      } 
    toast.success(`${qty} ${product.name} added to the cart.`)
}

const onRemove=(product)=>{
  const newCartItems=cartItems.filter((item)=>(item._id !==product._id))
  settotalPrice((prevTotalPrice)=>prevTotalPrice-product.price*product.quantity)
  settotalQuantities((prevTotalQuantities)=>prevTotalQuantities-product.quantity)

  setcartItems(newCartItems)
}

const toggleCartItemQuantities=(id,value)=>{
  foundProduct=cartItems.find((item)=>item._id===id)
  console.log(foundProduct)
index=cartItems.findIndex((product)=>product._id===id)
const newCartItems=cartItems.filter((item)=>(item._id !==id))

if(value==="inc"){
  
  setcartItems([...newCartItems, { ...foundProduct, quantity: foundProduct.quantity + 1 } ]);
  // newCartItems[index] = foundProduct;
  // setcartItems(newCartItems)
  settotalPrice((prevTotalPrice)=>prevTotalPrice+foundProduct.price)
  settotalQuantities((prevQty)=>prevQty+1)
  // console.log(foundProduct.quantity)
} 
else if(value==="dec"){
if(foundProduct.quantity>1){

  setcartItems([...newCartItems,{...foundProduct, quantity:foundProduct.quantity-1}])
  settotalPrice((prevTotalPrice)=>prevTotalPrice-foundProduct.price)
  settotalQuantities((prevQty)=>prevQty-1)
}
}
}

  return (
    <Context.Provider value={{
      showCart,
      cartItems,
      totalPrice,
      totalQuantities,
      qty,
      incQty,
      decQty,
      setshowCart,
      onAdd,
      toggleCartItemQuantities,
      onRemove,
      setcartItems,
      settotalPrice,
      settotalQuantities}} >
{children}
    </Context.Provider>
  )
}

export default Context;
// export const useStateContext=()=>(useContext(Context))
// export default useContext(Context)

//Yesari garna aayenaa

//This is a custom hook.
//Context vaneko data vayo
//useContext chahi data use garna lai,access garna laii

// The useStateContext custom hook is simply a shorthand for using the useContext hook with a specific context, which is passed as an argument to the useContext hook. In this case, the context being used is Context