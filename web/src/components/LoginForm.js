import React, { useContext, useEffect, useState } from "react";
import styles from "../styles/LoginForm.module.css";
import { useNavigate } from "react-router-dom";
import { Context } from "..";
import { login, registration } from "../services/userApi";
import { useForm } from "react-hook-form";

const LoginForm = () => {
  const { user } = useContext(Context);
  const [name, setName] = useState();
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  const [role, setRole] = useState();
  const [container, setContainer] = useState();
  const { register, handleSubmit, formState: { errors } } = useForm();
  const navigate = useNavigate();

  useEffect(() => {
    setContainer(document.getElementById("container"));
  }, []);

  const registerFunc = async data => {
    try {
      if (!role) {
        setRole("Учень");
      }
      const userData = await registration(name, email, password, role);
      user.setUser(userData);
      console.log(user.user);
      user.setIsAuth(true);
    } catch (error) {
      console.log(error);
    }
  };

  const loginFunc = async data => {
    try {
      console.log(data);
      const userData = await login(email, password);
      user.setUser(userData);
      user.setIsAuth(true);
      console.log(user.user);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className={styles.LoginFormBody}>
      <div className={styles.container} id="container">
        {/* login form */}
        <form
          onSubmit={handleSubmit(registerFunc)}
          className={`${styles.formContainer} ${styles.signUp}`}
        >
          <div className={styles.formLogin}>
            <img className={styles.logo} src="./Images/USTUDY.svg" alt="" />
            <h1>Створити аккаунт</h1>
            <input
              type="text"
              {...register("name", {
                required: true
              })}
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
            <button type="submit">Зареєструватися</button>
          </div>
        </form>
        {/* register form */}
        <form
          onSubmit={handleSubmit(loginFunc)}
          className={`${styles.formContainer} ${styles.signIn}`}
        >
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
            {/* <a href="#">Забули пароль?</a> */}
            <button type="submit">Увійти</button>
          </div>
        </form>
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
              <p>
                Зареєструйтеся як викладач або студент вказавши свої особисті
                дані
              </p>
              {container &&
                <button
                  className={styles.hidden}
                  id="register"
                  onClick={() => {
                    container.classList.add(`${styles.active}`);
                    setRole("студент");
                  }}
                >
                  Реєстрація як викладач
                </button>}
              {container &&
                <button
                  className={styles.hidden}
                  id="register"
                  onClick={() => {
                    container.classList.add(`${styles.active}`);
                    setRole("викладач");
                  }}
                >
                  Реєстрація як студент
                </button>}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoginForm;
