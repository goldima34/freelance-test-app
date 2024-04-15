import React, { useEffect, useState } from "react";
import { getAnswerByQuestionId } from "../services/TestApi";
import style from "../styles/TestForm.module.css"

export const TestForm = ({ question }) => {
  const [answers, setAnswers] = useState();
  const [selectedAnswer, setSelectedAnswer] = useState(null);
  useEffect(
    () => {
      getAnswerByQuestionId(question.id).then(data => setAnswers(data));
    },
    [question.id]
  );

  const handleAnswerSelect = (answer) => {
    if (!selectedAnswer) { // Only update if no answer is selected yet
      setSelectedAnswer(answer.id);
      const currentCorrectAnswers = parseInt(localStorage.getItem("correctAnswers")) || 0;
      if (answer.IsCorrect) { // Update correct answer count only if correct
        localStorage.setItem("correctAnswers", currentCorrectAnswers + 1);
      }
    }
    console.log(localStorage.getItem("correctAnswers"))
  };

  if(!answers){
    return(
        <>loading</>
    )
  }

  return (
    <div className={style.oneQuestionContainer}>
      <p className={style.questionTitle}>{question.Title}</p>
      {answers.map(answer => (
        <div style={{display: "flex", justifyContent: "space-between", alignItems: "center"}}>
          <input
            style={{margin: 0, width: 20, marginRight: 5}}
            type="radio"
            name={question.id}
            id={answer.id}
            checked={selectedAnswer === answer.id}
            onChange={() => handleAnswerSelect(answer)}
          />
          <span>{answer.Title}</span>    
        </div>
      ))}
    </div>
  );
};
