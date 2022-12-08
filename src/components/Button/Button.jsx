//import { Component } from "react";
import style from 'components/Button/Button.module.css'
export const Button =({ text,clickHandler}) => {
  return <button onClick={clickHandler}
  className={style.button}
  >{text}</button>
}