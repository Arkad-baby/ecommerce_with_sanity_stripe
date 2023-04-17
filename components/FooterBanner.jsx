import { urlFor } from '../lib/client'
import Link from 'next/link'
import React from 'react'

const FooterBanner = ({footerBanner:{smallText,midText,largeText1,largeText2,buttonText,image,desc,discount,product,saleTime}}) => {
  return (
    <div className="footer-banner-container">
      <div className="banner-desc">
        <div className="left">
<h3>{discount}</h3>
      <h3>{largeText1}</h3>
          <h3>{largeText2}</h3>
          <p>{saleTime}</p>
        </div>
        <div className="right">
          <p>{smallText}</p>
          <h3>{midText}</h3>
          <p>{desc}</p>

          <Link href={`/product/${product}`} >
            <button type='button' >
              {buttonText}
            </button>
          </Link>
        </div>

        <img src={urlFor(image)} alt="Image"  className='footer-banner-image' />
      </div>
    </div>
  )
}

export default FooterBanner