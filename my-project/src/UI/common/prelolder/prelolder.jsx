import React from "react"
import page from '../../../assets/img/Bean Eater-1s-200px.gif'
import stl from './prelolder.module.css'

let Preloader = () => {

   return <div className={stl.imgPrelolder}>
      <img src={page} alt="" />
   </div>
}


export default Preloader