
import stl from './moduleWindow.module.css'

let ModuleWindow = (props) => {
   return <div className={stl.moduleWindowBackround} onClick={() => {
      props.actionModalWindow(false, {})
   }}>
      <div className={stl.moduleWindow} onClick={e => e.stopPropagation()} >
         <ul >
            <li>
               ФИО: {`${props.dataWindow.dataUsers.firstName} ${props.dataWindow.dataUsers.lastName} ${props.dataWindow.dataUsers.maidenName}`}
            </li>
            <li>
               возраст: {props.dataWindow.dataUsers.age}
            </li>
            <li>
               пол: {props.dataWindow.dataUsers.gender}
            </li>
            <li>
               адресс: {`${props.dataWindow.dataUsers.address.address} ${props.dataWindow.dataUsers.address.city}`}
            </li>
            <li>
               рост: {props.dataWindow.dataUsers.height}
            </li>
            <li>
               вес: {props.dataWindow.dataUsers.weight}
            </li>
            <li>
               телефон: {props.dataWindow.dataUsers.phone}
            </li>
            <li>
               email: {props.dataWindow.dataUsers.email}
            </li>
         </ul>
      </div>
   </div>
}


export default ModuleWindow