import stl from './users.module.css';

//основная таблица
let Users = (props) => {

   return <table className={stl.tableUsers}>
      <thead>
         <tr>
            <th>ФИО</th>
            <th>возраст</th>
            <th>пол</th>
            <th>номер телефона </th>
            <th>адрес  </th>
         </tr>
      </thead>
      <tbody>
         {props.users.map((users) => <tr key={users.id} onClick={() => props.actionModalWindow(true, users)}>
            <td>{`${users.firstName} ${users.lastName} ${users.maidenName}`}</td>
            <td>{users.age}</td>
            <td>{users.gender}</td>
            <td>{users.phone}</td>
            <td>{`${users.address.city} ${users.address.address}`}</td>
         </tr>)}
      </tbody>
   </table>
}

export default Users

