import styles from "../../styles/cabinet/CabinetTestStats.module.css";

const CabinetTestStat = ({ onTabChange }) => {
  const handleTabChange = (tab) => {
    onTabChange(tab);
  };

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
        <li className={styles.statBox}>
          <h3>Топ по часу</h3>
          <ul className={styles.smallList}>
            <li>
              1. Чепушевич Антон <i>00:30</i>
            </li>
            <li>
              2. Чепушевич Антон <i>00:35</i>
            </li>
            <li>
              3. Чепушевич Антон <i>00:35</i>
            </li>
            <li>
              4. Чепушевич Антон <i>00:35</i>
            </li>
            <li>
              5. Чепушевич Антон <i>00:35</i>
            </li>
          </ul>
        </li>
      </ul>
      <button
        className={styles.backButton}
        onClick={() => handleTabChange("tests")}
      >
        Назад
      </button>
    </>
  );
};

export default CabinetTestStat;
