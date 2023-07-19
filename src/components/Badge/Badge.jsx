import styles from "./badge.module.css";
const Badge = ({ children, color = "#b5b5b5" }) => {
  return (
    <div className={styles.badge_container} style={{ background: color }}>
      {children}
    </div>
  );
};

export default Badge;
