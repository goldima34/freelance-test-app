import React, { useContext, useEffect, useState } from "react";
import styles from "../styles/LoginForm.module.css";
import { useNavigate } from "react-router-dom";
import { Context } from "..";
import { login, registration } from "../services/userApi";

const LoginForm = () => {
  const { user } = useContext(Context);
  const [name, setName] = useState();
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  const [role, setRole] = useState();
  const [container, setContainer] = useState();

  const navigate = useNavigate();

  useEffect(() => {
    setContainer(document.getElementById("container"));
  }, []);

  const registerFunc = async (name, email, password, role) => {
    try {
      if (!role){
        setRole("Учень")
      }
      const data = await registration(name, email, password, role);
      user.setUser(data);
      console.log(user.user);
      user.setIsAuth(true);
    } catch (error) {
      console.log(error);
    }
  };

  const loginFunc = async (email, password) => {
    try {
      const data = await login(email, password);
      user.setUser(data);
      user.setIsAuth(true);
      console.log(user.user);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className={styles.LoginFormBody}>
      <div className={styles.container} id="container">
        <div className={`${styles.formContainer} ${styles.signUp}`}>
          <div className={styles.formLogin}>
            <img className={styles.logo} src="./Images/USTUDY.svg" alt="" />
            <h1>Створити аккаунт</h1>
            <input
              type="text"
              onChange={e => setName(e.target.value)}
              value={name}
              placeholder="Ім'я"
            />
            <input
              onChange={e => setEmail(e.target.value)}
              value={email}
              type="email"
              placeholder="Пошта"
            />
            <input
              onChange={e => setPassword(e.target.value)}
              value={password}
              type="password"
              placeholder="Пароль"
            />
            <button onClick={() => registerFunc(name, email, password, role)}>
              Зареєструватися
            </button>
          </div>
        </div>
        <div className={`${styles.formContainer} ${styles.signIn}`}>
          <div className={styles.formLogin}>
            <img className={styles.logo} src="./Images/USTUDY.svg" alt="" />
            <h1>Вхід</h1>
            <input
              onChange={e => setEmail(e.target.value)}
              value={email}
              type="email"
              placeholder="Пошта"
            />
            <input
              onChange={e => setPassword(e.target.value)}
              value={password}
              type="password"
              placeholder="Пароль"
            />
            <a href="#">Забули пароль?</a>
            <button onClick={() => loginFunc(email, password)}>Увійти</button>
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
              {container &&
                <button
                  className={styles.hidden}
                  id="register"
                  onClick={() => container.classList.add(`${styles.active}`)}
                >
                  Реєстрація
                </button>}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoginForm;
