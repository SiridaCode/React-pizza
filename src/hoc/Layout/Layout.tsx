import React from "react";
import Header from "../../components/Header/Header";
import Pagination from "../../components/Pagination/Pagination";
import classes from "./Layout.module.scss";

type ChildrenProps = {
  children: React.ReactNode;
};

const Layout: React.FC<ChildrenProps> = ({ children }) => {
  return (
    <div className={classes.wrapper}>
      <Header />
      {children}
      <Pagination />
    </div>
  );
};

export default Layout;
