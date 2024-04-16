import { makeAutoObservable } from "mobx";

export default class UserStore {
  // клас користувача
  constructor() {
    this._isAuth = localStorage.getItem("isAuth") === "true";
    this._user = JSON.parse(localStorage.getItem("user")) || {};
    makeAutoObservable(this);
  }

  setIsAuth(bool) {
    this._isAuth = bool;
    localStorage.setItem("isAuth", bool);
  }
  setUser(user) {
    this._user = user;
    localStorage.setItem("user", JSON.stringify(user));
    this._isAuth = true;
  }

  get isAuth() {
    return this._isAuth;
  }
  get user() {
    return this._user;
  }
}
