import { FC } from "react";
import { getLevelInfo } from "../../utils/exp";
import styles from "./ProgressBar.module.scss";

interface ProgressBarProps {
  totalExp: number;
}

const ProgressBar: FC<ProgressBarProps> = ({ totalExp }) => {
  const { level, percentComplete } = getLevelInfo(totalExp);
  return (
    <div className={styles.container}>
      <div className={styles.label}>Level {level}</div>
      <div className={styles.track}>
        <div
          className={styles.fill}
          style={{ width: `${percentComplete * 100}%` }}
        />
      </div>
    </div>
  );
};

export default ProgressBar;
