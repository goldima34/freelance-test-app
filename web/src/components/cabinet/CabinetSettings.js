import React, { useState } from "react";
import styles from "../../styles/cabinet/CabinetSettings.module.css";
import { PencilIcon } from "../micro/Icons";

const CabinetSettings = () => {
  const [name, setNameSetting] = useState(null);
  const [email, setEmailSetting] = useState(null);
  const [password, setPasswordSetting] = useState(null);

  const [isNameChanged, setIsNameChanged] = useState(false);
  const [isEmailChanged, setIsEmailChanged] = useState(false);
  const [isPasswordChanged, setIsPasswordChanged] = useState(false);

  return (
    <>
      <h2>Налаштування</h2>
      <ul className={styles.settingsList}>
        <li>
          <h3>Ім'я</h3>
          <div className={styles.settingContainer}>
            <span>Артур Ліхіцький</span>
            <input type="text" placeholder="Нове ім'я" />
            <button>
              <PencilIcon />
            </button>
          </div>
        </li>
        <li>
          <h3>Пошта</h3>
          <div className={styles.settingContainer}>
            <span>artur.lihitskiy@gmail.com</span>
            <input type="text" placeholder="Нова пошта" />
            <button>
              <PencilIcon />
            </button>
          </div>
        </li>
        <li>
          <h3>Пароль</h3>
          <div className={styles.settingContainer}>
            <span>1234312</span>
            <input type="text" placeholder="Новий пароль" />
            <button>
              <PencilIcon />
            </button>
          </div>
        </li>
      </ul>
    </>
  );
};

export default CabinetSettings;
