import React from "react";
import { useFormik } from "formik";
//Handle form data
// visual feedback with errors
// validation
// form submission

//managing form state
//handling form submission
//validation and error messages

function Form() {
  //object that maintains the state value of the different form fields
  const formik = useFormik({
    initialValues: {
      name: "",
      email: "",
      channel: ""
    },
    onSubmit: (values) => {
      console.log("form data", values);
    }
  });
  // console.log("form values", formik.values);
  return (
    <div className="form-control">
      <Form>
        {/* form fields */}
        <label htmlFor="name">Name</label>
        <input
          type="text"
          id="name"
          name="name"
          onChange={formik.handleChange}
          value={formik.values.name}
        />

        <label htmlFor="email">E-Mail</label>
        <input
          type="email"
          id="email"
          name="email"
          onChange={formik.handleChange}
          value={formik.values.email}
        />
        <label htmlFor="channel">Channel</label>
        <input
          type="text"
          id="channel"
          name="channel"
          onChange={formik.handleChange}
          value={formik.values.channel}
        />

        <button>Submit</button>
      </Form>
    </div>
  );
}

export default Form;