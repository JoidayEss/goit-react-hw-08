import { Suspense } from "react";
import AppBar from "../AppBar/AppBar";
import s from "./Layout.module.css";

const Layout = ({ children }) => {
  return (
    <>
      <header className={s.header}>
        <AppBar />
      </header>
      <Suspense fallback={null}>{children}</Suspense>
    </>
  );
};

export default Layout;
