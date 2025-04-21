import React, { FC, useState } from "react";
import { useAuth } from "../../contexts/AuthContext";
import styles from "./SignUp.module.scss";
const SignUp: FC = () => {
  const { signUp } = useAuth();
  const [email, setEmail] = useState("");
  const [pw, setPw] = useState("");
  const [name, setName] = useState("");
  const onSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    await signUp(email, pw, name);
  };
  return (
    <form className={styles.container} onSubmit={onSubmit}>
      <input
        type="text"
        value={name}
        onChange={(e) => setName(e.target.value)}
        placeholder="Display Name"
      />
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
      <button type="submit">Sign Up</button>
    </form>
  );
};
export default SignUp;
