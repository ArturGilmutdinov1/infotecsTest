import React, { useState } from "react"
import stl from './header.module.css'
import SearchConteiner from "../common/search/searchConteiner";
import FilterWindow from "../common/filterWindow/filterUsers";

let Header = (props) => {
   //данный хук отвевачает за открытие окна фильтров
   const [toggle, setToggle] = useState(false)
   return <header>
      <div className={stl.menu}>
         <SearchConteiner />
         <div onClick={() => { setToggle(!toggle) }} className={stl.filter}>
            <div className={stl.toggle}>фильтр</div>
            {toggle ? <FilterWindow sortAscendingUsers={props.sortAscendingUsers} />
               : null}
         </div>
      </div>
   </header>
};

export default Header
