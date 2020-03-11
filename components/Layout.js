import classes from "./layout.module.scss";

export const Layout = ({ children }) => {
  return <div className={classes.Layout}>{children}</div>;
};

export default Layout;
