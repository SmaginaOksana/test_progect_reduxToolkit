import { Route, Routes } from "react-router";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import Header from "../components/Header/Header.tsx";
import { ErrorPage, HomePage, AuthPage, CommentsPage } from "../pages/index.ts";

import style from "./app.module.scss";

function App() {
  return (
    <div className={style.wrapper}>
      <Header />
      <main className={style.container}>
        <Routes>
          <Route path="/">
            <Route index element={<HomePage />} />
            <Route path="auth" element={<AuthPage />} />
            <Route path="posts/:postId" element={<CommentsPage />} />
          </Route>
          <Route path="*" element={<ErrorPage />} />
        </Routes>
      </main>
      <ToastContainer position="top-center" autoClose={3000} />
    </div>
  );
}

export default App;
