import React, { useContext, useEffect, useState } from "react";
import styles from "../../styles/cabinet/CabinetTests.module.css";
import { deleteTest, getAllTests } from "../../services/TestApi";
import { useNavigate } from "react-router-dom";
import { Context } from "../../index";
const CabinetTests = ({ onTabChange, test }) => {
  const [tests, setTests] = useState(null);
  const [loading, setLoading] = useState(true);
  const { user } = useContext(Context);
  const handleTabChange = (tab) => {
    onTabChange(tab);
  };

  const navigate = useNavigate();

  const handleClick = (data) => {
    navigate("/test", { state: { data } }); // Pass data as state
  };

  
  const handleClickDelete = (testId) => {
    deleteTest(testId);
  };

  const handleClickStat = (data) => {
    handleTabChange("testStats");
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
              {user.user.role === "викладач" ? (
                <button
                  className={styles.button_decline}
                  onClick={() => handleClickDelete(test.id)}>
                  Видалити
                </button>
              ) : (
                <button
                  className={styles.button_accept}
                  onClick={() => handleClick({ testId: test.id })}>
                  Перейти
                </button>
              )}
              <button
                className={styles.button_accept}
                onClick={() => handleClickStat(test.id)}>
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
