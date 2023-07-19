import styles from "./primaryButton.module.css";

const Button = ({ onClick = () => {}, className, children, restProps }) => {
  return (
    <button
      className={className || styles.primary_button}
      onClick={onClick}
      {...restProps}
    >
      {children}
    </button>
  );
};

export default Button;
