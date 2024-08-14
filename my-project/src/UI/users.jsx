
let Users = (props) => {
   debugger
   return <div>
      {props.users.map((users) => <div key={users.id}>{users.firstName}</div>)}
   </div>

}

export default Users

