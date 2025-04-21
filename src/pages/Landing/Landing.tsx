import { FC } from "react";
import { useNavigate } from "react-router-dom";
import styles from "./Landing.module.scss";
const Landing: FC = () => {
  const nav = useNavigate();
  return (
    <div className={styles.container}>
      <h1>Welcome to Wander</h1>
      <button onClick={() => nav("/signin")}>Sign In</button>
      <button onClick={() => nav("/signup")}>Sign Up</button>
    </div>
  );
};
export default Landing;
