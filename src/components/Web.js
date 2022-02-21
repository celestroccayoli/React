import React from 'react';
import Header from './Header';
import Banner from './Banner';
import Producto from './Producto';
import Footer from './Footer';

function Web(){
  return (
    <div className="container">
      <Header/>
      <Banner/>
      <Producto/>
      <Footer/>
    </div>
  )

}
export default Web;