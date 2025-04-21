import { FC, useEffect, useState } from "react";
import PhotoCard from "../../components/PhotoCard/PhotoCard";
import ProgressBar from "../../components/ProgressBar/ProgressBar";
import { useAuth } from "../../contexts/AuthContext";
import { onPhotosChange, onTotalExpChange } from "../../utils/firestore";
import styles from "./Home.module.scss";
const Home: FC = () => {
  const { user } = useAuth();
  const [photos, setPhotos] = useState<any[]>([]);
  const [exp, setExp] = useState(0);
  useEffect(() => {
    if (!user) return;
    const u = user.uid;
    const off1 = onPhotosChange(u, setPhotos);
    const off2 = onTotalExpChange(u, setExp);
    return () => {
      off1();
      off2();
    };
  }, [user]);
  return (
    <div className={styles.container}>
      <ProgressBar totalExp={exp} />
      <div className={styles.grid}>
        {photos.map((p, i) => (
          <PhotoCard key={i} url={p.url} />
        ))}
      </div>
    </div>
  );
};
export default Home;
