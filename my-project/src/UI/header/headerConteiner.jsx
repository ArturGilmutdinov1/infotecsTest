import React from "react";
import Header from "./header";
import { connect } from "react-redux";
import { sortAscendingUsers } from "../../BLL/usersReducer";


class HeaderConteiner extends React.Component {

   render() {
      return <Header sortAscendingUsers={this.props.sortAscendingUsers} />
   }
}

const mapStateToProps = (state) => {
   return {
   }
}

export default connect(mapStateToProps, {
   sortAscendingUsers
})(HeaderConteiner)