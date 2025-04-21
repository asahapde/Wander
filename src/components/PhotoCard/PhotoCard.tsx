import { FC } from "react";
import styles from "./PhotoCard.module.scss";

interface PhotoCardProps {
  url: string;
}

const PhotoCard: FC<PhotoCardProps> = ({ url }) => (
  <div className={styles.card}>
    <img src={url} alt="User upload" className={styles.image} />
  </div>
);

export default PhotoCard;
