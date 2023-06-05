import React from 'react'
import "./relavant.css"

import veg01 from "../Assest/veg-01.webp"
import veg02 from "../Assest/veg-02.webp"
import fruit01 from "../Assest/fruit-01.webp"
import fruit02 from "../Assest/fruit-02.webp"
import snack01 from "../Assest/snack-01.webp"
import snack02 from "../Assest/snack-02.webp"
import snack03 from "../Assest/snack-03.webp"
import snack04 from "../Assest/snack-04.webp"
import bev01 from "../Assest/bev-01.webp"
import bev02 from "../Assest/bev-02.webp"
import bev03 from "../Assest/bev-03.webp"
import bev04 from "../Assest/bev-04.webp"
import { useNavigate } from 'react-router-dom'

const RelavantProducts = () => {

   const fold=[
      {
     img:veg01,
   },
   {
      img:veg02,
    },
    {
      img:fruit01,
    },
    {
      img:fruit02,
    }, 
]

const beverage=[
   {
      img:bev01,
   },
   {
      img:bev02,
   },
   {
      img:bev03,
   },
   {
      img:bev04,
   }
]

const snack=[
   {
      img:snack01,
   },
   {
      img:snack02,
   },
   {
      img:snack03,
   },
   {
      img:snack04,
   }
]

const Navigate=useNavigate();
   const beverun=()=>{
      Navigate("/beverage01")
   }
//const Navigate2=useNavigate();




  return (
   <div className='product-sec'>
    <div className='product-container'>   
            <h1 className='head-sec' style={{textAlign:"center"}}> Fruits & Vegetables </h1>
         <div className='product-row'>
         {
            fold.map((value,index)=>{
               return(
               <div className='col-lg-3 col-xs-6 col-md-4 box-sec' key={index}>
                  <img onClick={() => Navigate(`/fruit${index+1}`)} src={value.img}></img>
               </div>
               )
            })
         }
       </div>

       <h1 className='head-sec' style={{textAlign:"center"}}> Beverages </h1>
       <div className='product-row'>
       {
            beverage.map((value,index)=>{
               return(
               <div className='col-lg-3 col-xs-6 col-md-4 box-sec' key={index}>
                  <img src={value.img} onClick={() => Navigate(`/bev${index+1}`)} ></img>
                  
               </div>
               )
            })
         }
       </div>

       <h1 className='head-sec' style={{textAlign:"center"}}> Snacks Store </h1>
       <div className='product-row'>
       {
            snack.map((value,index)=>{
               return(
               <div className='col-lg-3 col-xs-6 col-md-4 box-sec' key={index}>
                  <img onClick={() => Navigate(`/snack${index+1}`)} src={value.img}></img>
               </div>
               )
            })
         }
         
       </div>
       

    </div>
    </div>
  )
}

export default RelavantProducts