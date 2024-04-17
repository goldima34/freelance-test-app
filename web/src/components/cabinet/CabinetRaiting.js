import React, { useEffect, useState } from "react";
import { getUserTest } from "../../services/TestApi";
import styles from "../../styles/RaitingCard.module.css";

export const CabinetRaiting = () => {
  const [raitingData, setRaitingData] = useState();

  useEffect(() => {
    getUserTest().then((data) => setRaitingData(data));
  }, []);

  if (!raitingData) {
    return <div>loading</div>;
  }

  // Як знайти рейтинг: Береш проходиш по юзерам, береш тести які вони проходили, береш у теста питання (всього питань кількість ділиш на кількість превельних питань)
  // Так сумуєш ці значення по кожному тесту, а потім ділиш це значення на кількість тестів, і чім більше число тим успішніше учень

  return (
    <>
      <h2>Рейтинг учнів</h2>
      <ul className={styles.statList}>
        <li className={styles.statBox}>
          <h3>Топ по оцінкам</h3>
          <ul className={styles.smallList}>
            {raitingData.map((data) => (
              <li>1. ктото</li>
            ))}
          </ul>
        </li>
        <li className={styles.statBox}>
          <h3>Кількість зданих тестів</h3>
          <ul className={styles.smallList}>
            {raitingData.map((data) => (
              <li>1. ктото</li>
            ))}
          </ul>
        </li>
      </ul>
    </>
  );
};
