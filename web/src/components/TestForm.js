import React, { useEffect, useState } from "react";
import { getAnswerByQuestionId } from "../services/TestApi";
import style from "../styles/TestForm.module.css"

export const TestForm = ({ question }) => {
  const [answers, setAnswers] = useState();
  const [answer, setAnswer] = useState();

  useEffect(
    () => {
      getAnswerByQuestionId(question.id).then(data => setAnswers(data));
    },
    [question.id]
  );

  if(!answers){
    return(
        <>loading</>
    )
  }

  return (
    <div className={style.oneQuestionContainer}>
      <p className={style.questionTitle}>{question.Title}</p>
      {answers.map(answer => (
        <div>
          <input
            type="radio"
            name={question.id}
            id={answer.id}
            onChange={() => setAnswer(answer.id)}
          />
          <span>{answer.Title}</span>    
        </div>
      ))}
    </div>
  );
};
