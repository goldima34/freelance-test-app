import React, { useContext, useEffect, useState } from "react";
import styles from "../styles/LoginForm.module.css";
import { useNavigate } from "react-router-dom";
import { Context } from "..";
import { login, registration } from "../services/userApi";
import { useForm } from "react-hook-form";

const LoginForm = () => {
  const { user } = useContext(Context);
  const [role, setRole] = useState();
  const [container, setContainer] = useState();
  const { register, handleSubmit, formState: { errors } } = useForm();
  const {
    register: register2,
    handleSubmit: handleSubmit2,
    formState: { errors: errors2 }
  } = useForm();
  const navigate = useNavigate();

  useEffect(
    () => {
      setContainer(document.getElementById("container"));
    },
    [container]
  );

  const registerFunc = async data => {
    try {
      const { name, email, password } = data;
      const userData = await registration(name, email, password, role);
      if (userData.error) {
        alert(userData.error);
      } else {
        user.setUser(userData.user);
        user.setIsAuth(true);
        navigate("/cabinet");
      }
    } catch (error) {
      console.log(error);
    }
  };

  const loginFunc = async data => {
    try {
      const { email, password } = data;
      const userData = await login(email, password);
      if (userData.error) {
        alert(userData.error);
      } else {
        user.setUser(userData.user);
        user.setIsAuth(true);
        navigate("/cabinet");
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className={styles.LoginFormBody}>
      <div className={styles.container} id="container">
        {/* register form */}
        <form
          key={1}
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
            {errors.name && <p className={styles.errorText}>Введіть імя</p>}
            <input
              {...register("email", {
                required: true
              })}
              type="email"
              placeholder="Пошта"
            />
            {errors.email && <p className={styles.errorText}>Введіть email</p>}
            <input
              {...register("password", {
                required: true
              })}
              type="password"
              placeholder="Пароль"
            />
            {errors.password &&
              <p className={styles.errorText}>Введіть пароль</p>}
            <button type="submit">Зареєструватися</button>
          </div>
        </form>
        {/* login form */}
        <form
          key={2}
          onSubmit={handleSubmit2(loginFunc)}
          className={`${styles.formContainer} ${styles.signIn}`}
        >
          <div className={styles.formLogin}>
            <img className={styles.logo} src="./Images/USTUDY.svg" alt="" />
            <h1>Вхід</h1>
            <input
              {...register2("email", {
                required: true
              })}
              type="email"
              placeholder="Пошта"
            />
            {errors2.email && <p className={styles.errorText}>Введіть email</p>}
            <input
              {...register2("password", {
                required: true
              })}
              type="password"
              placeholder="Пароль"
            />
            {errors2.password &&
              <p className={styles.errorText}>Введіть пароль</p>}
            {/* <a href="#">Забули пароль?</a> */}
            <button type="submit">Увійти</button>
          </div>
        </form>
        <div className={styles.toogleContainer}>
          <div className={styles.toogle}>
            <div className={`${styles.tooglePannel} ${styles.toogleLeft}`}>
              <h1>Раді тебе бачити!</h1>
              <p className={styles.container_p}>
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
              <p className={styles.container_p}>
                Зареєструйтеся як викладач або студент вказавши свої особисті
                дані
              </p>
              {container &&
                <button
                  className={styles.hidden}
                  id="register"
                  onClick={() => {
                    container.classList.add(`${styles.active}`);
                    setRole("викладач");
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
                    setRole("студент");
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
