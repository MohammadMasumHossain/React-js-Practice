import React from 'react';
import { useFormik } from 'formik';
import * as Yup from 'yup';

const Signup = () => {
  const formik = useFormik({
    initialValues: {
      name: '',
      email: '',
      password: '',
    },
    validationSchema:Yup.object({
      name:Yup.string().min(2,"Name must have at least 2 Character").required(),
      email:Yup.string().min(6).required(),
      password:Yup.string().min(6, "password must have at least 6 character").required(),

    }),
    onSubmit: (values,{resetForm}) => {
      console.log(values);
      resetForm({values:""})
    },
  });

  const nameError = formik.touched.name && formik.errors.name && <span>{formik.errors.name}</span> 
  const emailError = formik.touched.email && formik.errors.email && <span>{formik.errors.email}</span>
  const passwordError = formik.touched.password && formik.errors.password && <span>{formik.errors.password}</span>


  return (
    <div>
      <h2>User Signup</h2>
      <form onSubmit={formik.handleSubmit}> {/* Corrected to formik.handleSubmit */}
        <div>
          <label htmlFor="name">Name: </label>
          <input
            type="text"
            id="name"
            name="name"
            onChange={formik.handleChange}
            value={formik.values.name}
          />
          <br/>
          {nameError}
          
        </div>

        <div>
          <label htmlFor="email">Email: </label>
          <input
            type="email"
            id="email"
            name="email"
            onChange={formik.handleChange}
            value={formik.values.email}
          />
          <br />
          {emailError}
        </div>

        <div>
          <label htmlFor="password">Password: </label>
          <input
            type="password"
            id="password"
            name="password"
            onChange={formik.handleChange}
            value={formik.values.password}
          />
          <br />
          {passwordError}
        
        </div>

        <button type="submit">Signup</button> {/* Fixed the typo */}
      </form>
    </div>
  );
};

export default Signup;
