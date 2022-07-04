import React from "react";
import Header from "../../components/Header/Header";
import classes from "./Layout.module.scss";

type ChildrenProps = {
  children: React.ReactNode;
};

const Layout: React.FC<ChildrenProps> = ({ children }) => {
  return (
    <div className={classes.wrapper}>
      <Header />
      {children}
    </div>
  );
};

export default Layout;
