import React, { FC, useState } from "react";
import { useAuth } from "../../contexts/AuthContext";
import styles from "./SignIn.module.scss";
const SignIn: FC = () => {
  const { signIn } = useAuth();
  const [email, setEmail] = useState("");
  const [pw, setPw] = useState("");
  const onSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    await signIn(email, pw);
  };
  return (
    <form className={styles.container} onSubmit={onSubmit}>
      <input
        type="email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        placeholder="Email"
      />
      <input
        type="password"
        value={pw}
        onChange={(e) => setPw(e.target.value)}
        placeholder="Password"
      />
      <button type="submit">Sign In</button>
    </form>
  );
};
export default SignIn;
