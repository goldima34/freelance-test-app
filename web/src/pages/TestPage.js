import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import style from "../styles/TestPage.module.css";
import { getQuestionsByTestId } from "../services/TestApi";
import { TestForm } from "../components/TestForm";

export const TestPage = () => {
  const location = useLocation();
  const [questions, setQuestions] = useState();
  
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
    <div>
      {questions.map(question => <TestForm question={question} />)}
    </div>
  );
};
