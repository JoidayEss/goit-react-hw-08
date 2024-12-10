import { NavLink } from "react-router-dom";
import s from "./AuthNav.module.css";
import { GoPersonFill } from "react-icons/go";
import { TiGroup } from "react-icons/ti";

const AuthNav = () => {
  return (
    <div className={s.container}>
      <NavLink className={s.link} to="login">
        Log In
        <GoPersonFill className={s.icon} />
      </NavLink>
      <NavLink className={s.link} to="register">
        Register
        <TiGroup className={s.icon} />
      </NavLink>
    </div>
  );
};

export default AuthNav;
