import React, { useContext } from 'react'
import style from '../../styles/test-modals-style/CompletedTest.module.css'
import { useNavigate } from 'react-router-dom'
import{Context} from "../../index"
import { createUserTest } from '../../services/TestApi'

export const CompletedTest = ({questions, testId, time}) => {
  const {user} = useContext(Context)

  const correctAnswer = localStorage.getItem("correctAnswers") || 0
  const navigate = useNavigate()

  const EndTest = () => {
    createUserTest(user.user.id, testId, time, questions.length, correctAnswer)
    navigate("/cabinet")
    localStorage.removeItem("correctAnswers")
  }

  return (
    <div className={style.CompletedTestWrapper}>
        <div className={style.CompletedTestContainer}>
            <p>Тест завершено</p>
            <p>Ви відповіли парвильно на {correctAnswer} з {questions.length}</p>
            <button onClick={EndTest} className={style.toCabinet}>На головну</button>
        </div>
    </div>
  )
}
