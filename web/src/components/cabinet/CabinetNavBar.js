import React, { useContext, useState } from "react";
import styles from "../../styles/cabinet/CabinetNavBar.module.css";
import { SettingsIcon, SignOutIcon, TestsIcon } from "../micro/Icons";
import { logout } from "../../services/userApi";
import { useNavigate } from "react-router-dom";
import {Context} from "../../index"

const CabinetNavBar = ({ onTabChange }) => {
  const [activeButton, setActiveButton] = useState("tests");
  const {user} = useContext(Context)

  const navigate = useNavigate()

  const handleTabChange = (tab) => {
    setActiveButton(tab);
    onTabChange(tab);
  };
  const logoutClick = () => {
    logout()
    navigate("/")
  }
  return (
    <>
      <ul className={styles.navigationList}>
        <img className={styles.logo} src="./Images/USTUDY.svg" alt=""/>
        <li>
          <button
            className={activeButton === "tests" ? styles.active : ""}
            onClick={() => handleTabChange("tests")}
          >
            <TestsIcon />
            <span>Усі тести</span>
          </button>
        </li>
        {user.user.role === "викладач" && 
          <li>
          <button
            className={activeButton === "makeTests" ? styles.active : ""}
            onClick={() => handleTabChange("tests")}
          >
            <TestsIcon />
            <span>Створити тест</span>
          </button>
        </li>
        }
        {user.user.role === "викладач" && 
          <li>
          <button
            className={activeButton === "raiting" ? styles.active : ""}
            onClick={() => handleTabChange("raiting")}
          >
            <TestsIcon />
            <span>Оцінки учнів</span>
          </button>
        </li>
        }
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
          <button
            onClick={logoutClick}
          >
            <SignOutIcon />
            <span>Вихід</span>
          </button>
        </li>
      </ul>
    </>
  );
};

export default CabinetNavBar;
