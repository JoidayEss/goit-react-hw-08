import { useSelector } from "react-redux";
import { NavLink } from "react-router-dom";
import { selectIsLoggedIn } from "../../redux/auth/selectors";
import s from "./Navigation.module.css";
import { IoMdHome } from "react-icons/io";

const Navigation = () => {
  const isLoggedIn = useSelector(selectIsLoggedIn);
  return (
    <nav className={s.home}>
      <NavLink className={s.link} to="/">
        Home
        <IoMdHome className={s.icon} />
      </NavLink>
      {isLoggedIn && (
        <NavLink className={s.link} to="/contacts">
          Contacts
        </NavLink>
      )}
    </nav>
  );
};

export default Navigation;
