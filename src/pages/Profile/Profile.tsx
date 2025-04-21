import { FC } from "react";
import { useAuth } from "../../contexts/AuthContext";
import styles from "./Profile.module.scss";
const Profile: FC = () => {
  const { user, signOut } = useAuth();
  return (
    <div className={styles.container}>
      <h2>{user?.displayName}</h2>
      <p>{user?.email}</p>
      <button onClick={signOut}>Sign Out</button>
    </div>
  );
};
export default Profile;
