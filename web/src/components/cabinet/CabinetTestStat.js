import { useLocation, useNavigate } from "react-router-dom";
import styles from "../../styles/cabinet/CabinetTestStats.module.css";
import style from "../../styles/cabinet/CabinetPage.module.css";
import { useEffect, useState } from "react";
import { SortByRaiting, SortByTime, getTestName } from "../../services/TestApi";
import { TestStatRaitingCart } from "../TestStatRaitingCart";
import { TestStatTimeCart } from "../TestStatTimeCart";

const CabinetTestStat = () => {
  const navigate = useNavigate();
  const location = useLocation();

  const testId = location.state.data;

  const [test, setTest] = useState();
  const [sortedByRaiting, setSortedByRaiting] = useState([]);
  const [sortedByTime, setSortedByTime] = useState([]);

  useEffect(() => {
    getTestName(testId).then((data) => setTest(data));
    SortByRaiting(testId).then((data) => setSortedByRaiting(data));
    SortByTime(testId).then((data) => setSortedByTime(data));
  }, [testId, sortedByRaiting, sortedByTime]);

  if (!test || !sortedByTime || !sortedByRaiting) {
    return <>loading</>;
  }

  return (
    <div className={style.CabinetPageBody}>
      <div className={style.block}>
        <h2>Статистика по тесту: {test.Title}</h2>
        <ul className={styles.statList}>
          <li className={styles.statBox}>
            <h3>Топ по оцінкам</h3>
            <ul className={styles.smallList}>
              {sortedByRaiting.map((element, index) => (
                <TestStatRaitingCart stat={element} index={index} />
              ))}
            </ul>
          </li>
          <li className={styles.statBox}>
            <h3>Топ по часу</h3>
            <ul className={styles.smallList}>
              {sortedByTime.map((element, index) => (
                <TestStatTimeCart stat={element} index={index} />
              ))}
            </ul>
          </li>
        </ul>
        <button
          className={styles.backButton}
          onClick={() => navigate("/cabinet")}>
          Назад
        </button>
      </div>
    </div>
  );
};

export default CabinetTestStat;
