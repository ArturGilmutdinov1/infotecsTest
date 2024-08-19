import { connect } from "react-redux"
import { getUsers } from "../../BLL/usersReducer"
import Users from "./users"
import React from "react"
import Preloader from "../common/prelolder/prelolder";
import { actionModalWindow } from "../../BLL/modalReducer";
import ModuleWindow from "../common/moduleWindow/moduleWindow";


class UsersConteiner extends React.Component {

   componentDidMount() {
      this.props.getUsers();
   };

   componentDidUpdate(prevProps) {
      const key = this.props.valueFilter.valueKey
      if (this.props.valueFilter !== prevProps.valueFilter) {
         if (this.props.valueFilter.picked === 'ascending') {
            this.props.users.sort((a, b) => a[key] < b[key] ? -1 : 1)
         }
         else if (this.props.valueFilter.picked === 'descending') {
            this.props.users.sort((a, b) => a[key] > b[key] ? -1 : 1)
         }
         else {
            this.props.users.sort((a, b) => a.id < b.id ? -1 : 1)
         }
      }
   }

   render() {
      return <main>
         {this.props.isFetching ? <Preloader />
            : <Users users={this.props.users} actionModalWindow={this.props.actionModalWindow} valueFilter={this.props.valueFilter} />
         }
         {this.props.isOpenWindow && <ModuleWindow dataWindow={this.props.dataWindow} actionModalWindow={this.props.actionModalWindow} />}
      </main>
   };
};



const mapStateToProps = (state) => {
   return {
      users: state.usersPage.users,
      isFetching: state.usersPage.isFetching,
      isOpenWindow: state.modalWindow.isOpenWindow,
      dataWindow: state.modalWindow.dataModuleWindow,
      valueFilter: state.usersPage.valueFilter,
   }
}


export default connect(mapStateToProps, {
   getUsers,
   actionModalWindow,
})(UsersConteiner)