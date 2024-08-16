import { connect } from "react-redux"
import React from "react"
import { setSearchUsers } from "../../../BLL/usersReducer"
import SearchUsers from './search'


class SearchConteiner extends React.Component {

   render() {
      return <div>
         <SearchUsers setSearch={this.props.setSearchUsers} />
      </div>
   };
};



const mapStateToProps = (state) => {
   return {
   }
}


export default connect(mapStateToProps, {
   setSearchUsers
})(SearchConteiner)
