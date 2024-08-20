import { Field, Formik, Form, } from "formik"
import stl from './filter.module.css'

//окно фильтров (с помощью формика собираю данные и отправляю их в редюсер)
let FilterWindow = (props) => {
   return <div onClick={e => e.stopPropagation()} >
      <Formik
         initialValues={{
            checked: "",
            picked: "",
         }}
         onSubmit={(value) => {
            props.sortAscendingUsers(value)
         }}
      >
         <Form>
            <div className={stl.checked}>
               <div>
                  <div>сортировать по элементам:</div>
                  <label>
                     <Field type="radio" name="checked" value="firstName" />
                     ФИО
                  </label>
                  <label>
                     <Field type="radio" name="checked" value="age" />
                     возраст
                  </label>
                  <label>
                     <Field type="radio" name="checked" value="gender" />
                     пол
                  </label>
                  <label>
                     <Field type="radio" name="checked" value="address.city" />
                     адресс
                  </label>
               </div>
               <div>порядок:</div>
               <div >
                  <div>
                     <label>
                        <Field type="radio" name="picked" value="ascending" />
                        по возрастанию
                     </label>
                  </div>
                  <div>
                     <label>
                        <Field type="radio" name="picked" value="descending" />
                        по убыванию
                     </label>
                  </div>
                  <div>
                     <label>
                        <Field type="radio" name="picked" value="none" />
                        без сортировки
                     </label>
                  </div>
               </div>
               <button type="submit" title="нажмите на меня два раза">сортировать</button>
            </div>
         </Form>
      </Formik>
   </div>
}

export default FilterWindow