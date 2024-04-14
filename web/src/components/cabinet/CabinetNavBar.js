import React, { useState } from "react";
import styles from "../../styles/cabinet/CabinetNavBar.module.css";
import { SettingsIcon, SignOutIcon, TestsIcon } from "../micro/Icons";

const CabinetNavBar = ({ onTabChange }) => {
  const [activeButton, setActiveButton] = useState("tests");

  const handleTabChange = (tab) => {
    setActiveButton(tab);
    onTabChange(tab);
  };

  return (
    <>
      <ul className={styles.navigationList}>
        <img className={styles.logo} src="./Images/USTUDY.svg" />
        <li>
          <button
            className={activeButton === "tests" ? styles.active : ""}
            onClick={() => handleTabChange("tests")}
          >
            <TestsIcon />
            <span>Ваші тести</span>
          </button>
        </li>
        <li>
          <button
            className={activeButton === "settings" ? styles.active : ""}
            onClick={() => handleTabChange("settings")}
          >
            <SettingsIcon />
            <span>Налаштування</span>
          </button>
        </li>
        <li>
          <button>
            <SignOutIcon />
            <span>Вихід</span>
          </button>
        </li>
      </ul>
    </>
  );
};

export default CabinetNavBar;
