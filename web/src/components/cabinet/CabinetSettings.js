import React, { useContext, useState } from "react";
import styles from "../../styles/cabinet/CabinetSettings.module.css";
import { PencilIcon } from "../micro/Icons";
import { Context } from "../../index"

const CabinetSettings = () => {
  const [name, setNameSetting] = useState(null);
  const [email, setEmailSetting] = useState(null);
  const [password, setPasswordSetting] = useState(null);

  const [isNameChanged, setIsNameChanged] = useState(false);
  const [isEmailChanged, setIsEmailChanged] = useState(false);
  const [isPasswordChanged, setIsPasswordChanged] = useState(false);

  const { user } = useContext(Context)

  return (
    <>
      <h2>Налаштування</h2>
      <ul className={styles.settingsList}>
        <li>
          <h3>Ім'я</h3>
          <div className={styles.settingContainer}>
            <span className={isNameChanged && styles.hide}>
              {user.user.name}
            </span>
            <input
              className={isNameChanged && styles.active}
              type="text"
              placeholder="Нове ім'я"
            />
            <button
              className={isNameChanged && styles.active}
              onClick={() => {
                setIsNameChanged(!isNameChanged);
              }}
            >
              <PencilIcon />
            </button>
          </div>
        </li>
        <li>
          <h3>Пошта</h3>
          <div className={styles.settingContainer}>
            <span className={isEmailChanged && styles.hide}>
              {user.user.email}
            </span>
            <input
              className={isEmailChanged && styles.active}
              type="text"
              placeholder="Нова пошта"
            />
            <button
              className={isEmailChanged && styles.active}
              onClick={() => {
                setIsEmailChanged(!isEmailChanged);
              }}
            >
              <PencilIcon />
            </button>
          </div>
        </li>
        <li>
          <h3>Пароль</h3>
          <div className={styles.settingContainer}>
            <span className={isPasswordChanged && styles.hide}>
              ********
            </span>
            <input
              className={isPasswordChanged && styles.active}
              type="text"
              placeholder="Новий пароль"
            />
            <button
              className={isPasswordChanged && styles.active}
              onClick={() => {
                setIsPasswordChanged(!isPasswordChanged);
              }}
            >
              <PencilIcon />
            </button>
          </div>
        </li>
      </ul>
      <button
        className={`${styles.saveButton} ${(isNameChanged || isEmailChanged || isPasswordChanged) &&
          styles.active
          }`}
      >
        Зберегти
      </button>
    </>
  );
};

export default CabinetSettings;
