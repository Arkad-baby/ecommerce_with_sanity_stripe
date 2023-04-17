import React from 'react'

import {client} from "../lib/client"

import {Product, FooterBanner, HeroBanner} from "../components"


export const getServerSideProps=async()=>{
  const query = '*[_type == "product"]';
  const products = await client.fetch(query);

  const bannerQuery='*[_type == "banner"]';
  const bannerProducts=await client.fetch(bannerQuery);

  return {props:{products, bannerProducts}}
  
}

const Home = ({products, bannerProducts}) => {
  return (
   <>
      <HeroBanner heroBanner={bannerProducts.length && bannerProducts[0]}
       />

  <div className='products-heading' >
    <h2>Best Selling products</h2>
    <p>Loved from around the world!</p>
  </div>

  <div className="products-container">
          {
        products?.map((product)=>(
      <Product key={product._id} product={product} />
        ))
        }
  </div>
  

    <FooterBanner footerBanner={bannerProducts && bannerProducts[0]} />
  

   </>
  )
}




export default Home