import React, { useContext, useEffect, useState } from "react";
import styles from "../../styles/cabinet/CabinetTests.module.css";

const CabinetTests = () => {
  return (
    <>
      <h2>Ваші тести</h2>
      <ul className={styles.testsList}>
        <li>
          <h3>Наукові дослідження</h3>
          <button>Перейти</button>
        </li>
        <li>
          <h3>Наукові дослідження</h3>
          <button>Перейти</button>
        </li>
        <li>
          <h3>Наукові дослідження Бауна</h3>
          <button>Перейти</button>
        </li>
        <li>
          <h3>Наукові дослідження Енштейна</h3>
          <button>Перейти</button>
        </li>
      </ul>
    </>
  );
};

export default CabinetTests;
