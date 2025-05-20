import React, { useState } from "react";
import { NavLink, useNavigate } from "react-router";
import { toast } from "react-toastify";

import { useAppDispatch } from "../../hooks";
import type { IUser } from "../../interfaces";
import { setUser } from "../../store/slice/usersSlice";

import style from "./authPage.module.scss";

function AuthPage() {
  const [username, setUsername] = useState<string>("");

  const navigate = useNavigate();
  const dispatch = useAppDispatch();

  const onSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (username) {
      const res = await fetch(
        `https://jsonplaceholder.typicode.com/users?username=${username.trim()}`
      );
      const users: IUser[] = await res.json();
      if (users.length > 0) {
        dispatch(setUser(users[0]));
        navigate("/");
        toast.success("Вы успешно вошли!");
      }
    }

    setUsername("");
  };

  return (
    <>
      <div className={style.formWrapper}>
        <h2>Sign In</h2>
        <form onSubmit={onSubmit}>
          <input
            type="text"
            placeholder="Username"
            value={username}
            onChange={(e) => setUsername(e.target.value.trim())}
          />
          <button>Send</button>
        </form>
      </div>
      <NavLink className={style.back} to="/">
        Home
      </NavLink>
    </>
  );
}

export default AuthPage;
