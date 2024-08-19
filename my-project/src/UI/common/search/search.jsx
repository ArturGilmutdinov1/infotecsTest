import { Formik, Form, Field } from "formik"
import stl from "./search.module.css"


let SearchUsers = (props) => {
   return <div className={stl.searchUsers}>
      <Formik
         initialValues={{ searchValue: '' }}
         onSubmit={(values) => {
            props.setSearch(values.searchValue)
         }}
      >
         <Form>
            <Field id="searchValue" name="searchValue" placeholder="Поиск" />
            <button type="submit"></button>
         </Form>
      </Formik>
   </div>
}

export default SearchUsers