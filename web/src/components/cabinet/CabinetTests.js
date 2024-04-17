import React, { useEffect, useState } from "react";
import styles from "../../styles/cabinet/CabinetTests.module.css";
import { getAllTests } from "../../services/TestApi";
import { useNavigate } from "react-router-dom";

const CabinetTests = ({ onTabChange, test }) => {
  const [tests, setTests] = useState(null);
  const [loading, setLoading] = useState(true);

  const handleTabChange = (tab) => {
    onTabChange(tab);
  };

  const navigate = useNavigate();

  const handleClick = (data) => {
    navigate("/test", { state: { data } }); // Pass data as state
  };

  const handleClickStat = (data) => {
    handleTabChange("testStats")
    navigate("/testStat", { state: { data } }); // Pass data as state
  };

  useEffect(() => {
    getAllTests().then((data) => setTests(data));
    if (tests) {
      setLoading(false);
    }
  }, [tests]);

  if (loading) {
    return (
      <>
        <h2>Усі тести</h2>
        <ul className={styles.testsList}>
          <li>
            <h3>loading</h3>
          </li>
        </ul>
      </>
    );
  }

  return (
    <>
      <h2>Усі тести</h2>
      <ul className={styles.testsList}>
        {tests.map((test) => (
          <li>
            <h3>{test.Title}</h3>
            <div className={styles.buttonsContainer}>
              <button onClick={() => handleClick({ testId: test.id })}>
                Перейти
              </button>
              <button onClick={() => handleClickStat(test.id)}>
                Статистика
              </button>
            </div>
          </li>
        ))}
      </ul>
    </>
  );
};

export default CabinetTests;
