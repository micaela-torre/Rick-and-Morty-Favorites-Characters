import { useState } from "react";
import styles from "./floatingButton.module.css";

const FloatingButton = () => {
  const [showInstructions, setShowInstructions] = useState(false);

  const toggleInstructions = () => {
    setShowInstructions(!showInstructions);
  };

  return (
    <div className={styles.floating_button_container}>
      <button
        className={styles.floating_button}
        onClick={toggleInstructions}
      ></button>
      {showInstructions && (
        <div className={styles.instructions}>
          <p>
            Choose a character from each #section to see the information of
            both..
          </p>
          <button className={styles.close_button} onClick={toggleInstructions}>
            X
          </button>
        </div>
      )}
    </div>
  );
};

export default FloatingButton;
