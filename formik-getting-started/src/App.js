import { Formik } from "formik";

const App = () => {

  const initialValues = {
    domain: '',
    username: '',
    password: '',
  }

  return (

    <div>
      <h5>Login</h5>
      <Formik
        initialValues={initialValues}
        validate={values => {
          let errors = {};
          for (let [k, v] of Object.entries(values)) {
            if (!v) {
              errors[k] = "required";
            }
          }
          return errors;
        }}
        onSubmit={(values, { setSubmitting, setFieldValue }) => {
          setTimeout(() => {
            alert(JSON.stringify(values, null, 2));
            setSubmitting(false);
          }, 400);
        }}
      >
        {/* Arrow function as child component. 
            Formik will call this function */}
        {({
          values,
          errors,
          touched,
          handleChange,
          handleBlur,
          handleSubmit,
          isSubmitting
        }) => (
          <form onSubmit={handleSubmit}>

            {errors.domain}
            <input
              type="text"
              name="domain"
              onChange={handleChange}
              onBlur={handleBlur}
              value={values.domain}
            />

            {errors.username}
            <input
              type="text"
              name="username"
              onChange={handleChange}
              onBlur={handleBlur}
              value={values.username}
            />

            {errors.password}
            <input
              type="password"
              name="password"
              onChange={handleChange}
              onBlur={handleBlur}
              value={values.password}
            />

            <button type="submit" disabled={isSubmitting}>
              Submit
            </button>
          </form>
        )}
      </Formik>
    </div>
  );
}

export default App;
