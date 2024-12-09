import { useDispatch } from "react-redux";
import { login } from "../../redux/auth/operations";
import s from "./LoginForm.module.css";
import { Field, Form, Formik } from "formik";
import * as Yup from "yup";

const LoginForm = () => {
  const dispatch = useDispatch();

  const handleSubmit = (values, { resetForm }) => {
    dispatch(
      login({
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
  });

  return (
    <Formik
      initialValues={{ email: "", password: "" }}
      onSubmit={handleSubmit}
      validationSchema={FeedbackSchema}
    >
      <div className={s.container}>
        <Form className={s.form} autoComplete="off">
          <div>
            <label className={s.name_label}>Email</label>
            <Field className={s.input} type="email" name="email" />
          </div>
          <div>
            <label className={s.name_label}>Password</label>
            <Field className={s.input} type="password" name="password" />
          </div>
          <button className={s.button} type="submit">
            Log In
          </button>
        </Form>
      </div>
    </Formik>
  );
};

export default LoginForm;
