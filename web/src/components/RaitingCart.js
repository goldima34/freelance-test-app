import React, { useEffect, useState } from "react";
import { getOneUser } from "../services/userApi";
import { getTestName } from "../services/TestApi";
import style from "../styles/RaitingCard.module.css";

export const RaitingCart = ({ raitingData }) => {
  const [userName, setUserName] = useState();
  const [testTitle, setTestTitle] = useState();

  useEffect(() => {
    try {
      getOneUser(raitingData.UserId).then(data => setUserName(data.name))
      getTestName(raitingData.TestId).then(data => data.Title && setTestTitle(data.Title))  
    } catch (error) {}
  }, [])

  if (!userName || !testTitle) {
    return <div>loading</div>;
  }

  return (
    <>
      <div className={style.RaitingCart}>
        <span>
          <strong>Назва тесту:</strong> {testTitle}
        </span>
        <span>
          <strong>Студент:</strong> {userName}
        </span>
        <span>
          <strong>Час виконання:</strong> {raitingData.Time}
        </span>
        <span>
          <strong>Правильних:</strong> {raitingData.CorrectAnswerCount}/
          {raitingData.QuestionsCount}
        </span>
      </div>
    </>
  );
};
