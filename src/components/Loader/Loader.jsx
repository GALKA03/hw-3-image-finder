//import { Component } from "react";
import style from 'components/Loader/Loader.module.css'
import { BallTriangle } from 'react-loader-spinner'

//import "react-loader-spinner/dist/loader/css/react-spinner-loader.css";
export const Loader=()=> {
    return (
          <div className={style.loader} >
          <BallTriangle
             
  height={200}
              width={200} 
       
  radius={5}
              color="#4fa94d"
  ariaLabel="ball-triangle-loading"
  wrapperClass={{}}
  wrapperStyle=""
  visible={true}
/>
   </div>     )
    }

