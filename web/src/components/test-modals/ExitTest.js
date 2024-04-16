import React from "react";
import style from "../../styles/test-modals-style/ExitTest.module.css";
import { useNavigate } from "react-router-dom";
import { CloseIcon } from "../micro/Icons";

export const ExitTest = ({ onHide }) => {
  const navigate = useNavigate();

  const CloseClick = () => {
    onHide();
  };

  const ExitClick = () => {
    localStorage.removeItem("correctAnswers");
    navigate("/cabinet");
  };

  return (
    <div className={style.ExitTestWrapper}>
      <div className={style.ExitTestContainer}>
        <button onClick={CloseClick} className={style.CloseTestBtn}>
          <CloseIcon />
        </button>
        <div className={style.ExitTestText}>
          <p>Ви дійсно хочете покинути тест?</p>
          <p>(Тест не буде зараховано)</p>
        </div>
        <div className={style.ExitTestBtnContainer}>
          <button onClick={ExitClick} className={style.ExitTestBtn}>
            Покинути
          </button>
        </div>
      </div>
    </div>
  );
};
