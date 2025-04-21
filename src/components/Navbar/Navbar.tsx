import { FC } from "react";
import { AiOutlineCamera, AiOutlineHome, AiOutlineUser } from "react-icons/ai";
import { NavLink } from "react-router-dom";
import styles from "./Navbar.module.scss";

const Navbar: FC = () => (
  <nav className={styles.navbar}>
    <NavLink to="/home" className={styles.link}>
      <AiOutlineHome />
      <span>Home</span>
    </NavLink>
    <NavLink to="/upload" className={styles.link}>
      <AiOutlineCamera />
      <span>Upload</span>
    </NavLink>
    <NavLink to="/profile" className={styles.link}>
      <AiOutlineUser />
      <span>Profile</span>
    </NavLink>
  </nav>
);

export default Navbar;
