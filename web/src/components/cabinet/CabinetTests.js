import React, { useEffect, useState } from "react";
import styles from "../../styles/cabinet/CabinetTests.module.css";
import { getAllTests } from "../../services/TestApi";
import { useNavigate } from "react-router-dom";

const CabinetTests = ({ onTabChange }) => {
  const [tests, setTests] = useState(null);
  const [loading, setLoading] = useState(true);

  const handleTabChange = (tab) => {
    onTabChange(tab);
  };

  const navigate = useNavigate();

  const handleClick = (data) => {
    navigate("/test", { state: { data } }); // Pass data as state
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
            <button onClick={() => handleTabChange("testSettings")}>
              Детальніше
            </button>
            <button onClick={() => handleTabChange("newTest")}>+ Додати</button>
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
            <button onClick={() => handleClick({ testId: test.id })}>
              Перейти
            </button>
          </li>
        ))}
      </ul>
    </>
  );
};

export default CabinetTests;
