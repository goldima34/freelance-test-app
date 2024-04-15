import React, { useEffect, useState } from 'react'
import { getOneUser } from '../services/userApi'
import { getTestName } from '../services/TestApi'
import style from '../styles/RaitingCard.module.css'

export const RaitingCart = ({raitingData}) => {
  const [userName, setUserName] = useState()
  const [testTitle, setTestTitle] = useState()

  //username +
  //test name +
  // time +
  // correct answers +
  // question count +


  useEffect(() => {
    getOneUser(raitingData.UserId).then(data => setUserName(data.name))
    getTestName(raitingData.TestId).then(data => setTestTitle(data.Title))
  }, [])

  if(!userName || !testTitle){
    return (
        <div>
            loading
        </div>
    )
  }

  return (
    <>
        <div className={style.RaitingCart}>
            <span>Назва тесту: {testTitle}</span>
            <span>Студент: {userName}</span>
            <span>Час виконання: {raitingData.Time}</span>
            <span>Правильних: {raitingData.CorrectAnswerCount}/{raitingData.QuestionsCount}</span>
        </div>
    </>
  )
}
