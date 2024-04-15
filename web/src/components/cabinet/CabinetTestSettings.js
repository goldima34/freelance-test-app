import styles from "../../styles/cabinet/CabinetTestSettings.module.css";

const CabinetTestSettings = ({ onTabChange }) => {
  const handleTabChange = (tab) => {
    onTabChange(tab);
  };

  return (
    <>
      <h2>Наукові дослідження Енштейна</h2>
      <ul className={styles.questionsList}>
        <li>
          <h3>
            Питання №1:
            <span style={{ fontWeight: 400, marginLeft: 5 }}>
              Чого земля кругла
            </span>
          </h3>
          <ul className={styles.answersList}>
            <li>
              Хз
              <span className={styles.correctAnswer}>
                - правильна відповідь
              </span>
            </li>
            <li>Бо так</li>
          </ul>
        </li>
        <li>
          <h3>
            Питання №2:
            <span style={{ fontWeight: 400, marginLeft: 5 }}>
              Хто такій хагівагі
            </span>
          </h3>
          <ul className={styles.answersList}>
            <li>Хз</li>
            <li>Бо так</li>
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

export default CabinetTestSettings;
