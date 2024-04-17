import React, { useEffect, useState } from "react";
import styles from "../../styles/RaitingCard.module.css";
import { findByCountTest, findByRaiting } from "../../services/TestApi";

export const CabinetRaiting = () => {
  const [sortedByTests, setSortedByTests] = useState();
  const [sortedByRaiting, setSortedByRaiting] = useState();

  useEffect(() => {
    findByCountTest().then((data) => setSortedByTests(data));
    findByRaiting().then((data) => setSortedByRaiting(data));
  }, []);

  if (!sortedByTests || !sortedByRaiting) {
    return <>loading</>;
  }

  return (
    <>
      <h2>Рейтинг учнів</h2>
      <ul className={styles.statList}>
        <li className={styles.statBox}>
          <h3>Топ по оцінкам</h3>
          <ul className={styles.smallList}>
            {sortedByRaiting.map((element, index) => (
              <li>
                {index + 1}. {element.name} - {element.correctAnswerCount} / {element.questionsCount}
              </li>
            ))}
          </ul>
        </li>
        <li className={styles.statBox}>
          <h3>Кількість зданих тестів</h3>
          <ul className={styles.smallList}>
            {sortedByTests.map((element, index) => (
              <li>
                {index + 1}. {element.name} - {element.count}
              </li>
            ))}
          </ul>
        </li>
      </ul>
    </>
  );
};
