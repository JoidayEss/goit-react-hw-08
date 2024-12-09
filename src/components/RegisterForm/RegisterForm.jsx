import { useDispatch } from "react-redux";
import { register } from "../../redux/auth/operations";
import s from "./RegisterForm.module.css";
import { Field, Form, Formik } from "formik";
import * as Yup from "yup";

const RegisterForm = () => {
  const dispatch = useDispatch();

  const handleSubmit = (values, { resetForm }) => {
    dispatch(
      register({
        name: values.name,
        email: values.email,
        password: values.password,
      })
    );

    resetForm();
  };

  const FeedbackSchema = Yup.object().shape({
    email: Yup.string()
      .email("Invalid email format")
      .matches(/@/, "Email must contain '@'")
      .min(2, "Too Short!")
      .max(50, "Too Long!")
      .required("Required"),
    name: Yup.string()
      .min(2, "Too Short!")
      .max(50, "Too Long!")
      .required("Required"),
  });

  return (
    <Formik
      initialValues={{ name: "", email: "", password: "" }}
      onSubmit={handleSubmit}
      validationSchema={FeedbackSchema}
    >
      <div className={s.container}>
        <Form className={s.form}>
          <label className={s.name_label}>UserName</label>
          <Field className={s.input} type="text" name="name" />
          <label className={s.name_label}>Email</label>
          <Field className={s.input} type="email" name="email" />
          <label className={s.name_label}>Password</label>
          <Field className={s.input} type="password" name="password" />
          <button className={s.button} type="submit">
            Register
          </button>
        </Form>
      </div>
    </Formik>
  );
};

export default RegisterForm;
