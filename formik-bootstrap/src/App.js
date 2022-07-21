import { Formik } from "formik";
import { Form, Button } from 'react-bootstrap';

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
          // Demoing how to change state of Formik Fields
          setFieldValue("domain", "domain reset");
          setTimeout(() => {
            alert(JSON.stringify(values, null, 2));
            setSubmitting(false);
          }, 400);

        }}
      >
        {/* Arrow function as child component of Formik Component. 
            Formik Component will call this function */}
        {({
          values,
          errors,
          touched,
          handleChange,
          handleBlur,
          handleSubmit,
          isSubmitting
        }) => (
          <Form onSubmit={handleSubmit}>
            <Form.Group>
              {errors.domain}
              <Form.Control name="domain"
                type="text"
                placeholder="Enter company domain"
                onChange={handleChange}
                value={values.domain} />
            </Form.Group>
            <Form.Group>
              {errors.username}
              <Form.Control name="username"
                type="text"
                placeholder="Enter username"
                onChange={handleChange}
                value={values.username} />
            </Form.Group>
            <Form.Group>
              {errors.password}
              <Form.Control name="password"
                type="text"
                placeholder="Enter password"
                onChange={handleChange}
                value={values.password} />
            </Form.Group>
            <Button type="submit">
              Submit
            </Button>
          </Form>
        )}
      </Formik>
    </div>
  );
}

export default App;
