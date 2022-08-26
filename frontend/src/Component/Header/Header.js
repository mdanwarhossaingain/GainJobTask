import React from 'react'
import "../Header/header.css"

const header = () => {
  return (
    <>
    
   
    <nav className="navigation">

    <div className="logo">
      LOGO
    </div>


     <div className="sideDiv">

           <div className="add_product_btn2">
               
                    <p className="bottomDown">Search by title or product</p>

                    <p className="bottomDown" >  <i class="fa fa-search" aria-hidden="true"></i> </p>
               

                
            </div> &nbsp;

            <div className="add_product_btn">
                Add Product
            </div>

    </div>
       
    </nav>

    
    </>
  )
}

export default header