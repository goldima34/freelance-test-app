import React, { useEffect, useState } from "react";
import { getAnswerByQuestionId } from "../services/TestApi";

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
    <div>
      {question.Title}
      {answers.map(answer => (
        <div>
          <p>{answer.Title}</p>
          <input
            type="checkbox"
            id={answer.id}
            onChange={() => setAnswer(answer.id)}
          />
        </div>
      ))}
      <hr />
    </div>
  );
};
