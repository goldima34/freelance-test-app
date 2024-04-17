import { useLocation, useNavigate } from "react-router-dom";
import styles from "../../styles/cabinet/CabinetTestStats.module.css";
import { useEffect, useState } from "react";
import { getTestName, getUserTestByTestId } from "../../services/TestApi";
import { TestStatRaitingCart } from "../TestStatRaitingCart";
import { TestStatTimeCart } from "../TestStatTimeCart";

const CabinetTestStat = () => {
  const navigate = useNavigate();
  const location = useLocation();

  const testId = location.state.data;

  const [test, setTest] = useState();
  const [allStats, setAllStats] = useState([]);

  useEffect(() => {
    getTestName(testId).then((data) => setTest(data));
    getUserTestByTestId(testId).then((data) => setAllStats(data));
  }, [testId, allStats]);

  const allStatsSortedByRaiting = allStats.sort(
    (a, b) => b.CorrectAnswerCount - a.CorrectAnswerCount
  );
  
  const allStatsSortedByTime = allStats.sort((a, b) => b.Time - a.Time);

  if (!test || !allStats) {
    return <>loading</>;
  }

  return (
    <>
      <h2>Статистика по тесту: {test.Title}</h2>
      <ul className={styles.statList}>
        <li className={styles.statBox}>
          <h3>Топ по оцінкам</h3>
          <ul className={styles.smallList}>
            {allStatsSortedByRaiting.map((element, index) => (
              <TestStatRaitingCart stat={element} index={index} />
            ))}
          </ul>
        </li>
        <li className={styles.statBox}>
          <h3>Топ по часу</h3>
          <ul className={styles.smallList}>
            {allStatsSortedByTime.map((element, index) => (
              <TestStatTimeCart stat={element} index={index}/>
            ))}
          </ul>
        </li>
      </ul>
      <button
        className={styles.backButton}
        onClick={() => navigate("/cabinet")}>
        Назад
      </button>
    </>
  );
};

export default CabinetTestStat;
