import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import style from "../styles/TestPage.module.css";
import { getQuestionsByTestId } from "../services/TestApi";
import { TestForm } from "../components/TestForm";
import { ExitTest } from "../components/test-modals/ExitTest";
import { CompletedTest } from "../components/test-modals/CompletedTest";

export const TestPage = () => {
  const location = useLocation();
  const [questions, setQuestions] = useState();
  const [endTest, setEndTest] = useState(false);

  localStorage.setItem("correctAnswers", 0)

  useEffect(
    () => {
      getQuestionsByTestId(location.state.data.testId).then(data =>
      setQuestions(data)
      );
    },
    [location.state.data.testId]
  );

  if(!questions){
    return (<div>
        loading
    </div>)
  }

  return (
    <>
      <div className={style.questionsContainer}>
        <div className={style.questionsForm}>
          {questions.map(question => <TestForm question={question} />)}
          <div className={style.buttonContainer}>
            <button className={style.rejectBtn}>Вийти</button>
            <button className={style.accepBtn}>Завершити</button>
          </div>
        </div>
      </div>
      <ExitTest/>
      <CompletedTest/>
    </>
  );
};
