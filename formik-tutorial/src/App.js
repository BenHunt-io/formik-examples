import { Formik } from "formik";

/**
 * Fields in Formik are given identifiers by the id or name props.
 * Formik uses this to manage form state, validation, and error messages
 * 
 * Examples:
 * When a field updates, Formik will know by the identifier what state to update.
 * When we submit a form, Formik will know what error message will correspond to what field.
 * 
 * Formik also keeps track of what fields have been visited (touched) using the above identifier
 */
const App = () => {

  const initialValues = {
    email: '',
    firstName: '',
    lastName: '',
  };

  return (

    <div>
      <Formik
        initialValues={initialValues}
        onSubmit={(values) => {
          alert(JSON.stringify(values, null, 2));
        }}
        validate={(values) => {
          const errors = {};
          if(values.firstName.length > 10){
            errors.firstName = "Your first name is too long!";
          }
          // other errors could be added here.
          return errors;
        }}
      >
        {/* 
          Arrow function as child component. 
          Formik will call this function with the state that we 
          initialized the form to (passed as values) and a set of helper functions
          that make managing state & validation easier.
        */}
        {(props) => (
          <form onSubmit={props.handleSubmit}>
           {props.errors.firstName ? <div>{props.errors.firstName}</div> : null}
            <label htmlFor="firstName">First Name</label>
            <input
              id="firstName"
              // For Formik Helper functions to work, Formik needs
              // to know what field to process when a change occurs.
              // name/id is used by Formik to identify the field.
              name="firstName" 
              type="text"
              onChange={props.handleChange}
              // This allows us to only show error messages on visited (touched) fields
              onBlur={props.onBlur}
              value={props.values.firstName}
            /> <br/>

            <label htmlFor="firstName">Last Name</label>
            <input
              id="lastName"
              name="lastName"
              type="text"
              onChange={props.handleChange}
              onBlur={props.onBlur}
              value={props.values.lastName}
            /> <br/>

            <label htmlFor="email">Email Address</label>
            <input
              id="email"
              name="email"
              type="email"
              onChange={props.handleChange}
              onBlur={props.onBlur}
              value={props.values.email}
            /> <br/>

            <button type="submit">Submit</button>
          </form>
        )}
      </Formik>
    </div>
  );
}

export default App;
