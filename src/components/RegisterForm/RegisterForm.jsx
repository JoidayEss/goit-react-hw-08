import { useDispatch } from "react-redux";
import { register } from "../../redux/auth/operations";
import s from "./RegisterForm.module.css";

const RegisterForm = () => {
  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();
    const form = e.target;

    dispatch(
      register({
        name: form.elements.name.value,
        email: form.elements.email.value,
        password: form.elements.password.value,
      })
    );

    form.reset();
  };
  return (
    <div className={s.container}>
      <form className={s.form} autoComplete="off" onSubmit={handleSubmit}>
        <label className={s.name_label}>
          Username
          <input className={s.input} type="text" name="name" />
        </label>
        <label className={s.name_label}>
          Email
          <input className={s.input} type="email" name="email" />
        </label>
        <label className={s.name_label}>
          Password
          <input className={s.input} type="password" name="password" />
        </label>
        <button className={s.button} type="submit">
          Register
        </button>
      </form>
    </div>
  );
};

export default RegisterForm;
