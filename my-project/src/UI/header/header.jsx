import React from "react"
import stl from './header.module.css'
import SearchConteiner from "../common/search/searchConteiner";

let Header = () => {

   return <header>
      <div className={stl.menu}>
         <SearchConteiner />
      </div>
   </header>
};

export default Header
