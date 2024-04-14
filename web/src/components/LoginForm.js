import React, { useContext, useEffect, useState } from "react";
import styles from "../styles/LoginForm.module.css";
import { useNavigate } from "react-router-dom";
import { Context } from "..";

const LoginForm = () => {
  const {user} = useContext(Context);
  const [username, setUsername] = useState();
  const [password, setPassword] = useState();
  const [container, setContainer] = useState();

  const navigate = useNavigate();

  useEffect(() => {
    setContainer(document.getElementById("container"));
  }, []);

  return (
    <>
      <div className={styles.LoginFormBody}>
        <div className={styles.container} id="container">
          <div className={`${styles.formContainer} ${styles.signUp}`}>
            <div className={styles.formLogin}>
              <img className={styles.logo} src="./Images/USTUDY.svg" alt=""/>
              <h1>Створити аккаунт</h1>
              <input type="text" placeholder="Ім'я" />
              <input
                // onChange={(e) => setEmail(e.target.value)}
                // value={email}
                type="email"
                placeholder="Пошта"
              />
              <input
                //onChange={(e) => setPassword(e.target.value)}
                value={password}
                type="password"
                placeholder="Пароль"
              />
              <button
              //onClick={() => registerFunc(email, password)}
              >
                Зареєструватися
              </button>
            </div>
          </div>
          <div className={`${styles.formContainer} ${styles.signIn}`}>
            <div className={styles.formLogin}>
              <img className={styles.logo} src="./Images/USTUDY.svg" alt=""/>
              <h1>Вхід</h1>
              <input
                //onChange={(e) => setEmail(e.target.value)}
                // value={email}
                type="email"
                placeholder="Пошта"
              />
              <input
                //onChange={(e) => setPassword(e.target.value)}
                value={password}
                type="password"
                placeholder="Пароль"
              />
              <a href="#">Забули пароль?</a>
              <button
                //onClick={() => loginFunc(email, password)}
                onClick={() => navigate("/cabinet")}
              >
                Увійти
              </button>
            </div>
          </div>
          <div className={styles.toogleContainer}>
            <div className={styles.toogle}>
              <div className={`${styles.tooglePannel} ${styles.toogleLeft}`}>
                <h1>Раді тебе бачити!</h1>
                <p>
                  Введіть свої особисті дані, щоб скористатися всіма функціями
                  сайту
                </p>
                <button
                  className={styles.hidden}
                  id="login"
                  onClick={() => container.classList.remove(`${styles.active}`)}
                >
                  Вхід
                </button>
              </div>
              <div className={`${styles.tooglePannel} ${styles.toogleRight}`}>
                <h1>Привіт!</h1>
                <p>Зареєструйтеся як викладач вказавши свої особисті дані</p>
                {container && (
                  <button
                    className={styles.hidden}
                    id="register"
                    onClick={() => container.classList.add(`${styles.active}`)}
                  >
                    Реєстрація
                  </button>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default LoginForm;
