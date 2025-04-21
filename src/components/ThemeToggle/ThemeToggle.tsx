import { FC } from "react";
import { useTheme } from "../../contexts/ThemeContext";
import styles from "./ThemeToggle.module.scss";

const ThemeToggle: FC = () => {
  const { theme, toggleTheme } = useTheme();
  return (
    <button className={styles.toggle} onClick={toggleTheme}>
      {theme === "light" ? "🌙 Dark Mode" : "☀️ Light Mode"}
    </button>
  );
};

export default ThemeToggle;
