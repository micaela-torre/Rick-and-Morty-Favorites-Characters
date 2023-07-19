import React, { useState } from "react";
import styles from "./paginator.module.css";
import Button from "../PrimaryButton/PrimaryButton";

const Paginator = ({
  currentPage,
  handlePreviousPage,
  handleNextPage,
  onHandlerChangePagination,
}) => {
  return (
    <div className={styles.paginator_container}>
      <Button onClick={handlePreviousPage}>Prev</Button>

      <div className={styles.buttons}>
        <Button onClick={() => onHandlerChangePagination(6)}>6</Button>
        <Button onClick={() => onHandlerChangePagination(12)}>12</Button>
        <Button onClick={() => onHandlerChangePagination(20)}>20</Button>
      </div>
      <Button onClick={handleNextPage}>Next</Button>
    </div>
  );
};

export default Paginator;
