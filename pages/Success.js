import React from "react";
import Link from "next/link";
import { BsBagCheckFill } from "react-icons/bs";
import Context from "../context/StateContext";
import { useContext,useEffect } from "react";
import { FireWorks } from "../lib/util";







const Success = () => {
    const { setcartItems, settotalPrice, settotalQuantities } = useContext(Context);
    
    useEffect(()=>{
    localStorage.clear();
    setcartItems([]);
    settotalPrice(0);
    settotalQuantities(0);
    FireWorks();
},[])

  return   <div className="success-wrapper">
  <div className="success">
    <p className="icon">
      <BsBagCheckFill />
    </p>
    <h2>Thank you for your order!</h2>
    <p className="email-msg">Check your email inbox for the receipt.</p>
    <p className="description">
      If you have any questions, please email
      <a className="email" href="mailto:order@example.com">
        nsBazzar@example.com
      </a>
    </p>
    <Link href="/">
      <button type="button" width="300px" className="btn">
        Continue Shopping
      </button>
    </Link>
  </div>
</div>
   
};

export default Success;
