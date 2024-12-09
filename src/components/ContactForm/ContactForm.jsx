import { ErrorMessage, Field, Form, Formik } from "formik";
import s from "./ContactForm.module.css";
import { useDispatch } from "react-redux";
import { addContact } from "../../redux/contacts/operations";
import * as Yup from "yup";

const ContactForm = () => {
  const dispatch = useDispatch();

  const handleAddContact = (values, { resetForm }) => {
    console.log("Новий контакт", values);

    const newContact = {
      id: Date.now(),
      name: values.name,
      number: values.number,
    };
    dispatch(addContact(newContact));
    resetForm();
  };

  const FeedbackSchema = Yup.object().shape({
    name: Yup.string()
      .min(2, "Too Short!")
      .max(50, "Too Long!")
      .required("Required"),
    number: Yup.string()
      .min(3, "Too short")
      .max(18, "Too long")
      .required("Required"),
  });

  return (
    <Formik
      initialValues={{ name: "", number: "" }}
      onSubmit={handleAddContact}
      validationSchema={FeedbackSchema}
    >
      <Form className={s.form}>
        <div className={s.input}>
          <label className={s.name_label}>Name</label>
          <Field className={s.field} type="text" name="name" />
          <ErrorMessage name="name" component="span" />
        </div>
        <div className={s.input}>
          <label className={s.name_label}>Number</label>
          <Field className={s.field} type="tel" name="number" />
          <ErrorMessage name="number" component="span" />
        </div>
        <button className={s.button} type="submit">
          Add contact
        </button>
      </Form>
    </Formik>
  );
};

export default ContactForm;
