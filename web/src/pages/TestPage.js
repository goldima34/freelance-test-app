import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import style from "../styles/TestPage.module.css";
import { getQuestionsByTestId } from "../services/TestApi";
import { TestForm } from "../components/TestForm";
import {ExitTest} from "../components/test-modals/ExitTest";
import {CompletedTest} from "../components/test-modals/CompletedTest";

export const TestPage = () => {
  const location = useLocation();
  const [questions, setQuestions] = useState();
  const [exitTest, setExitTest] = useState(false);
  const [completedTest, setCompletedTest] = useState(false);
  const [elapsedTime, setElapsedTime] = useState(0);
  const testId = location.state.data.testId;


  useEffect(
    () => {
      getQuestionsByTestId(testId).then(data =>
      setQuestions(data));
      const intervalId = setInterval(() => {
        setElapsedTime((prevTime) => prevTime + 10); // Update every 10 milliseconds
      }, 10);

      return () => clearInterval(intervalId); 
    },
    [testId]
  );

  if(!questions){
    return (<div>
        loading
    </div>)
  }

  const CompleteTest = () =>{
    setCompletedTest(true)
  }

  const ExitTestModal = () => {
    setExitTest(true)
  }

  const ExitTestHide = () => {
    setExitTest(false)
  }

  const formatTime = (timeInMillis) => {
    const seconds = Math.floor((timeInMillis / 1000) % 60);
    const minutes = Math.floor((timeInMillis / (1000 * 60)) % 60);

    const formattedSeconds = seconds.toString().padStart(2, '0');
    const formattedMinutes = minutes.toString().padStart(2, '0');

    return `${formattedMinutes}:${formattedSeconds}`;
  };
 //sdfg
  return (
    <>
    <div className="time-corner">
        {formatTime(elapsedTime)}
      </div>
      <div className={style.questionsContainer}>
        <div className={style.questionsForm}>
          {questions.map(question => <TestForm question={question} />)}
          <div className={style.buttonContainer}>
            <button onClick={ExitTestModal} className={style.rejectBtn}>Вийти</button>
            <button onClick={CompleteTest} className={style.accepBtn}>Завершити</button>
          </div>
        </div>
      </div>
      {exitTest && <ExitTest onHide={ExitTestHide}/>}
    {completedTest && <CompletedTest questions={questions} testId={testId} time={formatTime(elapsedTime)}/>}
    </>
  );
};
