import React, { useEffect, useState } from "react";
import { getOneUser } from "../services/userApi";
import { getTestName } from "../services/TestApi";
import styles from "../styles/RaitingCard.module.css";

export const RaitingCart = ({ raitingData }) => {
  const [userName, setUserName] = useState();
  const [testTitle, setTestTitle] = useState();

  useEffect(() => {
    try {
      getOneUser(raitingData.UserId).then((data) => setUserName(data.name));
      getTestName(raitingData.TestId).then(
        (data) => data.Title && setTestTitle(data.Title)
      );
    } catch (error) {}
  }, []);

  if (!userName || !testTitle) {
    return <div>loading</div>;
  }

  return (
    <>
      <h2>Статистика</h2>
      <ul className={styles.statList}>
        <li className={styles.statBox}>
          <h3>Топ по оцінкам</h3>
          <ul className={styles.smallList}>
            <li>
              1. Чепушевич Антон <i>20/30</i>
            </li>
            <li>
              2. Чепушевич Антон <i>15/30</i>
            </li>
          </ul>
        </li>
      </ul>
    </>
  );
};
