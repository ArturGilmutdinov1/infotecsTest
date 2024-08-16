import { connect } from "react-redux"
import { getUsers } from "../../BLL/usersReducer"
import Users from "./users"
import React from "react"
import Preloader from "../common/prelolder/prelolder";


class UsersConteiner extends React.Component {

   componentDidMount() {
      this.props.getUsers();
   };


   render() {
      return <main>
         {this.props.isFetching ? <Preloader />
            : <Users users={this.props.users} />
         }
      </main>
   };
};



const mapStateToProps = (state) => {
   return {
      users: state.usersPage.users,
      isFetching: state.usersPage.isFetching
   }
}


export default connect(mapStateToProps, {
   getUsers
})(UsersConteiner)