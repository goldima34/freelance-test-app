import React, { useContext, useState } from "react";
import styles from "../../styles/cabinet/CabinetNewTest.module.css";
import { DeleteIcon, AcceptIcon, PencilIcon } from "../micro/Icons";
import { createTest } from "../../services/TestApi";
import {Context} from "../../index"

const CabinetNewTest = ({ onTabChange }) => {
  const {user} = useContext(Context)
  const [questions, setQuestions] = useState([
    { question: "", answers: [""], correctAnswerIndex: 0 },
  ]);
  const [testTitle, setTestTitle] = useState("Новий тест");

  const handleTabChange = (tab) => {
    onTabChange(tab);
  };

  const onSubmit = () => {
    createTest(testTitle, questions, user.user.id)
  }

  const handleAddQuestion = () => {
    setQuestions([
      ...questions,
      { question: "", answers: [""], correctAnswerIndex: -1 },
    ]);
  };

  const handleInputChange = (index, type, value, answerIndex) => {
    const updatedQuestions = [...questions];
    if (type === "question") updatedQuestions[index].question = value;
    else if (type === "answer")
      updatedQuestions[index].answers[answerIndex] = value;
    else updatedQuestions[index].correctAnswerIndex = answerIndex;
    setQuestions(updatedQuestions);
  };

  const handleAddAnswer = (questionIndex) => {
    handleInputChange(
      questionIndex,
      "answer",
      "",
      questions[questionIndex].answers.length
    );
  };

  const handleAcceptQuestion = (index) => {
    const updatedQuestions = [...questions];
    updatedQuestions[index].accepted = !updatedQuestions[index].accepted;
    setQuestions(updatedQuestions);
  };

  const handleDeleteQuestion = (index) => {
    const updatedQuestions = [...questions];
    updatedQuestions.splice(index, 1);
    setQuestions(updatedQuestions);
  };

  const handleDeleteAnswer = (questionIndex, answerIndex) => {
    const updatedQuestions = [...questions];
    updatedQuestions[questionIndex].answers.splice(answerIndex, 1);
    setQuestions(updatedQuestions);
  };

  const handleTitleChange = (e) => {
    setTestTitle(e.target.value);
  };

  return (
    <>
      <input
        type="text"
        value={testTitle}
        onChange={handleTitleChange}
        className={styles.testTitleInput}
      />
      <button className={styles.newQuestionButton} onClick={handleAddQuestion}>
        + Додати запитання
      </button>
      <ul className={styles.questionsList}>
        {questions.map((question, questionIndex) => (
          <li key={questionIndex}>
            {question.accepted ? (
              <>
                <span>{question.question}</span>
                <button
                  className={styles.changeButton}
                  onClick={() => handleAcceptQuestion(questionIndex)}
                >
                  <PencilIcon />
                </button>
              </>
            ) : (
              <>
                <input
                  type="text"
                  placeholder="Введіть запитання"
                  value={question.question}
                  onChange={(e) =>
                    handleInputChange(questionIndex, "question", e.target.value)
                  }
                />
                <ul className={styles.answersList}>
                  {question.answers.map((answer, answerIndex) => (
                    <li key={answerIndex}>
                      <input
                        type="text"
                        placeholder="Введіть відповідь"
                        value={answer}
                        onChange={(e) =>
                          handleInputChange(
                            questionIndex,
                            "answer",
                            e.target.value,
                            answerIndex
                          )
                        }
                      />
                      <input
                        type="checkbox"
                        checked={question.correctAnswerIndex === answerIndex}
                        onChange={() =>
                          handleInputChange(
                            questionIndex,
                            "correctAnswer",
                            "",
                            answerIndex
                          )
                        }
                      />
                      <button
                        className={styles.deleteAnswerButton}
                        onClick={() =>
                          handleDeleteAnswer(questionIndex, answerIndex)
                        }
                      >
                        <DeleteIcon />
                      </button>
                    </li>
                  ))}
                  <div className={styles.buttonsContainer}>
                    <button
                      className={styles.newQuestionButton}
                      onClick={() => handleAddAnswer(questionIndex)}
                    >
                      + Додати відповідь
                    </button>
                    <div>
                      <button
                        className={styles.actionButton}
                        onClick={() => handleAcceptQuestion(questionIndex)}
                      >
                        <AcceptIcon />
                      </button>
                      <button
                        className={styles.actionButton}
                        onClick={() => handleDeleteQuestion(questionIndex)}
                      >
                        <DeleteIcon />
                      </button>
                    </div>
                  </div>
                </ul>
              </>
            )}
          </li>
        ))}
      </ul>
      <div className={styles.buttonsContainer}>
        <button
          className={styles.backButton}
          onClick={() => handleTabChange("tests")}
        >
          Назад
        </button>
        <button
          className={styles.backButton}
          onClick={() => onSubmit()}
        >
          Зберегти
        </button>
      </div>
    </>
  );
};

export default CabinetNewTest;
