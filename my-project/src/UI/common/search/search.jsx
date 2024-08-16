import { Formik, Form, Field } from "formik"



let SearchUsers = (props) => {



   return <div>
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