import Head from 'next/head'
import React from 'react'
import Footer from './Footer'
import Navbar from './Navbar'

const Layout = ({children}) => {
  return (  
    <section className="layout">
    <Head>
<title>Nepal Sasto Bazzar</title>
    </Head>
    <header>
      <Navbar />
    </header>
    <main className="main-container">
   {children}
    </main>
    <Footer />
   </section>


  )
}

export default Layout