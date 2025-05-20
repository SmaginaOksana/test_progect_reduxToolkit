import { NavLink } from "react-router";

import { useAppSelector, useAppDispatch } from "../../hooks";
import { deleteUser } from "../../store/slice/usersSlice";

import style from "./header.module.scss";

function Header() {
  const dispatch = useAppDispatch();
  const user = useAppSelector((state) => state.users[0]);

  const handleClick = () => {
    if (user) dispatch(deleteUser(user.id));
  };

  return (
    <header>
      <div className={style.container}>
        <h1>Best Application</h1>
        <NavLink to="/auth" className={style.signIn} onClick={handleClick}>
          {user ? "Log out" : "Sign in"}
        </NavLink>
      </div>
    </header>
  );
}

export default Header;
