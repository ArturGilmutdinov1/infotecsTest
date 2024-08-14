import { connect } from "react-redux"
import { getUsers } from "../../BLL/usersReducer"
import Users from "./users"
import React from "react"


class UsersConteiner extends React.Component {

   componentDidMount() {
      this.props.getUsers();
   };


   render() {
      return <main>
         {<Users
            users={this.props.users}
         />
         }
      </main>
   };
};



const mapStateToProps = (state) => {
   return {
      users: state.usersPage.users
   }
}


export default connect(mapStateToProps, {
   getUsers
})(UsersConteiner)