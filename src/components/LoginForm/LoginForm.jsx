import { useDispatch } from "react-redux";
import { login } from "../../redux/auth/operations";
import s from "./LoginForm.module.css";

const LoginForm = () => {
  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();
    const form = e.currentTarget;

    dispatch(
      login({
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
          Email
          <input className={s.input} type="email" name="email" />
        </label>
        <label className={s.name_label}>
          Password
          <input className={s.input} type="password" name="password" />
        </label>
        <button className={s.button} type="submit">
          Log In
        </button>
      </form>
    </div>
  );
};

export default LoginForm;
