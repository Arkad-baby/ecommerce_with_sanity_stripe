import { urlFor } from '../lib/client'
import Link from 'next/link'
import React from 'react'

const Product = ({product:{name,image,slug, price}}) => {
  return (
    <div>
      <Link href={`/product/${slug.current}`}>
      <div className="product-card">
        <img src={urlFor(image && image[0])} alt="Image"             
            width={250}
            height={250}
            className="product-image" />

          <p className="product-name">{name}</p>
          <p className="product-price">${price}</p>
      </div>
      </Link>
    </div>
  )
}

export default Product